# Hacker Portfolio - UI Specification

**Dan Castrillo Personal Portfolio with Matrix/Cyberpunk Aesthetic**

## Quick Start

This UI specification is ready for implementation by **GitHub Copilot** or manual development.

### For GitHub Copilot Implementation

1. **Create GitHub Issue:**
   ```bash
   gh issue create \
     --title "feat: Build Dan Castrillo Hacker Portfolio" \
     --body-file .github/ISSUE_TEMPLATE.md \
     --label "enhancement,portfolio,copilot-ready"
   ```

2. **Assign to GitHub Copilot:**
   - Via GitHub UI: Open issue → "Assign to Copilot"
   - Or use GitHub API (see spec.json for custom instructions)

3. **Monitor Progress:**
   - Copilot will create a branch and PR
   - Check PR for implementation progress
   - Review and approve when ready

### For Manual Implementation

1. **Read the Specification:**
   - Start with `spec.json` (main configuration)
   - Read `irVisual/summary.md` (overview)
   - Follow implementation phases in `spec.json`

2. **Explore Visual IR:**
   - `wireframe.txt` - Layout and structure
   - `data-fixtures.json` - Data schema and content
   - `component-tree.txt` - Component hierarchy
   - `binding-map.txt` - Data/action bindings
   - `responsive.md` - Responsive patterns

3. **Follow Implementation Phases:**
   - Phase 1: Project Setup
   - Phase 2: Database Setup
   - Phase 3: Layout & Theme
   - Phase 4: Server Components
   - Phase 5: Client Components
   - Phase 6: Effects & Animations
   - Phase 7: Server Actions & Analytics
   - Phase 8: Responsive & Polish
   - Phase 9: Testing
   - Phase 10: Deployment

## Specification Overview

**Stack:**
- Next.js 14+ (App Router, Server Components)
- shadcn/ui (Radix UI + Tailwind CSS)
- Drizzle ORM + PostgreSQL
- Vercel deployment

**Key Features:**
- Matrix rain background animation (Canvas)
- Terminal/hacker aesthetic throughout
- Glitch text effects
- Typing animations
- Interactive CV download with analytics
- Mobile-first responsive design
- Accessibility (WCAG 2.1 AA)
- Reduced motion support

**Content:**
- Hero section with animated intro
- About section (profile bio)
- Skills section (categorized with progress bars)
- Work history timeline (expandable nodes)
- Contact section (copy-to-clipboard)
- CV download (tracks analytics)

## File Structure

```
ui-specs/hacker-portfolio/
├── README.md                          # This file
├── spec.json                          # Main specification
├── irVisual/
│   ├── summary.md                     # Overview & stack details
│   ├── wireframe.txt                  # ASCII layout + Matrix patterns
│   ├── data-fixtures.json             # CV data + Drizzle schema
│   ├── component-tree.txt             # Next.js component hierarchy
│   ├── binding-map.txt                # UI → data/action mappings
│   └── responsive.md                  # Mobile-first responsive patterns
└── public/
    └── dan_castrillo_cv.pdf           # CV file for download
```

## Color Palette (Matrix Theme)

- Background: `#000000` (black)
- Primary: `#00ff00`, `#00ff41` (Matrix green)
- Secondary: `#00ffff` (cyan)
- Accent: `#ffffff` (white)
- Muted: `gray-800`, `gray-900`
- Border glow: `green-500/10`, `green-500/20`, `green-500/30`

## Typography

- Primary: 'JetBrains Mono', 'Fira Code', monospace
- Fallback: system-ui, monospace
- Base: 16px (1rem)
- Scale: text-xs → text-6xl

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| Mobile | 0-639px | Single column, hamburger menu |
| Tablet | 640-1023px | 2 columns, Sheet menu |
| Desktop | 1024px+ | 4 columns, horizontal nav |

## Implementation Checklist

### Phase 1: Project Setup
- [ ] Initialize Next.js 14+ with TypeScript
- [ ] Install shadcn/ui components
- [ ] Configure Tailwind with Matrix theme
- [ ] Setup Drizzle ORM + PostgreSQL
- [ ] Copy CV PDF to /public

