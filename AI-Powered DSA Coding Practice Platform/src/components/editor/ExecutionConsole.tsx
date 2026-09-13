import React, { useState } from 'react';
import { useProblem } from '../../context/ProblemContext';
import { 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronUp, 
  ChevronDown, 
  Play,
  AlertTriangle,
  FileCode,
  Sparkles,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Bug,
  HelpCircle,
  Split,
  Eye
} from 'lucide-react';

export const ExecutionConsole: React.FC = () => {
  const { executionResult, isRunning, activeProblem, runCode, askAITutor, isGeneratingAI, aiSolution } = useProblem();
  const [isExpanded, setIsExpanded] = useState(true);
  const [consoleHeight, setConsoleHeight] = useState<'normal' | 'large' | 'fullscreen'>('normal');
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [activeConsoleTab, setActiveConsoleTab] = useState<'testcases' | 'custom' | 'output' | 'ai_debug'>('testcases');
  const [copiedLog, setCopiedLog] = useState(false);
  const [diffViewMode, setDiffViewMode] = useState<'split' | 'unified'>('split');

  const handleRunCustom = () => {
    setActiveConsoleTab('custom');
    runCode(customInput);
  };

  const handleCopyLogs = () => {
    const text = `Engine: ${executionResult?.engineUsed || 'Online Compiler'}\nStatus: ${executionResult?.status}\nStdout:\n${executionResult?.stdout || ''}\nStderr:\n${executionResult?.stderr || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedLog(true);
    setTimeout(() => setCopiedLog(false), 2000);
  };

  const handleAskAIDebug = () => {
    setActiveConsoleTab('ai_debug');
    askAITutor();
  };

  const isAccepted = executionResult?.status === 'accepted';
  const isWrongAnswer = executionResult?.status === 'wrong_answer';
  const isCompileError = executionResult?.status === 'compilation_error';
  const isRuntimeError = executionResult?.status === 'runtime_error';

  const currentCase = activeProblem?.sample_test_cases?.[selectedCase] || activeProblem?.sample_test_cases?.[0];
  const currentCaseResult = executionResult?.testResults?.[selectedCase] || executionResult?.testResults?.[0];

  const heightClasses = {
    normal: 'h-72',
    large: 'h-96',
    fullscreen: 'fixed inset-x-0 bottom-0 top-14 z-50',
  };

  return (
    <div className={`border-t border-slate-800 bg-[#0b0f19] flex flex-col transition-all duration-150 ${
      !isExpanded ? 'h-10' : heightClasses[consoleHeight]
    }`}>
      {/* Console Header Toolbar */}
      <div className="min-h-10 px-2.5 sm:px-3 py-1 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between select-none shrink-0 gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white transition"
          >
            <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="hidden sm:inline">Execution Console</span>
            <span className="sm:hidden">Console</span>
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
          </button>

          {/* Verdict Badges */}
          {executionResult && (
            <div className="flex items-center gap-1.5 text-[11px] shrink-0">
              {isAccepted ? (
                <span className="flex items-center gap-1 text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Accepted ({executionResult.passedCount}/{executionResult.totalCount}) • {executionResult.timeMs}ms</span>
                </span>
              ) : isWrongAnswer ? (
                <span className="flex items-center gap-1 text-rose-400 font-bold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30">
                  <XCircle className="w-3 h-3 text-rose-400 shrink-0" />
                  <span>Wrong Answer ({executionResult.passedCount}/{executionResult.totalCount})</span>
                </span>
              ) : isCompileError ? (
                <span className="flex items-center gap-1 text-amber-400 font-bold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>Compilation Error</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-rose-400 font-bold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30">
                  <XCircle className="w-3 h-3 text-rose-400 shrink-0" />
                  <span>Runtime Error</span>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Tab Switcher & Window Size Controls */}
        {isExpanded && (
          <div className="flex items-center gap-1.5 text-xs shrink-0">
            <div className="flex items-center bg-slate-950 p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveConsoleTab('testcases')}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition ${
                  activeConsoleTab === 'testcases'
                    ? 'bg-slate-800 text-emerald-400 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Cases ({activeProblem?.sample_test_cases?.length || 1})
              </button>

              <button
                onClick={() => setActiveConsoleTab('custom')}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition ${
                  activeConsoleTab === 'custom'
                    ? 'bg-slate-800 text-emerald-400 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Custom Stdin
              </button>

              <button
                onClick={() => setActiveConsoleTab('output')}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition ${
                  activeConsoleTab === 'output'
                    ? 'bg-slate-800 text-emerald-400 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Logs
              </button>

              <button
                onClick={() => setActiveConsoleTab('ai_debug')}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition flex items-center gap-1 ${
                  activeConsoleTab === 'ai_debug'
                    ? 'bg-slate-800 text-amber-300 shadow-sm'
                    : 'text-amber-400/80 hover:text-amber-300'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>AI Debug</span>
              </button>
            </div>

            {/* Height Resize toggle */}
            <div className="hidden sm:flex items-center gap-1 border-l border-slate-800 pl-2">
              <button
                onClick={() => setConsoleHeight(consoleHeight === 'fullscreen' ? 'normal' : consoleHeight === 'normal' ? 'large' : 'fullscreen')}
                title="Toggle console size"
                className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
              >
                {consoleHeight === 'fullscreen' ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Console Content */}
      {isExpanded && (
        <div className="flex-1 p-3 overflow-y-auto font-mono text-xs text-slate-200 bg-[#0b0f19]">
          {isRunning ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2.5 font-sans py-8">
              <Clock className="w-6 h-6 text-emerald-400 animate-spin" />
              <div className="text-sm font-semibold text-slate-300">Compiling & Executing Online...</div>
              <p className="text-xs text-slate-500">Running through GCC/Online Engine against test suites...</p>
            </div>
          ) : activeConsoleTab === 'testcases' ? (
            <div className="space-y-3 font-sans">
              {/* Compilation Error High-Contrast Banner */}
              {isCompileError && executionResult?.compileError && (
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs space-y-2">
                  <div className="flex items-center justify-between text-amber-400 font-bold">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Compilation / Syntax Error</span>
                    </div>
                    <button
                      onClick={handleAskAIDebug}
                      className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-bold flex items-center gap-1 shadow-sm transition"
                    >
                      <Sparkles className="w-3 h-3" />
                      Fix with AI Tutor
                    </button>
                  </div>
                  <pre className="p-2.5 rounded-lg bg-slate-950/80 border border-amber-500/20 text-amber-200 font-mono text-[11px] whitespace-pre-wrap max-h-44 overflow-y-auto leading-relaxed">
                    {executionResult.compileError}
                  </pre>
                </div>
              )}

              {/* Case Selectors */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {activeProblem?.sample_test_cases?.map((_, idx) => {
                    const result = executionResult?.testResults?.[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedCase(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shrink-0 ${
                          selectedCase === idx
                            ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                            : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                      >
                        {result ? (
                          result.passed ? (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block ring-2 ring-emerald-500/30" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-rose-400 inline-block ring-2 ring-rose-500/30" />
                          )
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 inline-block" />
                        )}
                        Case {idx + 1}
                        {result?.timeMs ? <span className="text-[10px] text-slate-500 font-mono">({result.timeMs}ms)</span> : null}
                      </button>
                    );
                  })}
                </div>

                {/* Diff View Toggle */}
                {executionResult && !isAccepted && !isCompileError && (
                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800">
                    <Split className="w-3 h-3 text-emerald-400" />
                    <span>Diff:</span>
                    <button
                      onClick={() => setDiffViewMode('split')}
                      className={`px-1.5 py-0.5 rounded ${diffViewMode === 'split' ? 'bg-slate-800 text-white font-bold' : 'text-slate-500'}`}
                    >
                      Side-by-Side
                    </button>
                    <button
                      onClick={() => setDiffViewMode('unified')}
                      className={`px-1.5 py-0.5 rounded ${diffViewMode === 'unified' ? 'bg-slate-800 text-white font-bold' : 'text-slate-500'}`}
                    >
                      Diff Text
                    </button>
                  </div>
                )}
              </div>

              {/* Case Details Box */}
              {currentCase && (
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 font-mono text-xs shadow-sm">
                  {/* Stdin Input */}
                  <div>
                    <div className="text-slate-400 font-sans text-[11px] font-semibold mb-1 flex items-center justify-between">
                      <span>Standard Input (Stdin):</span>
                      {currentCase.explanation && (
                        <span className="text-slate-500 font-normal italic">{currentCase.explanation}</span>
                      )}
                    </div>
                    <pre className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-300 whitespace-pre-wrap leading-relaxed">
                      {currentCase.input || '(empty stdin)'}
                    </pre>
                  </div>

                  {/* Output Comparison */}
                  {diffViewMode === 'split' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <div className="text-slate-400 font-sans text-[11px] font-semibold mb-1">Expected Correct Output:</div>
                        <pre className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300 whitespace-pre-wrap max-h-40 overflow-y-auto leading-relaxed">
                          {currentCase.output}
                        </pre>
                      </div>

                      <div>
                        <div className="text-slate-400 font-sans text-[11px] font-semibold mb-1 flex items-center justify-between">
                          <span>Your Program Output:</span>
                          {currentCaseResult && (
                            <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded ${
                              currentCaseResult.passed 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            }`}>
                              {currentCaseResult.passed ? '✓ PASSED' : '✗ WRONG OUTPUT'}
                            </span>
                          )}
                        </div>
                        <pre className={`p-2.5 rounded-lg bg-slate-950 border whitespace-pre-wrap max-h-40 overflow-y-auto leading-relaxed ${
                          currentCaseResult?.passed
                            ? 'border-emerald-500/30 text-emerald-200'
                            : currentCaseResult
                            ? 'border-rose-500/40 text-rose-200'
                            : 'border-slate-800 text-slate-500'
                        }`}>
                          {currentCaseResult?.actualOutput || (executionResult ? '(No output produced)' : 'Click Run to execute code')}
                        </pre>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-slate-400 font-sans text-[11px] font-semibold mb-1">Unified Output Diff:</div>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1 max-h-44 overflow-y-auto">
                        <div className="text-slate-500 font-sans text-[11px] mb-1">
                          {currentCaseResult?.diffDetails?.description || 'Comparing lines...'}
                        </div>
                        {currentCase.output.split('\n').map((line, lIdx) => {
                          const actualLine = currentCaseResult?.actualOutput?.split('\n')?.[lIdx];
                          const isLineMatch = line === actualLine;
                          return (
                            <div key={lIdx} className="space-y-0.5">
                              <div className="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded flex items-center gap-2">
                                <span className="text-slate-500 select-none">+{lIdx + 1}</span>
                                <span>{line}</span>
                              </div>
                              {actualLine !== undefined && !isLineMatch && (
                                <div className="text-rose-400 bg-rose-950/30 px-2 py-0.5 rounded flex items-center gap-2">
                                  <span className="text-slate-500 select-none">-{lIdx + 1}</span>
                                  <span>{actualLine}</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Runtime Error or Mismatch Warning Banner */}
                  {currentCaseResult && !currentCaseResult.passed && !isCompileError && (
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-rose-950/20 border border-rose-500/30 text-rose-300 font-sans">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Bug className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{currentCaseResult.error || 'Output does not match expected test output.'}</span>
                      </div>
                      <button
                        onClick={handleAskAIDebug}
                        className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 underline underline-offset-2 shrink-0 ml-2"
                      >
                        <Sparkles className="w-3 h-3" />
                        Debug with AI
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : activeConsoleTab === 'custom' ? (
            <div className="space-y-3 font-sans">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">Custom Standard Input (Stdin):</span>
                <span className="text-[11px] text-slate-500">Provide any test inputs to test your program freely</span>
              </div>

              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Enter standard input here (e.g. 5 or multiple lines)..."
                rows={3}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 shadow-inner"
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={handleRunCustom}
                  disabled={isRunning}
                  className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  Run Custom Input
                </button>

                {executionResult && (
                  <span className="text-[11px] font-mono text-slate-400">
                    Exit Code: <span className={executionResult.code === 0 ? 'text-emerald-400' : 'text-rose-400'}>{executionResult.code}</span> • Time: {executionResult.timeMs}ms
                  </span>
                )}
              </div>

              {/* Custom execution output */}
              {executionResult && (
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-semibold text-slate-300">Custom Run Output:</div>
                  <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                    {executionResult.stdout || executionResult.stderr || '(No output produced)'}
                  </pre>
                </div>
              )}
            </div>
          ) : activeConsoleTab === 'output' ? (
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-sans text-xs font-semibold">Online Compiler Raw Output:</span>
                <button
                  onClick={handleCopyLogs}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800"
                >
                  {copiedLog ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedLog ? 'Copied' : 'Copy Logs'}</span>
                </button>
              </div>

              {executionResult ? (
                <div className="space-y-3">
                  {executionResult.compileError && (
                    <div>
                      <div className="text-amber-400 mb-1 text-[11px] font-sans font-bold">Compiler Diagnostics (Stderr):</div>
                      <pre className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-200 whitespace-pre-wrap leading-relaxed">
                        {executionResult.compileError}
                      </pre>
                    </div>
                  )}

                  <div>
                    <div className="text-slate-400 mb-1 text-[11px] font-sans font-semibold">Standard Output (Stdout):</div>
                    <pre className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                      {executionResult.stdout || '(No stdout output)'}
                    </pre>
                  </div>

                  {executionResult.runtimeError && (
                    <div>
                      <div className="text-rose-400 mb-1 text-[11px] font-sans font-bold">Runtime Error / Traceback:</div>
                      <pre className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-500/30 text-rose-200 whitespace-pre-wrap leading-relaxed">
                        {executionResult.runtimeError}
                      </pre>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-slate-500 text-center py-8 font-sans">
                  Click 'Run' or 'Submit' in the editor to view online compiler stdout & stderr logs.
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Error Analysis & Code Diagnosis</span>
                </div>
                <button
                  onClick={handleAskAIDebug}
                  disabled={isGeneratingAI}
                  className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1 shadow transition cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-3 h-3" />
                  {isGeneratingAI ? 'Analyzing...' : 'Re-analyze Current Code'}
                </button>
              </div>

              {isGeneratingAI ? (
                <div className="py-8 text-center text-slate-400 space-y-2">
                  <Sparkles className="w-6 h-6 text-amber-400 animate-spin mx-auto" />
                  <p className="font-semibold text-slate-300">AI Tutor is inspecting your syntax, logic, and test cases...</p>
                </div>
              ) : aiSolution?.codeDiagnosis ? (
                <div className="space-y-2.5">
                  <div className={`p-3 rounded-xl border ${
                    aiSolution.codeDiagnosis.severity === 'error'
                      ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                      : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                  }`}>
                    <div className="font-bold mb-1 text-xs">{aiSolution.codeDiagnosis.bugSummary}</div>
                    <p className="text-slate-300 text-xs leading-relaxed">{aiSolution.codeDiagnosis.suggestedFix}</p>
                  </div>

                  {aiSolution.codeDiagnosis.lineByLineFeedback && aiSolution.codeDiagnosis.lineByLineFeedback.length > 0 && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                      <div className="text-slate-400 font-semibold text-[11px]">Line-by-Line Suggestions:</div>
                      {aiSolution.codeDiagnosis.lineByLineFeedback.map((fb, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-slate-300 text-xs">
                          <span className="text-amber-400">•</span>
                          <span>{fb}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2 text-slate-400">
                  <Bug className="w-8 h-8 text-amber-400 mx-auto opacity-70" />
                  <p className="font-semibold text-slate-300">Need help fixing a bug or understanding why your test cases fail?</p>
                  <p className="text-slate-400 text-xs max-w-md mx-auto">
                    Click "Re-analyze Current Code" to have the AI analyze your code against the problem requirements.
                  </p>
                  <button
                    onClick={handleAskAIDebug}
                    className="mt-2 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold inline-flex items-center gap-1.5 shadow transition"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Ask AI Debugger
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
