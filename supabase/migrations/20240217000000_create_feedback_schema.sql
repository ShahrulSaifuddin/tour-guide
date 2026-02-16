-- Create feedback table
create table public.feedback (
  id uuid not null default gen_random_uuid (),
  user_id uuid not null references auth.users (id),
  rating integer not null check (rating >= 1 and rating <= 5),
  title text not null,
  message text not null,
  photo_url text,
  is_hidden boolean not null default false,
  edited_by_admin boolean not null default false,
  created_at timestamp with time zone not null default now(),
  constraint feedback_pkey primary key (id)
);

-- Enable RLS
alter table public.feedback enable row level security;

-- Policies for feedback table
-- Public: Can view non-hidden feedback
create policy "Public can view approved feedback"
  on public.feedback for select
  using (is_hidden = false);

-- Authenticated: Can insert feedback
create policy "Authenticated users can insert feedback"
  on public.feedback for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Admin: Can view all feedback (including hidden)
create policy "Admins can view all feedback"
  on public.feedback for select
  to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.is_admin = true
    )
  );

-- Admin: Can update feedback (hide/edit)
create policy "Admins can update feedback"
  on public.feedback for update
  to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.is_admin = true
    )
  );

-- Owner: Can update own feedback (optional, but good for MVP if they want to fix typos before moderation catch it)
create policy "Users can update own feedback"
  on public.feedback for update
  to authenticated
  using (auth.uid() = user_id);

-- Storage Bucket for Feedback Photos
insert into storage.buckets (id, name, public)
values ('feedback-photos', 'feedback-photos', true)
on conflict (id) do nothing;

-- Storage Policies
-- Public: Read access
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'feedback-photos' );

-- Authenticated: Upload access
create policy "Authenticated can upload"
  on storage.objects for insert
  to authenticated
  with check ( bucket_id = 'feedback-photos' );

-- Users: Update own photos
create policy "Users can update own photos"
  on storage.objects for update
  to authenticated
  using ( bucket_id = 'feedback-photos' and owner = auth.uid() );
