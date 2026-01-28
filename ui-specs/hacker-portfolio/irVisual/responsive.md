# Responsive Design Specification (Mobile-First)
## Hacker Portfolio - Matrix/Cyberpunk Aesthetic

## Breakpoints (Tailwind CSS)

| Name | Min Width | Tailwind | Usage |
|------|-----------|----------|-------|
| Mobile | 0px | (default) | Base styles, mobile phones (320px-639px) |
| sm | 640px | `sm:` | Large phones, small tablets |
| md | 768px | `md:` | Tablets (768px-1023px) |
| lg | 1024px | `lg:` | Laptops, desktops (1024px-1279px) |
| xl | 1280px | `xl:` | Large desktops (1280px-1535px) |
| 2xl | 1536px | `2xl:` | Extra large screens (1536px+) |

## Layout Strategy (Mobile-First)

### Mobile (<640px) - Default Styles

```tsx
// Base layout (no prefix needed - mobile first!)
<div className="flex flex-col px-4 py-8">
  <Header /> {/* Full width, hamburger menu */}
  <HeroSection /> {/* Full viewport height */}
  <AboutSection /> {/* Single column */}
  <SkillsSection /> {/* Single column grid */}
  <WorkHistorySection /> {/* Compact timeline */}
  <ContactSection /> {/* Stacked vertically */}
  <Footer />
</div>

// Header - Mobile
<header className="fixed top-0 w-full z-50 px-4 py-3">
  <div className="flex items-center justify-between">
    <TerminalPrompt /> {/* Truncated: "> dan@..." */}
    <div className="flex gap-2">
      <DownloadCVButton className="text-xs px-2 py-1" />
      <Sheet> {/* Hamburger menu */}
        <SheetTrigger />
      </Sheet>
    </div>
  </div>
</header>

// Hero - Mobile
<section className="h-screen flex items-center justify-center px-4">
  <Card className="w-full max-w-sm">
    <CardContent className="text-center">
      <h1 className="text-2xl">DAN CASTRILLO</h1>
      <p className="text-sm">SOFTWARE ENGINEER</p>
      <p className="text-xs">10 YEARS BUILDING SYSTEMS</p>
    </CardContent>
  </Card>
</section>

// Skills - Mobile (1 column)
<div className="grid grid-cols-1 gap-4 px-4">
  {skills.map(skill => <SkillCard key={skill.name} />)}
</div>

// Timeline - Mobile (compact)
<div className="relative border-l-2 border-green-500/30 pl-4 space-y-6">
  <TimelineNode compact={true} />
</div>

// Download Button - Mobile (bottom fixed)
<Button className="fixed bottom-4 right-4 text-xs px-3 py-2 z-40">
  ↓ CV
</Button>
```

### Tablet (640px-1024px) - Progressive Enhancement

```tsx
// Add tablet styles with sm: and md: prefixes
<div className="flex flex-col px-4 md:px-8 py-8 md:py-12">
  <Header />
  <HeroSection />
  <AboutSection className="md:max-w-2xl md:mx-auto" />
  <SkillsSection />
  <WorkHistorySection />
  <ContactSection />
  <Footer />
</div>

// Header - Tablet
<header className="fixed top-0 w-full z-50 px-4 md:px-8 py-3 md:py-4">
  <div className="flex items-center justify-between max-w-6xl mx-auto">
    <TerminalPrompt className="md:text-base" />
    <div className="flex gap-2 md:gap-4">
      <DownloadCVButton className="text-xs md:text-sm px-2 md:px-4 py-1 md:py-2" />
      <Sheet className="md:hidden"> {/* Still show Sheet */}
        <SheetTrigger />
      </Sheet>
    </div>
  </div>
</header>

// Hero - Tablet
<section className="h-screen flex items-center justify-center px-4 md:px-8">
  <Card className="w-full max-w-sm md:max-w-2xl">
    <CardContent className="text-center md:p-12">
      <h1 className="text-2xl md:text-4xl">DAN CASTRILLO</h1>
      <p className="text-sm md:text-xl">SOFTWARE ENGINEER</p>
      <p className="text-xs md:text-base">10 YEARS BUILDING SYSTEMS</p>
    </CardContent>
  </Card>
</section>

// Skills - Tablet (2 columns)
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 md:px-8 max-w-4xl mx-auto">
  {skills.map(skill => <SkillCard key={skill.name} />)}
</div>

// Timeline - Tablet (expanded with details)
<div className="relative border-l-2 border-green-500/30 pl-6 md:pl-8 space-y-6 md:space-y-8 max-w-3xl mx-auto">
  <TimelineNode compact={false} />
</div>

// Contact - Tablet (2 columns)
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
  <CopyToClipboard label="Email" />
  <CopyToClipboard label="Phone" />
  <CopyToClipboard label="Location" />
  <CopyToClipboard label="GitHub" />
</div>

// Download Button - Tablet (larger, still fixed)
<Button className="fixed bottom-4 right-4 md:bottom-6 md:right-6 text-xs md:text-sm px-3 md:px-4 py-2 z-40">
  ↓ CV.pdf
</Button>
```

