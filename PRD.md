# PRD — Shahrul Private Tour Guide (Malaysia)

Product type: Premium private-tour marketing site + public availability calendar + authenticated booking + authenticated feedback
Tech constraint: React + Supabase only (Auth + Postgres + RLS + Storage). No payment gateway.
Primary CTA: WhatsApp inquiry (instant) + calendar booking (commitment)

## 1) Product summary

### 1.1 Problem

Tourists want a fast, trustworthy way to:

- see when you are available,
- book a slot easily,
- and verify trust via real feedback.

You need a premium website that feels “very expensive” and converts visitors into booked tours without needing payment integration.

### 1.2 Solution

A luxury, animated website with:

- Public booking calendar that clearly shows Available / Full / Unavailable
- Auth required for:
  - making a booking
  - leaving feedback
- Admin controls to:
  - toggle any date available/unavailable
  - manage slots (capacity)
  - edit/overwrite/hide feedback

Default availability rule: only Saturday & Sunday are bookable (weekend-only), with admin override.

## 2) Goals & success metrics

### 2.1 Goals (MVP)

- Visitors can browse and instantly contact you on WhatsApp.
- Visitors can view availability publicly and understand “full” dates quickly.
- Users can sign in (Google or email) and book a weekend slot.
- Users can sign in and leave feedback (optionally tied to a completed booking).
- Admin can manage availability and moderate/overwrite feedback.

### 2.2 Success metrics

- Inquiry CTR: % of sessions that tap WhatsApp CTA
- Booking conversion: % of signed-in users who complete booking
- Calendar engagement: % of sessions that view calendar and click a date
- Feedback volume and average rating

## 3) Target users

- **Visitor (Public)**: Browses destinations/packages, checks calendar availability.
- **Customer (Authenticated)**: Books slots, views “My Bookings”, leaves feedback.
- **Admin (Shahrul)**: Manages availability/slots, moderates feedback, views bookings.

## 4) Scope

### 4.1 In scope (MVP)

- Marketing pages (home, destinations, packages, about, contact)
- Public calendar with availability states
- Auth (Google + email)
- Booking (create + view own bookings + cancel optional)
- Feedback (create + public display + admin overwrite/moderation)
- Admin dashboard

### 4.2 Out of scope (MVP)

- Payments
- Automated itinerary generation
- Multi-guide marketplace
- Complex booking approvals (optional in Phase 2)

## 5) Core user experience

### 5.1 Public website (no login)

Pages:

- Home
- Destinations
- Packages
- About
- Calendar (Public)
- Contact

Primary contact:

- WhatsApp CTA: WhatsApp to +60172750530
- Email contact shown: saifuddinshahrul@gmail.com
- Brand name shown: Shahrul Private Tour Guide

For MVP, contact form can be a simple mailto/WhatsApp; no database needed.

### 5.2 Calendar experience (public)

- Month view by default (mobile friendly)
- Each date shows one of:
  - Available
  - Full
  - Unavailable
- Clicking a date opens a drawer/modal:
  - slot list (e.g., Morning/Afternoon/Full Day)
  - remaining capacity
  - “Sign in to book” if not logged in

“Full” meaning: A date is Full when all bookable slots for that date are fully booked (capacity reached).

Default availability rule:

- Only Saturday & Sunday have bookable slots by default.
- Weekdays show Unavailable (until admin opens them).

## 6) Authentication requirements

### 6.1 Sign-in methods

- Google sign-in
- Email sign-up/sign-in (email/password or magic link)

### 6.2 Access rules

- Public can browse and view calendar availability.
- Only authenticated users can:
  - create bookings
  - leave feedback
  - view “My Bookings”

## 7) Booking requirements

### 7.1 Booking flow (authenticated)

1. User selects date (from calendar)
2. Selects a slot
3. Enters:
   - destination (dropdown)
   - group size
   - notes (optional)
4. Confirm booking
5. Success screen + “View My Bookings”

### 7.2 My Bookings (authenticated)

- List of bookings with: date, slot, destination, status
- Optional cancel rules: allow cancellation up to X hours before start time (configurable)

### 7.3 Booking statuses

- confirmed (default for MVP)
- Optional later:
  - pending (if you want approval)
  - cancelled
  - completed (set by admin after tour)

## 8) Feedback requirements

### 8.1 Public feedback display

- Show latest feedback cards
- Only show non-hidden feedback

### 8.2 Create feedback (authenticated)

- rating (1–5)
- title
- message
- optional: link to booking (recommended trust)
- optional: photo (Supabase Storage)

### 8.3 Admin overwrite / moderation

