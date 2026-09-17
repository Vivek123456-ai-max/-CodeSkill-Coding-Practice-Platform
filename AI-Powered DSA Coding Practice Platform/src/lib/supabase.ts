import { createClient, RealtimeChannel } from '@supabase/supabase-js';
import { Database } from '../types/database';
import { Problem, CodeSubmission, ProblemBook } from '../types/problem';
import { ALL_PROBLEMS } from './allProblems';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ebiqtfmnisxvlyzrotil.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_a36GnsHkkdbnJ4GY0kDwWQ_lmBhHOcR';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

const db: any = supabase;

export const LOCAL_CUSTOM_PROBLEMS_KEY = 'ai_dsa_custom_problems_v4';
export const LOCAL_STATUS_KEY = 'ai_dsa_problem_status_v4';
export const LOCAL_STORAGE_SUBMISSIONS_KEY = 'ai_dsa_submissions_v4';
export const LOCAL_STORAGE_STATS_KEY = 'ai_dsa_stats_v4';

export function getUserScopedKey(baseKey: string, userId?: string | null): string {
  return userId ? `${baseKey}_${userId}` : `${baseKey}_guest`;
}

// In-memory code cache for 0ms synchronous retrieval
const savedCodesCache = new Map<string, string>();

export const savedCodeService = {
  getCodeSync(problemId: string, language: string, userId?: string | null): string | null {
    const key = `${userId || 'guest'}_${problemId}_${language}`;
    if (savedCodesCache.has(key)) return savedCodesCache.get(key)!;
    try {
      if (userId) {
        const storageKey = getUserScopedKey('ai_dsa_code_cache', userId);
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const map = JSON.parse(raw);
          const code = map[`${problemId}_${language}`];
          if (code) {
            savedCodesCache.set(key, code);
            return code;
          }
        }
      }
      // Fallback to guest or legacy code cache
      const guestKey = getUserScopedKey('ai_dsa_code_cache', null);
      const guestRaw = localStorage.getItem(guestKey) || localStorage.getItem('ai_dsa_code_cache');
      if (guestRaw) {
        const map = JSON.parse(guestRaw);
        const code = map[`${problemId}_${language}`];
        if (code) {
          savedCodesCache.set(key, code);
          return code;
        }
      }
    } catch {}
    return null;
  },

  saveCodeSync(problemId: string, language: string, code: string, userId?: string | null) {
    const key = `${userId || 'guest'}_${problemId}_${language}`;
    savedCodesCache.set(key, code);
    try {
      const storageKey = getUserScopedKey('ai_dsa_code_cache', userId);
      const raw = localStorage.getItem(storageKey);
      const map = raw ? JSON.parse(raw) : {};
      map[`${problemId}_${language}`] = code;
      safeLocalStorageSet(storageKey, JSON.stringify(map));
      if (!userId) {
        safeLocalStorageSet('ai_dsa_code_cache', JSON.stringify(map));
      }
    } catch {}
  },

  clearUserCodeCache(userId?: string | null) {
    const prefix = `${userId || 'guest'}_`;
    for (const k of Array.from(savedCodesCache.keys())) {
      if (k.startsWith(prefix)) savedCodesCache.delete(k);
    }
  }
};

// Automatically clean up old bloated cache entries to prevent QuotaExceededError
export function cleanupBloatedStorage() {
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (
        key &&
        (key.startsWith('ai_dsa_problems_') ||
          key.startsWith('ai_dsa_local_problems') ||
          key.startsWith('ai_dsa_500_') ||
          key === 'ai_dsa_problems_500_mastery_final_v1' ||
          key === 'ai_dsa_problems_400_mastery_v1' ||
          key === 'ai_dsa_problems_separated_v200' ||
          key === 'ai_dsa_problems_numeric_v200')
      ) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch (e) {
    console.warn('Storage cleanup notice:', e);
  }
}

// Global Platform Reset: Zero out all users progress, stats, and submissions
export async function resetAllRegisteredUsersData(): Promise<{ success: boolean; message: string }> {
  try {
    // 1. Wipe all local storage tracking data
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (
        key &&
        (key.startsWith('ai_dsa_problem_status') ||
         key.startsWith('ai_dsa_stats') ||
         key.startsWith('ai_dsa_submissions') ||
         key.startsWith('ai_dsa_code_cache') ||
         key.startsWith('ai_dsa_bookmarks') ||
         key.startsWith('ai_dsa_potd') ||
         key.startsWith('ai_dsa_inventory'))
      ) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    savedCodesCache.clear();

    // 2. Wipe/zero out Supabase database tables in background
    try {
      // Zero out all profiles
      await db.from('profiles').update({
        total_solved: 0,
        easy_solved: 0,
        medium_solved: 0,
        hard_solved: 0,
        current_streak: 0,
        last_active_date: '',
        updated_at: new Date().toISOString()
      }).neq('id', '00000000-0000-0000-0000-000000000000');

      // Zero out all user_stats
      await db.from('user_stats').update({
        total_solved: 0,
        easy_solved: 0,
        medium_solved: 0,
        hard_solved: 0,
        current_streak: 0,
        last_active_date: '',
        updated_at: new Date().toISOString()
      }).neq('user_id', '00000000-0000-0000-0000-000000000000');

      // Clear all code_submissions
      await db.from('code_submissions').delete().neq('id', '00000000-0000-0000-0000-000000000000');

      // Reset public problems table status column
      await db.from('problems').update({ status: 'not_started' }).neq('id', '00000000-0000-0000-0000-000000000000');
    } catch (dbErr) {
      console.warn('Supabase DB zero-out notice:', dbErr);
    }

    // 3. Mark reset as done with v10
    safeLocalStorageSet('ai_dsa_reset_zero_v10', 'true');

    // 4. Broadcast reset event to all tabs and components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('codetutor_status_synced'));
      if ('BroadcastChannel' in window) {
        const bc = new BroadcastChannel('codetutor_live_channel');
        bc.postMessage({ type: 'STATUS_SYNC' });
        bc.close();
      }
    }

    return { success: true, message: 'All user data, stats, and submissions have been reset to 0.' };
  } catch (err: any) {
    return { success: false, message: err?.message || 'Failed to reset all user data.' };
  }
}

// Auto-run zero-out check once on initialization if version flag is not set
export function checkAutoZeroOut() {
  try {
    if (typeof window !== 'undefined' && !localStorage.getItem('ai_dsa_reset_zero_v10')) {
      resetAllRegisteredUsersData();
    }
  } catch {}
}

// Run cleanup & check immediately on load
cleanupBloatedStorage();
checkAutoZeroOut();

export function safeLocalStorageSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    cleanupBloatedStorage();
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.warn(`LocalStorage write skipped for ${key}:`, err);
    }
  }
}

const BOOK_ORDER: Record<string, number> = {
  patterns: 1,
  loops: 2,
  variables: 3,
  datatypes: 4,
  userinput: 5,
  operators: 6,
  strings: 7,
  math: 8,
  booleans: 9,
  ifelse: 10,
  switch: 11,
  whileloop: 12,
  forloop: 13,
  breakcontinue: 14,
  arrays: 15,
  structures: 16,
  enums: 17,
  references: 18,
  pointers: 19,
  memorymgmt: 20,
  functions: 21,
  funcparams: 22,
  funcoverloading: 23,
  scope: 24,
  recursion: 25,
  lambda: 26,
  cppoop: 27,
  classesobjects: 28,
  classmethods: 29,
  constructors: 30,
  accessspecifiers: 31,
  encapsulation: 32,
  friendfunctions: 33,
  inheritance: 34,
  polymorphism: 35,
  templates: 36,
  files: 37,
  cppdate: 38,
  cpperrors: 39,
  cppdebugging: 40,
  cppexceptions: 41,
  inputvalidation: 42,
  datastructuresstl: 43,
  vectors: 44,
  cpplist: 45,
  stacks: 46,
  queues: 47,
  cppdeque: 48,
  sets: 49,
  maps: 50,
  iterators: 51,
  algorithms: 52
};

// Fast Problem Lookup Cache for Multi-Format Identification (UUID, Slug, Title, Numeric Index)
const problemLookupByAnyKey = new Map<string, string>();

