# UI Spec Summary - Hacker Portfolio

## UI Overview

**Name:** Dan Castrillo Personal Portfolio (Hacker/Matrix Theme)
**ID:** hacker-portfolio
**Stack:** Next.js 14+ App Router, shadcn/ui, Drizzle ORM, PostgreSQL, Vercel
**Status:** specified

**Description:** A cyberpunk/Matrix-themed personal portfolio website showcasing Dan Castrillo's 10 years of software engineering experience. Features terminal-style interface with Matrix rain animation, glitch effects, and green-on-black color scheme. Includes interactive CV download with analytics tracking.

**Key Characteristics:**
- Single-page application with smooth scroll navigation
- Matrix rain background animation (Canvas-based)
- Terminal command aesthetic throughout
- Mobile-first responsive design (Tailwind breakpoints)
- Server Components with selective Client Components for interactivity
- Analytics tracking for CV downloads and page views
- Type-safe with Drizzle ORM
- Accessibility-first (WCAG 2.1 AA, reduced motion support)

## Stack Details

**Frontend:**
- Framework: Next.js 14+ (App Router, Server Components)
- UI Library: shadcn/ui (Radix UI primitives + Tailwind CSS)
- Styling: Tailwind CSS (custom Matrix theme)
- Fonts: JetBrains Mono, Fira Code (monospace)
- Type Safety: TypeScript (strict mode)
- Icons: Lucide React

**Backend:**
- Database: PostgreSQL (or Vercel Postgres)
- ORM: Drizzle (type-safe SQL)
- API: Next.js Route Handlers + Server Actions
- Analytics: Custom tracking (CV downloads, page views)

**Deployment:**
- Platform: Vercel (Edge runtime)
- Database: Vercel Postgres or AWS RDS
- CDN: Vercel Edge Network
- Domain: Custom domain (e.g., dancastrillo.com)

**Development:**
- Package Manager: pnpm/npm/yarn
- Testing: Vitest (unit) + Playwright (e2e)
- Linting: ESLint + Prettier
- Git: GitHub with Copilot integration

## Design System

**Color Palette (Matrix-inspired):**
- Background: `#000000` (black)
- Primary: `#00ff00`, `#00ff41` (Matrix green)
- Secondary: `#00ffff` (cyan)
- Accent: `#ffffff` (white)
- Muted: `gray-800`, `gray-900`
- Border: `green-500/10`, `green-500/20`, `green-500/30`

**Typography:**
- Primary Font: 'JetBrains Mono', 'Fira Code', monospace
- Fallback: system-ui, monospace
- Base Size: 16px (1rem)
- Scale: text-xs (12px) → text-6xl (60px)
- Line Height: 1.5 (body), 1.2 (headings)

**Effects:**
- Text glow: `text-shadow: 0 0 10px rgba(0,255,0,0.8)`
- Border glow: `box-shadow: 0 0 20px rgba(0,255,0,0.5)`
- Glitch: CSS animations with clip-path
- Matrix rain: Canvas-based falling characters
- Cursor blink: CSS keyframes animation
- Scan lines: `repeating-linear-gradient` overlay

## Content Structure

### Sections (5 main sections)

1. **Hero** - Full viewport height intro with typing animation
   - Name: DAN CASTRILLO
   - Title: SOFTWARE ENGINEER
   - Tagline: 10 YEARS BUILDING SYSTEMS

2. **About** - Profile bio (terminal cat command)
   - 10 years of experience across full stack
   - Polyglot: JS/TS, Python, Go, Rust, C, Odin
   - Track record of performance, mentoring, shipping

3. **Skills** - Categorized skill grid (terminal ls command)
   - Languages (7): JavaScript/TypeScript, Python, Go, Rust, C, Odin, Ruby
   - Frontend (7): React, Vue, Next.js, Nuxt, Redux, Shadcn UI, Tailwind
   - Backend (5): Node.js, Express, GraphQL, Django, Rails
   - Specialized (5): OpenCV, Cypress, SQL, Bash, Lua
   - Progress bars showing proficiency levels (0-100%)

4. **Work History** - Timeline (terminal git log command)
   - 6 positions spanning 2015-present
   - Current: Upwork (Senior Software Engineer, 2023-Current)
   - Notable: Lantum, Tecnologia Urbana, Gamesys
   - Expandable nodes with highlights and tech stack

