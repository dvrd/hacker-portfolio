'use client'

import { skills } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { useState, useEffect } from 'react'

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <GlitchText
            text="// SKILLS"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-12 text-green-400"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <FadeIn key={category.category} delay={idx * 100}>
              <div className="border border-green-500/30 p-6 bg-black/50 backdrop-blur">
                <h3 className="text-green-400 font-mono font-bold mb-4 text-lg">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  skill: {
    name: string
    level: number
    icon: string
  }
}

function SkillBar({ skill }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(skill.level), 100)
    return () => clearTimeout(timer)
  }, [skill.level])

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-green-500 text-sm font-mono flex items-center gap-2">
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-green-400 text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-green-950 border border-green-500/20">
        <div
          className="h-full bg-green-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
