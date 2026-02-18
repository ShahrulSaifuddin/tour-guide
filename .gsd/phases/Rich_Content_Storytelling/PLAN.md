---
phase: 7
plan: 1
wave: 1
---

# Plan 7.1: Data & Basic Components

## Objective

Update data structures to support rich content and build the foundational reusable components (Case Study, History, Gallery Preview) for the new detailed pages.

## Context

- .gsd/ROADMAP.md
- src/data/destinationsData.js
- src/data/packagesData.js

## Tasks

<task type="auto">
  <name>Update Data Structures</name>
  <files>src/data/destinationsData.js, src/data/packagesData.js</files>
  <action>
    Add the following fields to both destinations and packages data entries:
    - `caseStudy` object:
        - `title` (string)
        - `body` (string)
        - `insights` (array of label/value objects)
        - `story` (object with morning/afternoon/night keys for destinations, or outcome bullets for experiences)
    - `history` object:
        - `text` (string)
        - `fact` (string - optional)
    - `gallery` array:
        - objects with `src`, `alt`, `captionTitle`, `captionText`, `tags`
    
    Populate with placeholder/example editorial content for at least one destination (e.g., Kuala Lumpur) and one experience.
  </action>
  <verify>
    Run a script to check if the new fields exist in the exported data objects.
  </verify>
  <done>
    Data files export objects containing `caseStudy`, `history`, and `gallery` properties.
  </done>
</task>

<task type="auto">
  <name>Create Basic Content Components</name>
  <files>src/components/content/CaseStudySection.jsx, src/components/content/HistorySection.jsx, src/components/content/GalleryPreviewGrid.jsx</files>
  <action>
    Create reusable components:
    1. `CaseStudySection.jsx`:
       - Props: `data` (the caseStudy object)
       - Layout: Title, Body paragraphs, Insights Grid (3-4 items), Story/Timeline.
       - Style: Editorial, clear typography.
    2. `HistorySection.jsx`:
       - Props: `text`, `fact`
       - Layout: Text with "Read More" accordion (using simple state), Callout card for "Did you know?".
    3. `GalleryPreviewGrid.jsx`:
       - Props: `images` (array), `onViewAll` (function)
       - Layout: Responsive grid showing 4-6 thumbnails.
       - UI: "See more photos" button overlay or below grid.
  </action>
  <verify>
    Create a temporary test page or check component exports.
  </verify>
  <done>
    Components created and export default functions.
  </done>
</task>

## Success Criteria

- [ ] `destinationsData.js` and `packagesData.js` have new schema fields.
- [ ] `CaseStudySection`, `HistorySection`, `GalleryPreviewGrid` components exist.
