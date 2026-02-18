---
phase: 4
---

# Phase 4: Feedback System

## Goal

Activate the Feedback System to allow authenticated users to submit reviews and the Admin to moderate them.

## Context

- `PRD.md` Sections 8, 9, 11, 12.
- Existing components: `FeedbackPage`, `FeedbackForm`, `ReviewsList`, `ReviewCard`, `AdminFeedbackManager`.
- Frontend code is mostly implemented but requires Backend (Supabase) setup to function.

## Tasks

### Wave 1: Backend Setup

<task>
  <name>Create Database Schema</name>
  <files>supabase/schema.sql</files>
  <action>
    - Create a SQL file with definitions for:
      - `feedback` table (id, user_id, rating, title, message, photo_url, is_hidden, edited_by_admin, created_at).
      - RLS policies for `feedback` (Insert: Auth only, Select: Public/Owner, Update: Admin/Owner).
      - Storage bucket `feedback-photos` and policies (Public Read, Auth Upload).
  </action>
  <verify>File `supabase/schema.sql` exists with correct SQL.</verify>
</task>

### Wave 2: Frontend Verification

<task>
  <name>Verify Component Integration</name>
  <files>src/pages/FeedbackPage.jsx</files>
  <action>
    - Verify `FeedbackPage` imports and uses `ReviewsList` and `FeedbackForm`.
    - Ensure `ReviewsList` fetches from `feedback` table with `profiles` join.
    - Ensure `FeedbackForm` handles image upload to `feedback-photos`.
    - (No code changes expected unless bugs found during review).
  </action>
  <verify>Build passes. Component structure confirmed.</verify>
</task>

## Success Criteria

- [ ] `supabase/schema.sql` generated for user to run.
- [ ] Application builds successfully.
- [ ] `FeedbackPage` is accessible and structure is correct.

> [!IMPORTANT]
> **User Manual Step**: You must run the generated `supabase/schema.sql` in your Supabase Dashboard SQL Editor to create the necessary tables and policies.
