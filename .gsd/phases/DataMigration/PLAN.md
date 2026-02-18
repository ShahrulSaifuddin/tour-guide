---
phase: 1
---

# Phase 1: Data Migration Plan

## Goal

Replace Supabase database calls with local data files (`src/data/*.js`) for faster load times and simplified architecture.

## Strategy

1.  **Extract Data**: Use the data fetched from the browser (5 packages, 5 destinations).
2.  **Create Data Files**:
    - `src/data/packagesData.js`: Default export array of package objects.
    - `src/data/destinationsData.js`: Update to export `destinations` array (merging DB fields with editorial data).
3.  **Refactor Components**:
    - Remove `supabase` imports.
    - Import data directly.
    - Replace async fetching logic with direct data access.

## Tasks

1.  [ ] Create `src/data/packagesData.js` with extracted data.
2.  [ ] Update `src/data/destinationsData.js` to include DB fields (image_url, description, price_start).
3.  [ ] specific Component Updates:
    - [ ] `DestinationsPage.jsx`: Load from `destinationsData`.
    - [ ] `DestinationDetailsPage.jsx`: `find()` destination by slug.
    - [ ] `PackagesPage.jsx`: Load from `packagesData`.
    - [ ] `PackageDetailsPage.jsx`: `find()` package by slug.
4.  [ ] Verify all pages load correctly.

## Verification

- Navigate to `/destinations` -> verify list.
- Navigate to `/destinations/kuala-lumpur` -> verify details.
- Navigate to `/packages` -> verify list.
- Navigate to `/packages/kl-city-half-day` -> verify details.
