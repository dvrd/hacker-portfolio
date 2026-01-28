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
    <section id="work" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl mb-16 md:mb-20">
            <GlitchText
              text="// WORK HISTORY"
              as="h2"
              className="text-3xl md:text-5xl font-bold mb-4 text-green-400"
            />
            <p className="text-green-500/70 text-lg md:text-xl font-mono">
              10 years of building production systems
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <FadeIn delay={100}>
            <Accordion type="multiple" className="space-y-6">
              {workHistory.map((job, idx) => (
                <AccordionItem key={`${job.company}-${idx}`} value={`job-${idx}`}>
                  <AccordionTrigger>
                    <div className="flex-1 text-left">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-green-400 font-bold text-lg md:text-xl">
                          {job.position}
                        </h3>
                        {job.current && (
                          <Badge variant="default" className="animate-pulse">
                            CURRENT
                          </Badge>
                        )}
                      </div>
                      <div className="text-green-500 text-sm md:text-base">
                        <span className="text-green-400 font-semibold">{job.company}</span>
                        <span className="text-green-500/50"> • </span>
                        <span className="text-green-500/70">{job.period}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4">
                      {job.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-green-500/80 text-sm md:text-base font-mono flex items-start gap-3"
                        >
                          <span className="text-green-400 shrink-0 mt-1">›</span>
                          <span className="leading-relaxed">{highlight}</span>
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
