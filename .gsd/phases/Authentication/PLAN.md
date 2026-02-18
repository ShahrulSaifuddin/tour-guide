---
phase: 3
---

# Phase 3: Authentication (Facebook Login)

## Goal

Implement Facebook OAuth login to allow users to sign in with their Facebook accounts.

## Strategy

1.  **Auth Context**: Start by exposing the `signInWithFacebook` method in `AuthContext` using the existing Supabase client.
2.  **UI Integration**: Add a "Continue with Facebook" button to the `AuthPage` component, matching the style of the Google login button.
3.  **Supabase Configuration**: (User Action Required) The user needs to configure the Facebook provider in the Supabase dashboard with their App ID and Secret.

## Tasks

### Wave 1: Implementation

<task>
  <name>Update Auth Context</name>
  <files>src/context/AuthContext.jsx</files>
  <action>
    - Add `signInWithFacebook` function to `AuthContext` provider value.
    - Use `supabase.auth.signInWithOAuth({ provider: 'facebook' })`.
  </action>
  <verify>Lint check passes.</verify>
</task>

<task>
  <name>Update Auth Page UI</name>
  <files>src/pages/AuthPage.jsx</files>
  <action>
    - Import `signInWithFacebook` from context.
    - Add a "Continue with Facebook" button below the Google button.
    - Use an appropriate SVG icon for Facebook (blue logo).
    - Handle the login click event.
  </action>
  <verify>App builds successfully. Button appears on /auth page.</verify>
</task>

## Success Criteria

- [ ] `AuthContext` exports `signInWithFacebook`.
- [ ] `AuthPage` displays "Continue with Facebook" button.
- [ ] Clicking the button triggers Supabase OAuth redirect (requires valid Supabase config).
- [ ] Application builds without errors.

> [!IMPORTANT]
> **User Manual Step**: You must configure the Facebook Login provider in your Supabase project settings (Authentication -> Providers -> Facebook) with your Facebook App ID and App Secret for this to work.
