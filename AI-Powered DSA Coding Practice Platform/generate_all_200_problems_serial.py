import json

# Import problem definitions
from generate_100_problems import raw_problems_data as pattern_problems
from generate_all_200_problems import loop_problems

all_problems = []
sql_inserts = []

# Process Book 1: Pattern Printing Mastery (#1 to #100)
for idx, p in enumerate(pattern_problems, 1):
    num_str = f"{p['num']:03d}"
    serial_str = f"{idx:03d}"
    uuid_str = f"00000000-0000-4000-8000-{idx:012d}"
    slug = f"problem-{serial_str}-pattern-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    
    first_input = p['input'].split()[0] if p['input'] else '5'
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Problem #{idx}: {p['title']}\nint main() {{\n    int n = {first_input};\n    // Write your code here to print pattern\n    return 0;\n}}\n",
        "python": f"# Problem #{idx}: {p['title']}\ndef solve(n: int):\n    # Write your code here\n    pass\n\nsolve({first_input})\n",
        "javascript": f"// Problem #{idx}: {p['title']}\nfunction solve(n) {{\n    // Write your code here\n}}\n\nsolve({first_input});\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        int n = {first_input};\n        // Write your code here\n    }}\n}}\n"
    }

    sample_test_cases = [{"input": p["input"], "output": p["output"], "explanation": f"Pattern for N = {p['input']}"}]

    prob_obj = {
        "id": uuid_str,
        "title": f"#{idx} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": p["difficulty"],
        "category": f"Patterns: {p['category']}",
        "tags": p["tags"] + ["Pattern Printing"],
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": sample_test_cases,
        "starter_templates": starter_templates,
        "created_at": f"2026-01-01T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    }
    all_problems.append(prob_obj)

# Process Book 2: Loop Mastery (#101 to #200)
for idx, p in enumerate(loop_problems, 101):
    loop_num = p['num']
    serial_str = f"{idx:03d}"
    uuid_str = f"00000000-0000-4000-8000-{idx:012d}"
    slug = f"problem-{serial_str}-loop-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"

    first_input = p['input'].split()[0] if p['input'] else '5'
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Problem #{idx}: {p['title']}\nint main() {{\n    // Write your loop code here\n    return 0;\n}}\n",
        "python": f"# Problem #{idx}: {p['title']}\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n",
        "javascript": f"// Problem #{idx}: {p['title']}\nfunction solve() {{\n    // Write your loop code here\n}}\n\nsolve();\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your loop code here\n    }}\n}}\n"
    }

    sample_test_cases = [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}]

    diff = "Medium" if p["difficulty"] == "Moderate" else p["difficulty"]

    prob_obj = {
        "id": uuid_str,
        "title": f"#{idx} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": diff,
        "category": f"Loops: {p['category']}",
        "tags": p["tags"] + ["Loop Mastery"],
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": sample_test_cases,
        "starter_templates": starter_templates,
        "created_at": f"2026-01-01T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    }
    all_problems.append(prob_obj)

# Sort strictly by serial number (1 to 200)
all_problems.sort(key=lambda x: int(x['title'].split()[0][1:]))

# Generate SQL rows
for p in all_problems:
    tags_sql = "array[" + ", ".join([f"'{t}'" for t in p['tags']]) + "]::text[]"
    desc_sql = p['description'].replace("'", "''")
    title_sql = p['title'].replace("'", "''")
    cases_json = json.dumps(p['sample_test_cases']).replace("'", "''")
    templates_json = json.dumps(p['starter_templates']).replace("'", "''")

    sql_row = f"""(
  '{p['id']}',
  '{title_sql}',
  '{p['slug']}',
  '{desc_sql}',
  '{p['difficulty']}',
  '{p['category']}',
  {tags_sql},
  'built_in',
  '{cases_json}'::jsonb,
  '{templates_json}'::jsonb
)"""
    sql_inserts.append(sql_row)

# Write TypeScript file
with open('src/lib/allProblems.ts', 'w') as f:
    f.write("import { Problem } from '../types/problem';\n\n")
    f.write(f"export const ALL_PROBLEMS: Problem[] = {json.dumps(all_problems, indent=2)};\n")

# Write complete SQL insert file
with open('supabase/insert_all_problems.sql', 'w') as f:
    f.write("-- ==============================================================================\n")
    f.write("-- 200 COMPLETE PRACTICE PROBLEMS IN PERFECT SERIAL ORDER (#1 TO #200)\n")
    f.write("-- ==============================================================================\n\n")
    f.write("insert into public.problems (id, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)\nvalues\n")
    f.write(",\n".join(sql_inserts))
    f.write("\non conflict (id) do update set\n")
    f.write("  title = excluded.title,\n  description = excluded.description,\n  difficulty = excluded.difficulty,\n  category = excluded.category,\n  tags = excluded.tags,\n  sample_test_cases = excluded.sample_test_cases,\n  starter_templates = excluded.starter_templates;\n")

print(f"Generated {len(all_problems)} serial problems (#1 to #200)")
