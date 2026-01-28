'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'WORK', href: '#work' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-green-500/20 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-green-400 font-mono font-bold text-lg">
              &gt; DC_
            </div>

            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-green-500 hover:text-green-400 transition-colors font-mono text-sm"
                >
                  [{item.label}]
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-green-500/20 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-green-400 font-mono font-bold text-lg">
              &gt; DC_
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-500 hover:text-green-400 transition-colors font-mono text-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? '[X]' : '[≡]'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'absolute top-16 left-0 right-0 bg-black/95 backdrop-blur border-b border-green-500/20 transition-all duration-300',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-green-500 hover:text-green-400 transition-colors font-mono text-left py-2 border-b border-green-500/10"
                >
                  &gt; {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16" />
    </>
  )
}
