import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GlitchText } from '@/components/glitch-text'

describe('GlitchText', () => {
  it('renders text correctly', () => {
    render(<GlitchText text="Test Text" />)
    expect(screen.getByText('Test Text')).toBeInTheDocument()
  })

  it('applies glitch class', () => {
    const { container } = render(<GlitchText text="Test" />)
    expect(container.firstChild).toHaveClass('glitch')
  })

  it('sets data-text attribute', () => {
    const { container } = render(<GlitchText text="Test" />)
    expect(container.firstChild).toHaveAttribute('data-text', 'Test')
  })

  it('renders as different element types', () => {
    const { container } = render(<GlitchText text="Test" as="h1" />)
    expect(container.querySelector('h1')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <GlitchText text="Test" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
