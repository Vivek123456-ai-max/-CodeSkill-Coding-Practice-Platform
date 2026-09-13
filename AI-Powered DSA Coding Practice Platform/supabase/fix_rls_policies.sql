-- ==============================================================================
-- FIX ROW-LEVEL SECURITY (RLS) & ENABLE REALTIME IN SUPABASE
-- Run this in Supabase Dashboard -> SQL Editor
-- ==============================================================================

-- 1. Ensure user_id allows NULL for guest / public sessions
alter table public.problems alter column user_id drop not null;
alter table public.code_submissions alter column user_id drop not null;
alter table public.ai_solutions alter column user_id drop not null;

-- 2. Enable Row Level Security
alter table public.problems enable row level security;
alter table public.code_submissions enable row level security;
alter table public.profiles enable row level security;
alter table public.ai_solutions enable row level security;

-- 3. Drop all old restrictive policies
drop policy if exists "Anyone can read platform and public problems" on public.problems;
drop policy if exists "Authenticated users can create custom problems" on public.problems;
drop policy if exists "Users can update their own problems" on public.problems;
drop policy if exists "Users can delete their own problems" on public.problems;
drop policy if exists "Public full access problems" on public.problems;

drop policy if exists "Users can view their own submissions" on public.code_submissions;
drop policy if exists "Users can insert their own submissions" on public.code_submissions;
drop policy if exists "Users can update their submissions" on public.code_submissions;
drop policy if exists "Users can delete their submissions" on public.code_submissions;
drop policy if exists "Public full access submissions" on public.code_submissions;

drop policy if exists "Users can view all public profiles" on public.profiles;
drop policy if exists "Users can insert their own profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Public full access profiles" on public.profiles;

drop policy if exists "Users can view AI solutions" on public.ai_solutions;
drop policy if exists "Users can generate and store AI solutions" on public.ai_solutions;
drop policy if exists "Public full access ai_solutions" on public.ai_solutions;

-- 4. Create Permissive Policies (Read, Insert, Update, Delete for Website & App)
create policy "Public full access problems" on public.problems
  for all using (true) with check (true);

create policy "Public full access submissions" on public.code_submissions
  for all using (true) with check (true);

create policy "Public full access profiles" on public.profiles
  for all using (true) with check (true);

create policy "Public full access ai_solutions" on public.ai_solutions
  for all using (true) with check (true);

-- 5. Enable Realtime Publications
do $$
begin
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'problems') then
    alter publication supabase_realtime add table public.problems;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'code_submissions') then
    alter publication supabase_realtime add table public.code_submissions;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'profiles') then
    alter publication supabase_realtime add table public.profiles;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'ai_solutions') then
    alter publication supabase_realtime add table public.ai_solutions;
  end if;
end $$;