### Desktop (>1024px) - Full Experience

```tsx
// Add desktop styles with lg: prefix
<div className="flex flex-col px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
  <Header />
  <HeroSection />
  <AboutSection className="md:max-w-2xl lg:max-w-4xl mx-auto" />
  <SkillsSection />
  <WorkHistorySection />
  <ContactSection />
  <Footer />
</div>

// Header - Desktop (horizontal nav)
<header className="fixed top-0 w-full z-50 px-4 md:px-8 lg:px-12 py-3 md:py-4">
  <div className="flex items-center justify-between max-w-7xl mx-auto">
    <TerminalPrompt className="md:text-base lg:text-lg" />

    {/* Desktop: Horizontal nav links (visible) */}
    <nav className="hidden lg:flex items-center gap-6">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#work">Work</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <Separator orientation="vertical" className="h-6" />
      <DownloadCVButton />
    </nav>

    {/* Mobile/Tablet: Sheet menu */}
    <Sheet className="lg:hidden">
      <SheetTrigger />
    </Sheet>
  </div>
</header>

// Hero - Desktop (with parallax)
<section className="h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 relative overflow-hidden">
  {/* Matrix rain background with parallax */}
  <MatrixRain className="absolute inset-0 opacity-30" speed={1.2} />

  <Card className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl relative z-10">
    <CardContent className="text-center md:p-12 lg:p-16">
      <h1 className="text-2xl md:text-4xl lg:text-6xl">
        <GlitchText>DAN CASTRILLO</GlitchText>
      </h1>
      <p className="text-sm md:text-xl lg:text-2xl mt-2">SOFTWARE ENGINEER</p>
      <p className="text-xs md:text-base lg:text-lg mt-1 text-green-500/70">
        <TypingAnimation text="10 YEARS BUILDING SYSTEMS" />
      </p>
    </CardContent>
  </Card>
</section>

// Skills - Desktop (4 columns)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
  {skills.map(skill => (
    <SkillCard
      key={skill.name}
      skill={skill}
      className="hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300"
    />
  ))}
</div>

// Timeline - Desktop (full with animations)
<div className="relative border-l-2 border-green-500/30 pl-6 md:pl-8 lg:pl-12 space-y-6 md:space-y-8 lg:space-y-12 max-w-5xl mx-auto">
  <TimelineNode
    compact={false}
    animated={true}
    onHover={(expanded) => setHoveredNode(expanded)}
  />
</div>

// Download Button - Desktop (larger, static position)
<Button className="text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 shadow-[0_0_30px_rgba(0,255,0,0.5)] hover:shadow-[0_0_50px_rgba(0,255,0,0.8)]">
  [ DOWNLOAD_CV.pdf >> /downloads ]
</Button>
```

## Component Visibility Map

| Component | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|-----------|----------------|---------------------|-------------------|
| Matrix Rain | Hidden (perf) | Partial (opacity: 0.2) | Full (opacity: 0.3) |
| Glitch Effect | Text only | Text only | Text + visual |
| Horizontal Nav | Hidden (Sheet) | Hidden (Sheet) | Visible (inline) |
| Hamburger Menu | Visible | Visible | Hidden |
| Terminal Prompt | Truncated ">" | Short "> dan@..." | Full "> dan@devoured:~$ whoami" |
| Hero Card | Small (max-w-sm) | Medium (max-w-2xl) | Large (max-w-4xl) |
| Skill Grid | 1 column | 2 columns | 4 columns |
| Timeline | Compact | Expanded | Full with hover |
| Timeline Details | Collapsed | Visible | Visible + animated |
| Contact Grid | 1 column | 2 columns | 2 columns |
| Download Button | Fixed bottom-right | Fixed bottom-right | Inline + larger |
| Parallax Effects | Disabled | Disabled | Enabled |
| Scan Lines | Hidden | Visible (subtle) | Visible (full) |
| Cursor Blink | Enabled | Enabled | Enabled |

