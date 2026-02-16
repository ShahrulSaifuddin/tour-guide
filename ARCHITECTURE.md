# Architecture - Shahrul Private Tour Guide

## System Overview

Client-side React application interacting directly with Supabase (BaaS). No dedicated middleware server.

## Components

### Frontend (User & Admin)

- **Framework**: React (Vite)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State**: React Context (Auth), Local State
- **Hosting**: Static (e.g., Vercel)

### Backend (Supabase)

- **Database**: PostgreSQL
- **Auth**: Supabase Auth (Google, Email)
- **Storage**: Supabase Storage (User uploads)
- **API**: PostgREST (Auto-generated APIs)

## Data Flow

1. **Client** makes direct requests to Supabase via `supabase-js` client.
2. **Auth** handles user identity and issues JWTs.
3. **RLS (Row Level Security)** enforces access rules at the database level.
4. **Storage** serves images via CDN.

## Key Modules

- **Public Calendar**: Fetches from `public_calendar_day_summary` view.
- **Booking Engine**: Transactional inserts into `bookings` table.
- **Admin Dashboard**: Protected routes for `is_admin` users to modify `booking_slots` and `availability_days`.
