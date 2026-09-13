-- ==============================================================================
-- 🚀 1-CLICK COMPLETE SETUP FOR PROFILES, LEADERBOARD, STREAK & REALTIME SYNC
-- Run this in Supabase Dashboard -> SQL Editor
-- ==============================================================================

-- 1. Enable UUID Extension
create extension if not exists "uuid-ossp";

-- 2. Create Profiles Table (Stores registered users, XP, streaks, stats)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  avatar_url text default 'coder',
  total_solved integer default 0,
  easy_solved integer default 0,
  medium_solved integer default 0,
  hard_solved integer default 0,
  current_streak integer default 1,
  last_active_date date default current_date,
  preferred_language text default 'cpp',
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- Ensure all columns exist in public.profiles
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists display_name text;
alter table public.profiles add column if not exists avatar_url text default 'coder';
alter table public.profiles add column if not exists total_solved integer default 0;
alter table public.profiles add column if not exists easy_solved integer default 0;
alter table public.profiles add column if not exists medium_solved integer default 0;
alter table public.profiles add column if not exists hard_solved integer default 0;
alter table public.profiles add column if not exists current_streak integer default 1;
alter table public.profiles add column if not exists last_active_date date default current_date;
alter table public.profiles add column if not exists preferred_language text default 'cpp';
alter table public.profiles add column if not exists created_at timestamptz default timezone('utc'::text, now());
alter table public.profiles add column if not exists updated_at timestamptz default timezone('utc'::text, now());

-- 3. Create user_stats table if not exists
create table if not exists public.user_stats (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid default null,
  total_solved integer default 0,
  easy_solved integer default 0,
  medium_solved integer default 0,
  hard_solved integer default 0,
  current_streak integer default 1,
  last_active_date date default current_date,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- 4. Automatic Trigger on Auth Sign Up (Creates profile row automatically when user registers!)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (
    id,
    email,
    display_name,
    avatar_url,
    total_solved,
    easy_solved,
    medium_solved,
    hard_solved,
    current_streak,
    last_active_date,
    preferred_language
  ) values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'avatar_url', 'coder'),
    0,
    0,
    0,
    0,
    1,
    current_date,
    'cpp'
  ) on conflict (id) do update set
    email = excluded.email,
    updated_at = now();
  return new;
end;
$$ language plpgsql security definer;

-- Drop trigger if already exists and recreate
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Backfill existing auth.users into public.profiles if any exist
insert into public.profiles (id, email, display_name, avatar_url, total_solved, easy_solved, medium_solved, hard_solved, current_streak, last_active_date)
select 
  id,
  email,
  split_part(email, '@', 1),
  'coder',
  0, 0, 0, 0, 1, current_date
from auth.users
on conflict (id) do nothing;

-- 5. Set Permissive Row Level Security (RLS) Policies
alter table public.profiles enable row level security;
alter table public.user_stats enable row level security;
alter table public.problems enable row level security;
alter table public.code_submissions enable row level security;

drop policy if exists "allow_all_profiles" on public.profiles;
drop policy if exists "Public full access profiles" on public.profiles;
create policy "allow_all_profiles" on public.profiles for all using (true) with check (true);

drop policy if exists "allow_all_user_stats" on public.user_stats;
drop policy if exists "public_stats_all" on public.user_stats;
create policy "allow_all_user_stats" on public.user_stats for all using (true) with check (true);

drop policy if exists "allow_all_problems" on public.problems;
drop policy if exists "Public full access problems" on public.problems;
create policy "allow_all_problems" on public.problems for all using (true) with check (true);

drop policy if exists "allow_all_submissions" on public.code_submissions;
drop policy if exists "Public full access submissions" on public.code_submissions;
create policy "allow_all_submissions" on public.code_submissions for all using (true) with check (true);

grant all on table public.profiles to anon, authenticated, service_role;
grant all on table public.user_stats to anon, authenticated, service_role;
grant all on table public.problems to anon, authenticated, service_role;
grant all on table public.code_submissions to anon, authenticated, service_role;

-- 6. Enable Realtime Publications for Live Sync
do $$
begin
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'profiles') then
    alter publication supabase_realtime add table public.profiles;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'user_stats') then
    alter publication supabase_realtime add table public.user_stats;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'problems') then
    alter publication supabase_realtime add table public.problems;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'code_submissions') then
    alter publication supabase_realtime add table public.code_submissions;
  end if;
end $$;
