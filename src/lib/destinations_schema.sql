-- Create destinations table
CREATE TABLE IF NOT EXISTS public.destinations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    price_start NUMERIC,
    highlights TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Public can read all destinations
CREATE POLICY "Public can view all destinations" 
ON public.destinations FOR SELECT 
TO public 
USING (true);

-- Admins can do everything
-- Note: checks if user has IS_ADMIN in profiles (assuming profile check logic or simple auth check if is_admin column exists on auth.users which it doesn't usually, so we rely on profiles table or metadata)
-- For MVP simple admin check:
CREATE POLICY "Admins can insert destinations" 
ON public.destinations FOR INSERT 
TO authenticated 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);

CREATE POLICY "Admins can update destinations" 
ON public.destinations FOR UPDATE 
TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);

CREATE POLICY "Admins can delete destinations" 
ON public.destinations FOR DELETE 
TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);

-- Seed Data (Initial Destinations)
INSERT INTO public.destinations (slug, name, description, image_url, price_start, highlights)
VALUES 
(
    'kuala-lumpur', 
    'Kuala Lumpur City Tour', 
    'Discover the vibrant capital of Malaysia. From the iconic Petronas Twin Towers to the historic Batu Caves, experience the perfect blend of modern and traditional.',
    'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070',
    350,
    ARRAY['Petronas Twin Towers', 'Batu Caves', 'Merdeka Square', 'Chinatown']
),
(
    'penang', 
    'Penang Heritage & Food', 
    'Explore the streets of George Town, a UNESCO World Heritage site, and indulge in world-famous street food.',
    'https://images.unsplash.com/photo-1605342415307-285600d89053?q=80&w=2070',
    400,
    ARRAY['George Town Street Art', 'Kek Lok Si Temple', 'Penang Hill', 'Char Kway Teow']
),
(
    'melaka', 
    'Historical Melaka', 
    'Step back in time in Malaysia''s most historic city. Visit Dutch colonial buildings, walk Jonker Street, and cruise the Melaka River.',
    'https://images.unsplash.com/photo-1627448882488-842245214732?q=80&w=2070',
    450,
    ARRAY['Red Square', 'Jonker Street', 'A Famosa', 'River Cruise']
),
(
    'cameron-highlands', 
    'Cameron Highlands Nature', 
    'Escape the heat to the cool hills. Walk through tea plantations, visit strawberry farms, and enjoy the lush greenery.',
    'https://images.unsplash.com/photo-1542456306-69d67b7fc344?q=80&w=2070',
    500,
    ARRAY['BOH Tea Plantation', 'Mossy Forest', 'Strawberry Farm', 'Butterfly Garden']
),
(
    'ipoh', 
    'Ipoh Cave & Culture', 
    'Famous for its white coffee, stunning limestone cave temples, and colonial architecture.',
    'https://images.unsplash.com/photo-1614945377507-6bd2859c256a?q=80&w=2070',
    350,
    ARRAY['Kellies Castle', 'Kek Lok Tong Cave', 'Concubine Lane', 'Ipoh White Coffee']
)
ON CONFLICT (slug) DO NOTHING;
