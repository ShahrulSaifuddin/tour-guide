-- Create profiles table (extends auth.users)
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  full_name text,
  email text,
  is_admin boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create availability_days table
create table public.availability_days (
  date date not null primary key,
  is_available boolean default false,
  note text,
  updated_by uuid references public.profiles(id),
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.availability_days enable row level security;

-- Availability policies
create policy "Availability is viewable by everyone."
  on availability_days for select
  using ( true );

create policy "Only admin can insert/update availability."
  on availability_days for all
  using ( exists ( select 1 from profiles where id = auth.uid() and is_admin = true ) );

-- Create booking_slots table
create table public.booking_slots (
  id uuid default gen_random_uuid() primary key,
  date date not null,
  slot_key text not null, -- 'morning', 'afternoon'
  start_time time,
  end_time time,
  capacity int default 10,
  is_closed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.booking_slots enable row level security;

-- Slots policies
create policy "Slots are viewable by everyone."
  on booking_slots for select
  using ( true );

create policy "Only admin can manage slots."
  on booking_slots for all
  using ( exists ( select 1 from profiles where id = auth.uid() and is_admin = true ) );

-- Create bookings table
create table public.bookings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  date date not null,
  slot_id uuid references public.booking_slots(id) not null,
  destination text not null,
  group_size int not null,
  notes text,
  status text default 'confirmed', -- 'confirmed', 'cancelled', 'completed'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.bookings enable row level security;

-- Bookings policies
create policy "Users can view their own bookings."
  on bookings for select
  using ( auth.uid() = user_id );

create policy "Admins can view all bookings."
  on bookings for select
  using ( exists ( select 1 from profiles where id = auth.uid() and is_admin = true ) );

create policy "Users can insert their own bookings."
  on bookings for insert
  with check ( auth.uid() = user_id );

create policy "Users can update (cancel) their own bookings."
  on bookings for update
  using ( auth.uid() = user_id );

create policy "Admins can update any booking."
  on bookings for update
  using ( exists ( select 1 from profiles where id = auth.uid() and is_admin = true ) );

-- Trigger to handle new user signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data ->> 'full_name');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- View for public calendar summary
create or replace view public_calendar_day_summary as
select 
  d.date,
  coalesce(ad.is_available, 
    case when extract(isodow from d.date) in (6, 7) then true else false end
  ) as is_available,
  count(bs.id) as total_slots,
  sum(case when b.id is not null then 1 else 0 end) as total_bookings
from 
  (select generate_series(current_date, current_date + interval '90 days', '1 day')::date as date) d
  left join availability_days ad on ad.date = d.date
  left join booking_slots bs on bs.date = d.date and bs.is_closed = false
  left join bookings b on b.slot_id = bs.id and b.status = 'confirmed'
group by d.date, ad.is_available;
