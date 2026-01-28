import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('merges class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3')
  })

  it('merges Tailwind classes correctly', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('handles undefined and null', () => {
    expect(cn('class1', undefined, null, 'class2')).toBe('class1 class2')
  })
})
