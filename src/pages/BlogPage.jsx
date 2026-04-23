import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'

const blogPosts = [
  { id: 1, title: 'The Future of VTOL Drones in India', date: 'April 15, 2026', category: 'Technology', excerpt: 'How tailsitter VTOL technology is revolutionizing aerial survey and surveillance operations across the Indian subcontinent.', image: '/images/doc4_page2_3.png' },
  { id: 2, title: 'Precision Agriculture with Drone Spraying', date: 'March 28, 2026', category: 'Agriculture', excerpt: 'Exploring how hexacopter-based pesticide spraying is reducing chemical usage by 30% while improving crop yield.', image: '/images/doc3_page8_42.png' },
  { id: 3, title: 'DGCA Type Certification: What It Means', date: 'March 10, 2026', category: 'Regulatory', excerpt: 'Understanding the DGCA type certification process and why it matters for commercial drone operations in India.', image: '/images/doc3_page3_6.jpeg' },
  { id: 4, title: 'Building Karman GCS from Scratch', date: 'February 22, 2026', category: 'Software', excerpt: 'Behind the scenes of developing our ground control station — from architecture decisions to real-world testing.', image: '/images/doc4_page8_28.jpeg' },
  { id: 5, title: 'FPV Drones in Modern Defense', date: 'February 5, 2026', category: 'Defense', excerpt: 'Analyzing the role of FPV kamikaze drones in asymmetric warfare and how they are changing modern battlefield tactics.', image: '/images/doc4_page5_13.png' },
]

function BlogPage() {
  return (
    <main className="blog-page">
      <section className="page-hero page-hero--short">
        <div className="page-hero__solid" />
        <div className="page-hero__content">
          <ScrollReveal direction="up">
            <h1>BLOG</h1>
            <p>Insights from the world of unmanned aviation</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-section__inner">
          <div className="blog-grid">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={post.id} direction="up" delay={idx * 120}>
                <article className="blog-card">
                  <div className="blog-card__image">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-card__category">{post.category}</span>
                  </div>
                  <div className="blog-card__body">
                    <span className="blog-card__date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card__link">Read More ›</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPage
