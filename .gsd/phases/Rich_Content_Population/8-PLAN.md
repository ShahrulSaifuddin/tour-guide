---
phase: 8
plan: 1
wave: 1
---

# Plan 8.1: Rich Content Population

## Objective

Populate all missing editorial content for destinations and experiences to ensure a consistent, premium user experience across the entire site.

## Context

- .gsd/phases/Rich_Content_Population/RESEARCH.md
- src/data/destinationsData.js
- src/data/packagesData.js

## Tasks

<task type="auto">
  <name>Populate Destinations Data</name>
  <files>src/data/destinationsData.js</files>
  <action>
    Update `src/data/destinationsData.js` to add `caseStudy`, `history`, and `gallery` objects for:
    1. **Penang**: Focus on George Town heritage, street art, and hawker food.
    2. **Melaka**: Focus on colonial history (Dutch/Portuguese) and Peranakan culture.
    3. **Cameron Highlands**: Focus on tea plantations, cooling climate, and relaxation.
    4. **Ipoh**: Focus on limestone caves, white coffee, and colonial architecture.
    
    **Requirements:**
    - Write premium, editorial copy (no lorem ipsum).
    - Create 4-6 gallery items per destination (use Unsplash/placeholder URLs if needed).
    - Ensure `story` object follows the `{ morning, afternoon, night }` structure.
  </action>
  <verify>
    Check that all 5 destinations in `destinationsData.js` have `caseStudy`, `history`, and `gallery` keys.
  </verify>
  <done>
    No destination is missing the new rich content fields.
  </done>
</task>

<task type="auto">
  <name>Populate Experiences Data</name>
  <files>src/data/packagesData.js</files>
  <action>
    Update `src/data/packagesData.js` to add `caseStudy`, `gallery` (and optional `history`) for:
    1. **Hidden Gems Food Tour** (KL)
    2. **George Town Heritage Walk** (Penang)
    3. **Melaka Historical Full Day** (Melaka)
    4. **Cameron Highlands Nature Discovery** (Cameron)
    
    **Requirements:**
    - `caseStudy` should focus on "Inside the Experience".
    - `story` object for experiences should follow `{ see, taste, takeaway }` (or distinct moments).
    - `gallery` should have 4-6 relevant images.
  </action>
  <verify>
    Check that all packages in `packagesData.js` have `caseStudy` and `gallery` keys.
  </verify>
  <done>
    All experiences have rich content populated.
  </done>
</task>

## Success Criteria

- [ ] All destinations have rich content (Case Study, History, Gallery).
- [ ] All experiences have rich content.
- [ ] No undefined/empty states in the UI when browsing these pages.
