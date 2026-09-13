import React, { useState, useRef, useEffect, useCallback } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { useProblem } from '../../context/ProblemContext';
import { useAuth } from '../../context/AuthContext';
import { SupportedLanguage } from '../../types/problem';
import { 
  Play, 
  Pause,
  Send, 
  RotateCcw, 
  Check, 
  Loader2, 
  Settings2,
  FileCode2,
  Maximize2,
  Minimize2,
  AlignLeft,
  Palette,
  Code2,
  Zap,
  Copy,
  Clock,
  Lock,
  Sparkles,
  Cloud
} from 'lucide-react';

interface MonacoCodeEditorProps {
  onRun: () => void;
  onSubmit: () => void;
  onOpenAuthModal?: () => void;
}

const THEMES = [
  { id: 'vs-dark', label: 'Dark (Default)' },
  { id: 'vs-light', label: 'Light' },
  { id: 'dracula', label: 'Dracula' },
  { id: 'monokai', label: 'Monokai' },
  { id: 'nord', label: 'Nord' },
];

const SNIPPETS: Record<SupportedLanguage, { label: string; snippet: string }[]> = {
  cpp: [
    {
      label: 'Fast I/O & Template',
      snippet: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    int n;\n    if (cin >> n) {\n        // Your algorithm here\n    }\n    return 0;\n}\n`,
    },
    {
      label: 'Vector Loop',
      snippet: `for (int i = 0; i < n; i++) {\n    // process\n}\n`,
    },
  ],
  python: [
    {
      label: 'Standard DSA Template',
      snippet: `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    # Your algorithm here\n\nif __name__ == '__main__':\n    solve()\n`,
    },
  ],
  javascript: [
    {
      label: 'Node Stdin Template',
      snippet: `const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    const n = parseInt(input, 10);\n    // Your algorithm here\n}\nmain();\n`,
    },
  ],
  java: [
    {
      label: 'Scanner Template',
      snippet: `import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            // Your algorithm here\n        }\n    }\n}\n`,
    },
  ],
};

// Practice Stopwatch Timer - Isolated Memoized Component to prevent main editor re-renders
const StopwatchTimer: React.FC = React.memo(() => {
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60).toString().padStart(2, '0');
    const secs = (totalSec % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="hidden sm:flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-xs font-mono">
      <Clock className="w-3.5 h-3.5 text-emerald-400" />
      <span className="text-slate-200 font-semibold">{formatTimer(timerSeconds)}</span>
      <button
        onClick={() => setIsTimerRunning(!isTimerRunning)}
        title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
        className="p-0.5 text-slate-400 hover:text-emerald-400 transition cursor-pointer"
      >
        {isTimerRunning ? (
          <Pause className="w-3 h-3 text-amber-400" />
        ) : (
          <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
        )}
      </button>
      {timerSeconds > 0 && (
        <button
          onClick={() => { setIsTimerRunning(false); setTimerSeconds(0); }}
          title="Reset Timer"
          className="p-0.5 text-slate-500 hover:text-rose-400 transition cursor-pointer"
        >
          <RotateCcw className="w-2.5 h-2.5" />
        </button>
      )}
    </div>
  );
});

