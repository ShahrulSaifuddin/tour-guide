---
phase: 7
plan: 3
wave: 2
---

# Plan 7.3: Page Integration

## Objective

Integrate the new rich content components into the Destination and Experience detail pages according to the specified layout order.

## Context

- .gsd/ROADMAP.md
- src/pages/DestinationDetailsPage.jsx
- src/pages/ExperienceDetailsPage.jsx
- src/components/content/CaseStudySection.jsx
- src/components/content/HistorySection.jsx
- src/components/content/GalleryPreviewGrid.jsx
- src/components/gallery/GalaxyGalleryModal.jsx

## Tasks

<task type="auto">
  <name>Integrate into Destination Details</name>
  <files>src/pages/DestinationDetailsPage.jsx</files>
  <action>
    Update layout order:
    1. Hero (existing)
    2. About / Highlights / Traveler Info (existing - refactor if needed to fit new sections)
    3. [NEW] `CaseStudySection` (pass `destination.caseStudy`)
    4. [NEW] `HistorySection` (pass `destination.history`)
    5. [NEW] `GalleryPreviewGrid` (pass `destination.gallery`)
    6. [NEW] `GalaxyGalleryModal` (connected to GalleryPreview state)
    7. Experiences List (existing)
    
    Logic:
    - Add state for `isGalleryOpen` and `currentImageIndex`.
    - Ensure logical flow and spacing between sections.
  </action>
  <verify>
    Review JSX structure in DestinationDetailsPage.jsx for new components.
  </verify>
  <done>
    DestinationDetailsPage includes all new sections properly ordered.
  </done>
</task>

<task type="auto">
  <name>Integrate into Experience Details</name>
  <files>src/pages/ExperienceDetailsPage.jsx</files>
  <action>
    Update layout order:
    1. Hero + Booking Card (existing)
    2. Experience Overview (existing)
    3. Itinerary (existing)
    4. What's included (existing)
    5. [NEW] `CaseStudySection` (pass `pkg.caseStudy`)
    6. [NEW] `HistorySection` (pass `pkg.history` - conditional if exists)
    7. [NEW] `GalleryPreviewGrid` (pass `pkg.gallery`)
    8. [NEW] `GalaxyGalleryModal` (connected to GalleryPreview state)
    
    Logic:
    - Add state for `isGalleryOpen` and `currentImageIndex`.
    - Render `HistorySection` only if data is present.
  </action>
  <verify>
    Review JSX structure in ExperienceDetailsPage.jsx for new components.
  </verify>
  <done>
    ExperienceDetailsPage includes all new sections properly ordered.
  </done>
</task>

## Success Criteria

- [ ] Destination Details Page displays Case Study, History, Gallery.
- [ ] Experience Details Page displays Case Study, History (conditional), Gallery.
- [ ] Gallery "See more" opens the Galaxy Modal.
