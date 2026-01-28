'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
  showCursor?: boolean
}

export function TypingAnimation({
  text,
  speed = 100,
  className,
  showCursor = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={cn(className, showCursor && currentIndex < text.length && 'terminal-cursor')}>
      {displayedText}
    </span>
  )
}
