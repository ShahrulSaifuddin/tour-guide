---
phase: 6
plan: 1
wave: 1
---

# Plan 6.1: Core Routing & Navigation Updates

## Objective

Establish the new URL structure and update global navigation to reflect "Experiences" instead of "Packages". Rename core files to match the new IA.

## Context

- .gsd/SPEC.md (Phase 6 requirements)
- src/App.jsx
- src/components/Header.jsx
- src/pages/PackagesPage.jsx (to be renamed)
- src/pages/PackageDetailsPage.jsx (to be renamed)

## Tasks

<task type="auto">
  <name>Rename Package Pages to Experience Pages</name>
  <files>src/pages/PackagesPage.jsx, src/pages/PackageDetailsPage.jsx</files>
  <action>
    - Rename `src/pages/PackagesPage.jsx` to `src/pages/ExperiencesPage.jsx`.
    - Rename `src/pages/PackageDetailsPage.jsx` to `src/pages/ExperienceDetailsPage.jsx`.
    - Update component names inside files to `ExperiencesPage` and `ExperienceDetailsPage`.
    - Update import in `src/App.jsx` (temporarily until routing update).
  </action>
  <verify>Files exist with new names.</verify>
  <done>Files renamed and component identifiers updated.</done>
</task>

<task type="auto">
  <name>Update Header Navigation</name>
  <files>src/components/Header.jsx</files>
  <action>
    - Change "Packages" to "Experiences" in the navigation array.
    - Ensure it links to `/experiences` (optional global list).
  </action>
  <verify>Check `Header.jsx` source code for "Experiences".</verify>
  <done>Navigation menu shows "Experiences".</done>
</task>

<task type="auto">
  <name>Implement Nested Routing</name>
  <files>src/App.jsx</files>
  <action>
    - Update routes:
      - `/experiences` -> `ExperiencesPage`
      - `/destinations/:slug/experiences/:experienceSlug` -> `ExperienceDetailsPage`
    - Add backward compatibility redirect (or mapping):
      - `/packages` -> `ExperiencesPage` (or redirect)
      - `/packages/:slug` -> `ExperienceDetailsPage` (or redirect)
  </action>
  <verify>Check `App.jsx` for new Route definitions.</verify>
  <done>Routes for `/destinations/:slug/experiences/:experienceSlug` exist.</done>
</task>

## Success Criteria

- [ ] Navigation bar displays "Experiences" instead of "Packages".
- [ ] `/experiences` route works.
- [ ] `/destinations/kuala-lumpur/experiences/hidden-gems-food-tour` route works (renders ExperienceDetailsPage).

---

phase: 6
plan: 2
wave: 1

---

# Plan 6.2: Destination Detail "Place Guide" Refactor

## Objective

Transform `DestinationDetailsPage` into a "Place Guide" that lists nested experiences, differentiating it from the experience product page.

## Context

- src/pages/DestinationDetailsPage.jsx
- src/data/destinationsData.js
- src/data/packagesData.js

## Tasks

<task type="auto">
  <name>Refactor Destination Page Layout</name>
  <files>src/pages/DestinationDetailsPage.jsx</files>
  <action>
    - Update text hierarchy: "About {Place}", "Highlights", "Best time to visit".
    - Remove "Book This Trip" CTA sidebar (since we are booking specific experiences now, not the city itself).
    - Add "Experiences in {Place}" section at the bottom.
  </action>
  <verify>Inspect `DestinationDetailsPage.jsx` structure.</verify>
  <done>Layout matches "Place Guide" specifiction.</done>
</task>

<task type="auto">
  <name>Implement Embedded Experience List</name>
  <files>src/pages/DestinationDetailsPage.jsx</files>
  <action>
    - Import `packages` from `packagesData.js`.
    - Filter packages by `destination.id`.
    - Render experiences using a card component (reuse `DestinationCard` style or create simplified `ExperienceCard`).
    - Card CTA: "View experience" linking to `/destinations/{destSlug}/experiences/{expSlug}`.
  </action>
  <verify>Start app and check a destination page (e.g., KL) to see listed tours.</verify>
  <done>Experiences are listed and link to nested routes.</done>
</task>

## Success Criteria

- [ ] Destination page shows "Place Guide" content (Highlights, Stats, etc.).
- [ ] Destination page lists relevant experiences.
- [ ] Experience cards link to nested `/destinations/.../experiences/...` URLs.

---

phase: 6
plan: 3
wave: 1

---

# Plan 6.3: Experience Detail "Bookable Itinerary" Refactor

## Objective

Refactor `ExperienceDetailsPage` to focus purely on the itinerary and booking, removing generic destination info.

## Context

- src/pages/ExperienceDetailsPage.jsx
- src/data/packagesData.js

## Tasks

<task type="auto">
  <name>Refactor Experience Page to Itinerary Focus</name>
  <files>src/pages/ExperienceDetailsPage.jsx</files>
  <action>
    - Add Breadcrumbs: Destinations > {Place Name} > {Experience Title}.
    - Ensure Hero section focuses on the specific tour (Title, Price, Duration).
    - Remove "Traveler Info" or generic destination highlights if present.
    - Ensure "Check Availability" button works.
  </action>
  <verify>Inspect `ExperienceDetailsPage.jsx`.</verify>
  <done>Page focuses on tour details and itinerary.</done>
</task>

<task type="auto">
  <name>Update Experience Page Metadata</name>
  <files>src/pages/ExperienceDetailsPage.jsx</files>
  <action>
    - Ensure `SEO` tags use the tour title and description.
    - Verify "Back" link points to the parent Destination page, not global packages list.
  </action>
  <verify>Inspect source code for SEO and Back link logic.</verify>
  <done>Back link navigates to `/destinations/:slug`.</done>
</task>

## Success Criteria

- [ ] Breadcrumbs are correct.
- [ ] Back button goes to Destination page.
- [ ] Page feels like a distinct "product" compared to the Destination "guide".
