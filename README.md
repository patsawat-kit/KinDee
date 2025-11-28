# KinDee 🍜

> A hyper-local food discovery platform built to demonstrate technical competency in Wongnai's core technology stack.

## The "Why"

**KinDee** is a production-ready clone of Wongnai's core restaurant discovery flow, architected to showcase expertise in the exact technologies and patterns used at Wongnai. This project demonstrates:

- **Modern Next.js Architecture**: App Router, Server Components, and Server Actions
- **Performance-First Mindset**: Virtualization, image optimization, and SEO best practices
- **Enterprise Scalability**: Monorepo structure with shared component libraries
- **Production Quality**: TypeScript strict mode, E2E testing, and accessibility standards

This is not a tutorial project—it's a demonstration of production-grade code that could be deployed to serve real users.

---

## Key Features

| Feature | Implementation | Business Impact |
|---------|---------------|-----------------|
| **Server-Side Rendering (SSR)** | Dynamic metadata generation with `generateMetadata` | ✅ SEO-optimized pages for search engines and social sharing |
| **List Virtualization** | `@tanstack/react-virtual` for 100+ items | ✅ 60fps scrolling, reduced DOM nodes from 100 to ~10-15 |
| **Image Optimization** | `next/image` with blur placeholders | ✅ Prevents layout shift (CLS), faster page loads |
| **Monorepo Architecture** | Turborepo with shared UI kit | ✅ Code reusability, faster builds, team scalability |
| **Skeleton Loading** | Custom loading states with Framer Motion | ✅ Perceived performance, smooth UX transitions |
| **TypeScript Strict Mode** | End-to-end type safety | ✅ Fewer runtime errors, better developer experience |

---

## Tech Stack

### Core
- **Next.js 14+** (App Router) - React framework with SSR/SSG
- **TypeScript** (Strict mode) - Type-safe development
- **Tailwind CSS** - Utility-first styling

### Performance & UX
- **@tanstack/react-virtual** - List virtualization
- **Framer Motion** - Page transitions and animations
- **next/image** - Automatic image optimization

### Architecture
- **Turborepo** - Monorepo build system
- **pnpm** - Fast, disk-efficient package manager

### Testing
- **Playwright** - End-to-end testing

---

## Project Structure

```
KinDee/
├── apps/
│   └── web/                 # Next.js application
│       ├── app/             # App Router pages
│       ├── components/      # App-specific components
│       └── lib/             # Utilities and API
├── packages/
│   ├── ui-kit/              # Shared React components
│   └── config/              # Shared configs (TS, ESLint, Tailwind)
└── docs/                    # Documentation
```

---

## How to Run

### Prerequisites
- Node.js 18+
- pnpm 9+

### Development

```bash
# Install dependencies
pnpm install

# Start dev server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start
```

### Testing

```bash
# Run E2E tests with Playwright
pnpm test:e2e

# Run E2E tests in UI mode
pnpm test:e2e:ui
```

---

## Performance Highlights

### Lighthouse Scores (Target)
- **Performance**: 95+ (virtualization + image optimization)
- **SEO**: 100 (SSR + dynamic metadata)
- **Accessibility**: 95+ (semantic HTML + ARIA labels)
- **Best Practices**: 100 (TypeScript + modern patterns)

### Optimizations Implemented
1. **Virtualized Lists**: Only render visible items (10-15 DOM nodes vs. 100)
2. **Image Optimization**: `next/image` with automatic WebP conversion and blur placeholders
3. **Code Splitting**: Automatic route-based splitting with Next.js
4. **Server Components**: Reduce client-side JavaScript bundle size
5. **Skeleton Loaders**: Prevent layout shift during data fetching

---

## Key Pages

### 🏠 Home (`/`)
- Virtualized list of 100 restaurants
- Server-side data fetching
- Smooth scroll performance

### 🍽️ Restaurant Detail (`/restaurant/[slug]`)
- Dynamic SSR with `generateMetadata`
- Open Graph tags for social sharing
- Smooth page transitions with Framer Motion

---

## Architecture Decisions

### Why Turborepo?
- **Faster Builds**: Intelligent caching and parallel execution
- **Code Sharing**: Shared UI components across multiple apps
- **Scalability**: Easy to add new apps (mobile, admin, etc.)

### Why @tanstack/react-virtual?
- **Performance**: Handles 1000+ items without lag
- **Flexibility**: Works with any layout (grid, list, table)
- **Bundle Size**: Smaller than react-window (~3KB gzipped)

### Why Framer Motion over View Transitions API?
- **Browser Support**: Works in all browsers (View Transitions API is Chrome-only)
- **Flexibility**: More control over animation timing and easing
- **Progressive Enhancement**: Can migrate to View Transitions API later

---

## What's Next?

If I were to continue building this project, I would add:

1. **Search & Filtering**: URL-based search params with debounced input
2. **Infinite Scroll**: Replace pagination with infinite loading
3. **User Reviews**: CRUD operations with optimistic updates
4. **Map Integration**: Google Maps API for location-based discovery
5. **PWA Support**: Offline-first with service workers
6. **Analytics**: Track user behavior with Vercel Analytics

---

## Contact

**Built by**: [Your Name]  
**LinkedIn**: [Your LinkedIn]  
**GitHub**: [Your GitHub]  
**Portfolio**: [Your Portfolio]

---

## License

MIT License - This is a portfolio project for demonstration purposes.

---

**Note to Wongnai Hiring Team**: This project demonstrates my ability to build production-ready applications using your core tech stack. I'm excited about the opportunity to bring this level of craftsmanship to Wongnai's engineering team. Let's talk! 🚀