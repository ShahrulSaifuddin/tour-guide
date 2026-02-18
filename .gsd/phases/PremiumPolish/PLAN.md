---
phase: 5
---

# Phase 5: Premium Polish

## Goal

Elevate the user experience with high-end animations, consistent visual styling, and complete SEO coverage.

## Context

- `PRD.md` Sections 14 (UI/UX) and 15 (Acceptance Criteria).
- Existing `SEO.jsx` component.
- Existing `ScrollReveal.jsx` component.
- `PageWrapper` animation in `App.jsx`.

## Tasks

### Wave 1: SEO & Metadata

<task>
  <name>Implement SEO Foundation</name>
  <files>public/robots.txt, public/sitemap.xml</files>
  <action>
    - Create `public/robots.txt` allowing indexing.
    - Create `public/sitemap.xml` listing all statically known routes (/, /destinations, /packages, /calendar, /about, /contact, /auth).
  </action>
  <verify>Files exist in `public/` and are accessible via browser (e.g., http://localhost:5173/robots.txt).</verify>
</task>

<task>
  <name>Apply SEO Tags</name>
  <files>src/pages/DestinationsPage.jsx, src/pages/PackagesPage.jsx, src/pages/AboutPage.jsx</files>
  <action>
    - Ensure `<SEO />` component is present with custom title/description for:
      - Destinations Page
      - Packages Page
      - About Page
      - Calendar Page
  </action>
  <verify>Inspect page source or React DevTools to see Helmet tags populated.</verify>
</task>

### Wave 2: UI Polish & Animations

<task>
  <name>Create Premium 404 Page</name>
  <files>src/pages/NotFoundPage.jsx, src/App.jsx</files>
  <action>
    - Create `src/pages/NotFoundPage.jsx` with "Liquid Glass" styling and "Go Home" button.
    - Replace the inline `<div>404</div>` in `App.jsx` with this new component.
  </action>
  <verify>Navigate to `/random-url` and verify the premium 404 page loads.</verify>
</task>

<task>
  <name>Enhance Page Animations</name>
  <files>src/pages/DestinationsPage.jsx, src/pages/PackagesPage.jsx</files>
  <action>
    - Wrap main content lists in `ScrollReveal` component (staggered if possible) to animate them on scroll.
    - Ensure `FeatureCards` on Home page also use `ScrollReveal` if not already.
  </action>
  <verify>Scroll down on Destinations/Packages pages and observe elements fading/sliding in.</verify>
</task>

## Success Criteria

- [ ] Google Lighthouse SEO score > 90.
- [ ] All pages have unique `<title>` and `<meta name="description">`.
- [ ] 404 Page matches premium design system.
- [ ] Scrolling feels alive with reveal animations.
