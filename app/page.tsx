import { GlitchText } from '@/components/glitch-text'
import { TypingAnimation } from '@/components/typing-animation'
import { FadeIn } from '@/components/fade-in'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { WorkHistorySection } from '@/components/work-history-section'
import { ContactSection } from '@/components/contact-section'
import { DownloadCVButton } from '@/components/download-cv-button'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <FadeIn className="text-center space-y-8 md:space-y-10">
            <GlitchText
              text="> DAN CASTRILLO"
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            />
            <p className="text-xl md:text-3xl lg:text-4xl font-mono">
              SOFTWARE ENGINEER
            </p>
            <div className="text-base md:text-lg lg:text-xl text-muted-foreground font-mono">
              <TypingAnimation text="10 YEARS BUILDING SYSTEMS" speed={80} />
            </div>

            {/* CV Download Button */}
            <div className="pt-8 md:pt-12">
              <DownloadCVButton />
            </div>
          </FadeIn>
        </section>

        {/* Content Sections */}
        <AboutSection />
        <SkillsSection />
        <WorkHistorySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
