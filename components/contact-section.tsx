'use client'

import { profile } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
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
            <div className="border border-green-500/30 p-8 bg-black/50 backdrop-blur">
              <div className="space-y-6">
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
              </div>

              <div className="mt-8 pt-6 border-t border-green-500/20 text-center">
                <p className="text-green-500/70 text-sm font-mono">
                  &gt; Click any field to copy to clipboard_
                </p>
              </div>
            </div>
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
    <div className="group">
      <div className="flex items-center justify-between gap-4">
        <span className="text-green-400 font-mono text-sm">{label}:</span>
        <div className="flex items-center gap-2">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors font-mono text-sm"
            >
              {value}
            </a>
          ) : (
            <span className="text-green-500 font-mono text-sm">{value}</span>
          )}
          <button
            onClick={onCopy}
            className="text-green-400 hover:text-green-300 transition-colors text-xs font-mono px-2 py-1 border border-green-500/30 hover:border-green-400/50"
          >
            {copied ? '[COPIED]' : '[COPY]'}
          </button>
        </div>
      </div>
    </div>
  )
}
