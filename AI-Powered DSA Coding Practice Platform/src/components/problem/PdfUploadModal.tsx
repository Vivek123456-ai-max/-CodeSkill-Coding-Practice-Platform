import React, { useState } from 'react';
import { useProblem } from '../../context/ProblemContext';
import { 
  X, 
  FileUp, 
  Check, 
  Loader2, 
  Sparkles, 
  Layers,
  CheckCircle2,
  AlertCircle,
  Settings2,
  Edit3,
  Trash2,
  FileText,
  Sliders
} from 'lucide-react';
import { extractTextFromPDF, parseDSAQuestionsFromText, SplitStrategy } from '../../lib/pdfParser';
import { Problem } from '../../types/problem';

interface PdfUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfUploadModal: React.FC<PdfUploadModalProps> = ({ isOpen, onClose }) => {
  const { addProblem } = useProblem();
  const [file, setFile] = useState<File | null>(null);
  const [rawText, setRawText] = useState('');
  const [strategy, setStrategy] = useState<SplitStrategy>('auto');
  const [customSep, setCustomSep] = useState('---');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedQuestions, setExtractedQuestions] = useState<Partial<Problem>[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<Set<number>>(new Set());
  const [isImporting, setIsImporting] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'raw_text'>('preview');

  if (!isOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    setIsExtracting(true);

    try {
      let text = '';
      if (uploadedFile.type === 'application/pdf' || uploadedFile.name.toLowerCase().endsWith('.pdf')) {
        text = await extractTextFromPDF(uploadedFile);
      } else {
        text = await uploadedFile.text();
      }

      setRawText(text);
      const parsed = parseDSAQuestionsFromText(text, strategy, customSep);
      setExtractedQuestions(parsed);
      setSelectedIndices(new Set(parsed.map((_, i) => i)));
    } catch (err: any) {
      console.error('Extraction error:', err);
      alert(err.message || 'Failed to extract text from PDF. You can paste the text directly.');
    } finally {
      setIsExtracting(false);
    }
  };

  const handleReParse = (strat: SplitStrategy = strategy) => {
    if (!rawText.trim()) return;
    const parsed = parseDSAQuestionsFromText(rawText, strat, customSep);
    setExtractedQuestions(parsed);
    setSelectedIndices(new Set(parsed.map((_, i) => i)));
  };

  const handleStrategyChange = (newStrategy: SplitStrategy) => {
    setStrategy(newStrategy);
    handleReParse(newStrategy);
  };

  const toggleSelectIndex = (idx: number) => {
    const next = new Set(selectedIndices);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setSelectedIndices(next);
  };

  const handleSelectAll = () => {
    if (selectedIndices.size === extractedQuestions.length) {
      setSelectedIndices(new Set());
    } else {
      setSelectedIndices(new Set(extractedQuestions.map((_, i) => i)));
    }
  };

  const handleDeleteExtracted = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    const updated = extractedQuestions.filter((_, i) => i !== idx);
    setExtractedQuestions(updated);
    const nextIndices = new Set<number>();
    updated.forEach((_, i) => nextIndices.add(i));
    setSelectedIndices(nextIndices);
  };

  const handleImportSelected = async () => {
    setIsImporting(true);
    try {
      for (const idx of selectedIndices) {
        const q = extractedQuestions[idx];
        if (q && q.title && q.description) {
          await addProblem({
            title: q.title,
            slug: q.slug || q.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            description: q.description,
            difficulty: q.difficulty || 'Medium',
            category: q.category || 'Algorithms',
            tags: q.tags || ['PDF Upload'],
            source: 'pdf_upload',
            status: 'not_started',
            sample_test_cases: q.sample_test_cases || [{ input: 'Input 1', output: 'Output 1' }],
            starter_templates: q.starter_templates || {
              python: "class Solution:\n    def solve(self):\n        pass\n",
              javascript: "function solve() {}\n",
              cpp: "#include <iostream>\nint main() { return 0; }\n",
              java: "public class Solution { public static void main(String[] args) {} }\n"
            }
          });
        }
      }
      onClose();
    } catch (err) {
      console.error('Import error:', err);
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Import DSA Questions from PDF / Text</h2>
              <p className="text-xs text-slate-400">Upload PDF sheets, interview sheets, or book chapters to extract questions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          {/* Upload Dropzone */}
          <div className="border-2 border-dashed border-slate-700 hover:border-indigo-500/60 rounded-xl p-5 text-center bg-slate-900/40 transition cursor-pointer relative">
            <input
              type="file"
              accept=".pdf,.txt,.md,.doc,.docx"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <FileUp className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-200">
                {file ? `Selected File: ${file.name}` : 'Click or Drag & Drop PDF / Question Document'}
              </span>
              <p className="text-[11px] text-slate-500">
                Extracts questions preserving line breaks, titles, constraints & test cases
              </p>
            </div>
          </div>

          {/* Splitting Strategy Controls */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                Question Splitting Mode
              </span>
              <span className="text-[11px] text-slate-500">
                Change mode if all questions are not detected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {[
                { id: 'auto', label: '⚡ Auto Detect' },
                { id: 'numbered', label: '1. Numbered (1, 2...)' },
                { id: 'keywords', label: 'Problem/Question' },
                { id: 'markdown', label: '### Headings' },
                { id: 'separator', label: 'Custom Delimiter' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleStrategyChange(s.id as SplitStrategy)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                    strategy === s.id
                      ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                      : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {strategy === 'separator' && (
              <div className="pt-2 flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Custom delimiter:</span>
                <input
                  type="text"
                  value={customSep}
                  onChange={(e) => setCustomSep(e.target.value)}
                  placeholder="e.g. --- or Question"
                  className="p-1 px-2 rounded bg-slate-950 border border-slate-800 text-xs text-slate-200 w-40"
                />
                <button
                  onClick={() => handleReParse()}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                >
                  Apply Delimiter
                </button>
              </div>
            )}
          </div>

          {/* View Switcher: Extracted Questions vs Raw Extracted Text */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-lg font-semibold transition ${
                  activeTab === 'preview'
                    ? 'bg-slate-800 text-indigo-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Extracted Questions ({extractedQuestions.length})
              </button>
              <button
                onClick={() => setActiveTab('raw_text')}
                className={`px-3 py-1 rounded-lg font-semibold transition ${
                  activeTab === 'raw_text'
                    ? 'bg-slate-800 text-indigo-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                View / Edit Raw Text
              </button>
            </div>

            {activeTab === 'preview' && extractedQuestions.length > 0 && (
              <button
                onClick={handleSelectAll}
                className="text-[11px] text-indigo-400 hover:underline font-semibold"
              >
                {selectedIndices.size === extractedQuestions.length ? 'Deselect All' : 'Select All'}
              </button>
            )}
          </div>

          {/* Tab Content */}
          {isExtracting ? (
            <div className="py-12 text-center text-slate-400 flex flex-col items-center gap-3">
              <Loader2 className="w-7 h-7 animate-spin text-indigo-400" />
              <div>
                <p className="text-xs font-semibold text-slate-200">Parsing PDF & Segmenting Questions...</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Extracting problem statements, sample testcases & categories</p>
              </div>
            </div>
          ) : activeTab === 'raw_text' ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>You can edit or paste raw text below and re-extract questions:</span>
                <button
                  onClick={() => handleReParse()}
                  className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
                >
                  Re-parse from Text
                </button>
              </div>
              <textarea
                rows={8}
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="Extracted text from document will appear here..."
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>
          ) : (
            <div className="space-y-2">
              {extractedQuestions.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                  <FileText className="w-8 h-8 mx-auto mb-2 opacity-30 text-indigo-400" />
                  <p className="text-xs">No questions extracted yet.</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Upload a file above or switch to "View / Edit Raw Text" to paste questions.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {extractedQuestions.map((q, idx) => {
                    const isSelected = selectedIndices.has(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleSelectIndex(idx)}
                        className={`p-3.5 rounded-xl border text-xs cursor-pointer transition flex items-start gap-3 relative group ${
                          isSelected
                            ? 'bg-indigo-950/20 border-indigo-500/50 text-white shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="mt-0.5">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isSelected
                                ? 'bg-indigo-500 border-indigo-500 text-white'
                                : 'border-slate-700'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0 pr-6">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-slate-200 text-xs">
                              #{idx + 1}. {q.title}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-300 font-mono">
                                {q.difficulty}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
                                {q.category}
                              </span>
                            </div>
                          </div>

                          <p className="text-slate-400 text-[11px] line-clamp-2 mt-1 leading-relaxed">
                            {q.description}
                          </p>
                        </div>

                        <button
                          onClick={(e) => handleDeleteExtracted(e, idx)}
                          title="Exclude question"
                          className="opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-rose-400 transition absolute right-2 top-3"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 text-[11px]">
              {selectedIndices.size} of {extractedQuestions.length} questions selected for Supabase import
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition"
              >
                Cancel
              </button>
              <button
                onClick={handleImportSelected}
                disabled={selectedIndices.size === 0 || isImporting}
                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-bold flex items-center gap-1.5 transition shadow-lg shadow-indigo-500/20 disabled:opacity-50"
              >
                {isImporting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
                <span>Import {selectedIndices.size} to Database</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
