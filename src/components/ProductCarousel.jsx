import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const products = [
  { name: 'TAILSITTERS UAV', slug: 'tailsitters', subtitle: 'Fixed-wing Tailsitter VTOL', image: '/images/doc3_page3_6.jpeg' },
  { name: 'KAMIKAZE UAV', slug: 'kamikaze', subtitle: 'Precision Strike Loitering Munition', image: '/images/doc3_page7_29.jpeg' },
  { name: 'FIXED WING UAV', slug: 'fixed-wing', subtitle: 'Aerial Mapping Platform', image: '/images/doc3_page6_26.jpeg' },
  { name: 'CROPTER', slug: 'cropter', subtitle: 'Agricultural Hexacopter', image: '/images/doc3_page8_42.png' },
]

function ProductCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = (index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const next = () => goTo((current + 1) % products.length)
  const prev = () => goTo((current - 1 + products.length) % products.length)
  const product = products[current]

  return (
    <section className="carousel-section" id="products">
      <h2 className="carousel-section__name">{product.name}</h2>
      <div className="carousel-section__stage">
        <button className="carousel-section__arrow carousel-section__arrow--left" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <div className="carousel-section__image-wrapper">
          {products.map((p, idx) => (
            <img key={idx} src={p.image} alt={p.name} className={`carousel-section__image ${idx === current ? 'active' : ''}`} />
          ))}
        </div>
        <button className="carousel-section__arrow carousel-section__arrow--right" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      </div>
      <div className="carousel-section__actions">
        <Link to={`/product/${product.slug}`} className="pill-btn pill-btn--dark">Learn More ›</Link>
        <a href="#" className="pill-btn pill-btn--dark">Buy Now ›</a>
      </div>
      <div className="carousel-section__actions" style={{ marginTop: '12px' }}>
        <a href="#" className="pill-btn pill-btn--dark">Download Brochure ↓</a>
      </div>
    </section>
  )
}

export default ProductCarousel
