import { profile } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <GlitchText
            text="// ABOUT"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-8 text-green-400"
          />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-3xl space-y-6">
            <div className="border border-green-500/30 p-6 bg-black/50 backdrop-blur">
              <pre className="text-green-500 font-mono text-sm md:text-base whitespace-pre-wrap">
                <code>{`{
  "name": "${profile.name}",
  "role": "${profile.title}",
  "bio": "${profile.bio}",
  "contact": {
    "email": "${profile.contact.email}",
    "location": "${profile.contact.location}",
    "github": "${profile.contact.github}"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