- Admin can:
  - edit any feedback (typos, formatting, removal of sensitive info)
  - hide/unhide feedback
  - mark edited_by_admin=true

## 9) Admin requirements

### 9.1 Admin login

- Admin is a normal Supabase user with is_admin=true

### 9.2 Admin dashboard modules

- **Availability Manager**:
  - Toggle day Available / Unavailable
  - Configure default slots for a date
  - Close a date (holiday, fully blocked)
- **Booking Manager**:
  - View bookings
  - Set status completed
  - Cancel booking (if needed)
- **Feedback Manager**:
  - Edit/overwrite feedback
  - Hide/unhide feedback

### 9.3 Availability rules (important)

- System creates weekend slots by default (rolling window).
- Admin can override any date:
  - open weekdays (make available)
  - close weekends (make unavailable)
- Admin can adjust capacity per slot.

## 10) Destinations & content (Malaysia only)

Initial destinations (examples): Ipoh, Melaka, Kuala Lumpur, Penang, Cameron Highlands, Langkawi

Package pricing display:

- Show “From RM xxx” (display-only)
- Explain pricing factors: group size, pickup location, add-ons (tickets/meals)
- No payment collection in MVP

## 11) Data model (minimal DB: auth + feedback + calendar booking)

Keep tables tight and purpose-built.

### 11.1 Tables

- **profiles**: id (uuid), full_name, email, is_admin (bool), created_at
- **availability_days**: date (PK), is_available (bool), note, updated_by (uuid), updated_at
- **booking_slots**: id (uuid), date, slot_key, start_time, end_time, capacity, is_closed (bool)
- **bookings**: id (uuid), user_id (uuid), date, slot_id (uuid), destination, group_size, notes, status, created_at
- **feedback**: id (uuid), user_id (uuid), booking_id (uuid), rating, title, message, photo_url, is_hidden, edited_by_admin, created_at

### 11.2 Derived views (public-safe)

- **public_calendar_day_summary** (VIEW): date, is_available, is_full, slots_open, slots_remaining

## 12) Security (RLS policies)

### 12.1 Public read rules

- Public can read: `public_calendar_day_summary`, public feedback (is_hidden=false)
- Public cannot read: user identities, bookings table rows

### 12.2 Booking rules

- Insert booking: authenticated users only
- Select bookings: only the owner OR admin
- Update booking: owner (cancel) OR admin

### 12.3 Feedback rules

- Insert feedback: authenticated users only
- Update/delete feedback: owner OR admin
- Public select: only is_hidden=false

### 12.4 Admin rules

- Admin (profiles.is_admin=true) can:
  - update availability_days
  - update booking_slots
  - hide/overwrite any feedback

## 13) Calendar logic (detailed)

### 13.1 Default slot generation (weekend-only)

- Rolling window: generate slots for the next 12 weeks.
- Weekends: Morning (9-13), Afternoon (14-18).
- Weekdays: No slots (or is_available=false).

### 13.2 Override behavior

- Admin sets weekday available -> create slots.
- Admin sets weekend unavailable -> close slots/mark unavailable.

### 13.3 “Full” calculation

- Day is Full if: day is available AND all open slots have bookings_count >= capacity.

## 14) UI/UX requirements (premium “liquid glass”)

### 14.1 Visual style

- Liquid-glass cards (blur + layered highlights + subtle grain)
- Light & Dark theme (persistent)
- Premium typography scale and spacing
- Rich photography with fast load

### 14.2 Animations (“very expensive”)

- Scroll-driven hero parallax
- Section reveal transitions
- Card hover tilt + shine sweep
- Micro-interactions
- Route transitions

### 14.3 Performance requirements

- Mobile responsive
- Fast initial load (lazy load, skeleton)

## 15) Functional acceptance criteria

- [ ] Public calendar: View month, see states, click shows details.
- [ ] Auth: Google/Email works, protected routes block non-auth.
- [ ] Booking: Signed-in user can book weekend slot, capacity enforced.
- [ ] Feedback: Signed-in user can post, admin can moderate.
- [ ] Admin availability: Admin can toggle dates, default weekend-only.

## 16) Suggested page structure (IA)

- /
- /destinations
- /packages
- /calendar
- /about
- /contact
- /auth
- /book
- /my-bookings
- /feedback
- /admin

## 17) Deployment & environments

- Frontend: Static hosting (Vercel/Netlify)
- Backend: Supabase

## 18) Phase plan

- Phase 1: Foundation (UI shell, Auth, Public Calendar)
- Phase 2: Booking System (Slots, Bookings, Admin Availability)
- Phase 3: Feedback System (Components, Moderation)
- Phase 4: Premium Polish (Animations, SEO)
