---
phase: 2
---

# Phase 2: Performance Optimization Plan

## Goal

Implement image optimization and code splitting to improve initial load times and overall performance.

## Strategy

1.  **Code Splitting (Lazy Loading)**:
    - Use `React.lazy` and `Suspense` for route components in `App.jsx`.
    - Components: `DestinationsPage`, `DestinationDetailsPage`, `PackagesPage`, `PackageDetailsPage`.

2.  **Image Optimization**:
    - Create a reusable `OptimizedImage` component.
    - Features: Lazy loading (`loading="lazy"`), fade-in effect on load, error handling.
    - Replace standard `img` tags in:
      - `DestinationCard.jsx`
      - `PackageCard.jsx` (+ Skeleton)
      - `DestinationsHero.jsx` (if applicable)

3.  **Bundle Analysis**:
    - Install `rollup-plugin-visualizer` (dev dependency).
    - Generate build stats to confirm optimization.

## Tasks

### Wave 1: Code Splitting

<task>
  <name>Implement Route Lazy Loading</name>
  <files>src/App.jsx, src/components/ui/LoadingSpinner.jsx</files>
  <action>
    - Create `LoadingSpinner` component for Suspense fallback.
    - Refactor `App.jsx` to use `React.lazy` for main page routes.
    - Wrap routes in `Suspense`.
  </action>
  <verify>App loads correctly, separate chunks generated in build.</verify>
</task>

### Wave 2: Image Optimization

<task>
  <name>Create OptimizedImage Component</name>
  <files>src/components/ui/OptimizedImage.jsx</files>
  <action>
    - Build component with `useState` for loading state.
    - Implement blur-up or fade-in transition.
  </action>
  <verify>Component renders, handles loading/error states.</verify>
</task>

<task>
  <name>Apply Image Optimization</name>
  <files>src/components/destinations/DestinationCard.jsx, src/components/FeatureCards.jsx</files>
  <action>
    - Replace `img` with `OptimizedImage`.
    - Ensure styling (aspect ratio, object-fit) is preserved.
  </action>
  <verify>Images load with transition, layout remains stable.</verify>
</task>

### Wave 3: Analysis

<task>
  <name>Analyze Bundle Size</name>
  <files>vite.config.js, package.json</files>
  <action>
    - Install `rollup-plugin-visualizer`.
    - Configure in `vite.config.js`.
    - Run build and capture report.
  </action>
  <verify>Build generates `stats.html`.</verify>
</task>
