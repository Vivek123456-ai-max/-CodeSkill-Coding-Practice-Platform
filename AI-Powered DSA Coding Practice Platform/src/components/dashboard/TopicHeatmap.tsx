import React from 'react';
import { useProblem } from '../../context/ProblemContext';
import { Layers, CheckCircle2, ChevronRight } from 'lucide-react';

export const TopicHeatmap: React.FC<{ onSelectCategory?: (cat: string) => void }> = ({ onSelectCategory }) => {
  const { problems } = useProblem();

  // Aggregate topics memoized
  const topicList = React.useMemo(() => {
    const topicsMap: Record<string, { total: number; solved: number }> = {};
    for (let i = 0; i < problems.length; i++) {
      const p = problems[i];
      const cat = p.category || 'General';
      if (!topicsMap[cat]) {
        topicsMap[cat] = { total: 0, solved: 0 };
      }
      topicsMap[cat].total += 1;
      if (p.status === 'solved') {
        topicsMap[cat].solved += 1;
      }
    }

    return Object.entries(topicsMap).map(([name, data]) => ({
      name,
      total: data.total,
      solved: data.solved,
      percentage: Math.round((data.solved / data.total) * 100),
    }));
  }, [problems]);

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-white">Topic Mastery & Practice Heatmap</h3>
        </div>
        <span className="text-xs text-slate-400">{topicList.length} Categories</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {topicList.map((topic) => (
          <div
            key={topic.name}
            onClick={() => onSelectCategory?.(topic.name)}
            className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 transition cursor-pointer group space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs text-slate-200 group-hover:text-white">
                {topic.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {topic.solved} / {topic.total}
              </span>
            </div>

            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${topic.percentage}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span>{topic.percentage}% Mastered</span>
              <span className="text-emerald-400 group-hover:translate-x-0.5 transition flex items-center">
                Practice <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
