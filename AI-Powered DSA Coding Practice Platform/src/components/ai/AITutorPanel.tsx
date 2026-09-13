import React, { useState } from 'react';
import { useProblem } from '../../context/ProblemContext';
import { 
  Sparkles, 
  Clock, 
  Database, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  ArrowRight,
  BookMarked,
  Lightbulb,
  Zap,
  Bug,
  HelpCircle,
  Table,
  Calculator,
  AlertTriangle,
  MessageSquare,
  Send,
  Loader2,
  Code2,
  Layers,
  Terminal,
  FileCode,
  ListOrdered,
  Eye,
  ShieldAlert,
  Flame
} from 'lucide-react';
import { diagnoseCode, AdvancedAITutorData, askAIFollowUpQuestion, ChatMessage } from '../../lib/aiTutor';
import { SupportedLanguage } from '../../types/problem';

export const AITutorPanel: React.FC = () => {
  const { aiSolution, isGeneratingAI, askAITutor, setCode, language, code, activeProblem } = useProblem();
  const [openStep, setOpenStep] = useState<number | null>(1);
  const [copied, setCopied] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'solution' | 'hints' | 'diagnosis' | 'trace' | 'interview' | 'chat'>('solution');
  const [selectedSolutionLang, setSelectedSolutionLang] = useState<SupportedLanguage>(language || 'cpp');
  const [revealedHints, setRevealedHints] = useState<number>(1);
  const [revealedFollowUps, setRevealedFollowUps] = useState<Record<number, boolean>>({});
  const [showLineByLine, setShowLineByLine] = useState(false);

  // Interactive AI Q&A Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isAskingChat, setIsAskingChat] = useState(false);

  const advancedData = aiSolution as AdvancedAITutorData | null;
  const diagnosis = React.useMemo(() => {
    if (!activeProblem || activeSubTab !== 'diagnosis') return null;
    return diagnoseCode(activeProblem, language, code);
  }, [activeProblem?.id, language, code, activeSubTab]);

  // Active solution code for the selected language
  const activeSolutionCode = advancedData?.final_code_multi_lang?.[selectedSolutionLang] || advancedData?.final_code || '';

  const handleSendChat = async (questionToSend?: string) => {
    const q = (questionToSend || inputQuestion).trim();
    if (!q || !activeProblem || isAskingChat) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputQuestion('');
    setIsAskingChat(true);

    try {
      const response = await askAIFollowUpQuestion(activeProblem, q, code, language, chatMessages);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "I'm ready to help! Review the problem statement or ask for specific hints.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsAskingChat(false);
    }
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInsertIntoEditor = () => {
    if (activeSolutionCode) {
      setCode(activeSolutionCode);
    }
  };

  if (isGeneratingAI) {
    return (
      <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 animate-spin flex items-center justify-center p-0.5 shadow-xl">
            <div className="w-full h-full bg-[#0f172a] rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">AI Tutor is Deep-Analyzing Problem...</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Deriving algorithmic invariants, ASCII layouts, 4-language code solutions, line-by-line breakdowns, and edge cases.
          </p>
        </div>
      </div>
    );
  }

  if (!aiSolution) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-indigo-500/20 border border-emerald-500/30 flex items-center justify-center shadow-lg">
          <Sparkles className="w-7 h-7 text-emerald-400" />
        </div>
        <div className="max-w-md">
          <h3 className="text-base font-bold text-white">Interactive AI DSA Mentor</h3>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            Instant step-by-step logic derivations, ASCII visual dry runs, multi-language solutions (C++, Python, JS, Java), progressive hints, and real-time live code debugging.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <button
            onClick={askAITutor}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Generate Step-by-Step Solution
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden select-text bg-[#0e1424]">
      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-1 p-2 bg-slate-900/90 border-b border-slate-800 overflow-x-auto select-none shrink-0 text-xs">
        <button
          onClick={() => setActiveSubTab('solution')}
          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition whitespace-nowrap ${
            activeSubTab === 'solution'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Solution Stepper</span>
        </button>

        <button
          onClick={() => setActiveSubTab('hints')}
          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition whitespace-nowrap ${
            activeSubTab === 'hints'
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Hints & Clues ({advancedData?.hints?.length || 4})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('diagnosis')}
          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition whitespace-nowrap ${
            activeSubTab === 'diagnosis'
              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Bug className="w-3.5 h-3.5 text-rose-400" />
          <span>Code Doctor</span>
          {diagnosis?.hasBug && (
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping ml-0.5" />
          )}
        </button>

        <button
          onClick={() => setActiveSubTab('trace')}
          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition whitespace-nowrap ${
            activeSubTab === 'trace'
              ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Table className="w-3.5 h-3.5 text-indigo-400" />
          <span>Variable Trace</span>
        </button>

        <button
          onClick={() => setActiveSubTab('interview')}
          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition whitespace-nowrap ${
            activeSubTab === 'interview'
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interview Prep</span>
        </button>

        <button
          onClick={() => setActiveSubTab('chat')}
          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition whitespace-nowrap ${
            activeSubTab === 'chat'
              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
          <span>Ask AI Mentor</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* ========================================================================= */}
        {/* TAB 1: DEEP SOLUTION STEPPER & MULTI-LANGUAGE CODE */}
        {/* ========================================================================= */}
        {activeSubTab === 'solution' && (
          <div className="space-y-4">
            {/* Intuition & Mental Model Card */}
            {advancedData?.intuition && (
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40 border border-indigo-500/20 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
                  <Zap className="w-4 h-4" />
                  <span>High-Level Intuition & Mental Model</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {advancedData.intuition}
                </p>
              </div>
            )}

            {/* Visual ASCII Layout / Diagram */}
            {advancedData?.visualRepresentation && (
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Visual Dry-Run / Grid Layout</span>
                  </span>
                </div>
                <pre className="p-2.5 rounded-lg bg-[#070b14] font-mono text-[11px] text-teal-300 overflow-x-auto leading-tight border border-slate-800/80">
                  {advancedData.visualRepresentation}
                </pre>
              </div>
            )}

            {/* Core Algorithm Invariant / Formula */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <Calculator className="w-4 h-4" />
                <span>Core Algorithm Invariant & Mathematical Derivation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {advancedData?.formulaExplanation || "Analyze loop boundaries and condition checks to produce expected output."}
              </p>
            </div>

            {/* Complexity Badges */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="text-slate-500 block">Time Complexity</span>
                  <span className="font-semibold text-slate-200">{aiSolution.time_complexity}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="text-slate-500 block">Space Complexity</span>
                  <span className="font-semibold text-slate-200">{aiSolution.space_complexity}</span>
                </div>
              </div>
            </div>

            {/* Steps Accordion */}
            <div className="space-y-2 pt-1">
              <span className="font-semibold text-xs text-slate-300 flex items-center gap-1.5">
                <ListOrdered className="w-3.5 h-3.5 text-emerald-400" />
                <span>Step-by-Step Algorithmic Logic:</span>
              </span>
              {aiSolution.step_by_step.map((step) => {
                const isOpen = openStep === step.step;
                return (
                  <div
                    key={step.step}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60"
                  >
                    <button
                      onClick={() => setOpenStep(isOpen ? null : step.step)}
                      className="w-full p-3 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] border border-emerald-500/30">
                          {step.step}
                        </span>
                        <span className="font-semibold text-xs text-slate-200">{step.title}</span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-3 border-t border-slate-800 bg-[#0b101d] space-y-2 text-xs">
                        <p className="text-slate-300 leading-relaxed">{step.explanation}</p>
                        {step.code_snippet && (
                          <pre className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-emerald-400 border border-slate-800 overflow-x-auto">
                            {step.code_snippet}
                          </pre>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Multi-Language Complete Solution Code */}
            <div className="space-y-2.5 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  {(['cpp', 'python', 'javascript', 'java'] as SupportedLanguage[]).map((langKey) => (
                    <button
                      key={langKey}
                      onClick={() => setSelectedSolutionLang(langKey)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition uppercase tracking-wider ${
                        selectedSolutionLang === langKey
                          ? 'bg-emerald-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {langKey === 'cpp' ? 'C++' : langKey === 'python' ? 'Python' : langKey === 'javascript' ? 'JS' : 'Java'}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopyCode(activeSolutionCode)}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition text-xs flex items-center gap-1"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={handleInsertIntoEditor}
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 font-semibold text-[11px] flex items-center gap-1 transition"
                    title="Insert solution into editor"
                  >
                    <span>Insert in Editor</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <pre className="p-3 font-mono text-xs text-slate-200 overflow-x-auto max-h-72 leading-relaxed">
                  {activeSolutionCode}
                </pre>
              </div>

              {/* Line-by-Line Breakdown Toggle */}
              {advancedData?.line_by_line_explanation && advancedData.line_by_line_explanation.length > 0 && (
                <div className="pt-1">
                  <button
                    onClick={() => setShowLineByLine(!showLineByLine)}
                    className="w-full p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300 transition"
                  >
                    <span className="flex items-center gap-2 text-indigo-400">
                      <Code2 className="w-4 h-4" />
                      <span>Explore Line-by-Line Breakdown ({advancedData.line_by_line_explanation.length} lines)</span>
                    </span>
                    {showLineByLine ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showLineByLine && (
                    <div className="mt-2 space-y-2 p-3 rounded-xl bg-[#090e1a] border border-slate-800/80">
                      {advancedData.line_by_line_explanation.map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/60 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-emerald-400 font-bold">Line #{item.line}</span>
                            <span className="font-mono text-[11px] text-slate-400 truncate max-w-[200px]">{item.code}</span>
                          </div>
                          <p className="text-[11px] text-slate-300 leading-relaxed">{item.explanation}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PROGRESSIVE 4-TIER HINTS */}
        {/* ========================================================================= */}
        {activeSubTab === 'hints' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Progressive 4-Tier Hints: Reveal one step at a time!</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                {revealedHints} / {advancedData?.hints?.length || 4} Unlocked
              </span>
            </div>

            {(advancedData?.hints || [
              "Tier 1 (Mental Model): Check your outer loop bounds.",
              "Tier 2 (Logic): Formulate leading spaces vs printed symbols.",
              "Tier 3 (Boundary): Watch for single element inputs (N=1).",
              "Tier 4 (Implementation): Ensure newline is printed after each row."
            ]).map((hint: string, i: number) => {
              const isRevealed = i < revealedHints;
              return (
                <div
                  key={i}
                  className={`p-3.5 rounded-xl border transition ${
                    isRevealed
                      ? 'bg-slate-900/90 border-amber-500/30 shadow-md'
                      : 'bg-slate-950/40 border-slate-800/60 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs text-amber-400 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Hint {i + 1}
                    </span>
                    {!isRevealed && (
                      <button
                        onClick={() => setRevealedHints((prev) => Math.max(prev, i + 1))}
                        className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-[10px] font-semibold hover:bg-amber-500/30 transition cursor-pointer"
                      >
                        Unlock Hint #{i + 1}
                      </button>
                    )}
                  </div>
                  {isRevealed ? (
                    <p className="text-xs text-slate-200 leading-relaxed">{hint}</p>
                  ) : (
                    <div className="text-[11px] text-slate-500 italic">Click Unlock to reveal this progressive clue...</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CODE DOCTOR & LIVE LINT DIAGNOSTICS */}
        {/* ========================================================================= */}
        {activeSubTab === 'diagnosis' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${
              diagnosis?.hasBug
                ? 'bg-rose-950/20 border-rose-500/30'
                : 'bg-emerald-950/20 border-emerald-500/30'
            } space-y-2`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {diagnosis?.hasBug ? (
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  )}
                  <div>
                    <h4 className="font-bold text-white text-xs">
                      {diagnosis?.hasBug ? 'Code Diagnostic Scan' : 'Code Structure Verified'}
                    </h4>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      diagnosis?.severity === 'error'
                        ? 'bg-rose-500/20 text-rose-400'
                        : diagnosis?.severity === 'warning'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {diagnosis?.severity || 'clean'}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-1">{diagnosis?.bugSummary}</p>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-slate-200 text-xs">Active Editor Diagnostic Items:</span>
              <div className="space-y-1.5">
                {diagnosis?.lineByLineFeedback.map((fb: string, i: number) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs leading-relaxed">
                    {fb}
                  </div>
                ))}
              </div>
            </div>

            {diagnosis?.hint && (
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/20 space-y-1">
                <span className="font-semibold text-indigo-400 text-xs">Suggested Fix Advice:</span>
                <p className="text-slate-300 text-xs leading-relaxed">{diagnosis.suggestedFix}</p>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: VARIABLE TRACE TABLE & DRY RUN */}
        {/* ========================================================================= */}
        {activeSubTab === 'trace' && (
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              📊 Step-by-Step execution walkthrough with variable state transitions and loop conditions.
            </div>

            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/80">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800 text-[11px]">
                    <th className="p-2.5 font-semibold">Step / Iter</th>
                    <th className="p-2.5 font-semibold">Loop State</th>
                    <th className="p-2.5 font-semibold">Action / Eval</th>
                    <th className="p-2.5 font-semibold">Row Output</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                  {(advancedData?.traceTable || [
                    { row: 1, col: "i=1", condition: "1 <= N", action: "Step 1", printed: "Valid" }
                  ]).map((tr, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition">
                      <td className="p-2.5 text-slate-400">#{tr.row}</td>
                      <td className="p-2.5 text-indigo-300">{tr.col || '-'}</td>
                      <td className="p-2.5 text-slate-300">{tr.action}</td>
                      <td className="p-2.5 text-emerald-400 font-bold">{tr.printed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: INTERVIEW PREP, PITFALLS & EDGE CASES */}
        {/* ========================================================================= */}
        {activeSubTab === 'interview' && (
          <div className="space-y-4">
            {/* Common Pitfalls Card */}
            {advancedData?.common_pitfalls && advancedData.common_pitfalls.length > 0 && (
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Common Pitfalls & Mistakes to Avoid</span>
                </div>
                <div className="space-y-1.5">
                  {advancedData.common_pitfalls.map((pitfall, idx) => (
                    <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{pitfall}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Edge Cases Card */}
            {advancedData?.edge_cases && advancedData.edge_cases.length > 0 && (
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Critical Edge Cases to Test</span>
                </div>
                <div className="space-y-1.5">
                  {advancedData.edge_cases.map((edgeCase, idx) => (
                    <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>{edgeCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAANG Interview Follow-Ups */}
            {advancedData?.interview_follow_ups && advancedData.interview_follow_ups.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="font-bold text-xs text-cyan-400 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>Top Tech / FAANG Follow-Up Questions:</span>
                </span>
                {advancedData.interview_follow_ups.map((followUp, idx) => {
                  const isRevealed = revealedFollowUps[idx] || false;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-2">
                      <div className="font-semibold text-xs text-slate-200">
                        Q{idx + 1}: {followUp.question}
                      </div>

                      {!isRevealed ? (
                        <button
                          onClick={() => setRevealedFollowUps((prev) => ({ ...prev, [idx]: true }))}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-[11px] font-semibold hover:bg-cyan-500/30 transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Reveal Optimal Approach</span>
                        </button>
                      ) : (
                        <div className="p-2.5 rounded-lg bg-[#080d19] border border-cyan-500/30 space-y-1.5 text-xs">
                          <div className="text-cyan-400 font-semibold text-[11px]">Optimal Interview Strategy:</div>
                          <p className="text-slate-300 leading-relaxed">{followUp.approach}</p>
                          <div className="text-[11px] text-slate-400 italic">💡 Hint: {followUp.hint}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: ASK AI TUTOR INTERACTIVE SOCRATIC CHAT */}
        {/* ========================================================================= */}
        {activeSubTab === 'chat' && (
          <div className="space-y-3 flex flex-col h-[calc(100vh-14rem)]">
            {/* Quick Prompt Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] shrink-0">
              <button
                onClick={() => handleSendChat("Explain in Hinglish with simple intuition")}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap border border-slate-700 transition cursor-pointer"
              >
                🇮🇳 Explain in Hinglish
              </button>
              <button
                onClick={() => handleSendChat("How to optimize space & time complexity to O(1)?")}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap border border-slate-700 transition cursor-pointer"
              >
                ⏱️ Optimize Space/Time
              </button>
              <button
                onClick={() => handleSendChat("Diagnose my active code and tell me what bug exists")}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap border border-slate-700 transition cursor-pointer"
              >
                🩺 Find My Bug
              </button>
              <button
                onClick={() => handleSendChat("What are the most common edge cases for this problem?")}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap border border-slate-700 transition cursor-pointer"
              >
                ⚠️ Edge Cases Check
              </button>
            </div>

            {/* Chat History Container */}
            <div className="flex-1 overflow-y-auto space-y-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              {chatMessages.length === 0 ? (
                <div className="p-6 text-center text-slate-500 space-y-2">
                  <MessageSquare className="w-8 h-8 mx-auto text-emerald-400 opacity-30" />
                  <div className="text-xs font-semibold text-slate-300">Ask AI Mentor Anything!</div>
                  <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                    Ask questions in Hinglish or English about this specific problem, request code explanations, or get hints.
                  </p>
                </div>
              ) : (
                chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-emerald-500 text-slate-950 font-medium rounded-br-none'
                          : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none shadow-md'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    </div>
                    <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))
              )}

              {isAskingChat && (
                <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>AI Mentor is thinking...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-2 pt-1 shrink-0">
              <input
                type="text"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendChat();
                }}
                placeholder="Ask AI Mentor a question in English / Hinglish..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSendChat()}
                disabled={isAskingChat || !inputQuestion.trim()}
                className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 transition font-bold cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

