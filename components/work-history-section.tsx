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
    <section id="work" className="py-24 md:py-32">
      <FadeIn>
        <div className="mb-16 md:mb-20">
          <GlitchText
            text="// WORK HISTORY"
            as="h2"
            className="text-3xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground text-lg md:text-xl font-mono">
            10 years of building production systems
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <Accordion type="multiple" className="space-y-0">
          {workHistory.map((job, idx) => (
            <AccordionItem key={`${job.company}-${idx}`} value={`job-${idx}`}>
              <AccordionTrigger>
                <div className="flex-1 text-left pr-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg md:text-xl">
                      {job.position}
                    </h3>
                    {job.current && (
                      <Badge variant="default" className="animate-pulse">
                        CURRENT
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    <span className="font-semibold">{job.company}</span>
                    <span className="text-muted-foreground/50"> • </span>
                    <span>{job.period}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4">
                  {job.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm md:text-base flex items-start gap-3 leading-relaxed"
                    >
                      <span className="text-primary shrink-0 mt-1 font-bold">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  )
}
