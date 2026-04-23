import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { solutions } from '../data/products.js'
import ScrollReveal from '../components/ScrollReveal.jsx'

function SolutionPage() {
  const { slug } = useParams()
  const solution = solutions.find(s => s.slug === slug)

  if (!solution) {
    return (
      <div className="page-not-found">
        <h1>Solution Not Found</h1>
        <Link to="/" className="pill-btn pill-btn--dark">← Back to Home</Link>
      </div>
    )
  }

  return (
    <main className="solution-page">
      {/* Hero */}
      <section className="solution-hero">
        <img src={solution.image} alt={solution.name} className="solution-hero__bg" />
        <div className="solution-hero__overlay" />
        <div className="solution-hero__content">
          <ScrollReveal direction="up">
            <h1>{solution.name}</h1>
            <p>{solution.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="product-detail-section">
        <div className="product-detail-section__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Overview</h2>
            <p className="product-description">{solution.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      {solution.gallery && solution.gallery.length > 0 && (
        <section className="product-gallery-section">
          <div className="product-gallery-section__inner">
            <ScrollReveal direction="up"><h2 className="section-title">Gallery</h2></ScrollReveal>
            <div className="product-gallery">
              {solution.gallery.map((img, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                  <div className="product-gallery__item">
                    <img src={img} alt={`${solution.name} ${idx + 1}`} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="product-features-section">
        <div className="product-features-section__inner">
          <ScrollReveal direction="up"><h2 className="section-title">Capabilities</h2></ScrollReveal>
          <div className="features-grid">
            {solution.features.map((feature, idx) => (
              <ScrollReveal key={idx} direction="left" delay={idx * 100}>
                <div className="feature-item">
                  <div className="feature-item__icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <span>{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="product-apps-section">
        <div className="product-apps-section__inner">
          <ScrollReveal direction="up"><h2 className="section-title">Use Cases</h2></ScrollReveal>
          <div className="apps-tags">
            {solution.applications.map((app, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <span className="app-tag">{app}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta-section">
        <ScrollReveal direction="up">
          <h2>Need a {solution.name.toLowerCase()} solution?</h2>
          <p>Our team can help you plan and deploy the right system for your needs.</p>
          <div className="product-cta-section__buttons">
            <Link to="/contact" className="pill-btn pill-btn--dark">Get in Touch ›</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}

export default SolutionPage
