---
phase: 7
plan: 2
wave: 1
---

# Plan 7.2: Galaxy Gallery Modal

## Objective

Implement the immersive "Galaxy Gallery" modal with an animated background and image slider functionalities.

## Context

- .gsd/ROADMAP.md
- src/components/ui/Modal.jsx (if exists, or new)

## Tasks

<task type="auto">
  <name>Create Galaxy Background Animation</name>
  <files>src/components/ui/GalaxyBackground.jsx</files>
  <action>
    Create a component that renders a subtle galaxy animation.
    - Use CSS animations (keyframes) for moving stars/particles or a lightweight Canvas implementation.
    - Requirements:
        - Floating particles/stars.
        - Start animation only when component is mounted/visible.
        - Respect `prefers-reduced-motion` media query using `framer-motion` or CSS.
  </action>
  <verify>
    Review file content for animation logic and accessibility checks.
  </verify>
  <done>
    `GalaxyBackground` component exists and implements motion reduction logic.
  </done>
</task>

<task type="auto">
  <name>Create Galaxy Modal & Slider</name>
  <files>src/components/gallery/GalaxyGalleryModal.jsx</files>
  <action>
    Create the full-screen gallery modal.
    - Props: `isOpen`, `onClose`, `images`, `initialIndex`.
    - Components:
        - `GalaxyBackground` as the backdrop.
        - Close button (top right, accessible).
        - Main Image Slider (Swipeable on mobile, Arrow keys on desktop).
        - Caption overlay (Title + Description).
        - Counter (e.g., 3 / 12).
    - Logic:
        - Trap focus within modal when open.
        - Handle Escape key to close.
        - Preload next/prev images if possible.
  </action>
  <verify>
    Review file for specific accessibility handlers (onKeyDown, focus trap) and slider logic.
  </verify>
  <done>
    `GalaxyGalleryModal` component created with slider logic and accessibility features.
  </done>
</task>

## Success Criteria

- [ ] `GalaxyBackground.jsx` implements performant animation.
- [ ] `GalaxyGalleryModal.jsx` handles image navigation and accessibility.