export function registerProblemInLookup(p: Problem) {
  if (!p || !p.id) return;
  const idStr = p.id.toLowerCase();
  problemLookupByAnyKey.set(idStr, p.id);
  if (p.slug) {
    problemLookupByAnyKey.set(p.slug.toLowerCase(), p.id);
  }
  if (p.title) {
    const titleLower = p.title.toLowerCase();
    problemLookupByAnyKey.set(titleLower, p.id);
    const m = p.title.match(/^#?(\d+)/);
    if (m) {
      const num = m[1];
      problemLookupByAnyKey.set(`#${num}`, p.id);
      problemLookupByAnyKey.set(num, p.id);
      problemLookupByAnyKey.set(String(parseInt(num, 10)), p.id);
    }
  }
}

// Initialize lookup with ALL_PROBLEMS
ALL_PROBLEMS.forEach(registerProblemInLookup);

export function resolveCanonicalProblemId(rawId?: string | null): string {
  if (!rawId) return '';
  const trimmed = rawId.trim();
  const lower = trimmed.toLowerCase();
  if (problemLookupByAnyKey.has(lower)) {
    return problemLookupByAnyKey.get(lower)!;
  }
  const match = ALL_PROBLEMS.find(
    (p) =>
      p.id.toLowerCase() === lower ||
      (p.slug && p.slug.toLowerCase() === lower) ||
      p.title.toLowerCase() === lower ||
      p.title.toLowerCase().startsWith(lower)
  );
  if (match) {
    problemLookupByAnyKey.set(lower, match.id);
    return match.id;
  }
  return trimmed;
}

export function getProblemBook(p: Problem): ProblemBook {
  if (p.book && BOOK_ORDER[p.book]) return p.book;
  const slug = (p.slug || '').toLowerCase();
  if (slug.startsWith('algorithms-') || slug.startsWith('algo-')) return 'algorithms';
  if (slug.startsWith('iterators-') || slug.startsWith('iter-')) return 'iterators';
  if (slug.startsWith('maps-') || slug.startsWith('map-')) return 'maps';
  if (slug.startsWith('sets-') || slug.startsWith('set-')) return 'sets';
  if (slug.startsWith('cppdeque-') || slug.startsWith('deque-')) return 'cppdeque';
  if (slug.startsWith('queues-') || slug.startsWith('queue-')) return 'queues';
  if (slug.startsWith('stacks-') || slug.startsWith('stack-')) return 'stacks';
  if (slug.startsWith('cpplist-') || slug.startsWith('list-')) return 'cpplist';
  if (slug.startsWith('vectors-') || slug.startsWith('vec-')) return 'vectors';
  if (slug.startsWith('datastructuresstl-') || slug.startsWith('stl-')) return 'datastructuresstl';
  if (slug.startsWith('inputvalidation-') || slug.startsWith('validate-')) return 'inputvalidation';
  if (slug.startsWith('cppexceptions-') || slug.startsWith('exception-')) return 'cppexceptions';
  if (slug.startsWith('cppdebugging-') || slug.startsWith('debug-')) return 'cppdebugging';
  if (slug.startsWith('cpperrors-') || slug.startsWith('error-')) return 'cpperrors';
  if (slug.startsWith('cppdate-') || slug.startsWith('date-')) return 'cppdate';
  if (slug.startsWith('files-') || slug.startsWith('file-')) return 'files';
  if (slug.startsWith('templates-') || slug.startsWith('template-')) return 'templates';
  if (slug.startsWith('polymorphism-') || slug.startsWith('poly-')) return 'polymorphism';
  if (slug.startsWith('inheritance-') || slug.startsWith('inherit-')) return 'inheritance';
  if (slug.startsWith('friendfunctions-') || slug.startsWith('friend-')) return 'friendfunctions';
  if (slug.startsWith('encapsulation-') || slug.startsWith('encap-')) return 'encapsulation';
  if (slug.startsWith('accessspecifiers-') || slug.startsWith('access-')) return 'accessspecifiers';
  if (slug.startsWith('constructors-') || slug.startsWith('constructor-')) return 'constructors';
  if (slug.startsWith('classmethods-') || slug.startsWith('method-')) return 'classmethods';
  if (slug.startsWith('classesobjects-') || slug.startsWith('class-') || slug.startsWith('object-')) return 'classesobjects';
  if (slug.startsWith('cppoop-') || slug.startsWith('oop-')) return 'cppoop';
  if (slug.startsWith('lambda-')) return 'lambda';
  if (slug.startsWith('recursion-')) return 'recursion';
  if (slug.startsWith('scope-')) return 'scope';
  if (slug.startsWith('funcoverloading-') || slug.startsWith('func-overload-')) return 'funcoverloading';
  if (slug.startsWith('funcparams-') || slug.startsWith('func-param-')) return 'funcparams';
  if (slug.startsWith('functions-') || slug.startsWith('func-')) return 'functions';
  if (slug.startsWith('memorymgmt-') || slug.startsWith('mem-')) return 'memorymgmt';
  if (slug.startsWith('ptr-') || slug.startsWith('pointer-')) return 'pointers';
  if (slug.startsWith('ref-') || slug.startsWith('reference-')) return 'references';
  if (slug.startsWith('enum-')) return 'enums';
  if (slug.startsWith('struct-') || slug.startsWith('structure-')) return 'structures';
  if (slug.startsWith('arr-') || slug.startsWith('array-')) return 'arrays';
  if (slug.startsWith('break-') || slug.startsWith('continue-')) return 'breakcontinue';
  if (slug.startsWith('for-')) return 'forloop';
  if (slug.startsWith('while-')) return 'whileloop';
  if (slug.startsWith('switch-')) return 'switch';
  if (slug.startsWith('ifelse-') || slug.startsWith('if-')) return 'ifelse';
  if (slug.startsWith('bool-') || slug.startsWith('boolean-')) return 'booleans';
  if (slug.startsWith('math-') || slug.startsWith('m-')) return 'math';
  if (slug.startsWith('str-') || slug.startsWith('string-')) return 'strings';
  if (slug.startsWith('op-') || slug.startsWith('operator-')) return 'operators';
  if (slug.startsWith('input-')) return 'userinput';
  if (slug.startsWith('dtype-')) return 'datatypes';
  if (slug.startsWith('var-')) return 'variables';
  if (slug.startsWith('loop-')) return 'loops';
  if (slug.startsWith('pattern-')) return 'patterns';

  const t = (p.title + ' ' + (p.category || '') + ' ' + (p.tags || []).join(' ')).toLowerCase();
  if (t.includes('chrono') || t.includes('ctime') || t.includes('calendar') || t.includes('leap year') || t.includes('epoch') || t.includes('timestamp') || t.includes('weekday')) return 'cppdate';
  if (t.includes('fstream') || t.includes('ifstream') || t.includes('ofstream') || t.includes('filesystem') || t.includes('binary file') || t.includes('csv') || t.includes('file')) return 'files';
  if (t.includes('template') || t.includes('generic') || t.includes('typename') || t.includes('metaprogramming') || t.includes('sfinae')) return 'templates';
  if (t.includes('polymorphism') || t.includes('virtual function') || t.includes('vtable') || t.includes('vptr') || t.includes('operator+') || t.includes('operator==') || t.includes('operator<<') || t.includes('abstract base')) return 'polymorphism';
  if (t.includes('inheritance') || t.includes('derived') || t.includes('base class') || t.includes('diamond problem') || t.includes('virtual base') || t.includes('multilevel') || t.includes('subclass')) return 'inheritance';
  if (t.includes('friend function') || t.includes('friend class') || t.includes('friend')) return 'friendfunctions';
  if (t.includes('encapsulation') || t.includes('getter') || t.includes('setter') || t.includes('invariant') || t.includes('data hiding')) return 'encapsulation';
  if (t.includes('access specifier') || t.includes('public:') || t.includes('private:') || t.includes('protected:')) return 'accessspecifiers';
  if (t.includes('constructor') || t.includes('destructor') || t.includes('copy constructor') || t.includes('move constructor') || t.includes('initializer list')) return 'constructors';
  if (t.includes('class method') || t.includes('member function') || t.includes('this pointer') || t.includes('const member') || t.includes('inline member')) return 'classmethods';
  if (t.includes('class') || t.includes('object') || t.includes('instantiation') || t.includes('dot operator') || t.includes('arrow operator')) return 'classesobjects';
  if (t.includes('oop') || t.includes('paradigm') || t.includes('design pattern') || t.includes('singleton') || t.includes('factory')) return 'cppoop';
  if (t.includes('lambda') || t.includes('capture clause') || t.includes('closure')) return 'lambda';
  if (t.includes('recursion') || t.includes('recursive') || t.includes('base case')) return 'recursion';
  if (t.includes('scope') || t.includes('shadowing') || t.includes('local scope') || t.includes('global scope')) return 'scope';
  if (t.includes('overload') || t.includes('function overloading')) return 'funcoverloading';
  if (t.includes('parameter') || t.includes('pass-by-value') || t.includes('default argument')) return 'funcparams';
  if (t.includes('function') || t.includes('declaration') || t.includes('return type')) return 'functions';
  if (t.includes('dynamic memory') || t.includes('delete[]') || t.includes('memory leak') || t.includes('heap')) return 'memorymgmt';
  if (t.includes('pointer') || t.includes('malloc') || t.includes('nullptr') || t.includes('dereference')) return 'pointers';
  if (t.includes('reference') || t.includes('pass-by-ref') || t.includes('alias')) return 'references';
  if (t.includes('enum')) return 'enums';
  if (t.includes('struct') || t.includes('structure') || t.includes('linked list node')) return 'structures';
  if (t.includes('array') || t.includes('matrix') || t.includes('subarray') || t.includes('vector')) return 'arrays';
  if (t.includes('break') || t.includes('continue')) return 'breakcontinue';
  if (t.includes('for loop') || t.includes('nested for')) return 'forloop';
  if (t.includes('while loop') || t.includes('do-while')) return 'whileloop';
  if (t.includes('switch') || t.includes('case ')) return 'switch';
  if (t.includes('if...else') || t.includes('if-else') || t.includes('if else')) return 'ifelse';
  if (t.includes('boolean') || t.includes('bool') || t.includes('truth table')) return 'booleans';
  if (t.includes('math') || t.includes('sqrt') || t.includes('cmath') || t.includes('trigonomet') || t.includes('sin(') || t.includes('cos(') || t.includes('pow(') || t.includes('log(') || t.includes('gcd') || t.includes('lcm') || t.includes('prime') || t.includes('factorial') || t.includes('hypot') || t.includes('m_pi')) return 'math';
  if (t.includes('string') || t.includes('substr') || t.includes('palindrome') || t.includes('anagram') || t.includes('stringstream')) return 'strings';
  if (t.includes('operator') || t.includes('arithmetic') || t.includes('relational') || t.includes('logical') || t.includes('bitwise') || t.includes('ternary')) return 'operators';
  if (t.includes('input') || t.includes('cin') || t.includes('getline')) return 'userinput';
  if (t.includes('datatype') || t.includes('data type') || t.includes('sizeof') || t.includes('short') || t.includes('climits') || t.includes('literal')) return 'datatypes';
  if (t.includes('variable') || t.includes('const') || t.includes('reassign') || t.includes('swap')) return 'variables';
  if (t.includes('loop') || t.includes('digit') || t.includes('prime')) return 'loops';
  return 'patterns';
}

// Canonical built-in problems map for 0ms deterministic lookup
const CANONICAL_BUILTIN_MAP = new Map<string, Problem>();
ALL_PROBLEMS.forEach((p) => {
  CANONICAL_BUILTIN_MAP.set(p.id, p);
  if (p.slug) CANONICAL_BUILTIN_MAP.set(p.slug, p);
});

export function normalizeProblem(p: Problem): Problem {
  const canonical = CANONICAL_BUILTIN_MAP.get(p.id) || (p.slug ? CANONICAL_BUILTIN_MAP.get(p.slug) : null);
  const book = canonical?.book || getProblemBook(p);
  
  let orderIndex = canonical?.order_index ?? p.order_index;
  if (typeof orderIndex !== 'number' || isNaN(orderIndex) || orderIndex <= 0) {
    const match = (canonical?.title || p.title).match(/^#(\d+)/);
    orderIndex = match ? parseInt(match[1], 10) : 1;
  }

  const title = canonical?.title || p.title;

  return {
    ...p,
    book,
    order_index: orderIndex,
    title: title,
    slug: canonical?.slug || p.slug,
    category: canonical?.category || p.category,
    difficulty: canonical?.difficulty || p.difficulty,
    tags: Array.isArray(canonical?.tags || p.tags) ? (canonical?.tags || p.tags) : [],
    sample_test_cases: Array.isArray(canonical?.sample_test_cases || p.sample_test_cases) && (canonical?.sample_test_cases || p.sample_test_cases).length > 0 
      ? (canonical?.sample_test_cases || p.sample_test_cases) 
      : [{ input: '5', output: '5' }],
    starter_templates: canonical?.starter_templates || p.starter_templates || {
      cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    return 0;\n}`,
      python: `def solve():\n    pass\n\nsolve()`,
      javascript: `function solve() {}\n\nsolve();`,
      java: `public class Solution {\n    public static void main(String[] args) {}\n}`
    },
    status: p.status || 'not_started'
  };
}

export function sortProblemsSerially(list: Problem[]): Problem[] {
  return [...list].map(normalizeProblem).sort((a, b) => {
    const bookOrderA = BOOK_ORDER[a.book || 'patterns'] ?? 999;
    const bookOrderB = BOOK_ORDER[b.book || 'patterns'] ?? 999;
    if (bookOrderA !== bookOrderB) {
      return bookOrderA - bookOrderB;
    }
    return (a.order_index || 0) - (b.order_index || 0);
  });
}

// In-memory runtime status cache
const runtimeStatusCache = new Map<string, Record<string, 'not_started' | 'in_progress' | 'solved'>>();

export function getStoredStatusMap(userId?: string | null): Record<string, 'not_started' | 'in_progress' | 'solved'> {
  const cacheKey = userId || 'guest';
  if (runtimeStatusCache.has(cacheKey)) {
    return { ...runtimeStatusCache.get(cacheKey)! };
  }
  return {};
}

export function setRuntimeStatus(problemId: string, status: 'not_started' | 'in_progress' | 'solved', userId?: string | null) {
  const cacheKey = userId || 'guest';
  const existing = runtimeStatusCache.get(cacheKey) || {};
  existing[problemId] = status;
  runtimeStatusCache.set(cacheKey, existing);
}

function getStoredCustomProblems(): Problem[] {
  try {
    const raw = localStorage.getItem(LOCAL_CUSTOM_PROBLEMS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export const problemService = {
  async getProblems(userId?: string | null): Promise<Problem[]> {
    const statusMap: Record<string, 'not_started' | 'in_progress' | 'solved'> = {};
    const customProblems = getStoredCustomProblems();

    // If signed in, query user's actual accepted submissions from Supabase as primary single source of truth
    if (userId && isValidUUID(userId)) {
      try {
        const { data: acceptedSubs } = await db
          .from('code_submissions')
          .select('problem_id, status, test_cases_passed, total_test_cases')
          .eq('user_id', userId);

        if (acceptedSubs && Array.isArray(acceptedSubs)) {
          acceptedSubs.forEach((sub: any) => {
            const isAccepted = sub.status === 'accepted' || 
              (typeof sub.test_cases_passed === 'number' && typeof sub.total_test_cases === 'number' && sub.total_test_cases > 0 && sub.test_cases_passed === sub.total_test_cases);
            if (isAccepted && sub.problem_id) {
              const canonicalId = resolveCanonicalProblemId(sub.problem_id);
              if (canonicalId) {
                statusMap[canonicalId] = 'solved';
              }
            }
          });
          runtimeStatusCache.set(userId, { ...statusMap });
        }
      } catch (err) {
        console.warn('Could not query user accepted submissions in getProblems:', err);
      }
    } else {
      Object.assign(statusMap, getStoredStatusMap(null));
    }

    try {
      const { data, error } = await db.from('problems').select('*');

      if (!error && data && Array.isArray(data) && data.length > 0) {
        const map = new Map<string, Problem>();
        ALL_PROBLEMS.forEach((p) => map.set(p.id, normalizeProblem(p)));
        customProblems.forEach((p) => map.set(p.id, normalizeProblem(p)));
        data.forEach((p: any) => {
          const norm = normalizeProblem(p as Problem);
          registerProblemInLookup(norm);
          map.set(p.id, norm);
        });

        // CRITICAL: Problem status is strictly bound to this user's statusMap, NEVER shared DB status
        const combined = Array.from(map.values()).map((p) => {
          const canonical = resolveCanonicalProblemId(p.id);
          const solvedStatus = statusMap[p.id] || (canonical ? statusMap[canonical] : undefined) || 'not_started';
          return {
            ...p,
            status: solvedStatus,
          };
        });

        return sortProblemsSerially(combined);
      }
    } catch (e) {
      console.warn('Supabase fetch error, using in-memory dataset:', e);
    }

    const map = new Map<string, Problem>();
    ALL_PROBLEMS.forEach((p) => map.set(p.id, normalizeProblem(p)));
    customProblems.forEach((p) => map.set(p.id, normalizeProblem(p)));

    const combined = Array.from(map.values()).map((p) => {
      const canonical = resolveCanonicalProblemId(p.id);
      const solvedStatus = statusMap[p.id] || (canonical ? statusMap[canonical] : undefined) || 'not_started';
      return {
        ...p,
        status: solvedStatus,
      };
    });

    return sortProblemsSerially(combined);
  },

  async createProblem(problem: Omit<Problem, 'id' | 'created_at' | 'updated_at'>, userId?: string | null): Promise<Problem> {
    const current = await this.getProblems(userId);
    const nextSerial = current.length + 1;
    const numStr = nextSerial.toString().padStart(3, '0');
    const titleWithSerial = problem.title.startsWith('#') ? problem.title : `#${numStr} ${problem.title}`;

    const validUserId = isValidUUID(userId) ? userId : null;
    const newId = crypto.randomUUID ? crypto.randomUUID() : '00000000-0000-4000-8000-' + Date.now().toString().padStart(12, '0');
    const newProblem: Problem = normalizeProblem({
      ...problem,
      id: newId,
      book: problem.book || 'patterns',
      order_index: nextSerial,
      title: titleWithSerial,
      user_id: validUserId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      status: 'not_started'
    });

    try {
      await db.from('problems').insert({
        id: newProblem.id,
        book: newProblem.book,
        order_index: newProblem.order_index,
        user_id: validUserId,
        title: newProblem.title,
        slug: newProblem.slug,
        description: newProblem.description,
        difficulty: newProblem.difficulty,
        category: newProblem.category,
        tags: newProblem.tags,
        source: newProblem.source,
        sample_test_cases: newProblem.sample_test_cases,
        starter_templates: newProblem.starter_templates,
        status: newProblem.status,
      });
    } catch (e) {
      console.warn('Supabase insert problem notice:', e);
    }

    const custom = getStoredCustomProblems();
    custom.push(newProblem);
    safeLocalStorageSet(LOCAL_CUSTOM_PROBLEMS_KEY, JSON.stringify(custom.slice(-50)));

    return newProblem;
  },

  async syncAllProblemsToSupabase(
    onProgress?: (syncedCount: number, totalCount: number) => void
  ): Promise<{ count: number; error?: string }> {
    const problems = await this.getProblems();
    let count = 0;
    let lastError: any = null;
    const batchSize = 100;
    const total = problems.length;

    let currentUserId: string | null = null;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      currentUserId = session?.user?.id || null;
    } catch {}

    for (let i = 0; i < problems.length; i += batchSize) {
      const batchFull = problems.slice(i, i + batchSize).map((p) => ({
        id: p.id,
        book: p.book || 'patterns',
        order_index: p.order_index || (i + 1),
        user_id: currentUserId,
        title: p.title,
        slug: p.slug,
        description: p.description,
        difficulty: p.difficulty,
        category: p.category,
        tags: p.tags,
        source: p.source,
        sample_test_cases: p.sample_test_cases,
        starter_templates: p.starter_templates,
        status: p.status,
      }));

      try {
        const { error } = await db.from('problems').upsert(batchFull, { onConflict: 'id' });
        if (!error) {
          count += batchFull.length;
        } else {
          lastError = error;
          const batchFallback = batchFull.map((p) => ({
            id: p.id,
            user_id: currentUserId,
            title: p.title,
            slug: p.slug,
            description: p.description,
            difficulty: p.difficulty,
            category: p.category,
            tags: p.tags,
            source: p.source,
            sample_test_cases: p.sample_test_cases,
            starter_templates: p.starter_templates,
            status: p.status,
          }));

          const { error: fallbackError } = await db.from('problems').upsert(batchFallback, { onConflict: 'id' });
          if (!fallbackError) {
            count += batchFallback.length;
          } else {
            lastError = fallbackError;
          }
        }
      } catch (e: any) {
        lastError = e;
      }

      if (onProgress) {
        onProgress(count, total);
      }
    }

    if (count === 0 && lastError) {
      return { count: 0, error: lastError.message || JSON.stringify(lastError) };
    }
    return { count };
  },

  async deleteProblem(_id: string): Promise<void> {
    console.warn('Question repository is locked: Deleting questions is disabled to preserve dataset integrity.');
  },

  async updateProblemStatus(
    id: string,
    status: 'not_started' | 'in_progress' | 'solved',
    _problemData?: Problem,
    userId?: string | null
  ): Promise<void> {
    const statusMap = getStoredStatusMap(userId);
    statusMap[id] = status;
    safeLocalStorageSet(getUserScopedKey(LOCAL_STATUS_KEY, userId), JSON.stringify(statusMap));
    // Public 'problems' table in Supabase is a shared question catalog.
    // Solve status is tracked per-user in 'code_submissions' and 'user_stats'.
  },

  subscribeToProblems(onChanges: (payload: any) => void): RealtimeChannel {
    return supabase
      .channel('realtime_problems_feed')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'problems' },
        (payload) => {
          onChanges(payload);
        }
      )
      .subscribe();
  }
};

