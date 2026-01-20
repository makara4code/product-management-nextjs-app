# Product Management App

A modern product management application built with Next.js 16, React 19, and TypeScript using Domain-Driven Design (DDD) architecture.

## Tech Stack

### Core

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (strict mode)
- **Runtime**: [React 19](https://react.dev/) with React Compiler

### UI & Styling

- **CSS Framework**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: tw-animate-css
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (dark mode support)

### State & Data Management

- **Server State**: [TanStack React Query v5](https://tanstack.com/query)
- **URL State**: [nuqs](https://nuqs.47ng.com/) (type-safe URL search params)
- **Tables**: [TanStack Table v8](https://tanstack.com/table)
- **Virtualization**: [TanStack Virtual](https://tanstack.com/virtual)

### Forms & Validation

- **Schema Validation**: [Zod v4](https://zod.dev/)
- **Environment Validation**: [T3 Env](https://env.t3.gg/) (type-safe env vars)
- **Date Handling**: [date-fns](https://date-fns.org/), [react-day-picker](https://react-day-picker.js.org/)

### Developer Experience

- **Linter/Formatter**: [Biome](https://biomejs.dev/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged)

### API

- **Data Source**: [DummyJSON Products API](https://dummyjson.com/docs/products)
- **Request Cancellation**: AbortController integration with TanStack Query

## Prerequisites

- Node.js 22 (see `.nvmrc`)
- pnpm (required package manager)

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd product-management-app

# Copy environment variables
cp .env.example .env.local

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create a production build
pnpm build

# Start the production server
pnpm start
```

### Linting & Formatting

```bash
# Run linter
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

## Architecture

### Project Structure

The project follows **Domain-Driven Design (DDD)** principles with feature-based module organization:

```text
src/
├── app/                          # Next.js App Router
│   ├── (app)/                    # Main application route group
│   │   ├── dashboard/            # Dashboard module
│   │   │   ├── _types/           # Module-specific types
│   │   │   ├── _data/            # Static/mock data
│   │   │   ├── _lib/             # Utility functions
│   │   │   ├── _components/      # Module components
│   │   │   └── page.tsx          # Page component
│   │   ├── products/             # Products module
│   │   │   ├── _types/           # Product types & interfaces
│   │   │   ├── _lib/             # Product utilities
│   │   │   ├── _hooks/           # TanStack Query hooks
│   │   │   ├── _components/      # Skeleton loaders
│   │   │   ├── [id]/             # Product detail routes
│   │   │   ├── error.tsx         # Error boundary
│   │   │   └── new/              # Create product route
│   │   ├── customers/            # Customers module (DDD structure)
│   │   ├── orders/               # Orders module (DDD structure)
│   │   ├── reports/              # Reports module (DDD structure)
│   │   ├── error.tsx             # App-level error boundary
│   │   └── layout.tsx            # App layout with sidebar
│   └── layout.tsx                # Root layout
├── components/
│   ├── error-boundary.tsx        # Reusable error boundary component
│   ├── products/                 # Product-specific components
│   │   ├── table/                # Table sub-components
│   │   │   ├── sort-button.tsx
│   │   │   ├── product-table-row.tsx
│   │   │   ├── product-table-skeleton.tsx
│   │   │   └── table-pagination-footer.tsx
│   │   ├── products-table.tsx
│   │   ├── product-filters.tsx
│   │   └── ...
│   └── ui/                       # shadcn/ui components
├── hooks/
│   └── queries/                  # Shared React Query hooks
├── lib/
│   ├── api/                      # API client with interceptors
│   ├── env.ts                    # Environment validation
│   ├── logger.ts                 # Structured logging utility
│   └── utils.ts                  # Shared utilities
├── services/                     # API service layer
├── types/                        # Global TypeScript types
└── constants/                    # App constants & configuration
```

### Module Structure (DDD Pattern)

Each feature module in `src/app/(app)/` follows this structure:

| Folder          | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `_types/`       | Module-specific TypeScript interfaces and types  |
| `_data/`        | Static data, mock data, and constants            |
| `_lib/`         | Utility functions and helpers                    |
| `_hooks/`       | Custom hooks (TanStack Query, state management)  |
| `_components/`  | Module-specific React components                 |

### Key Architectural Decisions

#### Error Handling

- **Error Boundaries**: React error boundaries at app and module levels
- **API Errors**: Custom `ApiClientError` class with structured error data
- **Graceful Degradation**: User-friendly error UI with recovery options

#### Logging

- **Structured Logger**: Environment-aware logging with levels (debug, info, warn, error)
- **Context Support**: Child loggers with preset context for tracing
- **Extensible**: Ready for integration with Sentry, LogRocket, etc.

#### Configuration

- **Environment Validation**: Zod schemas validate env vars at startup
- **Type-Safe Config**: Centralized configuration with TypeScript types
- **Fail-Fast**: Invalid configuration prevents app startup

#### State Management

- **URL as Single Source of Truth**: Filter, sort, and pagination state stored in URL
- **Server State**: TanStack Query with intelligent caching (5min stale, 30min GC)
- **Optimistic Updates**: Immediate UI feedback for mutations

#### Request Cancellation

- **AbortController Integration**: All API requests support cancellation via AbortSignal
- **TanStack Query Auto-Cancel**: Outdated queries are automatically cancelled on navigation or filter changes
- **Timeout Handling**: Requests timeout after 30s with graceful error handling
- **Race Condition Prevention**: Prevents stale data from overwriting fresh responses

## Features

### Product Management

- Product listing with server-side pagination
- Create, read, update, delete (CRUD) operations
- Search across product title, description, and SKU
- Multi-field sorting (title, price, stock, category, date)
- Advanced filtering (category, price range, date range)
- Table and card view modes with virtualized rendering
- Bulk selection and actions

### Error Recovery

- Automatic error boundary catching
- User-friendly error messages
- "Try again" and "Refresh" recovery options
- Development-only error details

### UI/UX

- Responsive design (mobile, tablet, desktop)
- Dark/light mode with system preference detection
- Toast notifications for user feedback
- Loading skeletons for better perceived performance
- Accessible components via Radix UI primitives

### Dashboard & Reports

- Summary statistics and KPIs
- Revenue charts and visualizations
- Recent orders overview
- Top products listing

## UI Components

The app uses [shadcn/ui](https://ui.shadcn.com/) components built on Radix UI:

- Alert Dialog, Dialog, Sheet (modals)
- Avatar, Badge (display)
- Button, Checkbox, Input, Select, Slider, Textarea (forms)
- Card, Table, Tabs (layout)
- Calendar, Date Picker (date selection)
- Dropdown Menu, Popover, Tooltip (overlays)
- Pagination, Scroll Area (navigation)
- Skeleton (loading states)
- Sidebar, Collapsible (navigation)
- Sonner (toast notifications)

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

| Variable                     | Description                    | Default                  |
| ---------------------------- | ------------------------------ | ------------------------ |
| `NEXT_PUBLIC_API_BASE_URL`   | API base URL                   | `https://dummyjson.com`  |
| `NEXT_PUBLIC_APP_ENV`        | App environment                | `development`            |
| `NODE_ENV`                   | Node environment               | `development`            |

Environment variables are validated at startup using Zod schemas. Invalid configuration will prevent the app from starting.

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Start development server     |
| `pnpm build`     | Create production build      |
| `pnpm start`     | Start production server      |
| `pnpm lint`      | Check for linting issues     |
| `pnpm lint:fix`  | Fix linting issues           |
| `pnpm format`    | Format code with Biome       |

## Code Quality

### TypeScript

- Strict mode enabled
- No implicit any
- Strict null checks
- Comprehensive type coverage

### Documentation

- JSDoc comments on all public APIs
- Inline documentation for complex logic
- Type definitions serve as documentation

### Patterns

- Service layer for API abstraction
- Custom hooks for reusable logic
- Error boundaries for fault tolerance
- Structured logging for debugging

## License

MIT
