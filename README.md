# 🎯 Hacker Portfolio - Dan Castrillo

Matrix-themed personal portfolio showcasing 10 years of software engineering experience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment (optional - app works without database)
cp .env.local.example .env.local

# Run development server
npm run dev

# Open http://localhost:3000

# Run tests
npm test
```

## 🎨 Features

- 💚 **Matrix Theme** - Green-on-black cyberpunk aesthetic
- ⌨️ **Terminal Interface** - Command-line inspired design
- ⚡ **Glitch Effects** - CSS-based visual effects
- 📊 **Interactive Skills** - Animated progress bars
- 📅 **Work Timeline** - Expandable job history
- 📄 **CV Download** - Analytics-tracked PDF download
- 📱 **Responsive** - Mobile-first design (Tailwind CSS)
- ♿ **Accessible** - WCAG 2.1 AA compliant

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router, Server Components)
- **UI:** Tailwind CSS v4 with custom Matrix theme
- **Database:** PostgreSQL + Drizzle ORM (for analytics)
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel-ready
- **Fonts:** JetBrains Mono

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles + Matrix theme
├── components/            # React components
├── lib/                   # Utilities and data
│   ├── data.ts           # Static CV data
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── dan_castrillo_cv.pdf  # Downloadable CV
└── ui-specs/             # Complete UI specification
    └── hacker-portfolio/
        ├── spec.json     # Implementation spec
        └── irVisual/     # Visual IR artifacts
```

## 📋 Implementation Status

**Phase 1: Project Setup** ✅ COMPLETE
- [x] Next.js 14+ with TypeScript
- [x] Tailwind CSS with Matrix theme
- [x] Basic layout and routing
- [x] CV data structure
- [x] Git repository initialized

**Phase 2: Database Setup** ✅ COMPLETE
- [x] Drizzle ORM configuration
- [x] PostgreSQL schema (cv_downloads, page_views)
- [x] Migrations generated

**Phase 3: Layout & Theme** ✅ COMPLETE
- [x] Matrix rain canvas animation
- [x] Enhanced glitch effects
- [x] Typing animation component
- [x] Fade-in intersection observer

**Phase 4: Server Components** ✅ COMPLETE
- [x] AboutSection with JSON display
- [x] Footer with social links
- [x] TerminalCommand component

**Phase 5: Client Components** ✅ COMPLETE
- [x] HeroSection with animations
- [x] SkillsSection with progress bars
- [x] WorkHistorySection expandable timeline
- [x] ContactSection copy-to-clipboard
- [x] DownloadCVButton with tracking

**Phase 6: Effects & Animations** ✅ COMPLETE
- [x] MatrixRain canvas
- [x] GlitchText component
- [x] TypingAnimation
- [x] FadeIn with scroll detection

**Phase 7: Server Actions & Analytics** ✅ COMPLETE
- [x] /api/analytics/stats endpoint
- [x] /api/track/page-view endpoint
- [x] CV download tracking
- [x] Page view tracking

**Phase 8: Responsive & Polish** ✅ COMPLETE
- [x] Mobile navigation with hamburger menu
- [x] Smooth scroll behavior
- [x] Focus-visible accessibility styles
- [x] Selection colors

**Phase 9: Testing** ✅ COMPLETE
- [x] Vitest setup with React Testing Library
- [x] Component tests (GlitchText)
- [x] Utility tests (cn function)
- [x] Test scripts in package.json

**Phase 10: Deployment** 🔄 READY
- [ ] Vercel deployment
- [ ] Environment variables configuration
- [ ] Custom domain setup (optional)

## 🎯 Next Steps

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Follow Implementation Plan:**
   - See `ui-specs/hacker-portfolio/README.md`
   - Reference `ui-specs/hacker-portfolio/spec.json`
   - Use Visual IR artifacts in `ui-specs/hacker-portfolio/irVisual/`

4. **Or Let GitHub Copilot Build It:**
   - Create a GitHub issue
   - Assign to Copilot
   - Reference the spec in `ui-specs/hacker-portfolio/`

## 📚 Documentation

- **Complete Spec:** `ui-specs/hacker-portfolio/spec.json`
- **Quick Start:** `ui-specs/hacker-portfolio/README.md`
- **Component Tree:** `ui-specs/hacker-portfolio/irVisual/component-tree.txt`
- **Wireframe:** `ui-specs/hacker-portfolio/irVisual/wireframe.txt`
- **Responsive:** `ui-specs/hacker-portfolio/irVisual/responsive.md`

## 🔒 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📄 License

Personal portfolio for Dan Castrillo

## 📧 Contact

- **Email:** dan@devoured.io
- **GitHub:** github.com/dvrd
- **Location:** Caracas, Venezuela

---

**Built with ❤️ and Matrix rain** 🟢