export const bookmarkService = {
  getBookmarks(userId?: string | null): string[] {
    try {
      const key = getUserScopedKey('ai_dsa_bookmarks_v1', userId);
      const raw = localStorage.getItem(key);
      if (raw) {
        return JSON.parse(raw);
      }
      if (userId) {
        const guestRaw = localStorage.getItem('ai_dsa_bookmarks_v1_guest') || localStorage.getItem('ai_dsa_bookmarks_v1');
        if (guestRaw) return JSON.parse(guestRaw);
      } else {
        const legacy = localStorage.getItem('ai_dsa_bookmarks_v1');
        if (legacy) return JSON.parse(legacy);
      }
    } catch {
      return [];
    }
    return [];
  },
  toggleBookmark(problemId: string, userId?: string | null): boolean {
    const list = this.getBookmarks(userId);
    const idx = list.indexOf(problemId);
    let isAdded = false;
    if (idx >= 0) {
      list.splice(idx, 1);
      isAdded = false;
    } else {
      list.push(problemId);
      isAdded = true;
    }
    const key = getUserScopedKey('ai_dsa_bookmarks_v1', userId);
    safeLocalStorageSet(key, JSON.stringify(list));
    if (!userId) {
      safeLocalStorageSet('ai_dsa_bookmarks_v1', JSON.stringify(list));
    }
    return isAdded;
  },
  isBookmarked(problemId: string, userId?: string | null): boolean {
    const list = this.getBookmarks(userId);
    return list.includes(problemId);
  }
};

