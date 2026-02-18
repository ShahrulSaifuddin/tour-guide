# Project Roadmap

## Phase 1: Data Migration to Frontend

**Status**: ✅ Completed
**Goal**: Remove dependency on Supabase for Packages and Destinations data to improve load times and simplify architecture.
**Must-Haves**:

- [x] All packages from DB migrated to `src/data/packagesData.js`
- [x] All destinations from DB merged into `src/data/destinationsData.js`
- [x] `DestinationsPage` and `DestinationDetailsPage` load from local data
- [x] `PackagesPage` and `PackageDetailsPage` load from local data
- [x] No Supabase calls for fetching destinations/packages
- [x] Admin Dashboard remains functional (or is noted as deprecated/broken for now)

## Phase 2: Performance Optimization

**Status**: ✅ Completed
**Goal**: Implement image optimization and code splitting.
**Must-Haves**:

1. **Image Optimization**: Replace standard `img` tags with optimized loading components/strategies.
2. **Code Splitting**: Implement lazy loading for routes (`DestinationsPage`, `PackagesPage`, etc.).
3. **Bundle Analysis**: Verify bundle size reduction.

## Phase 3: Authentication (Facebook Login)

**Status**: ✅ Complete and Verified
**Goal**: Implement social login with Facebook.
**Must-Haves**:

1. **Facebook OAuth**: Integrate Facebook Login SDK/Supabase Auth.
2. **User Session**: Handle user signup/login state.
3. **UI Integration**: Add "Continue with Facebook" button to AuthPage.

## Phase 4: Feedback System

**Status**: ✅ Complete and Verified
**Goal**: Enable users to submit and view feedback.
**Must-Haves**:

1. **Database Schema**: Feedback table in Supabase.
2. **UI Implementation**: Feedback form and list.
3. **Admin Moderation**: Admin ability to hide/show feedback.

## Phase 5: Premium Polish

**Status**: ✅ Complete and Verified
**Goal**: Elevate the user experience.
**Must-Haves**:

1. **SEO**: `robots.txt`, `sitemap.xml`, `<SEO>` tags.
2. **UI Polish**: Scroll animations (`ScrollReveal`), Premium 404 Page.

## Phase 6: Information Architecture & Experience Rewrite

**Status**: ✅ Complete and Verified
**Goal**: Restructure UX to differentiate Destinations from Experiences.
**Must-Haves**:

1.  **URL Structure**: Implement nested routes `/destinations/:slug/experiences/:expSlug`.
2.  **Navigation**: Rename "Packages" to "Experiences" in main navigation.
3.  **Destination Detail**: Add "Experiences in {Place}" section filtering experiences by destination.
4.  **Experience Detail**: Remove destination info; focus purely on itinerary and booking ("bookable tour" feel).
5.  **Data Model**: Ensure all experiences link to a parent destination.
