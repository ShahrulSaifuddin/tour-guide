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

**Status**: 🚧 In Progress
**Goal**: Implement image optimization and code splitting.

### Must-Haves for Phase 2

1. **Image Optimization**: Replace standard `img` tags with optimized loading components/strategies.
2. **Code Splitting**: Implement lazy loading for routes (`DestinationsPage`, `PackagesPage`, etc.).
3. **Bundle Analysis**: Verify bundle size reduction.
