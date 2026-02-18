-- Create Feedback Table
create table if not exists public.feedback (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  booking_id uuid, -- Optional link to a booking
  rating integer check (rating >= 1 and rating <= 5) not null,
  title text not null,
  message text not null,
  photo_url text, -- URL from Supabase Storage
  is_hidden boolean default false,
  edited_by_admin boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.feedback enable row level security;

-- RLS Policies

-- Public Read (Only non-hidden feedback)
create policy "Public can view non-hidden feedback"
on public.feedback for select
using (is_hidden = false);

-- Auth Insert (Authenticated users can create feedback)
create policy "Authenticated users can create feedback"
on public.feedback for insert
with check (auth.uid() = user_id);

-- Owner Update (Users can edit their own feedback implementation detail - usually not allowed in this spec but good for completeness, or restricted to Admin)
-- Spec says: Update/delete feedback: owner OR admin. 
create policy "Users can update own feedback"
on public.feedback for update
using (auth.uid() = user_id);

-- Admin Update (Admins can hide/edit any feedback)
-- Assumes admin is identified by a claim or specific email/ID as per previous phases or simplified for MVP. 
-- For MVP without custom claims, we might need a specific user ID check or just trust the app logic + RLS on is_admin flag in profiles if it exists.
-- Using a subquery to check admin status from profiles table (assuming profiles table exists as per PRD)
create policy "Admins can update any feedback"
on public.feedback for update
using (
  exists (
    select 1 from public.profiles
    where profiles.id = auth.uid() and profiles.is_admin = true
  )
);

-- Admin Delete (Admins can delete)
create policy "Admins can delete any feedback"
on public.feedback for delete
using (
  exists (
    select 1 from public.profiles
    where profiles.id = auth.uid() and profiles.is_admin = true
  )
);


-- Storage Bucket for Feedback Photos
-- Bucket name: feedback-photos

insert into storage.buckets (id, name, public)
values ('feedback-photos', 'feedback-photos', true)
on conflict (id) do nothing;

-- Storage Policies

-- Public Read
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'feedback-photos' );

-- Auth Upload
create policy "Authenticated users can upload photos"
on storage.objects for insert
with check (
  bucket_id = 'feedback-photos'
  and auth.role() = 'authenticated'
);

-- Auth Delete (Own photos)
create policy "Users can delete own photos"
on storage.objects for delete
using (
  bucket_id = 'feedback-photos'
  and auth.uid() = owner
);
