# `CLAUDE.md` — Campus Bus Ticket Booking System Frontend Engineering Guide

# Campus Bus Ticket Booking System — Frontend Engineering Guide

## Purpose

This document defines the frontend engineering standards, architecture principles, UI philosophy, coding practices, and development workflow for the Campus Bus Ticket Booking System.

This guide is frontend-only. Backend development belongs in a separate `backend/` directory and uses the NestJS stack.

Do not mix backend implementation details, backend folder structure, or backend architecture decisions into this document.

This is a production-grade enterprise application.

The frontend must be:
- scalable,
- modular,
- secure,
- maintainable,
- responsive,
- role-driven,
- performant,
- and operationally reliable.

This document acts as the global development instruction file for:
- developers,
- AI coding agents,
- contributors,
- frontend architects,
- and maintainers.

---

# 1. Core Frontend Philosophy

The frontend must behave like a modern SaaS platform.

Target quality level:
- Stripe Dashboard
- Linear
- Vercel
- Ramp
- Notion
- Enterprise operational dashboards

Avoid:
- template-like dashboards,
- over-animated UI,
- inconsistent component styling,
- random Tailwind usage,
- tightly coupled logic,
- page-centric architecture.

The frontend must prioritize:
- clarity,
- speed,
- usability,
- accessibility,
- operational efficiency,
- maintainability.

---

# 2. Frontend Stack

## Core Framework

- Next.js 15 (App Router)
- TypeScript
- React Server Components where appropriate

## Styling

- Tailwind CSS
- CSS Variables
- shadcn/ui
- Radix UI primitives

## State Management

### Global Client State
- Zustand

### Server State
- TanStack Query

## Forms & Validation

- React Hook Form
- Zod

## Tables

- TanStack Table

## Charts

- Recharts

## Animation

- Framer Motion

Animations must remain subtle and purposeful.

## Notifications

- Sonner

## Icons

- Lucide React

## Date Handling

- date-fns

---

# 3. Architecture Philosophy

## NEVER BUILD BY PAGES

Frontend architecture must be:
- feature-driven,
- domain-driven,
- reusable,
- modular.

---

# 4. Production Directory Structure