5. **Contact** - Contact info with copy-to-clipboard (terminal cat command)
   - Email: dan@devoured.io
   - Phone: +584122650770
   - Location: Caracas, Venezuela
   - GitHub: github.com/dvrd
   - Download CV button (with analytics tracking)

### Education

- Fullstack Development, Academia Hack (2014-2015)

## Observation Workflow

### Observation Checklist
- [x] This is a greenfield project (no existing UI to observe)
- [x] CV content extracted from Typst source
- [x] Design concept: Matrix/hacker aesthetic
- [x] Interaction patterns: Single-page with smooth scroll
- [x] Analytics requirements: Track CV downloads and page views
- [x] Responsive strategy: Mobile-first with Tailwind
- [x] Accessibility: WCAG 2.1 AA, reduced motion support

### Design Decisions
1. **Why Matrix/Hacker theme?** - User request for hacker aesthetic
2. **Why single-page?** - Portfolio sites work best as single-page with smooth scroll
3. **Why Canvas for Matrix rain?** - Performance and customization
4. **Why analytics tracking?** - User wants to know who downloads CV
5. **Why minimal database?** - Portfolio is mostly static, only track analytics

## Artifact Manifest

| Artifact | File | Purpose | Status |
|----------|------|---------|--------|
| Wireframe | `wireframe.txt` | ASCII layout + state matrix + effects | ✅ Complete |
| Data Fixtures | `data-fixtures.json` | CV data + Drizzle schema + API contracts | ✅ Complete |
| Component Tree | `component-tree.txt` | Next.js hierarchy (Server/Client split) | ✅ Complete |
| Binding Map | `binding-map.txt` | Element → data/action mapping | ✅ Complete |
| Responsive Spec | `responsive.md` | Tailwind responsive patterns (mobile-first) | ✅ Complete |
| Summary | `summary.md` | This file | ✅ Complete |

## Key Implementation Insights

**Server vs Client Components:**
- Default to Server Components (better performance, less JS)
- Use Client Components for: animations, canvas, interactions
- Server Actions for: analytics tracking (CV downloads, page views)

**Animations & Effects:**
- Matrix rain: Client Component with Canvas API
- Glitch text: Client Component with CSS animations
- Typing animation: Client Component with useEffect
- Scan lines: Client Component with fixed overlay
- All disabled with `prefers-reduced-motion: reduce`

**Data Flow:**
- CV data: Static (imported from lib/data.ts)
- Analytics: Server Actions → PostgreSQL via Drizzle
- No user authentication needed (public portfolio)
- No CMS needed (content rarely changes)

**Responsive Strategy:**
- Mobile-first with Tailwind utilities
- Sheet (slide-in) for mobile/tablet navigation
- Horizontal nav for desktop (lg:flex)
- Matrix rain disabled on mobile (performance)
- 1 → 2 → 4 column skill grid
- Compact → expanded timeline