## Responsive Patterns

### Navigation

```tsx
// Mobile & Tablet: Sheet (slide-in menu)
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="lg:hidden">
      <Menu className="h-6 w-6" />
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="bg-black border-green-500/30">
    <nav className="flex flex-col gap-4 mt-8">
      <NavLink href="#about" className="text-lg">About</NavLink>
      <NavLink href="#skills" className="text-lg">Skills</NavLink>
      <NavLink href="#work" className="text-lg">Work</NavLink>
      <NavLink href="#contact" className="text-lg">Contact</NavLink>
      <Separator className="my-4" />
      <DownloadCVButton className="w-full" />
    </nav>
  </SheetContent>
</Sheet>

// Desktop: Horizontal inline navigation
<nav className="hidden lg:flex items-center gap-6">
  <NavLink href="#about">About</NavLink>
  <NavLink href="#skills">Skills</NavLink>
  <NavLink href="#work">Work</NavLink>
  <NavLink href="#contact">Contact</NavLink>
  <Separator orientation="vertical" />
  <DownloadCVButton />
</nav>
```

### Skills Grid

```tsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
  {skillCategories.map(category => (
    <div key={category.category}>
      <h3 className="text-sm md:text-base lg:text-lg mb-4">{category.category}</h3>
      <div className="space-y-3 md:space-y-4">
        {category.items.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  ))}
</div>
```

### Timeline

```tsx
// Mobile: Compact with minimal details
<TimelineNode
  job={job}
  className={cn(
    "relative pl-4 md:pl-6 lg:pl-8",
    "text-sm md:text-base"
  )}
  showHighlights={false} // Mobile: collapsed by default
  showTechStack={false} // Mobile: hidden
/>

// Tablet: Expanded with details
<TimelineNode
  job={job}
  showHighlights={true} // Tablet: visible
  showTechStack={true} // Tablet: visible
  maxHighlights={3} // Tablet: limit to 3
/>

// Desktop: Full with animations
<TimelineNode
  job={job}
  showHighlights={true}
  showTechStack={true}
  maxHighlights={undefined} // Desktop: show all
  animated={true} // Desktop: enable animations
  onHover={(hovered) => {
    // Animate node indicator glow
    setHoveredJob(hovered ? job.id : null)
  }}
/>
```

### Forms & Buttons

```tsx
// Mobile: Full width stacked
<div className="flex flex-col gap-2 w-full">
  <Button variant="outline" className="w-full">Cancel</Button>
  <Button className="w-full">Download</Button>
</div>

// Desktop: Inline with proper spacing
<div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
  <Button variant="outline">Cancel</Button>
  <Button>Download</Button>
</div>
```

### Contact Section

```tsx
// Mobile: Stacked vertically
<div className="grid grid-cols-1 gap-4">
  <CopyToClipboard label="Email" text={contact.email} />
  <CopyToClipboard label="Phone" text={contact.phone} />
  <CopyToClipboard label="Location" text={contact.location} />
  <CopyToClipboard label="GitHub" text={contact.github} />
</div>

// Tablet/Desktop: 2 columns
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
  <CopyToClipboard label="Email" text={contact.email} />
  <CopyToClipboard label="Phone" text={contact.phone} />
  <CopyToClipboard label="Location" text={contact.location} />
  <CopyToClipboard label="GitHub" text={contact.github} />
</div>
```

## Touch vs Mouse Interactions

### Touch (Mobile/Tablet)

- **Minimum tap target**: 44×44px (Apple HIG, Android Material)
- **Button spacing**: min 8px between interactive elements
- **Swipe gestures**: Sheet for menu (native feel)
- **No hover states**: Use `:active` instead
- **Touch feedback**: Visual feedback on tap (scale, color)

```tsx
// Mobile-optimized button
<Button
  className={cn(
    "min-h-[44px] min-w-[44px]", // Touch target
    "active:scale-95 active:bg-green-500/20", // Touch feedback
    "transition-transform duration-150"
  )}
>
  {children}
</Button>
```

### Mouse (Desktop)

- **Hover states**: Glow effects, scale transforms
- **Tooltips**: Show additional info on hover
- **Cursor**: Custom cursor (terminal-style)
- **Keyboard shortcuts**: Support for Tab, Enter, Escape