### Phase 2: Database
- [ ] Create Drizzle schema (cv_downloads, page_views)
- [ ] Generate migrations
- [ ] Run migrations
- [ ] Test database connection

### Phase 3: Layout & Theme
- [ ] Create app/layout.tsx with metadata
- [ ] Configure fonts (JetBrains Mono)
- [ ] Create global CSS with Matrix colors
- [ ] Add Matrix rain background
- [ ] Add scan lines overlay

### Phase 4: Server Components
- [ ] Create lib/data.ts with CV data
- [ ] Create AboutSection
- [ ] Create Footer
- [ ] Create TerminalCommand component

### Phase 5: Client Components
- [ ] Create Header with navigation
- [ ] Create HeroSection with typing animation
- [ ] Create SkillsSection with progress bars
- [ ] Create WorkHistorySection with timeline
- [ ] Create ContactSection with clipboard
- [ ] Create DownloadCVButton

### Phase 6: Effects
- [ ] Create MatrixRain canvas animation
- [ ] Create GlitchText CSS effect
- [ ] Create TypingAnimation component
- [ ] Create ScanLines overlay
- [ ] Create FadeIn scroll animation
- [ ] Add reduced motion support

### Phase 7: Analytics
- [ ] Create Server Actions (lib/actions.ts)
- [ ] Implement trackCVDownload
- [ ] Implement trackPageView
- [ ] Create API route /api/cv/download
- [ ] Create API route /api/analytics/stats

### Phase 8: Responsive
- [ ] Implement mobile styles
- [ ] Add Sheet for mobile menu
- [ ] Test all breakpoints
- [ ] Optimize for mobile (disable animations)
- [ ] Cross-browser testing

### Phase 9: Testing
- [ ] Write unit tests (Server Actions)
- [ ] Write component tests
- [ ] Write e2e tests (Playwright)
- [ ] Run accessibility audit
- [ ] Verify Lighthouse scores >90

### Phase 10: Deployment
- [ ] Deploy to Vercel
- [ ] Configure environment variables
- [ ] Setup custom domain (optional)
- [ ] Monitor analytics
- [ ] Setup error tracking

## Testing

**Unit Tests (Vitest):**
- Server Actions (trackCVDownload, trackPageView)
- Helper functions (formatDate, cn, getIPAddress)
- Coverage target: >80%

**Component Tests:**
- Client Components render correctly
- User interactions work
- Animations respect reduced motion

**E2E Tests (Playwright):**
- CV download flow
- Navigation flow
- Mobile menu flow

**Accessibility:**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast 4.5:1+

**Performance:**
- Lighthouse score >90
- LCP <2.5s
- FCP <1.8s
- CLS <0.1

## Environment Variables

Create `.env.local`:

```env
# Database (local development)
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# Or use Vercel Postgres
POSTGRES_URL=postgres://default:xxx@xxx.postgres.vercel-storage.com/verceldb

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: IP geolocation
IPINFO_API_KEY=xxx

# Optional: Analytics
VERCEL_ANALYTICS_ID=xxx
```

## Key Implementation Notes

1. **Server vs Client Components:**
   - Default to Server Components (better performance)
   - Use Client Components for: animations, canvas, interactions
   - Mark with 'use client' directive

2. **Database:**
   - Use Drizzle ORM (type-safe)
   - Track CV downloads and page views
   - Optional: Use Vercel Postgres for easy setup

3. **Animations:**
   - Matrix rain: Canvas-based, disabled on mobile
   - Glitch text: CSS animations
   - Typing animation: useEffect character-by-character
   - Respect prefers-reduced-motion

4. **Analytics:**
   - Track CV downloads (IP, user agent, timestamp)
   - Track page views (path, session, referer)
   - Server Actions for database writes

5. **Performance:**
   - Server Components reduce JS bundle
   - Matrix rain disabled on mobile
   - Lazy load off-screen content
   - Static CV data (no DB queries)

## Resources

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

## Contact

- Email: dan@devoured.io
- GitHub: github.com/dvrd
- Location: Caracas, Venezuela

## License

This specification is for Dan Castrillo's personal portfolio.
