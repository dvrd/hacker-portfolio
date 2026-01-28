import { profile } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl mb-16 md:mb-20">
            <GlitchText
              text="// ABOUT"
              as="h2"
              className="text-3xl md:text-5xl font-bold mb-4 text-green-400"
            />
            <p className="text-green-500/70 text-lg md:text-xl font-mono">
              Full-stack engineer, polyglot developer
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                  <span className="text-green-500">&gt;</span>
                  Profile.json
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-green-500 font-mono text-sm md:text-base whitespace-pre-wrap overflow-x-auto leading-relaxed">
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
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
