import json

with open('src/lib/allProblems.ts') as f:
    text = f.read()
start = text.find('ALL_PROBLEMS: Problem[] = ') + len('ALL_PROBLEMS: Problem[] = ')
end = text.rfind('];') + 1
problems = json.loads(text[start:end])

sql_lines = []
sql_lines.append("-- ==============================================================================")
sql_lines.append("-- COMPLETE SUPABASE DATABASE SETUP & 500 QUESTIONS SEED SCRIPT")
sql_lines.append("-- ==============================================================================\n")

sql_lines.append("-- 1. Enable UUID Extension")
sql_lines.append("create extension if not exists \"uuid-ossp\";\n")

sql_lines.append("-- 2. Create or Update Problems Table")
sql_lines.append("""create table if not exists public.problems (
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

-- Ensure all columns exist
alter table public.problems add column if not exists book text default 'patterns';
alter table public.problems add column if not exists order_index integer default 1;
alter table public.problems add column if not exists user_id uuid default null;
alter table public.problems alter column user_id drop not null;
""")

sql_lines.append("-- 3. Create Submissions and Stats Tables")
sql_lines.append("""create table if not exists public.code_submissions (
  id uuid primary key default uuid_generate_v4(),
  problem_id uuid references public.problems(id) on delete cascade not null,
  user_id uuid default null,
  language text not null,
  code text not null,
  status text not null,
  test_cases_passed integer default 0,
  total_test_cases integer default 0,
  execution_time_ms integer default 0,
  is_autosave boolean default false,
  notes text,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

alter table public.code_submissions add column if not exists user_id uuid default null;
alter table public.code_submissions alter column user_id drop not null;

create table if not exists public.user_stats (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid default null,
  total_solved integer default 0,
  easy_solved integer default 0,
  medium_solved integer default 0,
  hard_solved integer default 0,
  current_streak integer default 0,
  last_active_date date default current_date,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);
""")

sql_lines.append("-- 4. Configure Row Level Security (RLS) & Grant Public Permissions")
sql_lines.append("""alter table public.problems enable row level security;
alter table public.code_submissions enable row level security;
alter table public.user_stats enable row level security;

drop policy if exists "public_problems_all" on public.problems;
create policy "public_problems_all" on public.problems for all using (true) with check (true);

drop policy if exists "public_submissions_all" on public.code_submissions;
create policy "public_submissions_all" on public.code_submissions for all using (true) with check (true);

drop policy if exists "public_stats_all" on public.user_stats;
create policy "public_stats_all" on public.user_stats for all using (true) with check (true);

grant all on table public.problems to anon, authenticated, service_role;
grant all on table public.code_submissions to anon, authenticated, service_role;
grant all on table public.user_stats to anon, authenticated, service_role;
""")

sql_lines.append("-- 5. Enable Realtime Publications")
sql_lines.append("""begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table public.problems;
alter publication supabase_realtime add table public.code_submissions;
alter publication supabase_realtime add table public.user_stats;
""")

sql_lines.append("-- 6. Insert All 500 Problems")
sql_lines.append("insert into public.problems (id, book, order_index, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)\nvalues")

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

sql_lines.append(",\n".join(row_inserts))
sql_lines.append("""
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
""")

with open('supabase/full_database_setup_500.sql', 'w') as f:
    f.write("\n".join(sql_lines))

with open('supabase/schema.sql', 'w') as f:
    f.write("\n".join(sql_lines))

print("Generated supabase/full_database_setup_500.sql and updated supabase/schema.sql successfully!")