export const MonacoCodeEditor: React.FC<MonacoCodeEditorProps> = ({ onRun, onSubmit, onOpenAuthModal }) => {
  const { user } = useAuth();
  const { 
    language, 
    setLanguage, 
    code, 
    setCode, 
    hasUnsavedChanges,
    lastSavedAt, 
    isRunning, 
    isSubmitting, 
    activeProblem,
    executionResult,
    askAITutor
  } = useProblem();

  const [fontSize, setFontSize] = useState<number>(14);
  const [tabSize, setTabSize] = useState<number>(4);
  const [theme, setTheme] = useState<string>('vs-dark');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState<{ line: number; col: number }>({ line: 1, col: 1 });
  const [showSettingsDropdown, setShowSettingsDropdown] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);

  const languages: { id: SupportedLanguage; label: string; version: string; monacoLang: string }[] = [
    { id: 'cpp', label: 'C++', version: 'GCC 10.2 / C++17', monacoLang: 'cpp' },
    { id: 'python', label: 'Python', version: 'Python 3.10', monacoLang: 'python' },
    { id: 'javascript', label: 'JavaScript', version: 'Node.js 18', monacoLang: 'javascript' },
    { id: 'java', label: 'Java', version: 'OpenJDK 15', monacoLang: 'java' },
  ];

  const currentMonacoLang = languages.find((l) => l.id === language)?.monacoLang || 'cpp';

  // Handle editor mount
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Define custom themes
    monaco.editor.defineTheme('dracula', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'ff79c6', fontStyle: 'bold' },
        { token: 'string', foreground: 'f1fa8c' },
        { token: 'number', foreground: 'bd93f9' },
      ],
      colors: {
        'editor.background': '#1e1f29',
        'editor.foreground': '#f8f8f2',
        'editorCursor.foreground': '#aeafad',
        'editor.lineHighlightBackground': '#282a36',
        'editorLineNumber.foreground': '#6272a4',
      },
    });

    monaco.editor.defineTheme('nord', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '616E88' },
        { token: 'keyword', foreground: '81A1C1', fontStyle: 'bold' },
        { token: 'string', foreground: 'A3BE8C' },
        { token: 'number', foreground: 'B48EAD' },
      ],
      colors: {
        'editor.background': '#2E3440',
        'editor.foreground': '#D8DEE9',
        'editor.lineHighlightBackground': '#3B4252',
        'editorLineNumber.foreground': '#4C566A',
      },
    });

    monaco.editor.defineTheme('monokai', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '75715e' },
        { token: 'keyword', foreground: 'f92672', fontStyle: 'bold' },
        { token: 'string', foreground: 'e6db74' },
        { token: 'number', foreground: 'ae81ff' },
      ],
      colors: {
        'editor.background': '#272822',
        'editor.foreground': '#f8f8f2',
        'editor.lineHighlightBackground': '#3e3d32',
        'editorLineNumber.foreground': '#90908a',
      },
    });

    editor.onDidChangeCursorPosition((e) => {
      setCursorPos({ line: e.position.lineNumber, col: e.position.column });
    });
  };

  // Sync editor content when language or problem changes
  useEffect(() => {
    if (editorRef.current) {
      const currentVal = editorRef.current.getValue();
      if (currentVal !== code) {
        editorRef.current.setValue(code);
      }
    }
  }, [activeProblem?.id, language]);

  // Update Monaco Error Markers when executionResult diagnostics change
  useEffect(() => {
    if (editorRef.current && monacoRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        if (executionResult?.diagnostics && executionResult.diagnostics.length > 0) {
          const markers = executionResult.diagnostics.map((diag) => ({
            startLineNumber: diag.line,
            startColumn: diag.column || 1,
            endLineNumber: diag.line,
            endColumn: (diag.column || 1) + 10,
            message: diag.message,
            severity: diag.severity === 'warning' ? monacoRef.current.MarkerSeverity.Warning : monacoRef.current.MarkerSeverity.Error,
          }));
          monacoRef.current.editor.setModelMarkers(model, 'compiler', markers);
        } else {
          monacoRef.current.editor.setModelMarkers(model, 'compiler', []);
        }
      }
    }
  }, [executionResult]);

  // Instant zero-lag change handler - updates ref buffer with 0 React rendering lag
  const handleEditorChange = useCallback((val: string | undefined) => {
    const updated = val ?? '';
    setCode(updated, false);
  }, [setCode]);

  const flushLatestCode = useCallback(() => {
    if (editorRef.current) {
      const currentVal = editorRef.current.getValue();
      setCode(currentVal, true);
    }
  }, [setCode]);

  const handleRun = () => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }
    flushLatestCode();
    onRun();
  };

  const handleSubmit = () => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }
    flushLatestCode();
    onSubmit();
  };

  const handleFormatCode = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  };

  const handleInsertSnippet = (snippet: string) => {
    if (editorRef.current) {
      const selection = editorRef.current.getSelection();
      editorRef.current.executeEdits('insert-snippet', [
        {
          range: selection,
          text: snippet,
          forceMoveMarkers: true,
        },
      ]);
      flushLatestCode();
    }
  };

  const handleCopyCode = () => {
    if (editorRef.current) {
      navigator.clipboard.writeText(editorRef.current.getValue());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResetCode = () => {
    if (!activeProblem) return;
    if (confirm('Reset code to initial starter template?')) {
      const template = activeProblem.starter_templates?.[language] || '';
      setCode(template);
      if (editorRef.current) {
        editorRef.current.setValue(template);
      }
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      } else if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRun, handleSubmit]);

  if (!activeProblem) {
    return (
      <div className="flex flex-col h-full bg-[#0d1322] border-l border-slate-800 items-center justify-center text-slate-500 p-8 text-center">
        <FileCode2 className="w-12 h-12 mb-3 text-slate-600 opacity-60" />
        <p className="text-sm font-semibold text-slate-400">No Problem Selected</p>
        <p className="text-xs text-slate-500 mt-1">Please select a problem from the bank to begin coding.</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full bg-[#0d1322] border-l border-slate-800 ${
      isFullscreen ? 'fixed inset-0 z-50 bg-[#0d1322]' : 'relative'
    }`}>
      {/* Top Toolbar */}
      <div className="min-h-11 px-2.5 sm:px-3 py-1 border-b border-slate-800 bg-slate-900/95 flex items-center justify-between select-none shrink-0 gap-2 overflow-x-auto no-scrollbar">
        {/* Left: Language Selector & Status */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 bg-slate-800/90 rounded-lg px-2 py-1 border border-slate-700/70 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
              className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer pr-1"
            >
              {languages.map((lang) => (
                <option key={lang.id} value={lang.id} className="bg-slate-900 text-slate-200">
                  {lang.label} ({lang.version.split('/')[0].trim()})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Status Pill */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
            {hasUnsavedChanges ? (
              <span className="flex items-center gap-1 text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Unsaved Changes
              </span>
            ) : lastSavedAt ? (
              <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <Check className="w-3 h-3" />
                Saved
              </span>
            ) : (
              <span className="text-slate-500 font-mono text-[10px]">Ready</span>
            )}
          </div>
        </div>

        {/* Right: Actions, Editor Controls, Run & Submit */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Practice Stopwatch Timer */}
          <StopwatchTimer />

          <div className="h-4 w-px bg-slate-800 hidden sm:block mx-0.5" />

          {/* Format Code */}
          <button
            onClick={handleFormatCode}
            title="Auto-format code (Shift+Alt+F)"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition cursor-pointer"
          >
            <AlignLeft className="w-3.5 h-3.5" />
          </button>

          {/* Copy Code */}
          <button
            onClick={handleCopyCode}
            title="Copy code to clipboard"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Reset Template */}
          <button
            onClick={handleResetCode}
            title="Reset to starter template"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Settings & Theme Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
              title="Editor Settings & Theme"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition cursor-pointer"
            >
              <Settings2 className="w-3.5 h-3.5" />
            </button>

            {showSettingsDropdown && (
              <div className="absolute right-0 top-9 w-52 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2.5 z-50 text-xs space-y-2 font-sans animate-in fade-in slide-in-from-top-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Editor Settings</div>
                
                {/* Theme selection */}
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Palette className="w-3 h-3 text-emerald-400" /> Theme:
                  </div>
                  <select
                    value={theme}
                    onChange={(e) => {
                      setTheme(e.target.value);
                      setShowSettingsDropdown(false);
                    }}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded p-1 text-xs"
                  >
                    {THEMES.map((t) => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </div>

                {/* Font Size & Tab Size */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400">Font:</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <button
                        onClick={() => setFontSize(Math.max(12, fontSize - 1))}
                        className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
                      >
                        -
                      </button>
                      <span className="text-slate-300 font-mono text-[11px]">{fontSize}px</span>
                      <button
                        onClick={() => setFontSize(Math.min(22, fontSize + 1))}
                        className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400">Tab Size:</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <button
                        onClick={() => setTabSize(2)}
                        className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${tabSize === 2 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'}`}
                      >
                        2
                      </button>
                      <button
                        onClick={() => setTabSize(4)}
                        className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${tabSize === 4 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'}`}
                      >
                        4
                      </button>
                    </div>
                  </div>
                </div>

                {/* Snippets / Fast I/O */}
                {SNIPPETS[language] && SNIPPETS[language].length > 0 && (
                  <div className="pt-1 border-t border-slate-800 space-y-1">
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" /> Quick Boilerplate:
                    </div>
                    {SNIPPETS[language].map((snip, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          handleInsertSnippet(snip.snippet);
                          setShowSettingsDropdown(false);
                        }}
                        className="w-full text-left px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-[11px] text-slate-200 truncate"
                      >
                        + {snip.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Editor'}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          <div className="h-4 w-px bg-slate-700 mx-0.5" />

          {/* Run Code Button */}
          <button
            onClick={handleRun}
            disabled={isRunning || isSubmitting}
            title="Run code against test cases (Ctrl+Enter)"
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 shadow-sm transition disabled:opacity-50 cursor-pointer active:scale-95"
          >
            {isRunning ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
            ) : (
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            )}
            <span>Run</span>
          </button>

          {/* Submit Code Button */}
          <button
            onClick={handleSubmit}
            disabled={isRunning || isSubmitting}
            title="Submit solution for grading (Ctrl+Shift+Enter)"
            className="px-3.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition shadow-sm disabled:opacity-50 cursor-pointer active:scale-95"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Monaco Code Editor */}
      <div className="flex-1 relative overflow-hidden">
        <Editor
          height="100%"
          language={currentMonacoLang}
          value={code}
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
          theme={theme}
          options={{
            fontSize: fontSize,
            fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', Menlo, Monaco, Consolas, monospace",
            fontLigatures: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: tabSize,
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            padding: { top: 12, bottom: 12 },
            quickSuggestions: { other: true, comments: false, strings: false },
            suggestOnTriggerCharacters: true,
            bracketPairColorization: { enabled: true },
            wordBasedSuggestions: 'off',
            renderValidationDecorations: 'on',
            fastScrollSensitivity: 7,
            readOnly: !user,
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
              useShadows: false,
            },
          }}
        />

        {/* Lock Overlay for Unauthenticated Users */}
        {!user && (
          <div className="absolute inset-0 z-20 bg-slate-950/75 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center select-none animate-fadeIn">
            <div className="max-w-md w-full p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                <Lock className="w-7 h-7" />
              </div>
              
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Sign in to Code & Submit Solutions
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Apka code, solved problems aur streaks Supabase cloud database me realtime sync aur save karne ke liye sign in karna zaroori hai.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-full justify-center">
                <Cloud className="w-3.5 h-3.5" />
                <span>Zero-loss Cloud Backup & Realtime Multi-Device Sync</span>
              </div>

              <button
                onClick={() => onOpenAuthModal?.()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-emerald-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Sign In / Create Free Account</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      <div className="h-6 px-3 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none shrink-0">
        <div className="flex items-center gap-3">
          <span>Ln {cursorPos.line}, Col {cursorPos.col}</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-500">Spaces: {tabSize}</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-500">UTF-8</span>
        </div>

        <div className="flex items-center gap-2">
          {executionResult?.engineUsed && (
            <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.2 rounded border border-slate-800">
              Engine: {executionResult.engineUsed}
            </span>
          )}
          <span className="text-emerald-400 font-semibold">{languages.find((l) => l.id === language)?.version}</span>
        </div>
      </div>
    </div>
  );
};
