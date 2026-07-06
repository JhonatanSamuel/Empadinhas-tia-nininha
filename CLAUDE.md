# Project Rules & Architecture Guide

## Modular File Structure

- Use `/app` directory for routing (App Router) with Next.js 16+
- Keep business logic separate from UI components
- Organize with clear directories: `/components`, `/hooks`, `/services`, `/lib`, `/styles`

## Page Structure — Standard Pattern

```
/page-name/
├── page.tsx                    # Server Component (entry point)
├── _components/                # Page-specific components
│   └── content.tsx            # Main Client Component
├── _actions/                   # Server Actions
│   └── action-name.ts
└── _data-access/              # Data Access Layer
    └── get-data.ts
```

### `page.tsx` — Server Component

- **Always** a Server Component (no `"use client"`)
- Responsibilities: fetch initial data via `_data-access`, validate auth, pass data to client components

```typescript
import { ContentComponent } from "./_components/content";
import { getData } from "./_data-access/get-data";

export default async function Page() {
  const data = await getData();
  return <ContentComponent data={data} />;
}
```

### `_components/` — Page Components

- Prefix `_` marks private folders (no route generation)
- Default to Server Components; use `"use client"` only when strictly necessary (state, effects, event handlers)

### `_actions/` — Server Actions

- Marked with `"use server"`
- Validate with Zod, check auth, return typed results

```typescript
"use server";
import { z } from "zod";

const schema = z.object({ field: z.string().min(3) });
export type ActionResult = { success: boolean; message?: string; errors?: Record<string, string[]> };

export async function updateAction(input: z.infer<typeof schema>): Promise<ActionResult> {
  const validation = schema.safeParse(input);
  if (!validation.success) return { success: false, errors: validation.error.flatten().fieldErrors };
  // db operation...
  return { success: true, message: "Success!" };
}
```

### `_data-access/` — Data Access Layer

- Server-only data fetching functions
- Encapsulates DB queries, checks permissions, returns typed data
- Never expose sensitive data

## Component Placement

- **Page-specific**: place in `/page-name/_components/` (only used in that route)
- **Global/shared**: place in `/src/components/` only when reused across multiple pages — ask first if unsure
- **Always** name private folders with leading underscore: `_components`, `_actions`, `_data-access`

## Server vs. Client Components

| Server Components | Client Components |
|---|---|
| Default choice | Only when strictly necessary |
| Fetch data directly | Receive data via props |
| Access server resources | Use hooks (useState, useEffect) |
| No hooks or event handlers | Handle events and interactions |

Use `"use client"` only for: event listeners, browser APIs, state management, client-only libraries.

## Naming Conventions

- Event handlers: prefix with `handle` → `handleClick`, `handleSubmit`
- Boolean variables: prefix with verbs → `isLoading`, `hasError`, `canSubmit`
- Custom hooks: prefix with `use` → `useAuth`, `useForm`
- Abbreviations allowed: `err`, `req`, `res`, `props`, `ref`
- Use complete words for everything else

## Forms — Required Pattern

All forms **must** use:
- ShadcnUI components
- React Hook Form
- Zod for validation

Reference: https://ui.shadcn.com/docs/forms/react-hook-form

## UI & Styling

- **ShadcnUI** for consistent, accessible components
- **Radix UI** primitives for customizable elements
- **TailwindCSS** for styling — no inline styles
- No large monolithic components
- Keep components small, single responsibility

## TypeScript

- TypeScript everywhere — strict types for props, state, API responses
- Define Zod schemas and infer types from them
- No `any` types

## Data Flow

```
1. User accesses page
   ↓
2. page.tsx (Server Component)
   → fetches via _data-access
   → validates auth
   ↓
3. _components/content.tsx (Client Component)
   → receives data as props
   → renders interactive UI
   → user interacts (form, button)
   ↓
4. _actions/ (Server Action)
   → validates with Zod
   → updates DB
   → returns typed result
   ↓
5. content.tsx
   → receives result
   → updates UI (toast, form errors, etc.)
```

## Separation of Concerns

- No API calls or business logic inside components
- Use hooks for state management and side effects (useSWR, React Query, custom hooks)
- UI components must be presentational — no logic other than rendering
- Containers handle data management and complex state

## Code Quality

- Follow SOLID principles
- Meaningful variable names, no magic numbers
- Functional components and hooks only (no class components)
- No large monolithic components
- No comments unless the WHY is non-obvious

## Authentication

- Use **Supabase** for authentication management
- Implement CSRF protection and secure cookies
- Always verify auth in actions and data-access layers

## Environment Variables

- Use `.env` files for secrets and configuration
- Never expose sensitive keys in the frontend

## Input Validation

- Use **Zod** for all schema validation
- Sanitize all inputs to prevent XSS and SQL injection

## Database

- Use **Prisma** or **Drizzle** for efficient data access
- Optimize queries — avoid N+1 problems

## Error Handling

- Use **Sentry** for error tracking and performance monitoring
- Implement graceful error handling with fallback components

## Testing

- **Jest** + **React Testing Library** for unit and integration tests
- High coverage on critical components and services

## Performance

- Default to Server Components to reduce client bundle
- Use URL query parameters for server state management
- Dynamic imports for large components (`next/dynamic`)
- Run Lighthouse and Web Vitals checks regularly

## When to Create Each Folder

| Folder | When |
|---|---|
| `_components/` | Always when the page needs UI |
| `_actions/` | When modifying data (create, update, delete) |
| `_data-access/` | When fetching data from DB |

## Key Notes

1. Folders prefixed with `_` do not generate routes in Next.js
2. Always type inputs and outputs of all functions
3. Always validate data on the server with Zod
4. Always check authentication in actions and data-access
5. Never return sensitive data from actions or data-access functions
