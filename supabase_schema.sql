-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES table (extending auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  bio text,
  username text unique,
  points integer default 0,
  interests text[],
  daily_goal text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. CATEGORIES table
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  icon text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. COURSES table
create table public.courses (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  image_url text,
  category_id uuid references public.categories(id) on delete set null,
  instructor_id uuid references public.profiles(id) on delete set null,
  is_published boolean default false,
  grade integer,
  importance text check (importance in ('H', 'M', 'L')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. LESSONS table
create table public.lessons (
  id uuid default uuid_generate_v4() primary key,
  course_id uuid references public.courses(id) on delete cascade not null,
  title text not null,
  content text, -- Markdown content
  order_index integer not null,
  video_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. STUDENT_PROGRESS table
create table public.student_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  lesson_id uuid references public.lessons(id) on delete cascade not null,
  is_completed boolean default false,
  completed_at timestamp with time zone,
  unique (user_id, lesson_id)
);

-- RLS POLICIES

-- Profiles: Users can view all profiles, but only edit their own
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Categories: Viewable by everyone, only admins (service role) can modify
alter table public.categories enable row level security;
create policy "Categories are viewable by everyone" on public.categories for select using (true);

-- Courses: Everyone can view published courses
alter table public.courses enable row level security;
create policy "Published courses are viewable by everyone" on public.courses for select using (is_published = true);

-- Lessons: Authenticated users can view lessons if they have access (could be more complex, but start simple)
alter table public.lessons enable row level security;
create policy "Lessons are viewable by authenticated users" on public.lessons for select using (auth.role() = 'authenticated');

-- Progress: Users can only see and update their own progress
alter table public.student_progress enable row level security;
create policy "Users can view own progress" on public.student_progress for select using (auth.uid() = user_id);
create policy "Users can update own progress" on public.student_progress for insert with check (auth.uid() = user_id);
create policy "Users can modify own progress" on public.student_progress for update using (auth.uid() = user_id);

-- TRIGGER for updating profiles updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger courses_updated_at before update on public.courses for each row execute procedure public.handle_updated_at();
create trigger lessons_updated_at before update on public.lessons for each row execute procedure public.handle_updated_at();
create trigger profiles_updated_at before update on public.profiles for each row execute procedure public.handle_updated_at();

-- TRIGGER for creating profile on auth signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
