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
    <>
      <main className="min-h-screen bg-black text-green-500">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-20">
            <FadeIn className="text-center space-y-6">
              <GlitchText
                text="> DAN CASTRILLO"
                as="h1"
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
              />
              <p className="text-xl md:text-2xl lg:text-3xl text-green-400 font-mono">
                SOFTWARE ENGINEER
              </p>
              <div className="text-sm md:text-base lg:text-lg text-green-500/70 font-mono">
                <TypingAnimation text="10 YEARS BUILDING SYSTEMS" speed={80} />
              </div>

              {/* CV Download Button */}
              <div className="pt-8">
                <DownloadCVButton />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content Sections */}
        <AboutSection />
        <SkillsSection />
        <WorkHistorySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
