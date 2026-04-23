import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/**
 * ScrollReveal wrapper component.
 * Wraps children in a div that fades/slides in on scroll.
 */
export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up', ...props }) {
  const [ref, isVisible] = useScrollReveal(props)

  const directionClass = `reveal--${direction}`

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${isVisible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
