with open('supabase/schema.sql', 'r') as f:
    schema = f.read()

# Add column order_index if not exists
if 'order_index' not in schema:
    schema = schema.replace(
        'create table if not exists public.problems (',
        'create table if not exists public.problems (\n  order_index integer,'
    )

# Remove old seeds
cut_idx = schema.find('-- ==============================================================================\n-- 200 COMPLETE PRACTICE PROBLEMS')
if cut_idx != -1:
    schema = schema[:cut_idx]

with open('supabase/insert_all_problems.sql', 'r') as f:
    inserts = f.read()

new_schema = schema.strip() + "\n\n" + inserts

with open('supabase/schema.sql', 'w') as f:
    f.write(new_schema)

print("Updated supabase/schema.sql with order_index and 200 problems")