```tsx
// Desktop-optimized button
<Button
  className={cn(
    "hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]",
    "transition-all duration-300",
    "cursor-pointer"
  )}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {children}
</Button>
```

## Performance Considerations

### Mobile Optimization

```tsx
// Lazy load images (none in this project, but for reference)
<Image
  src={imageSrc}
  alt={alt}
  width={400}
  height={300}
  loading="lazy"
  className="w-full h-auto"
/>

// Limit Matrix rain on mobile (performance)
const MatrixRain = ({ speed = 1 }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)')

  // Disable on mobile, reduce on tablet
  if (isMobile) return null
  const adjustedSpeed = isTablet ? speed * 0.5 : speed

  return <canvas ref={canvasRef} />
}

// Reduce initial render on mobile
const MOBILE_ITEMS = 6 // Show 6 skills
const DESKTOP_ITEMS = 20 // Show all skills

const itemsToShow = isMobile ? MOBILE_ITEMS : DESKTOP_ITEMS
```

### Progressive Enhancement

```tsx
// Start with Server Component (works without JS)
export default async function Page() {
  const data = getStaticData()

  return (
    <>
      <AboutSection bio={data.profile.bio} /> {/* Server */}
      <SkillsSection skills={data.skills} /> {/* Client for animations */}
      <WorkHistorySection jobs={data.workHistory} /> {/* Client for expand/collapse */}
    </>
  )
}

// Then enhance with Client Component (adds JS interactivity)
'use client'
export function SkillCard({ skill }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedProgressBar value={skill.level} animated={isHovered} />
    </Card>
  )
}
```

## Accessibility (WCAG 2.1 AA)

### Responsive Accessibility

- **Font size**: min 16px base (1rem) on mobile, scale up on desktop
- **Line height**: 1.5 for body text, 1.2 for headings
- **Color contrast**: 4.5:1 for normal text (green-500 on black), 3:1 for large
- **Focus indicators**: Visible 2px outline on all interactive elements
- **Touch targets**: min 44×44px on mobile/tablet
- **Keyboard navigation**: Tab through all interactive elements
- **Screen reader**: Proper ARIA labels and landmarks

```tsx
// Accessible responsive component
<Button
  onClick={handleClick}
  aria-label="Download CV PDF file"
  className={cn(
    "min-h-[44px] min-w-[44px]", // Touch target (mobile)
    "text-base md:text-lg", // Readable font size
    "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black", // Focus indicator
    "transition-all duration-300"
  )}
>
  <Download className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
  <span className="ml-2">Download CV</span>
</Button>
```

### Reduced Motion

```tsx
// Detect and respect user preference
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

// Disable animations if preferred
<MatrixRain disabled={prefersReducedMotion} />
<GlitchText disabled={prefersReducedMotion}>{text}</GlitchText>
<TypingAnimation disabled={prefersReducedMotion}>{text}</TypingAnimation>

// CSS approach
<div className={cn(
  "transition-all duration-300",
  "motion-reduce:transition-none"
)}>
  {content}
</div>
```

## Testing Checklist

### Mobile (320px-639px)

- [ ] All content readable without horizontal scroll
- [ ] Touch targets min 44×44px
- [ ] Sheet menu opens and closes smoothly
- [ ] CV downloads correctly
- [ ] No performance issues (Matrix rain disabled)
- [ ] Font sizes readable (min 16px)

### Tablet (640px-1024px)

- [ ] 2-column skill grid displays correctly
- [ ] Timeline expanded with details
- [ ] Contact info in 2 columns
- [ ] Sheet menu still used (no horizontal nav yet)
- [ ] Matrix rain at reduced opacity (performance)

### Desktop (1024px+)

- [ ] Horizontal navigation visible and functional
- [ ] 4-column skill grid displays correctly
- [ ] Timeline fully expanded with animations
- [ ] Hover effects work (glow, scale)
- [ ] Matrix rain at full effect
- [ ] Parallax effects enabled
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Focus indicators visible

### Cross-browser

- [ ] Chrome/Edge (latest) - all breakpoints
- [ ] Firefox (latest) - all breakpoints
- [ ] Safari (latest) - all breakpoints
- [ ] Mobile Safari (iOS 15+) - mobile & tablet
- [ ] Chrome Mobile (Android 11+) - mobile & tablet

### Accessibility

- [ ] Reduced motion preference respected
- [ ] Keyboard navigation works at all breakpoints
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets WCAG AA
- [ ] Touch targets meet 44×44px minimum
- [ ] Focus indicators visible at all times
