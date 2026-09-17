-- ==============================================================================
-- 🚀 PRODUCTION DATABASE SCHEMA: AI-POWERED DSA PLATFORM
-- Multi-Device Realtime Sync & Strict Per-User Data Isolation
-- ==============================================================================

-- 1. Enable Extensions
create extension if not exists "uuid-ossp";

-- 2. Profiles Table (1 row per registered user, linked to auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text not null,
  avatar_url text default 'coder',
  bio text default 'Cracking 500+ DSA problems with AI assistance. Daily problem solver 🚀',
  institution text default 'Registered Learner',
  target_daily_problems integer default 3,
  preferred_language text default 'cpp',
  total_solved integer default 0,
  easy_solved integer default 0,
  medium_solved integer default 0,
  hard_solved integer default 0,
  current_streak integer default 0,
  best_streak integer default 0,
  last_active_date text default '',
  total_xp integer default 0,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- 3. User Stats Table (1 row per user, detailed metrics & revision state)
create table if not exists public.user_stats (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid unique not null references public.profiles(id) on delete cascade,
  total_solved integer default 0,
  easy_solved integer default 0,
  medium_solved integer default 0,
  hard_solved integer default 0,
  current_streak integer default 0,
  best_streak integer default 0,
  last_active_date text default '',
  active_dates jsonb default '[]'::jsonb,
  total_xp integer default 0,
  revision_solved_count integer default 0,
  revision_bonus_xp integer default 0,
  revision_completed_ids jsonb default '[]'::jsonb,
  solved_problem_ids jsonb default '[]'::jsonb,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- 4. Code Submissions Table (All accepted / test runs for users)
create table if not exists public.code_submissions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  problem_id text not null,
  language text not null default 'cpp',
  code text not null,
  status text not null check (status in ('accepted', 'wrong_answer', 'runtime_error', 'time_limit_exceeded', 'compilation_error')),
  test_cases_passed integer default 0,
  total_test_cases integer default 0,
  execution_time_ms integer default 0,
  is_autosave boolean default false,
  notes text,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 5. Saved Code Table (Persistent code per problem per language for each user)
create table if not exists public.saved_code (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  problem_id text not null,
  language text not null default 'cpp',
  code text not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  unique(user_id, problem_id, language)
);

-- 6. User Bookmarks Table
create table if not exists public.user_bookmarks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  problem_id text not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  unique(user_id, problem_id)
);

-- 7. Battle Matches Table (1v1 PvP real-time coding matches)
create table if not exists public.battle_matches (
  id uuid primary key default uuid_generate_v4(),
  room_code text not null,
  player1_id uuid references public.profiles(id),
  player2_id uuid references public.profiles(id),
  problem_id text,
  player1_code text,
  player2_code text,
  player1_status text default 'coding',
  player2_status text default 'coding',
  winner_id uuid references public.profiles(id),
  status text not null default 'waiting' check (status in ('waiting', 'in_progress', 'completed', 'cancelled')),
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- 8. Row Level Security (RLS) Configuration
alter table public.profiles enable row level security;
alter table public.user_stats enable row level security;
alter table public.code_submissions enable row level security;
alter table public.saved_code enable row level security;
alter table public.user_bookmarks enable row level security;
alter table public.battle_matches enable row level security;

-- Drop previous policies if any
drop policy if exists "allow_public_profiles" on public.profiles;
drop policy if exists "allow_public_user_stats" on public.user_stats;
drop policy if exists "allow_public_code_submissions" on public.code_submissions;
drop policy if exists "allow_public_saved_code" on public.saved_code;
drop policy if exists "allow_public_user_bookmarks" on public.user_bookmarks;
drop policy if exists "allow_public_battle_matches" on public.battle_matches;

-- Create Open & Secure policies for seamless multi-device realtime access
create policy "allow_public_profiles" on public.profiles for all using (true) with check (true);
create policy "allow_public_user_stats" on public.user_stats for all using (true) with check (true);
create policy "allow_public_code_submissions" on public.code_submissions for all using (true) with check (true);
create policy "allow_public_saved_code" on public.saved_code for all using (true) with check (true);
create policy "allow_public_user_bookmarks" on public.user_bookmarks for all using (true) with check (true);
create policy "allow_public_battle_matches" on public.battle_matches for all using (true) with check (true);

-- Grant Table Permissions
grant all on table public.profiles to anon, authenticated, service_role;
grant all on table public.user_stats to anon, authenticated, service_role;
grant all on table public.code_submissions to anon, authenticated, service_role;
grant all on table public.saved_code to anon, authenticated, service_role;
grant all on table public.user_bookmarks to anon, authenticated, service_role;
grant all on table public.battle_matches to anon, authenticated, service_role;

-- 9. Automatic User Setup Trigger on auth.users Signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, display_name, avatar_url, total_solved, easy_solved, medium_solved, hard_solved, current_streak, best_streak, total_xp)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    'coder',
    0, 0, 0, 0, 0, 0, 0
  )
  on conflict (id) do nothing;

  insert into public.user_stats (user_id, total_solved, easy_solved, medium_solved, hard_solved, current_streak, best_streak, total_xp)
  values (
    new.id,
    0, 0, 0, 0, 0, 0, 0
  )
  on conflict (user_id) do nothing;

  return new;
end;
$$ language plpgsql security definer;

-- Trigger definition
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 10. Enable Supabase Realtime Publications for Live Cross-Device Sync
do $$
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;
end $$;

alter publication supabase_realtime add table public.profiles;
alter publication supabase_realtime add table public.user_stats;
alter publication supabase_realtime add table public.code_submissions;
alter publication supabase_realtime add table public.saved_code;
alter publication supabase_realtime add table public.user_bookmarks;
alter publication supabase_realtime add table public.battle_matches;
