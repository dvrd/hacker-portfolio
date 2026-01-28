# 🎯 Hacker Portfolio - Dan Castrillo

Matrix-themed personal portfolio showcasing 10 years of software engineering experience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
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

- **Framework:** Next.js 14+ (App Router, Server Components)
- **UI:** Tailwind CSS with custom Matrix theme
- **Database:** PostgreSQL + Drizzle ORM (for analytics)
- **Deployment:** Vercel
- **Fonts:** JetBrains Mono, Fira Code

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

**Phase 2: Database Setup** 🔄 NEXT
- [ ] Drizzle ORM configuration
- [ ] PostgreSQL schema
- [ ] Migrations

**Phase 3-10:** See `ui-specs/hacker-portfolio/spec.json` for full plan

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
