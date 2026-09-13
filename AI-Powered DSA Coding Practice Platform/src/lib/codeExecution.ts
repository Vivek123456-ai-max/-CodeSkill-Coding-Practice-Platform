import { SupportedLanguage, TestCase } from '../types/problem';

export interface TestCaseResult {
  caseIndex: number;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
  error?: string;
  timeMs: number;
  memoryKb?: number;
  diffDetails?: {
    expectedLines: string[];
    actualLines: string[];
    firstMismatchLine?: number;
    description: string;
  };
}

export interface DiagnosticMarker {
  line: number;
  column?: number;
  message: string;
  severity: 'error' | 'warning' | 'info';
}

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  output: string;
  code: number;
  timeMs: number;
  memoryKb?: number;
  error?: string;
  compileError?: string;
  runtimeError?: string;
  diagnostics: DiagnosticMarker[];
  status: 'accepted' | 'wrong_answer' | 'runtime_error' | 'compilation_error' | 'time_limit_exceeded';
  testResults: TestCaseResult[];
  passedCount: number;
  totalCount: number;
  engineUsed: string;
}

export interface SingleRunResult {
  stdout: string;
  stderr: string;
  code: number;
  timeMs: number;
  memoryKb?: number;
  compileError?: string;
  runtimeError?: string;
  diagnostics: DiagnosticMarker[];
  engine: string;
}

const PISTON_CONFIG: Record<SupportedLanguage, { language: string; version: string; filename: string }> = {
  cpp: { language: 'c++', version: '10.2.0', filename: 'main.cpp' },
  python: { language: 'python', version: '3.10.0', filename: 'main.py' },
  javascript: { language: 'javascript', version: '18.15.0', filename: 'main.js' },
  java: { language: 'java', version: '15.0.2', filename: 'Solution.java' },
};

const JUDGE0_LANGUAGE_IDS: Record<SupportedLanguage, number> = {
  cpp: 54, // C++ (GCC 9.2.0)
  python: 71, // Python (3.8.1)
  javascript: 63, // JavaScript (Node.js 12.14.0)
  java: 62, // Java (OpenJDK 13.0.1)
};

/**
 * Normalizes output string by standardizing newlines and trimming trailing whitespace
 */
export function normalizeOutput(str: string): string {
  if (!str) return '';
  return str
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trim();
}

/**
 * Parses compiler/runtime error strings into structured line diagnostics
 */
export function parseCompilerDiagnostics(rawError: string, language: SupportedLanguage): DiagnosticMarker[] {
  if (!rawError) return [];
  const diagnostics: DiagnosticMarker[] = [];
  const lines = rawError.split('\n');

  for (const line of lines) {
    if (language === 'cpp') {
      // GCC / Clang format: main.cpp:5:10: error: expected ';' before '}' token
      const match = line.match(/(?:main\.cpp|prog\.cpp|Solution\.cpp):(\d+):(?:(\d+):)?\s*(error|warning|fatal error):\s*(.+)/i);
      if (match) {
        diagnostics.push({
          line: parseInt(match[1], 10),
          column: match[2] ? parseInt(match[2], 10) : 1,
          severity: match[3].toLowerCase().includes('warning') ? 'warning' : 'error',
          message: match[4].trim(),
        });
      }
    } else if (language === 'python') {
      // Python traceback format: File "main.py", line 4, in <module>
      const match = line.match(/File\s+"(?:main\.py|solution\.py|<string>)",\s+line\s+(\d+)/i);
      if (match) {
        diagnostics.push({
          line: parseInt(match[1], 10),
          column: 1,
          severity: 'error',
          message: rawError.split('\n').filter(Boolean).pop() || 'Python runtime / syntax error',
        });
      }
    } else if (language === 'java') {
      // Java javac format: Solution.java:7: error: ';' expected
      const match = line.match(/(?:Solution\.java|Main\.java):(\d+):\s*(error|warning):\s*(.+)/i);
      if (match) {
        diagnostics.push({
          line: parseInt(match[1], 10),
          column: 1,
          severity: match[2].toLowerCase().includes('warning') ? 'warning' : 'error',
          message: match[3].trim(),
        });
      }
    } else if (language === 'javascript') {
      // Node.js format: /app/main.js:3:5 or at main.js:3:5
      const match = line.match(/(?:main\.js|<anonymous>):(\d+)(?::(\d+))?/i);
      if (match) {
        diagnostics.push({
          line: parseInt(match[1], 10),
          column: match[2] ? parseInt(match[2], 10) : 1,
          severity: 'error',
          message: rawError.split('\n').filter(Boolean)[0] || 'JavaScript syntax / runtime error',
        });
      }
    }
  }

  return diagnostics;
}

