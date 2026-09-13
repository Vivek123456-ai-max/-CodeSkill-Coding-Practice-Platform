import json

with open('src/lib/allProblems.ts') as f:
    text = f.read()
start = text.find('ALL_PROBLEMS: Problem[] = ') + len('ALL_PROBLEMS: Problem[] = ')
end = text.rfind('];') + 1
problems = json.loads(text[start:end])

sql = """-- ==============================================================================
-- 🚀 1-CLICK FIX FOR RLS PERMISSION & SYNC ALL 500 PROBLEMS TO SUPABASE
-- ==============================================================================

-- Step 1: Ensure required extensions and columns exist
create extension if not exists "uuid-ossp";

create table if not exists public.problems (
  id uuid primary key default uuid_generate_v4(),
  book text default 'patterns',
  order_index integer default 1,
  user_id uuid default null,
  title text not null,
  slug text not null,
  description text not null,
  difficulty text not null check (difficulty in ('Easy', 'Medium', 'Hard')),
  category text not null,
  tags text[] default array[]::text[],
  source text default 'built_in',
  pdf_file_url text,
  sample_test_cases jsonb not null default '[]'::jsonb,
  starter_templates jsonb not null default '{}'::jsonb,
  status text default 'not_started',
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

alter table public.problems add column if not exists book text default 'patterns';
alter table public.problems add column if not exists order_index integer default 1;
alter table public.problems add column if not exists user_id uuid default null;
alter table public.problems alter column user_id drop not null;

-- Step 2: FIX ROW LEVEL SECURITY (RLS) POLICIES TO ALLOW ALL INSERTS / UPDATES / SELECTS
alter table public.problems enable row level security;

drop policy if exists "allow_all_problems" on public.problems;
drop policy if exists "public_problems_all" on public.problems;
drop policy if exists "Problems are viewable by everyone" on public.problems;
drop policy if exists "Users can insert problems" on public.problems;
drop policy if exists "Users can update problems" on public.problems;
drop policy if exists "Users can delete problems" on public.problems;

create policy "allow_all_problems" on public.problems
  for all
  using (true)
  with check (true);

grant all on table public.problems to anon, authenticated, service_role;

-- Step 3: Insert / Upsert All 500 Problems
insert into public.problems (id, book, order_index, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)
values
"""

row_inserts = []
for p in problems:
    tags_sql = "array[" + ", ".join([f"'{t}'" for t in p['tags']]) + "]::text[]"
    desc_sql = p['description'].replace("'", "''")
    title_sql = p['title'].replace("'", "''")
    cases_json = json.dumps(p['sample_test_cases']).replace("'", "''")
    templates_json = json.dumps(p['starter_templates']).replace("'", "''")

    row_inserts.append(f"""(
  '{p['id']}',
  '{p['book']}',
  {p['order_index']},
  '{title_sql}',
  '{p['slug']}',
  '{desc_sql}',
  '{p['difficulty']}',
  '{p['category']}',
  {tags_sql},
  'built_in',
  '{cases_json}'::jsonb,
  '{templates_json}'::jsonb
)""")

sql += ",\n".join(row_inserts)
sql += """
on conflict (id) do update set
  book = excluded.book,
  order_index = excluded.order_index,
  title = excluded.title,
  slug = excluded.slug,
  description = excluded.description,
  difficulty = excluded.difficulty,
  category = excluded.category,
  tags = excluded.tags,
  sample_test_cases = excluded.sample_test_cases,
  starter_templates = excluded.starter_templates;
"""

with open('supabase/fix_permissions_and_sync_all_500.sql', 'w') as f:
    f.write(sql)

with open('supabase/schema.sql', 'w') as f:
    f.write(sql)

print("Generated supabase/fix_permissions_and_sync_all_500.sql and updated schema.sql successfully!")