```txt
src/
│
├── app/
│   ├── (public)/
│   ├── (student)/
│   ├── (staff)/
│   ├── (admin)/
│   ├── (fleet)/
│   ├── api/
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── shared/
│   ├── dashboard/
│   ├── forms/
│   ├── tables/
│   ├── charts/
│   ├── feedback/
│   └── navigation/
│
├── features/
│   ├── auth/
│   ├── booking/
│   ├── reservation/
│   ├── payments/
│   ├── routes/
│   ├── holidays/
│   ├── students/
│   ├── notifications/
│   ├── analytics/
│   ├── qr-checkin/
│   ├── maintenance/
│   ├── reports/
│   └── audit/
│
├── services/
│   ├── api/
│   ├── auth/
│   ├── websocket/
│   └── storage/
│
├── hooks/
│
├── store/
│
├── lib/
│   ├── constants/
│   ├── permissions/
│   ├── validators/
│   ├── utils/
│   └── configs/
│
├── types/
│
├── styles/
│
├── providers/
│
└── middleware.ts
````

---

# 5. Feature Architecture Rules

Each feature module must contain:

```txt
feature/
├── api/
├── components/
├── hooks/
├── schemas/
├── services/
├── store/
├── types/
├── utils/
└── index.ts
```

Business logic must stay inside feature modules.

Never place feature logic inside pages.

---

# 6. UI/UX Philosophy

## Theme Direction

The UI should be:

* bright,
* modern,
* colorful,
* professional,
* minimal,
* operationally clear.

Avoid:

* dark cyberpunk themes,
* excessive gradients,
* heavy glassmorphism,
* neon effects,
* visual clutter.

---

# 7. Design System Rules

## Mandatory Design Tokens

Use CSS variables for:

* colors,
* spacing,
* radii,
* shadows,
* typography,
* sidebar width,
* layout sizes.

Example:

```css
:root {
  --radius: 1rem;
  --sidebar-width: 280px;
  --shadow-soft: 0 2px 10px rgba(0,0,0,0.04);
}
```

---

# 8. Color System

## Primary Palette

* Primary → Indigo / Blue
* Secondary → Cyan
* Success → Emerald
* Warning → Amber
* Danger → Rose
* Info → Sky

## Surface Colors

```txt
Background → #F8FAFC
Card → #FFFFFF
Muted → #F1F5F9
Border → #E2E8F0
```

---

# 9. Typography Rules

## Font

* Raleway from google fonts

## Typography Scale

```txt
12px → labels
14px → metadata
16px → body
18px → section headings
24px → dashboard headings
32px+ → KPI stats
```

Typography must remain:

* consistent,
* readable,
* accessible,
* clean.

---

# 10. shadcn/ui Usage Rules

## NEVER install all components blindly.

Only install required components.

Preferred components:

* button
* input
* form
* dialog
* dropdown-menu
* select
* table
* tabs
* tooltip
* command
* calendar
* badge
* sheet
* card
* skeleton
* toast

---

# 11. Component Engineering Rules

## Components must be:

* reusable,
* composable,
* accessible,
* isolated,
* testable.

## Avoid:

* giant components,
* deeply nested JSX,
* duplicated logic,
* inline business rules.

---

# 12. State Management Rules

## Zustand

Use for:

* UI state,
* reservation timers,
* sidebar state,
* filters,
* temporary client state.

## TanStack Query

Use for:

* API data,
* caching,
* mutations,
* optimistic updates,
* retries,
* invalidation.

Never use Zustand as API cache.

---

# 13. API Layer Rules

All API calls must go through:

```txt
services/api/
```

Never directly call fetch inside components.

Use:

* centralized API clients,
* interceptors,
* auth handling,
* retry handling,
* error normalization.

---

# 14. Authentication & Security

Frontend security rules:

* Never trust frontend permissions.
* Never expose sensitive data.
* Never expose admin-only logic.
* Never hardcode secrets.
* Never store sensitive auth tokens insecurely.

Use:

* secure cookies,
* middleware protection,
* route guards,
* permission wrappers.

---

# 15. RBAC Rules

Never use:

```tsx
if (role === "admin")
```

Use permission-driven rendering:

```tsx
<Can permission="manage_routes">
```

Permissions must be:

* centralized,
* typed,
* configurable.

---

# 16. Routing Rules

Use route groups:

* public
* student
* staff
* admin
* fleet

Layouts must be isolated per role.

---

# 17. Booking Flow Engineering

The booking flow is the most critical UX.

It must behave similarly to:

* airline booking,
* transport reservation systems,
* ticketing platforms.

Booking flow:

```txt
Journey Selection
→ Travel Dates
→ Route Selection
→ Fare Summary
→ Reservation Lock
→ Payment
→ Ticket Generation
```

---

# 18. Reservation Timer Rules

Reservation system requirements:

* frontend timer → 7 minutes
* backend timer → 9 minutes

Frontend timer must:

* persist after refresh,
* sync with backend timestamps,
* recover from reconnects,
* handle expiry gracefully.

---

# 19. Table Engineering Rules

All tables must use:

* TanStack Table

Required features:

* pagination,
* sorting,
* filtering,
* server-side search,
* CSV export,
* loading states,
* empty states.

Never duplicate table implementations.

---

# 20. Analytics Dashboard Rules

Analytics must prioritize:

* readability,
* clarity,
* operational insights.

Avoid:

* flashy charts,
* unnecessary gradients,
* excessive animation.

Use:

* consistent chart spacing,
* unified legends,
* simple color systems.

---

# 21. QR Check-in Rules

QR check-in UI is operational software.

Prioritize:

* speed,
* reliability,
* large interaction areas,
* fast scanning,
* minimal distractions.

Avoid decorative UI here.

---

# 22. Responsive Design Rules

## Student UI

* mobile-first

## Admin/Fleet UI

* desktop-first
* tablet optimized

All pages must remain fully responsive.

---

# 23. Loading & Feedback Rules

The application must always provide:

* skeleton loaders,
* loading indicators,
* retry states,
* success states,
* warning states,
* error states,
* optimistic updates.

Never leave blank screens.

---

# 24. Animation Rules

Animations must:

* improve UX,
* improve perceived performance,
* guide attention.

Avoid:

* excessive motion,
* bouncing effects,
* distracting transitions.

Preferred animations:

* fade,
* subtle slide,
* hover feedback,
* smooth page transitions.

---

# 25. Form Rules

All forms must use:

* React Hook Form
* Zod validation

Forms must include:

* loading states,
* validation states,
* error messages,
* disabled states,
* accessibility labels.

---

# 26. Error Handling Rules

All async operations must handle:

* loading,
* error,
* retry,
* empty,
* success states.

Use centralized error handling.

Never silently fail.

---

# 27. Accessibility Rules

The application must:

* support keyboard navigation,
* maintain color contrast,
* support screen readers,
* use semantic HTML,
* provide visible focus states.

Accessibility is mandatory.

---

# 28. Code Quality Rules

## Required

* strict TypeScript
* typed APIs
* typed forms
* ESLint
* Prettier

## Avoid

* any
* massive files
* duplicated logic
* deeply nested conditionals
* prop drilling

---

# 29. Naming Conventions

## Components

PascalCase

```txt
BookingCard.tsx
```

## Hooks

camelCase with use prefix

```txt
useReservationTimer.ts
```

## Stores

```txt
bookingStore.ts
```

## Types

```txt
booking.types.ts
```

---

# 30. Frontend Development Order

## Phase 1

Foundation

* theme
* layouts
* auth
* routing
* sidebar
* providers

## Phase 2

Core UI System

* tables
* forms
* modals
* notifications
* cards
* charts

## Phase 3

Authentication & RBAC

## Phase 4

Student Modules

## Phase 5

Admin Modules

## Phase 6

Staff Operations

## Phase 7

Advanced Features

* realtime updates
* notifications
* audit logs
* exports
* maintenance mode

---

# 31. Performance Rules

The frontend must:

* minimize client components,
* avoid unnecessary rerenders,
* lazy load heavy modules,
* optimize tables,
* optimize charts,
* virtualize large lists,
* cache API requests.

---

# 32. Testing Rules

Required:

* unit testing,
* integration testing,
* critical flow testing.

Critical flows:

* login,
* booking,
* payment,
* reservation expiry,
* QR scanning.

---

# 33. Logging & Monitoring

Frontend must support:

* error tracking,
* performance tracking,
* operational monitoring.

Recommended:

* Sentry
* PostHog

---

# 34. Maintainability Rules

The system must remain:

* modular,
* scalable,
* refactor-friendly,
* developer-friendly.

Business rules must never be scattered.

Centralize:

* permissions,
* configs,
* constants,
* validation schemas,
* API contracts.

---

# 35. Final Principle

This frontend is not a demo project.

Every feature must be designed as:

* scalable,
* production-ready,
* maintainable,
* enterprise-grade.

Always prioritize:

1. clarity,
2. maintainability,
3. consistency,
4. performance,
5. accessibility,
6. operational usability.

