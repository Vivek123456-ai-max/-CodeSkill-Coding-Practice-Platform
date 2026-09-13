import React, { useState } from 'react';
import { useProblem } from '../../context/ProblemContext';
import { X, Plus, Trash2, CheckCircle2, Code2 } from 'lucide-react';
import { Difficulty } from '../../types/problem';

interface AddProblemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddProblemModal: React.FC<AddProblemModalProps> = ({ isOpen, onClose }) => {
  const { addProblem } = useProblem();

  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [category, setCategory] = useState('Arrays & Hashing');
  const [tagsInput, setTagsInput] = useState('Array, Hash Table');
  const [description, setDescription] = useState('');
  const [testCases, setTestCases] = useState<{ input: string; output: string; explanation: string }[]>([
    { input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]', explanation: '2 + 7 = 9' }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleAddTestCase = () => {
    setTestCases([...testCases, { input: '', output: '', explanation: '' }]);
  };

  const handleRemoveTestCase = (idx: number) => {
    setTestCases(testCases.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    setIsSubmitting(true);
    try {
      const tags = tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      await addProblem({
        title,
        slug,
        description,
        difficulty,
        category,
        tags,
        source: 'manual',
        status: 'not_started',
        sample_test_cases: testCases,
        starter_templates: {
          python: `class Solution:\n    def solve(self):\n        # Write solution for ${title}\n        pass\n`,
          javascript: `function solve() {\n    // Write solution for ${title}\n}\n`,
          cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    return 0;\n}\n`,
          java: `public class Solution {\n    public static void main(String[] args) {\n    }\n}\n`
        }
      });

      onClose();
    } catch (err) {
      console.error('Failed to create problem:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Add New DSA Problem</h2>
              <p className="text-xs text-slate-400">Create a custom coding problem stored in Supabase</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          {/* Title */}
          <div className="space-y-1">
            <label className="font-semibold text-slate-300">Problem Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Merge Two Sorted Lists"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Difficulty & Category */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-slate-300">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-300">Category / Topic</label>
              <input
                type="text"
                placeholder="e.g. Dynamic Programming"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-1">
            <label className="font-semibold text-slate-300">Tags (comma separated)</label>
            <input
              type="text"
              placeholder="e.g. Array, Two Pointers, Greedy"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="font-semibold text-slate-300">Problem Description (Markdown supported) *</label>
            <textarea
              required
              rows={5}
              placeholder="Detailed problem description, constraints, and edge cases..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans"
            />
          </div>

          {/* Test Cases */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                Sample Test Cases
              </label>
              <button
                type="button"
                onClick={handleAddTestCase}
                className="text-[11px] text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
              >
                <Plus className="w-3 h-3" /> Add Case
              </button>
            </div>

            {testCases.map((tc, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-400 text-[11px]">Case {idx + 1}</span>
                  {testCases.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTestCase(idx)}
                      className="text-slate-500 hover:text-rose-400 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Input (e.g. nums=[1,2], target=3)"
                    value={tc.input}
                    onChange={(e) => {
                      const updated = [...testCases];
                      updated[idx].input = e.target.value;
                      setTestCases(updated);
                    }}
                    className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder="Output (e.g. [0, 1])"
                    value={tc.output}
                    onChange={(e) => {
                      const updated = [...testCases];
                      updated[idx].output = e.target.value;
                      setTestCases(updated);
                    }}
                    className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Action */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center gap-1.5 transition shadow-lg shadow-emerald-500/20 disabled:opacity-50"
            >
              <CheckCircle2 className="w-4 h-4" />
              {isSubmitting ? 'Saving...' : 'Create Problem'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