function isValidUUID(str?: string | null): boolean {
  if (!str) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
}

const inMemorySubmissionsCache = new Map<string, CodeSubmission[]>();

// Initialize submissions cache from localStorage immediately
function initSubmissionsCache(userId?: string | null) {
  try {
    const storageKey = getUserScopedKey(LOCAL_STORAGE_SUBMISSIONS_KEY, userId);
    const raw = localStorage.getItem(storageKey) || localStorage.getItem(LOCAL_STORAGE_SUBMISSIONS_KEY);
    if (raw) {
      const submissions: CodeSubmission[] = JSON.parse(raw);
      inMemorySubmissionsCache.clear();
      for (const sub of submissions) {
        if (!inMemorySubmissionsCache.has(sub.problem_id)) {
          inMemorySubmissionsCache.set(sub.problem_id, []);
        }
        inMemorySubmissionsCache.get(sub.problem_id)!.push(sub);
      }
    }
  } catch {}
}
initSubmissionsCache();

export const submissionService = {
  getLatestCodeSync(problemId: string, language: string, userId?: string | null): string | null {
    // 1. Check instant 0ms persistent code cache
    const cachedCode = savedCodeService.getCodeSync(problemId, language, userId);
    if (cachedCode) return cachedCode;

    // 2. Check in-memory submissions cache
    const cached = inMemorySubmissionsCache.get(problemId);
    if (cached && cached.length > 0) {
      const match = cached.find((s) => s.language === language);
      if (match?.code) {
        savedCodeService.saveCodeSync(problemId, language, match.code, userId);
        return match.code;
      }
    }
    return null;
  },

  async saveSubmission(submission: Omit<CodeSubmission, 'id' | 'created_at'>, userId?: string | null): Promise<CodeSubmission> {
    const newId = crypto.randomUUID ? crypto.randomUUID() : '00000000-0000-4000-8000-' + Date.now().toString().padStart(12, '0');
    const validUserId = isValidUUID(userId) ? userId : null;
    const canonicalProbId = resolveCanonicalProblemId(submission.problem_id);
    const validProblemId = isValidUUID(canonicalProbId) 
      ? canonicalProbId 
      : (isValidUUID(submission.problem_id) ? submission.problem_id : null);

    const newSub: CodeSubmission = {
      ...submission,
      id: newId,
      user_id: validUserId || 'guest_user',
      created_at: new Date().toISOString()
    };

    // 1. Instantly save to persistent code cache (0ms lookup)
    savedCodeService.saveCodeSync(newSub.problem_id, newSub.language, newSub.code, userId);

    // 2. Instantly update in-memory cache
    if (!inMemorySubmissionsCache.has(newSub.problem_id)) {
      inMemorySubmissionsCache.set(newSub.problem_id, []);
    }
    const list = inMemorySubmissionsCache.get(newSub.problem_id)!;
    list.unshift(newSub);

    // 3. Persist to user-scoped Local Storage backup
    try {
      const storageKey = getUserScopedKey(LOCAL_STORAGE_SUBMISSIONS_KEY, userId);
      const raw = localStorage.getItem(storageKey);
      const submissions: CodeSubmission[] = raw ? JSON.parse(raw) : [];
      submissions.unshift(newSub);
      safeLocalStorageSet(storageKey, JSON.stringify(submissions.slice(0, 100)));
    } catch {}

    // 4. Save to Supabase Database (strictly prevent duplicate accepted submissions)
    try {
      if (validProblemId && validUserId) {
        if (newSub.status === 'accepted') {
          const { data: existing } = await db
            .from('code_submissions')
            .select('id')
            .eq('user_id', validUserId)
            .eq('problem_id', validProblemId)
            .eq('status', 'accepted')
            .limit(1);

          if (existing && existing.length > 0) {
            // Already solved in database, do not insert duplicate
            return { ...newSub, id: existing[0].id };
          }
        }

        const { error: insertErr } = await db.from('code_submissions').insert({
          id: newSub.id,
          problem_id: validProblemId,
          user_id: validUserId,
          language: newSub.language,
          code: newSub.code,
          status: newSub.status,
          test_cases_passed: newSub.test_cases_passed,
          total_test_cases: newSub.total_test_cases,
          execution_time_ms: newSub.execution_time_ms,
          is_autosave: newSub.is_autosave,
        });

        if (insertErr) {
          console.warn('Supabase submission insert retry:', insertErr);
        }
      }
    } catch (e) {
      console.warn('Supabase submission insert note:', e);
    }

    return newSub;
  },

  async getSubmissionsByProblem(problemId: string, userId?: string | null): Promise<CodeSubmission[]> {
    // 1. Fast in-memory cache hit
    const cached = inMemorySubmissionsCache.get(problemId);
    if (cached && cached.length > 0) return cached;

    // 2. Local Storage lookup
    try {
      const storageKey = getUserScopedKey(LOCAL_STORAGE_SUBMISSIONS_KEY, userId);
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const submissions: CodeSubmission[] = JSON.parse(raw);
        const filtered = submissions.filter((s) => s.problem_id === problemId);
        if (filtered.length > 0) {
          inMemorySubmissionsCache.set(problemId, filtered);
          return filtered;
        }
      }
    } catch {}

    // 3. Supabase network fallback
    try {
      let query = db
        .from('code_submissions')
        .select('*')
        .eq('problem_id', problemId)
        .order('created_at', { ascending: false });

      if (userId) {
        query = query.eq('user_id', userId);
      }

      const { data, error } = await query;

      if (!error && data && data.length > 0) {
        inMemorySubmissionsCache.set(problemId, data as unknown as CodeSubmission[]);
        data.forEach((s: any) => {
          if (s.code && s.language) {
            savedCodeService.saveCodeSync(problemId, s.language, s.code, userId);
          }
        });
        return data as unknown as CodeSubmission[];
      }
    } catch {}

    return [];
  },

  async getLatestCode(problemId: string, language: string, userId?: string | null): Promise<string | null> {
    const fastCode = this.getLatestCodeSync(problemId, language, userId);
    if (fastCode) return fastCode;

    const subs = await this.getSubmissionsByProblem(problemId, userId);
    const match = subs.find((s) => s.language === language);
    if (match?.code) {
      savedCodeService.saveCodeSync(problemId, language, match.code, userId);
      return match.code;
    }
    return null;
  },

  getAllSubmissions(userId?: string | null): CodeSubmission[] {
    const list: CodeSubmission[] = [];
    const seenIds = new Set<string>();

    const addSubs = (arr: any) => {
      if (!Array.isArray(arr)) return;
      for (const s of arr) {
        if (s && s.id && !seenIds.has(s.id)) {
          seenIds.add(s.id);
          list.push(s);
        }
      }
    };

    try {
      if (userId) {
        // 1. User scoped localStorage ONLY
        const userKey = getUserScopedKey(LOCAL_STORAGE_SUBMISSIONS_KEY, userId);
        const rawUser = localStorage.getItem(userKey);
        if (rawUser) {
          try { addSubs(JSON.parse(rawUser)); } catch {}
        }

        // In-memory cache strictly for this user
        inMemorySubmissionsCache.forEach((subs) => {
          addSubs(subs.filter((s) => s.user_id === userId));
        });
      } else {
        // 2. Guest mode ONLY
        const guestKey = getUserScopedKey(LOCAL_STORAGE_SUBMISSIONS_KEY, null);
        const rawGuest = localStorage.getItem(guestKey) || localStorage.getItem('ai_dsa_submissions_v4_guest');
        if (rawGuest) {
          try { addSubs(JSON.parse(rawGuest)); } catch {}
        }

        inMemorySubmissionsCache.forEach((subs) => {
          addSubs(subs.filter((s) => !s.user_id || s.user_id === 'guest_user'));
        });
      }
    } catch {}

    return list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  },

  subscribeToSubmissions(onChanges: (payload: any) => void): RealtimeChannel {
    return supabase
      .channel('realtime_submissions_feed')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'code_submissions' },
        (payload) => {
          onChanges(payload);
        }
      )
      .subscribe();
  }
};

