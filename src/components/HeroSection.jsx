import React from 'react'

function HeroSection() {
  return (
    <section className="hero snap-section" id="hero">
      {/* Full-bleed background image (replacing video since no video files available) */}
      <img
        src="/images/doc4_page2_3.png"
        alt="Tailsitters UAV in flight"
        className="hero__bg-image"
      />
      <div className="hero__overlay" />

      {/* Hero Content */}
      <div className="hero__content">
        <div className="hero__left">
          <h1 className="hero__title">TAILSITTERS UAV</h1>
          <p className="hero__subtitle">Highest Endurance VTOL in Micro Category</p>
          <div className="hero__badge">
            ✓ DGCA APPROVED TYPE CERTIFIED
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
