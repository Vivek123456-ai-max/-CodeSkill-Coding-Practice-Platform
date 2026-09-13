export interface TestCase {
  input: string;
  output: string;
  explanation?: string;
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type SupportedLanguage = 'python' | 'javascript' | 'cpp' | 'java';
export type ProblemBook = 
  | 'patterns' 
  | 'loops' 
  | 'variables' 
  | 'datatypes' 
  | 'userinput' 
  | 'operators' 
  | 'strings' 
  | 'math'
  | 'booleans'
  | 'ifelse'
  | 'switch'
  | 'whileloop'
  | 'forloop'
  | 'breakcontinue'
  | 'arrays'
  | 'structures'
  | 'enums'
  | 'references'
  | 'pointers'
  | 'memorymgmt'
  | 'functions'
  | 'funcparams'
  | 'funcoverloading'
  | 'scope'
  | 'recursion'
  | 'lambda'
  | 'cppoop'
  | 'classesobjects'
  | 'classmethods'
  | 'constructors'
  | 'accessspecifiers'
  | 'encapsulation'
  | 'friendfunctions'
  | 'inheritance'
  | 'polymorphism'
  | 'templates'
  | 'files'
  | 'cppdate'
  | 'cpperrors'
  | 'cppdebugging'
  | 'cppexceptions'
  | 'inputvalidation'
  | 'datastructuresstl'
  | 'vectors'
  | 'cpplist'
  | 'stacks'
  | 'queues'
  | 'cppdeque'
  | 'sets'
  | 'maps'
  | 'iterators'
  | 'algorithms';

export interface Problem {
  id: string;
  book?: ProblemBook;
  order_index?: number;
  user_id?: string | null;
  title: string;
  slug: string;
  description: string;
  difficulty: Difficulty;
  category: string;
  tags: string[];
  source: 'manual' | 'pdf_upload' | 'built_in' | 'ai_generated';
  pdf_file_url?: string | null;
  sample_test_cases: TestCase[];
  starter_templates: Record<SupportedLanguage, string>;
  status: 'not_started' | 'in_progress' | 'solved';
  created_at?: string;
  updated_at?: string;
}

export interface CodeSubmission {
  id: string;
  problem_id: string;
  user_id?: string | null;
  language: SupportedLanguage;
  code: string;
  status: 'accepted' | 'wrong_answer' | 'runtime_error' | 'compilation_error' | 'time_limit_exceeded' | 'manual_save' | 'autosave';
  test_cases_passed: number;
  total_test_cases: number;
  execution_time_ms: number;
  is_autosave: boolean;
  is_revision?: boolean;
  notes?: string | null;
  created_at: string;
}
