import React from 'react'
import { Link } from 'react-router-dom'
import { companyInfo } from '../data/products.js'
import ScrollReveal from '../components/ScrollReveal.jsx'

function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <img src="/images/doc4_page2_3.png" alt="About Us" className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <ScrollReveal direction="up">
            <h1>ABOUT US</h1>
            <p>{companyInfo.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="about-section">
        <div className="about-section__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Our Story</h2>
            <p className="about-text">{companyInfo.about}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv-section">
        <div className="about-mv-section__inner">
          <ScrollReveal direction="left" delay={0}>
            <div className="mv-card">
              <div className="mv-card__icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <h3>Our Mission</h3>
              <p>{companyInfo.mission}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className="mv-card">
              <div className="mv-card__icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </div>
              <h3>Our Vision</h3>
              <p>{companyInfo.vision}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="about-stats-section__inner">
          <ScrollReveal direction="up" delay={0}>
            <div className="stat-card">
              <span className="stat-card__number">4+</span>
              <span className="stat-card__label">UAV Platforms</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <div className="stat-card">
              <span className="stat-card__number">100+</span>
              <span className="stat-card__label">Missions Completed</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <div className="stat-card">
              <span className="stat-card__number">DGCA</span>
              <span className="stat-card__label">Type Certified</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={450}>
            <div className="stat-card">
              <span className="stat-card__number">2022</span>
              <span className="stat-card__label">Founded</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta-section">
        <ScrollReveal direction="up">
          <h2>Want to join our mission?</h2>
          <p>We're always looking for talented engineers, pilots, and innovators.</p>
          <div className="product-cta-section__buttons">
            <Link to="/careers" className="pill-btn pill-btn--dark">View Careers ›</Link>
            <Link to="/contact" className="pill-btn pill-btn--outline-dark">Contact Us ›</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}

export default AboutPage
