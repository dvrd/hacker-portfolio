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
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <GlitchText
            text="// CONTACT"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-12 text-green-400"
          />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-green-500">&gt;</span>
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Click any field to copy to clipboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
          </div>
        </FadeIn>
      </div>
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
    <div className="flex items-center justify-between gap-4 p-3 rounded border border-green-500/20 hover:border-green-500/40 transition-colors">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className="text-green-400 font-mono text-sm shrink-0">{label}:</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition-colors font-mono text-sm truncate"
          >
            {value}
          </a>
        ) : (
          <span className="text-green-500 font-mono text-sm truncate">{value}</span>
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