const LOCAL_PROFILE_KEY = 'ai_dsa_profile_v4';

export interface UserStats {
  total_solved: number;
  easy_solved: number;
  medium_solved: number;
  hard_solved: number;
  current_streak: number;
  best_streak: number;
  last_active_date: string;
  active_dates: string[];
  total_xp: number;
  revision_solved_count: number;
  revision_bonus_xp: number;
  revision_completed_ids: string[];
  solved_problem_ids: string[];
}

export interface UserProfile {
  display_name: string;
  username: string;
  bio: string;
  avatar: string;
  target_daily_problems: number;
  joined_date: string;
  institution: string;
  github_handle?: string;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  username: string;
  avatar: string;
  institution: string;
  total_xp: number;
  total_solved: number;
  easy_solved: number;
  medium_solved: number;
  hard_solved: number;
  current_streak: number;
  badge: string;
  isCurrentUser?: boolean;
}

function getLocalDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getYesterdayDateString(d: Date = new Date()): string {
  const yesterday = new Date(d);
  yesterday.setDate(yesterday.getDate() - 1);
  return getLocalDateString(yesterday);
}

export const userProfileService = {
  getProfile(userId?: string | null): UserProfile {
    try {
      const key = getUserScopedKey(LOCAL_PROFILE_KEY, userId);
      const raw = localStorage.getItem(key);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch {}
    return {
      display_name: 'DSA Champion',
      username: 'algo_master',
      bio: 'Cracking 500+ DSA problems with AI assistance. Daily problem solver 🚀',
      avatar: 'coder',
      target_daily_problems: 3,
      joined_date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      institution: 'Algorithm Mastery Club',
      github_handle: 'coder-dsa'
    };
  },

  saveProfile(profile: Partial<UserProfile>, userId?: string | null): UserProfile {
    const current = this.getProfile(userId);
    const updated: UserProfile = { ...current, ...profile };
    const key = getUserScopedKey(LOCAL_PROFILE_KEY, userId);
    safeLocalStorageSet(key, JSON.stringify(updated));

    // Sync to Supabase profiles in background
    try {
      const uId = userId;
      if (uId) {
        db.from('profiles').upsert({
          id: uId,
          display_name: updated.display_name,
          avatar_url: updated.avatar,
          institution: updated.institution,
          updated_at: new Date().toISOString()
        }, { onConflict: 'id' }).then(() => {});
      }
    } catch (e) {
      console.warn('Supabase profile sync note:', e);
    }

    return updated;
  },

  async syncUserWithSupabase(user: any) {
    if (!user || !user.id) return;
    try {
      // 1. Fetch real accepted submissions from code_submissions strictly for this user
      let dbSubmissionsEasy = 0;
      let dbSubmissionsMedium = 0;
      let dbSubmissionsHard = 0;
      const solvedIds = new Set<string>();

      try {
        const { data: userSubs } = await db
          .from('code_submissions')
          .select('id, problem_id, language, code, status, test_cases_passed, total_test_cases')
          .eq('user_id', user.id);

        if (userSubs && Array.isArray(userSubs)) {
          userSubs.forEach((s: any) => {
            const canonicalId = resolveCanonicalProblemId(s.problem_id);
            if (canonicalId && s.code && s.language) {
              savedCodeService.saveCodeSync(canonicalId, s.language, s.code, user.id);
            }
            const isAccepted = s.status === 'accepted' || 
              (typeof s.test_cases_passed === 'number' && typeof s.total_test_cases === 'number' && s.total_test_cases > 0 && s.test_cases_passed === s.total_test_cases);
            if (isAccepted && canonicalId) {
              solvedIds.add(canonicalId);
            }
          });
        }
      } catch (err) {
        console.warn('Could not query user code submissions:', err);
      }

      // Re-calculate difficulty counts accurately from solvedIds
      solvedIds.forEach((pId) => {
        const prob = ALL_PROBLEMS.find((p) => p.id === pId);
        const diff = prob?.difficulty || 'Easy';
        if (diff === 'Easy') dbSubmissionsEasy++;
        else if (diff === 'Medium') dbSubmissionsMedium++;
        else if (diff === 'Hard') dbSubmissionsHard++;
      });

      // Sync user-scoped status map so problems show solved state accurately
      const userStatusMap: Record<string, 'not_started' | 'in_progress' | 'solved'> = {};
      solvedIds.forEach((pId) => {
        userStatusMap[pId] = 'solved';
      });
      safeLocalStorageSet(getUserScopedKey(LOCAL_STATUS_KEY, user.id), JSON.stringify(userStatusMap));

      // 2. Fetch profile and stats rows for this specific user
      const { data: profileRow } = await db.from('profiles').select('*').eq('id', user.id).maybeSingle();
      const { data: statsRow } = await db.from('user_stats').select('*').eq('user_id', user.id).maybeSingle();

      const emailName = user.email ? user.email.split('@')[0] : 'Coder';
      const displayName = profileRow?.display_name || emailName;
      const avatar = profileRow?.avatar_url || 'coder';

      const easy_solved = dbSubmissionsEasy;
      const medium_solved = dbSubmissionsMedium;
      const hard_solved = dbSubmissionsHard;
      const total_solved = solvedIds.size;
      const current_streak = total_solved > 0 ? Math.max(statsRow?.current_streak || profileRow?.current_streak || 1, 1) : 0;
      const best_streak = Math.max(statsRow?.best_streak || 0, profileRow?.current_streak || 0, current_streak);
      const last_active_date = total_solved > 0 ? (statsRow?.last_active_date || profileRow?.last_active_date || getLocalDateString()) : '';
      const total_xp = total_solved > 0 ? (easy_solved * 10) + (medium_solved * 25) + (hard_solved * 50) + (current_streak * 15) + (statsRow?.revision_bonus_xp || 0) : (statsRow?.revision_bonus_xp || 0);

      const userStats: UserStats = {
        easy_solved,
        medium_solved,
        hard_solved,
        total_solved,
        current_streak,
        best_streak,
        last_active_date,
        active_dates: last_active_date ? [last_active_date] : [],
        total_xp,
        revision_solved_count: statsRow?.revision_solved_count || 0,
        revision_bonus_xp: statsRow?.revision_bonus_xp || 0,
        revision_completed_ids: statsRow?.revision_completed_ids || [],
        solved_problem_ids: Array.from(solvedIds),
      };

      // Save strictly to this user's scoped storage
      safeLocalStorageSet(getUserScopedKey(LOCAL_STORAGE_STATS_KEY, user.id), JSON.stringify(userStats));

      this.saveProfile({
        display_name: displayName,
        avatar: avatar,
        username: user.email ? user.email.split('@')[0].toLowerCase() : `coder_${user.id.slice(0, 5)}`,
      }, user.id);

      // Upsert into Supabase profiles & user_stats tables to keep remote updated
      await db.from('profiles').upsert(
        {
          id: user.id,
          email: user.email,
          display_name: displayName,
          avatar_url: avatar,
          total_solved,
          easy_solved,
          medium_solved,
          hard_solved,
          current_streak,
          last_active_date: last_active_date || null,
          preferred_language: 'cpp',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'id' }
      );

      if (statsRow?.id) {
        await db.from('user_stats').update({
          total_solved,
          easy_solved,
          medium_solved,
          hard_solved,
          current_streak,
          last_active_date: last_active_date || null,
          updated_at: new Date().toISOString(),
        }).eq('id', statsRow.id);
      } else {
        await db.from('user_stats').insert({
          user_id: user.id,
          total_solved,
          easy_solved,
          medium_solved,
          hard_solved,
          current_streak,
          last_active_date: last_active_date || null,
          updated_at: new Date().toISOString(),
        });
      }

      // Broadcast solve sync event to notify ProblemContext and all open UI components
      try {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('codetutor_status_synced', { detail: { userId: user.id } }));
          if ('BroadcastChannel' in window) {
            const bc = new BroadcastChannel('codetutor_live_channel');
            bc.postMessage({ type: 'STATUS_SYNC', userId: user.id });
            bc.close();
          }
        }
      } catch {}
    } catch (e) {
      console.warn('syncUserWithSupabase note:', e);
    }
  },
};

