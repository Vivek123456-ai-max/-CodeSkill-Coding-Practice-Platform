with open('supabase/schema.sql', 'r') as f:
    schema = f.read()

# Remove old seeds if any
cut_idx = schema.find('-- ==============================================================================\n-- 12. SEED ALL 100 PATTERN PRINTING PRACTICE PROBLEMS')
if cut_idx != -1:
    schema = schema[:cut_idx]

cut_idx2 = schema.find('-- ==============================================================================\n-- 100 PATTERN PRINTING PROBLEMS')
if cut_idx2 != -1:
    schema = schema[:cut_idx2]

with open('supabase/insert_all_problems.sql', 'r') as f:
    inserts = f.read()

new_schema = schema.strip() + "\n\n" + inserts

with open('supabase/schema.sql', 'w') as f:
    f.write(new_schema)

print("Updated supabase/schema.sql with 200 problems")
