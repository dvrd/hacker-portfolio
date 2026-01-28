import { profile } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <FadeIn>
        <div className="mb-16 md:mb-20">
          <GlitchText
            text="// ABOUT"
            as="h2"
            className="text-3xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground text-lg md:text-xl font-mono">
            Full-stack engineer, polyglot developer
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <span className="text-primary">&gt;</span>
              Profile.json
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="font-mono text-sm md:text-base whitespace-pre-wrap overflow-x-auto leading-relaxed">
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
      </FadeIn>
    </section>
  )
}
