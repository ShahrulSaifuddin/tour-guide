-- Create packages table
CREATE TABLE IF NOT EXISTS public.packages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    destination_id UUID REFERENCES public.destinations(id) ON DELETE CASCADE,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    duration TEXT,
    inclusions TEXT[],
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Public can read all packages
CREATE POLICY "Public can view all packages" 
ON public.packages FOR SELECT 
TO public 
USING (true);

-- Admins can do everything
CREATE POLICY "Admins can insert packages" 
ON public.packages FOR INSERT 
TO authenticated 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);

CREATE POLICY "Admins can update packages" 
ON public.packages FOR UPDATE 
TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);

CREATE POLICY "Admins can delete packages" 
ON public.packages FOR DELETE 
TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);

-- Seed Data (Initial Packages)
-- Using DO block or just Insert with Select to handle UUIDs
INSERT INTO public.packages (destination_id, slug, title, description, price, duration, inclusions, image_url, is_featured)
SELECT 
    id as destination_id,
    'kl-city-half-day',
    'KL City Half-Day Tour',
    'A quick but comprehensive tour of Kuala Lumpur''s must-see landmarks including the Twin Towers, King''s Palace, and National Mosque.',
    250,
    '4 Hours',
    ARRAY['Hotel Pickup', 'English Speaking Guide', 'Transport'],
    'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070',
    true
FROM public.destinations WHERE slug = 'kuala-lumpur';

INSERT INTO public.packages (destination_id, slug, title, description, price, duration, inclusions, image_url, is_featured)
SELECT 
    id as destination_id,
    'kl-food-tour',
    'Hidden Gems Food Tour',
    'Taste the best of Malaysia! We take you to hidden stalls and local favorites for an authentic culinary adventure.',
    300,
    '4 Hours',
    ARRAY['Food Tasting (5+ stops)', 'Transport', 'Guide'],
    'https://images.unsplash.com/photo-1627488974558-8120c822709d?q=80&w=2070',
    true
FROM public.destinations WHERE slug = 'kuala-lumpur';

INSERT INTO public.packages (destination_id, slug, title, description, price, duration, inclusions, image_url, is_featured)
SELECT 
    id as destination_id,
    'penang-heritage-walk',
    'George Town Heritage Walk',
    'Dive deep into the history of George Town. Visit clan jetties, temples, and famous street art locations.',
    200,
    '3 Hours',
    ARRAY['Walking Guide', 'Heritage Snacks', 'Map'],
    'https://images.unsplash.com/photo-1605342415307-285600d89053?q=80&w=2070',
    false
FROM public.destinations WHERE slug = 'penang';

INSERT INTO public.packages (destination_id, slug, title, description, price, duration, inclusions, image_url, is_featured)
SELECT 
    id as destination_id,
    'melaka-history-full-day',
    'Melaka Historical Full Day',
    'Explore the UNESCO World Heritage city of Melaka. Visit A Famosa, St. Paul''s Hill, and enjoy a Nyonya launch.',
    450,
    '8 Hours',
    ARRAY['Transport from KL', 'Lunch', 'Entrance Fees', 'River Cruise'],
    'https://images.unsplash.com/photo-1627448882488-842245214732?q=80&w=2070',
    true
FROM public.destinations WHERE slug = 'melaka';

INSERT INTO public.packages (destination_id, slug, title, description, price, duration, inclusions, image_url, is_featured)
SELECT 
    id as destination_id,
    'cameron-highlands-nature',
    'Cameron Highlands Nature Discovery',
    'Breathe in the cool air of the highlands. Visit tea plantations, mossy forest, and strawberry farms.',
    500,
    'Full Day',
    ARRAY['Transport', 'Tea Factory Tour', 'Strawberry Picking'],
    'https://images.unsplash.com/photo-1542456306-69d67b7fc344?q=80&w=2070',
    false
FROM public.destinations WHERE slug = 'cameron-highlands';