**Performance:**
- Server Components reduce client-side JS bundle
- Matrix rain uses requestAnimationFrame (60fps)
- Static CV data (no DB queries on page load)
- Analytics tracked async (doesn't block render)
- Lazy loading for off-screen content

**SEO:**
- Server-rendered for search engine crawling
- Metadata API for Open Graph tags
- Semantic HTML (header, nav, main, section, footer)
- Proper heading hierarchy (h1 → h6)

## Tech Stack Rationale

**Why Next.js 14+?**
- App Router for modern React patterns
- Server Components for performance
- Built-in API routes (no separate backend)
- Vercel deployment integration
- Excellent TypeScript support

**Why shadcn/ui?**
- Copy-paste components (no npm bloat)
- Built on Radix UI (accessibility built-in)
- Customizable with Tailwind
- Perfect for hacker/terminal aesthetic

**Why Drizzle ORM?**
- Type-safe SQL queries
- Lightweight (vs Prisma)
- Great PostgreSQL support
- Migrations with drizzle-kit

**Why PostgreSQL?**
- Mature, reliable
- Vercel Postgres integration
- JSONB for flexible data (if needed later)

**Why Vercel?**
- Zero-config Next.js deployment
- Edge runtime for global performance
- Preview deployments per PR
- Built-in analytics

## Next Steps

1. **Implementation:** Use GitHub Copilot to implement following this spec
2. **Database:** Setup Drizzle schema and migrations
3. **Testing:** Unit tests (Vitest), e2e tests (Playwright)
4. **Deployment:** Deploy to Vercel with custom domain
5. **Analytics:** Monitor CV downloads and page views
6. **SEO:** Submit sitemap, optimize metadata
7. **Performance:** Lighthouse score >90

## Success Criteria

**Functionality:**
- ✅ All sections render correctly
- ✅ Smooth scroll navigation works
- ✅ CV downloads successfully
- ✅ Analytics tracking works
- ✅ Copy-to-clipboard functions
- ✅ Mobile navigation (Sheet) works

**Design:**
- ✅ Matrix rain animation (60fps)
- ✅ Glitch effects on text
- ✅ Terminal aesthetic throughout
- ✅ Green-on-black color scheme
- ✅ Monospace fonts (JetBrains Mono)

**Performance:**
- ✅ Lighthouse score >90
- ✅ LCP <2.5s
- ✅ FCP <1.8s
- ✅ CLS <0.1
- ✅ No console errors

**Accessibility:**
- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation works
- ✅ Screen reader compatible
- ✅ Reduced motion respected
- ✅ Color contrast 4.5:1+

**Responsive:**
- ✅ Mobile (320px-639px) works
- ✅ Tablet (640px-1024px) works
- ✅ Desktop (1024px+) works
- ✅ Touch targets 44×44px+
- ✅ Cross-browser compatible

## Risks & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Matrix rain performance on low-end devices | Medium | Medium | Disable on mobile, reduce frame rate on tablet |
| Glitch effects accessibility | Low | Medium | Disable with prefers-reduced-motion |
| CV file not found (404) | Low | High | Ensure PDF in /public, add 404 handling |
| Analytics database connection failure | Low | Low | Graceful degradation (track client-side fallback) |
| Overuse of animations causing motion sickness | Medium | Medium | Respect prefers-reduced-motion, provide toggle |

## Development Timeline Estimate

**Phase 1: Setup (Day 1)**
- Initialize Next.js project
- Install shadcn/ui components
- Setup Drizzle + PostgreSQL
- Configure Tailwind theme

**Phase 2: Core Components (Days 2-3)**
- Header with navigation
- Hero section with typing animation
- About section
- Footer

**Phase 3: Interactive Sections (Days 4-5)**
- Skills section with progress bars
- Work history timeline (expandable)
- Contact section (copy-to-clipboard)

**Phase 4: Effects (Day 6)**
- Matrix rain canvas animation
- Glitch text effect
- Scan lines overlay
- Terminal cursor blink

**Phase 5: Analytics & Backend (Day 7)**
- Drizzle schema + migrations
- Server Actions (track CV download, page views)
- API routes (analytics stats)

**Phase 6: Polish & Testing (Days 8-9)**
- Responsive testing (mobile, tablet, desktop)
- Accessibility testing (keyboard, screen reader)
- Performance optimization (Lighthouse)
- Cross-browser testing

**Phase 7: Deployment (Day 10)**
- Deploy to Vercel
- Configure custom domain
- Setup environment variables
- Monitor analytics

**Total: ~10 days for full implementation**

## Maintenance Plan

**Regular:**
- Update CV content (as needed)
- Monitor analytics (weekly)
- Check Lighthouse scores (monthly)

**Periodic:**
- Update dependencies (quarterly)
- Review and optimize performance (quarterly)
- Backup database (weekly automated)

**As Needed:**
- Fix bugs reported by users
- Add new sections/content
- Improve animations/effects

## References

**Documentation:**
- Next.js: https://nextjs.org/docs
- shadcn/ui: https://ui.shadcn.com
- Drizzle: https://orm.drizzle.team
- Tailwind: https://tailwindcss.com
- Vercel: https://vercel.com/docs

**Inspiration:**
- Matrix rain: https://codepen.io/wefiy/pen/WPpEwo
- Terminal aesthetic: https://github.com/nvbn/thefuck
- Glitch effect: https://css-tricks.com/glitch-effect-text-images-svg

## Contact for Questions

- User: dan@devoured.io
- GitHub: github.com/dvrd
- Location: Caracas, Venezuela
