'use client'

import { workHistory } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { Badge } from './ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

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

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={100}>
            <Accordion type="multiple" className="space-y-4">
              {workHistory.map((job, idx) => (
                <AccordionItem key={`${job.company}-${idx}`} value={`job-${idx}`}>
                  <AccordionTrigger>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-green-400 font-bold text-lg">
                          {job.position}
                        </h3>
                        {job.current && (
                          <Badge variant="default" className="text-xs px-2 py-0.5 animate-pulse">
                            CURRENT
                          </Badge>
                        )}
                      </div>
                      <div className="text-green-500 text-sm">
                        <span className="text-green-400">{job.company}</span>
                        <span className="text-green-500/50"> • </span>
                        <span className="text-green-500/70">{job.period}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      {job.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-green-500/80 text-sm font-mono flex items-start gap-3"
                        >
                          <span className="text-green-400 shrink-0 mt-1">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