export const userStatsService = {
  async getStats(userId?: string | null): Promise<UserStats> {
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();

    const solvedSet = new Set<string>();
    let current_streak = 0;
    let best_streak = 0;
    let last_active_date = '';
    let active_dates: string[] = [];
    let revision_solved_count = 0;
    let revision_bonus_xp = 0;
    let revision_completed_ids: string[] = [];

    if (userId && isValidUUID(userId)) {
      try {
        const [subsRes, profRes, statsRes] = await Promise.all([
          db.from('code_submissions').select('problem_id, status, test_cases_passed, total_test_cases').eq('user_id', userId),
          db.from('profiles').select('*').eq('id', userId).maybeSingle(),
          db.from('user_stats').select('*').eq('user_id', userId).maybeSingle()
        ]);

        const acceptedSubs = subsRes.data;
        if (acceptedSubs && Array.isArray(acceptedSubs)) {
          acceptedSubs.forEach((s: any) => {
            const isAccepted = s.status === 'accepted' || 
              (typeof s.test_cases_passed === 'number' && typeof s.total_test_cases === 'number' && s.total_test_cases > 0 && s.test_cases_passed === s.total_test_cases);
            if (isAccepted && s.problem_id) {
              const canonical = resolveCanonicalProblemId(s.problem_id);
              if (canonical) solvedSet.add(canonical);
            }
          });
        }

        const profData = profRes.data;
        const statsData = statsRes.data;

        if (profData?.current_streak) current_streak = Math.max(current_streak, profData.current_streak);
        if (statsData?.current_streak) current_streak = Math.max(current_streak, statsData.current_streak);
        if (profData?.last_active_date) last_active_date = profData.last_active_date;
        if (statsData?.last_active_date) last_active_date = statsData.last_active_date;
      } catch {}
    }

    const solvedArr = Array.from(solvedSet);

    let easyCount = 0;
    let medCount = 0;
    let hardCount = 0;

    solvedArr.forEach((id) => {
      const prob = ALL_PROBLEMS.find((p) => p.id === id);
      const diff = prob?.difficulty || 'Easy';
      if (diff === 'Easy') easyCount++;
      else if (diff === 'Medium') medCount++;
      else if (diff === 'Hard') hardCount++;
    });

    const total_solved = solvedArr.length;

    if (total_solved > 0) {
      if (!last_active_date) {
        last_active_date = today;
        active_dates = [today];
      }
      current_streak = Math.max(current_streak, 1);
    } else {
      current_streak = 0;
      best_streak = 0;
      last_active_date = '';
      active_dates = [];
    }

    if (current_streak > best_streak) {
      best_streak = current_streak;
    }

    const total_xp = total_solved > 0 
      ? (easyCount * 10) + (medCount * 25) + (hardCount * 50) + (current_streak * 15) + (revision_bonus_xp || 0)
      : (revision_bonus_xp || 0);

    const stats: UserStats = {
      total_solved,
      easy_solved: easyCount,
      medium_solved: medCount,
      hard_solved: hardCount,
      current_streak,
      best_streak,
      last_active_date,
      active_dates,
      total_xp,
      revision_solved_count,
      revision_bonus_xp,
      revision_completed_ids,
      solved_problem_ids: solvedArr
    };

    return stats;
  },

  async recordProblemSolved(
    difficulty: 'Easy' | 'Medium' | 'Hard',
    options?: { isRevision?: boolean; problemId?: string; userId?: string | null; alreadySolved?: boolean }
  ): Promise<UserStats> {
    const stats = await this.getStats(options?.userId);
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();

    if (!stats.solved_problem_ids) {
      stats.solved_problem_ids = [];
    }

    const canonicalProbId = options?.problemId ? resolveCanonicalProblemId(options.problemId) : '';
    const isAlreadySolved = Boolean(
      options?.alreadySolved || 
      (canonicalProbId && stats.solved_problem_ids.includes(canonicalProbId)) ||
      (options?.problemId && stats.solved_problem_ids.includes(options.problemId))
    );

    // 1. Only increment solved counts if NOT already solved and NOT in revision mode
    if (!isAlreadySolved && !options?.isRevision) {
      stats.total_solved += 1;
      if (difficulty === 'Easy') stats.easy_solved += 1;
      if (difficulty === 'Medium') stats.medium_solved += 1;
      if (difficulty === 'Hard') stats.hard_solved += 1;

      if (canonicalProbId && !stats.solved_problem_ids.includes(canonicalProbId)) {
        stats.solved_problem_ids.push(canonicalProbId);
      }

      // Base XP only for new non-revision solves
      const baseXP = difficulty === 'Easy' ? 10 : difficulty === 'Medium' ? 25 : 50;
      stats.total_xp = (stats.total_xp || 0) + baseXP;

      // 2. Calculate Streak
      if (stats.last_active_date === today) {
        if (stats.current_streak === 0) stats.current_streak = 1;
      } else if (stats.last_active_date === yesterday) {
        stats.current_streak += 1;
      } else {
        stats.current_streak = 1;
      }

      stats.last_active_date = today;
      if (!stats.active_dates.includes(today)) {
        stats.active_dates.push(today);
      }
      stats.best_streak = Math.max(stats.best_streak, stats.current_streak);

      // Sync stats to Supabase profiles & user_stats immediately
      try {
        const saveToSupabase = async (uid: string) => {
          const prof = userProfileService.getProfile(uid);
          await db.from('profiles').upsert(
            {
              id: uid,
              display_name: prof.display_name,
              avatar_url: prof.avatar,
              total_solved: stats.total_solved,
              easy_solved: stats.easy_solved,
              medium_solved: stats.medium_solved,
              hard_solved: stats.hard_solved,
              current_streak: stats.current_streak,
              last_active_date: stats.last_active_date || null,
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'id' }
          );

          const { data: existingStat } = await db.from('user_stats').select('id').eq('user_id', uid).maybeSingle();
          if (existingStat?.id) {
            await db.from('user_stats').update({
              total_solved: stats.total_solved,
              easy_solved: stats.easy_solved,
              medium_solved: stats.medium_solved,
              hard_solved: stats.hard_solved,
              current_streak: stats.current_streak,
              last_active_date: stats.last_active_date || null,
              updated_at: new Date().toISOString(),
            }).eq('id', existingStat.id);
          } else {
            await db.from('user_stats').insert({
              user_id: uid,
              total_solved: stats.total_solved,
              easy_solved: stats.easy_solved,
              medium_solved: stats.medium_solved,
              hard_solved: stats.hard_solved,
              current_streak: stats.current_streak,
              last_active_date: stats.last_active_date || null,
              updated_at: new Date().toISOString(),
            });
          }
        };

        if (options?.userId) {
          saveToSupabase(options.userId).catch((err) =>
            console.warn('Direct Supabase stats sync error:', err)
          );
        } else {
          supabase.auth.getSession().then(({ data: { session } }) => {
            const userId = session?.user?.id;
            if (userId) {
              saveToSupabase(userId).catch((err) =>
                console.warn('Session Supabase stats sync error:', err)
              );
            }
          });
        }
      } catch (e) {
        console.warn('Supabase stats sync note:', e);
      }
    }

    // 3. Revision Bonus (if in revision mode)
    if (options?.isRevision) {
      const revisionBonus = 50;
      stats.total_xp = (stats.total_xp || 0) + revisionBonus;
      stats.revision_solved_count = (stats.revision_solved_count || 0) + 1;
      stats.revision_bonus_xp = (stats.revision_bonus_xp || 0) + revisionBonus;

      if (options?.problemId) {
        if (!stats.revision_completed_ids) stats.revision_completed_ids = [];
        if (!stats.revision_completed_ids.includes(options.problemId)) {
          stats.revision_completed_ids.push(options.problemId);
        }
      }
    }

    return stats;
  },

  async recordRevisionSolve(
    problemId: string,
    difficulty: 'Easy' | 'Medium' | 'Hard',
    userId?: string | null
  ): Promise<UserStats> {
    const stats = await this.getStats(userId);

    // 1. Award +50 XP Revision Bonus
    const revisionBonus = 50;
    stats.total_xp = (stats.total_xp || 0) + revisionBonus;
    stats.revision_solved_count = (stats.revision_solved_count || 0) + 1;
    stats.revision_bonus_xp = (stats.revision_bonus_xp || 0) + revisionBonus;

    if (!stats.revision_completed_ids) stats.revision_completed_ids = [];
    if (!stats.revision_completed_ids.includes(problemId)) {
      stats.revision_completed_ids.push(problemId);
    }

    return stats;
  },

  async incrementSolved(difficulty: 'Easy' | 'Medium' | 'Hard', userId?: string | null): Promise<UserStats> {
    return this.recordProblemSolved(difficulty, { userId });
  },

  async resetRevisionDeck(userId?: string | null): Promise<UserStats> {
    const stats = await this.getStats(userId);
    stats.revision_completed_ids = [];
    return stats;
  },

  subscribeToStats(onChanges: (payload: any) => void): RealtimeChannel {
    return supabase
      .channel('realtime_user_stats_feed')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'user_stats' },
        (payload) => {
          onChanges(payload);
        }
      )
      .subscribe();
  }
};

