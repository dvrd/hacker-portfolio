'use client'

import { workHistory } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function WorkHistorySection() {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <GlitchText
            text="// WORK HISTORY"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-12 text-green-400"
          />
        </FadeIn>

        <div className="max-w-4xl mx-auto space-y-6">
          {workHistory.map((job, idx) => (
            <FadeIn key={`${job.company}-${job.position}`} delay={idx * 100}>
              <WorkHistoryItem job={job} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

interface WorkHistoryItemProps {
  job: {
    company: string
    position: string
    period: string
    current?: boolean
    highlights: string[]
  }
}

function WorkHistoryItem({ job }: WorkHistoryItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-green-500/30 bg-black/50 backdrop-blur">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-green-500/5 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-green-400 font-mono font-bold text-lg mb-1">
              {job.position}
            </h3>
            <div className="text-green-500 font-mono text-sm">
              {job.company} • {job.period}
              {job.current && (
                <span className="ml-2 text-green-400 animate-pulse">
                  [CURRENT]
                </span>
              )}
            </div>
          </div>
          <div className="text-green-400 text-xl font-mono">
            {isExpanded ? '[-]' : '[+]'}
          </div>
        </div>
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isExpanded ? 'max-h-[1000px]' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-6 pt-2 border-t border-green-500/20">
          <ul className="space-y-2">
            {job.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-green-500/80 text-sm font-mono flex items-start gap-3"
              >
                <span className="text-green-400 mt-1">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
