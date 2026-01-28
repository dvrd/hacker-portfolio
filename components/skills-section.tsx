'use client'

import { skills } from '@/lib/data'
import { FadeIn } from './fade-in'
import { GlitchText } from './glitch-text'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'
import { useState, useEffect } from 'react'

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl mb-16 md:mb-20">
            <GlitchText
              text="// SKILLS"
              as="h2"
              className="text-3xl md:text-5xl font-bold mb-4 text-green-400"
            />
            <p className="text-green-500/70 text-lg md:text-xl font-mono">
              Technical expertise across the full stack
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((category, idx) => (
            <FadeIn key={category.category} delay={idx * 100}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-green-500">&gt;</span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.items.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </CardContent>
              </Card>
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
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setValue(skill.level), 100)
    return () => clearTimeout(timer)
  }, [skill.level])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">{skill.icon}</span>
          <span className="text-sm font-mono text-green-500">{skill.name}</span>
        </div>
        <Badge variant="outline" className="text-xs px-2 py-0.5">
          {skill.level}%
        </Badge>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  )
}
