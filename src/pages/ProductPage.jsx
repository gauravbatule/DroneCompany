import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ScrollReveal from '../components/ScrollReveal.jsx'

function ProductPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="page-not-found">
        <h1>Product Not Found</h1>
        <Link to="/" className="pill-btn pill-btn--dark">← Back to Home</Link>
      </div>
    )
  }

  return (
    <main className="product-page">
      {/* Hero Banner */}
      <section className="product-hero">
        <img src={product.heroImage} alt={product.name} className="product-hero__bg" />
        <div className="product-hero__overlay" />
        <div className="product-hero__content">
          <ScrollReveal direction="up">
            {product.badge && <div className="product-hero__badge">✓ {product.badge}</div>}
            <h1>{product.name}</h1>
            <p className="product-hero__tagline">{product.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="product-detail-section">
        <div className="product-detail-section__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Overview</h2>
            <p className="product-description">{product.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="product-gallery-section">
        <div className="product-gallery-section__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Gallery</h2>
          </ScrollReveal>
          <div className="product-gallery">
            {product.gallery.map((img, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                <div className="product-gallery__item">
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="product-specs-section">
        <div className="product-specs-section__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Technical Specifications</h2>
          </ScrollReveal>
          <div className="specs-grid">
            {Object.entries(product.specs).map(([key, value], idx) => (
              <ScrollReveal key={key} direction="up" delay={idx * 80}>
                <div className="spec-card">
                  <span className="spec-card__label">{key}</span>
                  <span className="spec-card__value">{value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="product-features-section">
        <div className="product-features-section__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Key Features</h2>
          </ScrollReveal>
          <div className="features-grid">
            {product.features.map((feature, idx) => (
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
          <ScrollReveal direction="up">
            <h2 className="section-title">Applications</h2>
          </ScrollReveal>
          <div className="apps-tags">
            {product.applications.map((app, idx) => (
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
          <h2>Interested in {product.name}?</h2>
          <p>Get in touch with our team for pricing, demos, and deployment support.</p>
          <div className="product-cta-section__buttons">
            <Link to="/contact" className="pill-btn pill-btn--dark">Contact Us ›</Link>
            <a href="#" className="pill-btn pill-btn--outline-dark">Download Brochure ↓</a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}

export default ProductPage