/**
 * Executes code using Piston Online Compiler API (Primary)
 */
async function executeWithPiston(
  language: SupportedLanguage,
  sourceCode: string,
  stdin: string = ''
): Promise<SingleRunResult> {
  const startTime = performance.now();
  const config = PISTON_CONFIG[language] || PISTON_CONFIG.cpp;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: config.language,
        version: config.version,
        files: [
          {
            name: config.filename,
            content: sourceCode,
          },
        ],
        stdin: stdin,
        run_timeout: 6000,
        compile_timeout: 8000,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const elapsed = Math.round(performance.now() - startTime);

    if (!response.ok) {
      throw new Error(`Piston API HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const compile = data.compile || {};
    const run = data.run || {};

    const compileStderr = compile.stderr || (compile.output && compile.code !== 0 ? compile.output : '');
    const runStderr = run.stderr || (run.output && run.code !== 0 && !run.stdout ? run.output : '');

    const isCompileErr = !!compileStderr && compile.code !== 0;
    const isRuntimeErr = !isCompileErr && (run.code !== 0 || !!runStderr);

    const fullStderr = isCompileErr ? compileStderr : runStderr;
    const diagnostics = parseCompilerDiagnostics(fullStderr, language);

    return {
      stdout: run.stdout || (run.code === 0 ? run.output || '' : ''),
      stderr: fullStderr,
      code: isCompileErr ? compile.code || 1 : run.code || 0,
      timeMs: elapsed,
      compileError: isCompileErr ? compileStderr : undefined,
      runtimeError: isRuntimeErr ? runStderr || `Runtime error with exit code ${run.code}` : undefined,
      diagnostics,
      engine: 'Piston Cloud GCC/Engine',
    };
  } catch (err: any) {
    clearTimeout(timeoutId);
    throw err;
  }
}

/**
 * Executes code using Judge0 Public CE API (Fallback 1)
 */
async function executeWithJudge0(
  language: SupportedLanguage,
  sourceCode: string,
  stdin: string = ''
): Promise<SingleRunResult> {
  const startTime = performance.now();
  const langId = JUDGE0_LANGUAGE_IDS[language] || 54;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source_code: sourceCode,
        language_id: langId,
        stdin: stdin,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const elapsed = Math.round(performance.now() - startTime);

    if (!response.ok) {
      throw new Error(`Judge0 API HTTP ${response.status}`);
    }

    const data = await response.json();
    const compileOutput = data.compile_output || '';
    const stderr = data.stderr || '';
    const stdout = data.stdout || '';
    const statusId = data.status?.id; // 3 = Accepted, 6 = Compilation Error, etc.

    const isCompileErr = statusId === 6 || (!!compileOutput && statusId !== 3);
    const isRuntimeErr = statusId >= 7 && statusId <= 12;

    const fullErr = compileOutput || stderr || (data.status?.description && statusId !== 3 ? data.status.description : '');
    const diagnostics = parseCompilerDiagnostics(fullErr, language);

    return {
      stdout: stdout,
      stderr: fullErr,
      code: statusId === 3 ? 0 : 1,
      timeMs: data.time ? Math.round(parseFloat(data.time) * 1000) : elapsed,
      memoryKb: data.memory || undefined,
      compileError: isCompileErr ? fullErr : undefined,
      runtimeError: isRuntimeErr ? fullErr : undefined,
      diagnostics,
      engine: 'Judge0 Cloud Compiler',
    };
  } catch (err: any) {
    clearTimeout(timeoutId);
    throw err;
  }
}

/**
 * Executes code using Wandbox API (Fallback 2)
 */
async function executeWithWandbox(
  language: SupportedLanguage,
  sourceCode: string,
  stdin: string = ''
): Promise<SingleRunResult> {
  const startTime = performance.now();
  const compilerMap: Record<SupportedLanguage, string> = {
    cpp: 'gcc-head',
    python: 'cpython-head',
    javascript: 'nodejs-head',
    java: 'openjdk-head',
  };

  const compiler = compilerMap[language] || 'gcc-head';
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch('https://wandbox.org/api/compile.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        compiler: compiler,
        code: sourceCode,
        stdin: stdin,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const elapsed = Math.round(performance.now() - startTime);

    if (!response.ok) {
      throw new Error(`Wandbox API HTTP ${response.status}`);
    }

    const data = await response.json();
    const isCompileErr = !!data.compiler_error;
    const isRuntimeErr = !isCompileErr && (data.status !== '0' || !!data.program_error);
    const fullErr = data.compiler_error || data.program_error || '';

    return {
      stdout: data.program_output || data.program_message || '',
      stderr: fullErr,
      code: data.status === '0' ? 0 : 1,
      timeMs: elapsed,
      compileError: isCompileErr ? fullErr : undefined,
      runtimeError: isRuntimeErr ? fullErr : undefined,
      diagnostics: parseCompilerDiagnostics(fullErr, language),
      engine: 'Wandbox Cloud Compiler',
    };
  } catch (err: any) {
    clearTimeout(timeoutId);
    throw err;
  }
}

/**
 * In-Browser JavaScript Sandbox Engine
 */
function executeJavaScriptSandbox(sourceCode: string, stdin: string = ''): SingleRunResult {
  const startTime = performance.now();
  const logs: string[] = [];
  const errors: string[] = [];

  try {
    const inputLines = stdin.trim().split(/\s+/).filter(Boolean);
    let inputIdx = 0;

    const customPrompt = () => {
      return inputLines[inputIdx++] || '';
    };

    const customConsole = {
      log: (...args: any[]) => {
        logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      },
      error: (...args: any[]) => {
        errors.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      },
      warn: (...args: any[]) => {
        logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      },
      info: (...args: any[]) => {
        logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      },
    };

    // Evaluate in function scope with provided inputs
    const runner = new Function('console', 'prompt', 'stdin', 'input', sourceCode);
    runner(customConsole, customPrompt, stdin, stdin);

    const elapsed = Math.round(performance.now() - startTime);
    return {
      stdout: logs.join('\n'),
      stderr: errors.join('\n'),
      code: errors.length > 0 ? 1 : 0,
      timeMs: elapsed,
      runtimeError: errors.length > 0 ? errors.join('\n') : undefined,
      diagnostics: parseCompilerDiagnostics(errors.join('\n'), 'javascript'),
      engine: 'Browser JS Sandbox',
    };
  } catch (err: any) {
    const elapsed = Math.round(performance.now() - startTime);
    const errString = err.stack || err.toString();
    return {
      stdout: logs.join('\n'),
      stderr: errString,
      code: 1,
      timeMs: elapsed,
      runtimeError: errString,
      diagnostics: parseCompilerDiagnostics(errString, 'javascript'),
      engine: 'Browser JS Sandbox',
    };
  }
}

/**
 * High-reliability multi-tier code runner.
 * Automatically tries Piston -> Judge0 -> Wandbox -> Local Sandbox.
 */
export async function runSingleCode(
  language: SupportedLanguage,
  sourceCode: string,
  stdin: string = ''
): Promise<SingleRunResult> {
  // If JS, can run locally instantly or via cloud
  if (language === 'javascript') {
    try {
      const localRes = executeJavaScriptSandbox(sourceCode, stdin);
      if (localRes.code === 0 && localRes.stdout) {
        return localRes;
      }
    } catch {}
  }

  // 1. Try Primary Cloud Compiler (Piston GCC/Clang/Python/Java)
  try {
    return await executeWithPiston(language, sourceCode, stdin);
  } catch (pistonErr: any) {
    console.warn('Piston engine failed or timed out, trying Judge0 fallback...', pistonErr?.message);
  }

  // 2. Try Secondary Cloud Compiler (Judge0 CE)
  try {
    return await executeWithJudge0(language, sourceCode, stdin);
  } catch (judge0Err: any) {
    console.warn('Judge0 engine failed, trying Wandbox fallback...', judge0Err?.message);
  }

  // 3. Try Tertiary Cloud Compiler (Wandbox)
  try {
    return await executeWithWandbox(language, sourceCode, stdin);
  } catch (wandboxErr: any) {
    console.warn('Wandbox fallback failed...', wandboxErr?.message);
  }

  // 4. If all cloud compilers unreachable, return clear connection error diagnostic
  return {
    stdout: '',
    stderr: `Compiler Connection Warning: Unable to reach online compiler servers. Please check your internet connection.\n(${language.toUpperCase()} requires GCC/online compiler connection)`,
    code: 1,
    timeMs: 0,
    compileError: 'Compiler server unreachable. Please verify your internet connection.',
    diagnostics: [],
    engine: 'Offline Diagnostic',
  };
}

/**
 * Generates detailed line-by-line diff between expected and actual output
 */
function computeDiffDetails(expected: string, actual: string) {
  const normExp = normalizeOutput(expected);
  const normAct = normalizeOutput(actual);

  const expLines = normExp.split('\n');
  const actLines = normAct.split('\n');

  let firstMismatchLine: number | undefined = undefined;
  const maxLines = Math.max(expLines.length, actLines.length);

  for (let i = 0; i < maxLines; i++) {
    if (expLines[i] !== actLines[i]) {
      firstMismatchLine = i + 1;
      break;
    }
  }

  let description = 'Output matched perfectly.';
  if (firstMismatchLine !== undefined) {
    const expL = expLines[firstMismatchLine - 1] ?? '(end of expected)';
    const actL = actLines[firstMismatchLine - 1] ?? '(end of output)';
    description = `Mismatch at Line ${firstMismatchLine}: Expected "${expL}" but got "${actL}"`;
  }

  return {
    expectedLines: expLines,
    actualLines: actLines,
    firstMismatchLine,
    description,
  };
}

/**
 * Runs code against all test cases or single custom input, returning rich ExecutionResult
 */
export async function evaluateCodeAgainstTestCases(
  language: SupportedLanguage,
  sourceCode: string,
  testCases: TestCase[],
  customInput?: string
): Promise<ExecutionResult> {
  const startTime = performance.now();

  // Custom Input Stdin Mode
  if (customInput !== undefined && customInput !== '') {
    const single = await runSingleCode(language, sourceCode, customInput);
    const hasCompileError = !!single.compileError;
    const hasRuntimeError = !!single.runtimeError || (single.code !== 0 && !hasCompileError);

    let status: ExecutionResult['status'] = 'accepted';
    if (hasCompileError) status = 'compilation_error';
    else if (hasRuntimeError) status = 'runtime_error';

    return {
      stdout: single.stdout,
      stderr: single.stderr,
      output: single.stdout || single.stderr,
      code: single.code,
      timeMs: single.timeMs,
      memoryKb: single.memoryKb,
      error: single.compileError || single.runtimeError,
      compileError: single.compileError,
      runtimeError: single.runtimeError,
      diagnostics: single.diagnostics,
      status,
      testResults: [
        {
          caseIndex: 0,
          input: customInput,
          expectedOutput: '(Custom Stdin Mode)',
          actualOutput: single.stdout,
          passed: single.code === 0 && !single.compileError && !single.runtimeError,
          timeMs: single.timeMs,
          memoryKb: single.memoryKb,
          error: single.stderr,
          diffDetails: {
            expectedLines: [],
            actualLines: single.stdout ? single.stdout.split('\n') : [],
            description: single.stdout ? 'Output generated successfully from custom input.' : 'No output produced.',
          },
        },
      ],
      passedCount: single.code === 0 && !single.compileError ? 1 : 0,
      totalCount: 1,
      engineUsed: single.engine,
    };
  }

  // Multi-test case evaluation
  const cases = testCases && testCases.length > 0
    ? testCases
    : [{ input: '5', output: '*****' }];

  const testResults: TestCaseResult[] = [];
  let compileError: string | undefined;
  let allDiagnostics: DiagnosticMarker[] = [];
  let totalTime = 0;
  let engineUsed = 'Piston Cloud Compiler';

  for (let i = 0; i < cases.length; i++) {
    const tc = cases[i];
    const run = await runSingleCode(language, sourceCode, tc.input);
    totalTime += run.timeMs;
    engineUsed = run.engine;

    if (run.diagnostics.length > 0) {
      allDiagnostics = run.diagnostics;
    }

    if (run.compileError) {
      compileError = run.compileError;
      testResults.push({
        caseIndex: i,
        input: tc.input,
        expectedOutput: tc.output,
        actualOutput: '',
        passed: false,
        error: run.compileError,
        timeMs: run.timeMs,
        memoryKb: run.memoryKb,
        diffDetails: {
          expectedLines: tc.output.split('\n'),
          actualLines: [],
          description: `Compilation Error: ${run.compileError.split('\n')[0] || 'Build failed'}`,
        },
      });
      break; // Stop evaluating further test cases if code fails compilation
    }

    const normActual = normalizeOutput(run.stdout);
    const normExpected = normalizeOutput(tc.output);
    const isMatch = normActual === normExpected && run.code === 0 && !run.runtimeError;
    const diff = computeDiffDetails(tc.output, run.stdout);

    testResults.push({
      caseIndex: i,
      input: tc.input,
      expectedOutput: tc.output,
      actualOutput: run.stdout,
      passed: isMatch,
      error: run.runtimeError || (isMatch ? undefined : diff.description),
      timeMs: run.timeMs,
      memoryKb: run.memoryKb,
      diffDetails: diff,
    });
  }

  const passedCount = testResults.filter((r) => r.passed).length;
  const totalCount = cases.length;
  const allPassed = passedCount === totalCount && !compileError;

  let overallStatus: ExecutionResult['status'] = 'accepted';
  let overallError: string | undefined;

  if (compileError) {
    overallStatus = 'compilation_error';
    overallError = compileError;
  } else if (!allPassed) {
    const runtimeItem = testResults.find((r) => r.error && !r.error.includes('Mismatch at Line') && !r.error.includes('Output matched'));
    if (runtimeItem) {
      overallStatus = 'runtime_error';
      overallError = runtimeItem.error || 'Runtime Error';
    } else {
      overallStatus = 'wrong_answer';
      const firstFail = testResults.find((r) => !r.passed);
      overallError = firstFail?.diffDetails?.description || 'Wrong Answer: Output mismatch with expected test cases';
    }
  }

  const firstResult = testResults[0] || { actualOutput: '', error: '' };

  return {
    stdout: firstResult.actualOutput,
    stderr: overallError || firstResult.error || '',
    output: firstResult.actualOutput || overallError || firstResult.error || '',
    code: allPassed ? 0 : 1,
    timeMs: totalTime,
    error: overallError,
    compileError: compileError,
    runtimeError: overallStatus === 'runtime_error' ? overallError : undefined,
    diagnostics: allDiagnostics,
    status: overallStatus,
    testResults,
    passedCount,
    totalCount,
    engineUsed,
  };
}
