import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'

function SoftwarePage() {
  const features = [
    'Automated waypoint mission planning',
    'Real-time telemetry dashboard',
    'Live HD video stream integration',
    'Geo-fence configuration and alerts',
    'Multi-vehicle management support',
    'Post-flight log analysis and export',
    'Survey area polygon planning tool',
    'Terrain-following altitude planning',
    'Emergency RTL command',
  ]

  return (
    <main className="software-page">
      <section className="page-hero">
        <div className="page-hero__dark-bg" />
        <div className="page-hero__content">
          <ScrollReveal direction="up">
            <h1>KARMAN GCS</h1>
            <p>Ground Control Station for Complete Drone Operations</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="product-detail-section">
        <div className="product-detail-section__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Powerful & Intuitive</h2>
            <p className="product-description">Karman GCS is our proprietary Ground Control Station software for planning, executing, and monitoring drone missions. Built from the ground up for Aero-Transition Technology platforms, it supports automated flight planning, real-time telemetry, live video streaming, and post-flight data analysis.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="software-showcase">
        <div className="software-showcase__inner">
          <ScrollReveal direction="up">
            <div className="software-showcase__device">
              <img src="/images/doc4_page8_28.jpeg" alt="Karman GCS Interface" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="product-features-section">
        <div className="product-features-section__inner">
          <ScrollReveal direction="up"><h2 className="section-title">Features</h2></ScrollReveal>
          <div className="features-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} direction="left" delay={i * 80}>
                <div className="feature-item">
                  <div className="feature-item__icon"><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span>{f}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="software-download">
        <ScrollReveal direction="up">
          <h2>Try Karman GCS</h2>
          <p>Download the Windows Beta version and experience seamless drone operations.</p>
          <div className="product-cta-section__buttons">
            <a href="#" className="pill-btn pill-btn--dark">Download for Windows ↓</a>
            <Link to="/contact" className="pill-btn pill-btn--outline-dark">Request Demo ›</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}

export default SoftwarePage
