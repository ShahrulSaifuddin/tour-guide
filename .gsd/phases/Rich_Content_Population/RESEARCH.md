# Phase 8 Research: Content Gaps

## Destinations to Populate

The following destinations are missing `caseStudy`, `history`, and `gallery` fields:

1. **Penang** (Heritage & Food)
2. **Melaka** (Historical)
3. **Cameron Highlands** (Nature)
4. **Ipoh** (Cave & Culture)

## Experiences to Populate

The following experiences are missing `caseStudy` and `gallery` fields:

1. **Hidden Gems Food Tour** (KL)
2. **George Town Heritage Walk** (Penang)
3. **Melaka Historical Full Day** (Melaka)
4. **Cameron Highlands Nature Discovery** (Cameron)

_Note: "KL City Half-Day Tour" is already populated as the reference implementation._

## Content Requirements

For each item, we need to generate:

- **Case Study**: Title, Body, Insights (3-4), Story (Morning/Afternoon/Night for dest, See/Taste/Takeaway for exp).
- **History**: Text (2-3 paras), Fact (Did you know?).
- **Gallery**: Array of images with captions/tags.

## Image Strategy

- Use existing `image_url` where possible or placeholders from Unsplash if needed.
- Ensure captions are descriptive.
