'use client'

import { profile } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useState } from 'react'

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <FadeIn>
        <div className="mb-16 md:mb-20">
          <GlitchText
            text="// CONTACT"
            as="h2"
            className="text-3xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground text-lg md:text-xl font-mono">
            Let's build something together
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <span className="text-primary">&gt;</span>
              Get In Touch
            </CardTitle>
            <CardDescription className="text-base">
              Click any field to copy to clipboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <ContactItem
              label="EMAIL"
              value={profile.contact.email}
              copied={copiedField === 'email'}
              onCopy={() => copyToClipboard(profile.contact.email, 'email')}
            />

            <ContactItem
              label="PHONE"
              value={profile.contact.phone}
              copied={copiedField === 'phone'}
              onCopy={() => copyToClipboard(profile.contact.phone, 'phone')}
            />

            <ContactItem
              label="LOCATION"
              value={profile.contact.location}
              copied={copiedField === 'location'}
              onCopy={() => copyToClipboard(profile.contact.location, 'location')}
            />

            <ContactItem
              label="GITHUB"
              value={profile.contact.github}
              copied={copiedField === 'github'}
              onCopy={() => copyToClipboard(profile.contact.github, 'github')}
              href={`https://${profile.contact.github}`}
            />
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  )
}

interface ContactItemProps {
  label: string
  value: string
  copied: boolean
  onCopy: () => void
  href?: string
}

function ContactItem({ label, value, copied, onCopy, href }: ContactItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 md:p-5 rounded-lg border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 hover:bg-accent/50">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <span className="text-sm md:text-base shrink-0 font-semibold">{label}:</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors text-sm md:text-base truncate"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm md:text-base truncate">{value}</span>
        )}
      </div>
      <Button
        onClick={onCopy}
        variant="outline"
        size="sm"
        className="shrink-0"
      >
        {copied ? 'COPIED' : 'COPY'}
      </Button>
    </div>
  )
}
