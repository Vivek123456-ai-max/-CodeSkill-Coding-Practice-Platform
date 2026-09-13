import json, re

# Load existing 500 problems
from generate_100_problems import raw_problems_data as pattern_problems
from generate_all_200_problems import loop_problems
from generate_all_400_problems import variables_problems, datatypes_problems
from generate_all_500_problems import userinput_problems

all_problems = []

TOPIC_KEY_MAP = {
    "C++ Operators": ("operators", "Operators"),
    "C++ Strings": ("strings", "Strings"),
    "C++ Math": ("math", "Math"),
    "C++ Booleans": ("booleans", "Booleans"),
    "C++ If...Else": ("ifelse", "If...Else"),
    "C++ Switch": ("switch", "Switch"),
    "C++ While Loop": ("whileloop", "While Loop"),
    "C++ For Loop": ("forloop", "For Loop"),
    "C++ Break/Continue": ("breakcontinue", "Break/Continue"),
    "C++ Arrays": ("arrays", "Arrays"),
    "C++ Structures": ("structures", "Structures"),
    "C++ Enums": ("enums", "Enums"),
    "C++ References": ("references", "References"),
    "C++ Pointers": ("pointers", "Pointers"),
    "C++ Memory Mgmt": ("memory", "Memory Mgmt"),
}

with open('cpp_coding_practice_platform_1500.json') as f:
    json_data = json.load(f)

global_idx = 1

# First add 1500 problems from JSON
for topic_idx, t in enumerate(json_data['topics']):
    q_list = t.get('questions', [])
    first_topic_name = q_list[0].get('topic', f'Topic {topic_idx+1}') if q_list else f'Topic {topic_idx+1}'
    book_key, display_topic = TOPIC_KEY_MAP.get(first_topic_name, (f"topic_{topic_idx+1}", first_topic_name))

    for local_idx, q in enumerate(q_list, 1):
        num_str = f"{local_idx:03d}"
        uuid_str = f"00000000-0000-4000-8000-{global_idx:012d}"
        global_idx += 1

        diff_raw = q.get('difficulty', 'Easy')
        diff = 'Easy' if diff_raw in ['Basic', 'Easy'] else 'Medium' if diff_raw == 'Medium' else 'Hard'

        # Format clean description
        desc_parts = [
            f"### Problem Statement\n{q.get('problemStatement', '')}",
            f"### Input Format\n{q.get('inputFormat', 'Read input from standard input.')}",
            f"### Output Format\n{q.get('outputFormat', 'Print required result to standard output.')}"
        ]
        constraints = q.get('constraints', [])
        if constraints and isinstance(constraints, list):
            desc_parts.append("### Constraints\n" + "\n".join(f"- {c}" for c in constraints))

        description = "\n\n".join(desc_parts)

        # Build test cases
        test_cases = []
        raw_testcases = q.get('testCases', [])
        if raw_testcases and isinstance(raw_testcases, list):
            for tc in raw_testcases:
                if isinstance(tc, dict):
                    inp = str(tc.get('input', ''))
                    outp = str(tc.get('output', ''))
                    test_cases.append({"input": inp, "output": outp, "explanation": tc.get('explanation', '')})
                elif isinstance(tc, str):
                    test_cases.append({"input": tc, "output": tc, "explanation": "Test case"})
        
        if not test_cases:
            raw_examples = q.get('examples', [])
            if raw_examples and isinstance(raw_examples, list):
                for ex in raw_examples:
                    if isinstance(ex, dict):
                        inp = str(ex.get('input', ''))
                        outp = str(ex.get('output', ''))
                        if not inp.startswith('<') and not outp.startswith('<'):
                            test_cases.append({"input": inp, "output": outp, "explanation": ex.get('explanation', '')})

        if not test_cases:
            test_cases = [{"input": "5", "output": "5", "explanation": "Sample testcase"}]

        starter_cpp = q.get('starterCode') or f"#include <iostream>\nusing namespace std;\n\nint main() {{\n    // Solution for: #{num_str} {q.get('title')}\n    return 0;\n}}\n"
        starter_templates = {
            "cpp": starter_cpp,
            "python": f"# Solution for: #{num_str} {q.get('title')}\ndef solve():\n    pass\n\nsolve()\n",
            "javascript": f"// Solution for: #{num_str} {q.get('title')}\nfunction solve() {{\n}}\n\nsolve();\n",
            "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n    }}\n}}\n"
        }

        all_problems.append({
            "id": uuid_str,
            "book": book_key,
            "order_index": local_idx,
            "title": f"#{num_str} {q.get('title')}",
            "slug": q.get('slug', f"{book_key}-{num_str}"),
            "description": description,
            "difficulty": diff,
            "category": q.get('topic', display_topic),
            "tags": q.get('tags', []) + [display_topic],
            "source": "built_in",
            "status": "not_started",
            "sample_test_cases": test_cases,
            "starter_templates": starter_templates,
            "created_at": f"2026-01-01T{global_idx//3600:02d}:{(global_idx%3600)//60:02d}:{global_idx%60:02d}Z"
        })

print(f"Loaded {len(all_problems)} questions from 1500 JSON dataset!")

# Also add the 5 foundational workbooks
foundational = [
    ("patterns", "Pattern Printing Mastery", pattern_problems),
    ("loops", "Loop Mastery", loop_problems),
    ("variables", "Variables Mastery", variables_problems),
    ("datatypes", "Data Types Mastery", datatypes_problems),
    ("userinput", "User Input Mastery", userinput_problems)
]

for book_key, category_name, probs in foundational:
    for idx, p in enumerate(probs, 1):
        num_str = f"{idx:03d}"
        uuid_str = f"00000000-0000-4000-8000-{global_idx:012d}"
        global_idx += 1

        title_clean = p['title']
        if title_clean.startswith('#'):
            title_clean = title_clean[4:].strip()

        diff = "Medium" if p.get("difficulty") == "Moderate" else p.get("difficulty", "Easy")
        first_input = p.get('input', '5').split('\n')[0].split()[0] if p.get('input') else '5'

        all_problems.append({
            "id": uuid_str,
            "book": book_key,
            "order_index": idx,
            "title": f"#{num_str} {title_clean}",
            "slug": f"{book_key}-{num_str}",
            "description": p.get("desc", ""),
            "difficulty": diff,
            "category": p.get("category", category_name),
            "tags": p.get("tags", []) + [category_name],
            "source": "built_in",
            "status": "not_started",
            "sample_test_cases": [{"input": p.get("input", "5"), "output": p.get("output", "5"), "explanation": f"Sample for {title_clean}"}],
            "starter_templates": {
                "cpp": f"#include <iostream>\nusing namespace std;\n\nint main() {{\n    // #{num_str} {title_clean}\n    return 0;\n}}\n",
                "python": f"# #{num_str} {title_clean}\ndef solve():\n    pass\n\nsolve()\n",
                "javascript": f"// #{num_str} {title_clean}\nfunction solve() {{\n}}\n\nsolve();\n",
                "java": f"public class Solution {{\n    public static void main(String[] args) {{\n    }}\n}}\n"
            },
            "created_at": f"2026-01-01T{global_idx//3600:02d}:{(global_idx%3600)//60:02d}:{global_idx%60:02d}Z"
        })

print(f"Total problems combined: {len(all_problems)}")

# Write to allProblems.ts
with open('src/lib/allProblems.ts', 'w') as f:
    f.write("import { Problem } from '../types/problem';\n\n")
    f.write(f"export const ALL_PROBLEMS: Problem[] = {json.dumps(all_problems, indent=2)};\n")

print("Generated src/lib/allProblems.ts with all 2,000 questions!")