export const leaderboardService = {
  async getLeaderboard(): Promise<{
    topOne: LeaderboardEntry | null;
    podium: LeaderboardEntry[];
    rankings: LeaderboardEntry[];
    currentUserRank: LeaderboardEntry | null;
  }> {
    let currentUserId: string | null = null;
    let currentUserEmail: string | null = null;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      currentUserId = session?.user?.id || null;
      currentUserEmail = session?.user?.email || null;
    } catch {}

    // 1. Query all real registered users & their submissions from Supabase Database
    const dbEntriesMap = new Map<string, Omit<LeaderboardEntry, 'rank'>>();

    try {
      // Parallel fetch for profiles and code submissions
      const [profilesRes, submissionsRes] = await Promise.all([
        db.from('profiles').select('*'),
        db.from('code_submissions').select('user_id, problem_id, status, test_cases_passed, total_test_cases'),
      ]);

      const dbProfiles = profilesRes.data || [];
      const allSubs = submissionsRes.data || [];

      // Build a map of user_id -> solved problem difficulty counts from actual accepted submissions
      const userSubmissionsMap = new Map<string, { total: number; easy: number; medium: number; hard: number; problemIds: Set<string> }>();
      if (Array.isArray(allSubs)) {
        allSubs.forEach((sub: any) => {
          if (!sub.user_id || !sub.problem_id) return;
          const isAccepted = sub.status === 'accepted' || 
            (typeof sub.test_cases_passed === 'number' && typeof sub.total_test_cases === 'number' && sub.total_test_cases > 0 && sub.test_cases_passed === sub.total_test_cases);
          if (!isAccepted) return;

          if (!userSubmissionsMap.has(sub.user_id)) {
            userSubmissionsMap.set(sub.user_id, { total: 0, easy: 0, medium: 0, hard: 0, problemIds: new Set() });
          }
          const userSub = userSubmissionsMap.get(sub.user_id)!;
          const canonicalId = resolveCanonicalProblemId(sub.problem_id);
          if (canonicalId && !userSub.problemIds.has(canonicalId)) {
            userSub.problemIds.add(canonicalId);
            const prob = ALL_PROBLEMS.find((p) => p.id === canonicalId);
            const diff = prob?.difficulty || 'Easy';
            if (diff === 'Easy') userSub.easy++;
            else if (diff === 'Medium') userSub.medium++;
            else if (diff === 'Hard') userSub.hard++;
            userSub.total++;
          }
        });
      }

      if (Array.isArray(dbProfiles) && dbProfiles.length > 0) {
        dbProfiles.forEach((p: any) => {
          const isThisCurrentUser = currentUserId ? p.id === currentUserId : false;
          const subInfo = userSubmissionsMap.get(p.id);

          const eSolved = subInfo?.easy || 0;
          const mSolved = subInfo?.medium || 0;
          const hSolved = subInfo?.hard || 0;
          const tSolved = subInfo?.total || 0;
          const streak = tSolved > 0 ? (p.current_streak || 1) : 0;
          const xp = tSolved > 0 ? (eSolved * 10) + (mSolved * 25) + (hSolved * 50) + (streak * 15) : 0;

          const displayName = p.display_name || (p.email ? p.email.split('@')[0] : 'Coder');
          const username = p.email ? p.email.split('@')[0].toLowerCase() : `user_${p.id.slice(0, 5)}`;

          dbEntriesMap.set(p.id, {
            id: p.id,
            name: displayName,
            username: username,
            avatar: p.avatar_url || 'coder',
            institution: p.institution || 'Registered Learner',
            total_xp: xp,
            total_solved: tSolved,
            easy_solved: eSolved,
            medium_solved: mSolved,
            hard_solved: hSolved,
            current_streak: streak,
            badge: xp >= 5000 ? 'Knight 🛡️' : xp >= 1500 ? 'Expert 🌟' : xp >= 500 ? 'Aspirant 🚀' : 'Novice 🌱',
            isCurrentUser: isThisCurrentUser,
          });
        });
      }
    } catch (e) {
      console.warn('Leaderboard Supabase fetch note:', e);
    }

    // Ensure current active user is always included in rankings
    if (currentUserId && !dbEntriesMap.has(currentUserId)) {
      const stats = await userStatsService.getStats(currentUserId);
      const profile = userProfileService.getProfile(currentUserId);
      dbEntriesMap.set(currentUserId, {
        id: currentUserId,
        name: profile.display_name || (currentUserEmail ? currentUserEmail.split('@')[0] : 'You'),
        username: profile.username || (currentUserEmail ? currentUserEmail.split('@')[0].toLowerCase() : 'your_handle'),
        avatar: profile.avatar || 'coder',
        institution: profile.institution || 'DSA Self-Taught',
        total_xp: stats.total_xp,
        total_solved: stats.total_solved,
        easy_solved: stats.easy_solved,
        medium_solved: stats.medium_solved,
        hard_solved: stats.hard_solved,
        current_streak: stats.current_streak,
        badge: stats.total_xp >= 5000 ? 'Knight 🛡️' : stats.total_xp >= 1500 ? 'Expert 🌟' : stats.total_xp >= 500 ? 'Aspirant 🚀' : 'Novice 🌱',
        isCurrentUser: true,
      });
    } else if (!currentUserId && !dbEntriesMap.has('guest-live-entry')) {
      const stats = await userStatsService.getStats(null);
      const profile = userProfileService.getProfile(null);
      dbEntriesMap.set('guest-live-entry', {
        id: 'guest-live-entry',
        name: profile.display_name || 'Guest Learner',
        username: 'guest_user',
        avatar: profile.avatar || 'coder',
        institution: 'DSA Guest Learner',
        total_xp: stats.total_xp,
        total_solved: stats.total_solved,
        easy_solved: stats.easy_solved,
        medium_solved: stats.medium_solved,
        hard_solved: stats.hard_solved,
        current_streak: stats.current_streak,
        badge: 'Novice 🌱',
        isCurrentUser: true,
      });
    }

    const allEntries = Array.from(dbEntriesMap.values());

    // Sort strictly descending by total_xp, then total_solved, then current_streak
    allEntries.sort((a, b) => b.total_xp - a.total_xp || b.total_solved - a.total_solved || b.current_streak - a.current_streak);

    const ranked: LeaderboardEntry[] = allEntries.map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }));

    const currentUserRank = ranked.find((e) => e.isCurrentUser) || (ranked.length > 0 ? ranked[0] : null);
    const topOne = ranked.length > 0 ? ranked[0] : null;
    const podium = ranked.slice(0, Math.min(3, ranked.length));

    return {
      topOne,
      podium,
      rankings: ranked,
      currentUserRank,
    };
  },

  subscribeToLeaderboard(onChanges: () => void): RealtimeChannel {
    return supabase
      .channel('realtime_leaderboard_feed')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'profiles' },
        () => {
          onChanges();
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'user_stats' },
        () => {
          onChanges();
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'code_submissions' },
        () => {
          onChanges();
        }
      )
      .subscribe();
  }
};

