import { GlitchText } from '@/components/glitch-text'
import { TypingAnimation } from '@/components/typing-animation'
import { FadeIn } from '@/components/fade-in'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center min-h-screen">
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
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
