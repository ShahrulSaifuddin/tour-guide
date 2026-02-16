# Roadmap - Shahrul Private Tour Guide

| Phase | Name            | Status        | Description                                           |
| :---- | :-------------- | :------------ | :---------------------------------------------------- |
| 1     | Foundation      | **Planned**   | UI shell, Authentication, Public Calendar (read-only) |
| 2     | Booking System  | Future        | Slots, Booking Flow, Admin Availability Manager       |
| 3     | Feedback System | Future        | Feedback CRUD, Public Display, Moderation             |
| 4     | Premium Polish  | **Completed** | Animations, Performance, SEO                          |
| 5     | About           | **Completed** | Personal bio, services, contact info                  |
| 6     | Destination     | **Completed** | List of destinations and details                      |

## Phase 1: Foundation

**Goal:** Establish project structure and core public/auth features.

- [ ] Initialize React + Vite project
- [ ] Configure Supabase Client & Auth
- [ ] Create Layout (Header, Footer)
- [ ] Implement Routing
- [ ] Build Public Calendar View (UI only)

## Phase 2: Booking System

**Goal:** Enable users to book slots and admin to manage availability.

- [ ] Design Database Schema (bookings, slots)
- [ ] Implement Admin Dashboard (Availability Manager)
- [ ] Create Booking Flow (Select -> Auth -> Confirm)
- [ ] Build "My Bookings" page

## Phase 3: Feedback System

**Goal:** Build trust with verified reviews.

- [ ] Design Feedback Schema
- [ ] Create Feedback Form (Text + Rating + Photo)
- [ ] Public Reviews List
- [ ] Admin Moderation Tools

## Phase 4: Premium Polish

**Goal:** "Very expensive" feel and high performance.

- [ ] Scroll-driven animations (Framer Motion)
- [ ] Image optimization
- [ ] SEO Metadata & OpenGraph

## Phase 5: About

**Goal:** Introduce the guide and services to build personal connection.

- [ ] Create About Page
- [ ] Add Personal Bio & Photo
- [ ] List Services/Packages
- [ ] Contact/Social Links

## Phase 6: Destination

**Goal:** Showcase the various locations available for tours.

- [ ] Create Destinations Listing Page
- [ ] Create Destination Details Page (Dynamic Route)
- [ ] Integrate with Database (Destinations table)
- [ ] SEO & OpenGraph for Destinations