// ==============================================================================
// 👑 SECURE ADMIN SERVICE
// Single Authorized Admin: ktvivek12345@gmail.com / Vivek12345@
// ==============================================================================
export const ADMIN_CONFIG = {
  EMAIL: 'ktvivek12345@gmail.com',
  PASSWORD_HASH: 'Vivek12345@',
};

const ADMIN_SESSION_KEY = 'ai_dsa_admin_session_auth_v1';

export interface AdminUserRecord {
  id: string;
  email: string;
  display_name: string;
  avatar_url: string;
  total_solved: number;
  easy_solved: number;
  medium_solved: number;
  hard_solved: number;
  current_streak: number;
  last_active_date: string | null;
  total_xp: number;
  created_at: string;
  updated_at: string;
}

export const adminService = {
  async verifyAdmin(email?: string, password?: string): Promise<boolean> {
    if (!email || !password) return false;
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (cleanEmail === ADMIN_CONFIG.EMAIL.toLowerCase() && cleanPass === ADMIN_CONFIG.PASSWORD_HASH) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({
          email: cleanEmail,
          authenticated: true,
          timestamp: Date.now()
        }));
      }
      return true;
    }

    // Also verify if user can authenticate via Supabase Auth as the admin email
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: cleanPass,
      });
      if (!error && data.user && data.user.email?.toLowerCase() === ADMIN_CONFIG.EMAIL.toLowerCase()) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({
            email: cleanEmail,
            authenticated: true,
            timestamp: Date.now()
          }));
        }
        return true;
      }
    } catch {}

    return false;
  },

  isAdminSessionActive(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const raw = sessionStorage.getItem(ADMIN_SESSION_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return parsed.authenticated === true && parsed.email?.toLowerCase() === ADMIN_CONFIG.EMAIL.toLowerCase();
      }
    } catch {}
    return false;
  },

  logoutAdmin() {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    }
  },

  async getAllUsers(): Promise<AdminUserRecord[]> {
    try {
      const [profRes, subsRes] = await Promise.all([
        db.from('profiles').select('*').order('created_at', { ascending: false }),
        db.from('code_submissions').select('user_id, problem_id, status')
      ]);

      const profiles = profRes.data || [];
      const allSubs = subsRes.data || [];

      const userSubCounts = new Map<string, { total: number; easy: number; medium: number; hard: number; ids: Set<string> }>();
      allSubs.forEach((sub: any) => {
        if (!sub.user_id || sub.status !== 'accepted') return;
        if (!userSubCounts.has(sub.user_id)) {
          userSubCounts.set(sub.user_id, { total: 0, easy: 0, medium: 0, hard: 0, ids: new Set() });
        }
        const info = userSubCounts.get(sub.user_id)!;
        const canonical = resolveCanonicalProblemId(sub.problem_id);
        if (canonical && !info.ids.has(canonical)) {
          info.ids.add(canonical);
          const prob = ALL_PROBLEMS.find((p) => p.id === canonical);
          const diff = prob?.difficulty || 'Easy';
          if (diff === 'Easy') info.easy++;
          else if (diff === 'Medium') info.medium++;
          else if (diff === 'Hard') info.hard++;
          info.total++;
        }
      });

      return profiles.map((p: any) => {
        const subInfo = userSubCounts.get(p.id);
        const easy = subInfo?.easy || 0;
        const medium = subInfo?.medium || 0;
        const hard = subInfo?.hard || 0;
        const total = subInfo?.total || 0;
        const streak = total > 0 ? (p.current_streak || 1) : 0;
        const xp = total > 0 ? (easy * 10) + (medium * 25) + (hard * 50) + (streak * 15) : 0;

        return {
          id: p.id,
          email: p.email,
          display_name: p.display_name,
          avatar_url: p.avatar_url || 'coder',
          total_solved: total,
          easy_solved: easy,
          medium_solved: medium,
          hard_solved: hard,
          current_streak: streak,
          last_active_date: p.last_active_date,
          total_xp: xp,
          created_at: p.created_at,
          updated_at: p.updated_at,
        };
      });
    } catch (e) {
      console.warn('Admin getAllUsers error:', e);
      return [];
    }
  },

  async updateUserStats(
    userId: string,
    updates: {
      total_solved?: number;
      easy_solved?: number;
      medium_solved?: number;
      hard_solved?: number;
      current_streak?: number;
      display_name?: string;
    }
  ): Promise<boolean> {
    try {
      const { error: profErr } = await db.from('profiles').update({
        ...updates,
        updated_at: new Date().toISOString()
      }).eq('id', userId);

      await db.from('user_stats').update({
        ...updates,
        updated_at: new Date().toISOString()
      }).eq('user_id', userId);

      // Broadcast update event to all connected devices
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('codetutor_status_synced', { detail: { userId } }));
        if ('BroadcastChannel' in window) {
          const bc = new BroadcastChannel('codetutor_live_channel');
          bc.postMessage({ type: 'STATUS_SYNC', userId });
          bc.close();
        }
      }

      return !profErr;
    } catch {
      return false;
    }
  },

  async resetUserToZero(userId: string): Promise<boolean> {
    try {
      await db.from('code_submissions').delete().eq('user_id', userId);
      await db.from('profiles').update({
        total_solved: 0,
        easy_solved: 0,
        medium_solved: 0,
        hard_solved: 0,
        current_streak: 0,
        last_active_date: null,
        updated_at: new Date().toISOString()
      }).eq('id', userId);

      await db.from('user_stats').update({
        total_solved: 0,
        easy_solved: 0,
        medium_solved: 0,
        hard_solved: 0,
        current_streak: 0,
        last_active_date: null,
        updated_at: new Date().toISOString()
      }).eq('user_id', userId);

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('codetutor_status_synced', { detail: { userId } }));
        if ('BroadcastChannel' in window) {
          const bc = new BroadcastChannel('codetutor_live_channel');
          bc.postMessage({ type: 'STATUS_SYNC', userId });
          bc.close();
        }
      }

      return true;
    } catch {
      return false;
    }
  },

  async resetAllUsersToZero(): Promise<{ success: boolean; message: string }> {
    return await resetAllRegisteredUsersData();
  },

  async getAllSubmissions(limit = 100): Promise<any[]> {
    try {
      const { data, error } = await db
        .from('code_submissions')
        .select(`
          id,
          problem_id,
          user_id,
          language,
          code,
          status,
          test_cases_passed,
          total_test_cases,
          execution_time_ms,
          created_at
        `)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error || !data) return [];
      return data;
    } catch {
      return [];
    }
  },

  async getUserSubmissions(userId: string): Promise<any[]> {
    try {
      const { data, error } = await db
        .from('code_submissions')
        .select(`
          id,
          problem_id,
          user_id,
          language,
          code,
          status,
          test_cases_passed,
          total_test_cases,
          execution_time_ms,
          created_at
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error || !data) return [];

      return data.map((sub: any) => {
        const canonical = resolveCanonicalProblemId(sub.problem_id);
        const prob = ALL_PROBLEMS.find((p) => p.id === canonical);
        return {
          ...sub,
          canonical_id: canonical || sub.problem_id,
          problem_title: prob?.title || sub.problem_id,
          problem_book: prob?.book || prob?.category || 'General',
          problem_difficulty: prob?.difficulty || 'Easy',
          order_index: prob?.order_index || 0,
        };
      });
    } catch {
      return [];
    }
  },

  async deleteSubmission(submissionId: string): Promise<boolean> {
    try {
      const { error } = await db.from('code_submissions').delete().eq('id', submissionId);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('codetutor_status_synced'));
      }
      return !error;
    } catch {
      return false;
    }
  },

  broadcastAnnouncement(title: string, message: string, type: 'info' | 'success' | 'warning' | 'alert' = 'info') {
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        const bc = new BroadcastChannel('codetutor_live_channel');
        bc.postMessage({
          type: 'ADMIN_ANNOUNCEMENT',
          payload: { title, message, type, timestamp: Date.now() }
        });
        bc.close();
      }

      // Also trigger via Realtime channel
      const channel = supabase.channel('admin_broadcast_feed');
      channel.send({
        type: 'broadcast',
        event: 'announcement',
        payload: { title, message, type, timestamp: Date.now() }
      });
    } catch (e) {
      console.warn('Broadcast note:', e);
    }
  },

  subscribeToAdminFeed(onUpdate: () => void): RealtimeChannel {
    return supabase
      .channel('admin_live_feed')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => onUpdate())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'code_submissions' }, () => onUpdate())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'user_stats' }, () => onUpdate())
      .subscribe();
  },

  subscribeToBroadcasts(onAnnouncement: (announcement: { title: string; message: string; type: 'info' | 'success' | 'warning' | 'alert'; timestamp: number }) => void): () => void {
    let bc: BroadcastChannel | null = null;
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      bc = new BroadcastChannel('codetutor_live_channel');
      bc.onmessage = (e) => {
        if (e.data?.type === 'ADMIN_ANNOUNCEMENT' && e.data.payload) {
          onAnnouncement(e.data.payload);
        }
      };
    }

    const channel = supabase
      .channel('admin_broadcast_feed')
      .on('broadcast', { event: 'announcement' }, (payload: any) => {
        if (payload?.payload) {
          onAnnouncement(payload.payload);
        }
      })
      .subscribe();

    return () => {
      if (bc) bc.close();
      channel.unsubscribe();
    };
  }
};




