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

## Phase 7: Rich Content & Storytelling

**Status**: ✅ Completed
**Goal**: Enhance Destination and Experience pages with premium content sections (Case Study, History) and an immersive Galaxy Gallery to increase engagement and perceived value.
**Depends on**: Phase 6

**Must-Haves**:

1.  **Case Study Section**: "Why {Destination} is special" & "Inside the experience" blocks with editorial layout.
2.  **History Section**: Scannable history content with "Read More" accordion.
3.  **Gallery Preview**: Grid of 4-6 images on detail pages with "See more" CTA.
4.  **Galaxy Modal**: Full-screen image slider with animated galaxy background (stars/nebula effect).
5.  **Data Update**: Add `gallery` array and editorial content fields to data files.

## Phase 8: Rich Content Population

**Status**: ✅ Complete
**Goal**: Populate all destinations & experiences with full rich content (case study, storyline, history, gallery) to ensure consistency and premium feel.
**Depends on**: Phase 7

**Must-Haves**:

1.  **Destinations**: All destinations have populated `caseStudy`, `history`, and `gallery` fields.
2.  **Experiences**: All experiences have populated `caseStudy` and `gallery` fields (and `history` where relevant).
3.  **No Placeholders**: No "undefined" or broken UI states for any destination/experience.
4.  **Consistency**: All content follows the premium/editorial tone.
