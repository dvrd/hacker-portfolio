import { profile } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <GlitchText
            text="// ABOUT"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-12 text-green-400"
          />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-green-500">&gt;</span>
                  Profile.json
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-green-500 font-mono text-sm md:text-base whitespace-pre-wrap overflow-x-auto">
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
