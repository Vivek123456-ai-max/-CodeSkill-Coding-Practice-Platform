import { AIStep } from './database'
import { SupportedLanguage } from './problem'

export interface LineExplanation {
  line: number | string
  code: string
  explanation: string
}

export interface InterviewFollowUp {
  question: string
  hint: string
  approach: string
}

export interface CodeDiagnosis {
  hasBug: boolean
  severity: 'error' | 'warning' | 'info' | 'clean'
  bugSummary: string
  lineByLineFeedback: string[]
  suggestedFix: string
  hint: string
  codeSnippetFix?: string
}

export interface TraceStep {
  row: number
  col?: number | string
  condition: string
  action: string
  printed: string
  variables?: Record<string, string | number>
}

export interface AISolutionResponse {
  problem_summary: string
  intuition?: string
  visualRepresentation?: string
  formulaExplanation?: string
  brute_force_approach: string
  optimal_approach: string
  step_by_step: AIStep[]
  final_code: string
  final_code_multi_lang?: Record<SupportedLanguage, string>
  line_by_line_explanation?: LineExplanation[]
  time_complexity: string
  space_complexity: string
  related_patterns: string[]
  similar_problems: string[]
  common_pitfalls?: string[]
  edge_cases?: string[]
  interview_follow_ups?: InterviewFollowUp[]
  codeDiagnosis?: CodeDiagnosis
  traceTable?: TraceStep[]
  hints?: string[]
}

export interface AIChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: string
}
