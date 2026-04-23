import React from 'react'
import { Link } from 'react-router-dom'

function SolutionsTiles() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__grid">
        <Link to="/solution/mapping" className="solutions__tile">
          <img src="/images/doc4_page4_9.png" alt="Mapping" className="solutions__bg" />
          <div className="solutions__overlay" />
          <div className="solutions__content">
            <h2>MAPPING</h2>
            <span className="pill-btn pill-btn--outline">Learn More ›</span>
          </div>
        </Link>
        <Link to="/solution/security" className="solutions__tile">
          <img src="/images/doc4_page6_25.png" alt="Security" className="solutions__bg" />
          <div className="solutions__overlay" />
          <div className="solutions__content">
            <h2>SECURITY</h2>
            <span className="pill-btn pill-btn--outline">Learn More ›</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default SolutionsTiles
