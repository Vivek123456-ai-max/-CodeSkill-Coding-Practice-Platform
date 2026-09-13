export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          display_name: string | null
          avatar_url: string | null
          total_solved: number
          easy_solved: number
          medium_solved: number
          hard_solved: number
          current_streak: number
          last_active_date: string | null
          preferred_language: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          display_name?: string | null
          avatar_url?: string | null
          total_solved?: number
          easy_solved?: number
          medium_solved?: number
          hard_solved?: number
          current_streak?: number
          last_active_date?: string | null
          preferred_language?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          display_name?: string | null
          avatar_url?: string | null
          total_solved?: number
          easy_solved?: number
          medium_solved?: number
          hard_solved?: number
          current_streak?: number
          last_active_date?: string | null
          preferred_language?: string
          created_at?: string
          updated_at?: string
        }
      }
      problems: {
        Row: {
          id: string
          user_id: string | null
          title: string
          slug: string
          description: string
          difficulty: 'Easy' | 'Medium' | 'Hard'
          category: string
          tags: string[]
          source: 'manual' | 'pdf_upload' | 'built_in' | 'ai_generated'
          pdf_file_url: string | null
          sample_test_cases: TestCase[]
          starter_templates: Record<string, string>
          status: 'not_started' | 'in_progress' | 'solved'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          title: string
          slug: string
          description: string
          difficulty: 'Easy' | 'Medium' | 'Hard'
          category?: string
          tags?: string[]
          source?: 'manual' | 'pdf_upload' | 'built_in' | 'ai_generated'
          pdf_file_url?: string | null
          sample_test_cases?: TestCase[]
          starter_templates?: Record<string, string>
          status?: 'not_started' | 'in_progress' | 'solved'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          title?: string
          slug?: string
          description?: string
          difficulty?: 'Easy' | 'Medium' | 'Hard'
          category?: string
          tags?: string[]
          source?: 'manual' | 'pdf_upload' | 'built_in' | 'ai_generated'
          pdf_file_url?: string | null
          sample_test_cases?: TestCase[]
          starter_templates?: Record<string, string>
          status?: 'not_started' | 'in_progress' | 'solved'
          created_at?: string
          updated_at?: string
        }
      }
      code_submissions: {
        Row: {
          id: string
          problem_id: string
          user_id: string
          language: 'python' | 'javascript' | 'cpp' | 'java'
          code: string
          status: 'accepted' | 'wrong_answer' | 'runtime_error' | 'time_limit_exceeded' | 'autosave'
          test_cases_passed: number
          total_test_cases: number
          execution_time_ms: number
          is_autosave: boolean
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          problem_id: string
          user_id: string
          language: 'python' | 'javascript' | 'cpp' | 'java'
          code: string
          status?: 'accepted' | 'wrong_answer' | 'runtime_error' | 'time_limit_exceeded' | 'autosave'
          test_cases_passed?: number
          total_test_cases?: number
          execution_time_ms?: number
          is_autosave?: boolean
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          problem_id?: string
          user_id?: string
          language?: 'python' | 'javascript' | 'cpp' | 'java'
          code?: string
          status?: 'accepted' | 'wrong_answer' | 'runtime_error' | 'time_limit_exceeded' | 'autosave'
          test_cases_passed?: number
          total_test_cases?: number
          execution_time_ms?: number
          is_autosave?: boolean
          notes?: string | null
          created_at?: string
        }
      }
      ai_solutions: {
        Row: {
          id: string
          problem_id: string
          user_id: string | null
          language: string
          problem_summary: string | null
          brute_force_approach: string | null
          optimal_approach: string | null
          step_by_step: AIStep[]
          final_code: string
          time_complexity: string
          space_complexity: string
          related_patterns: string[]
          similar_problems: string[]
          created_at: string
        }
        Insert: {
          id?: string
          problem_id: string
          user_id?: string | null
          language?: string
          problem_summary?: string | null
          brute_force_approach?: string | null
          optimal_approach?: string | null
          step_by_step: AIStep[]
          final_code: string
          time_complexity: string
          space_complexity: string
          related_patterns?: string[]
          similar_problems?: string[]
          created_at?: string
        }
        Update: {
          id?: string
          problem_id?: string
          user_id?: string | null
          language?: string
          problem_summary?: string | null
          brute_force_approach?: string | null
          optimal_approach?: string | null
          step_by_step?: AIStep[]
          final_code?: string
          time_complexity?: string
          space_complexity?: string
          related_patterns?: string[]
          similar_problems?: string[]
          created_at?: string
        }
      }
    }
  }
}

export interface TestCase {
  input: string
  output: string
  explanation?: string
}

export interface AIStep {
  step: number
  title: string
  explanation: string
  code_snippet: string
}
