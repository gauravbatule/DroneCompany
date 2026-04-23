import React from 'react'
import { Link } from 'react-router-dom'

function SoftwareSection() {
  return (
    <section className="software" id="software">
      {/* KARMAN GCS title on light bg */}
      <div className="software__header">
        <h2>KARMAN GCS</h2>
      </div>

      {/* Black section with tablet mockup */}
      <div className="software__dark">
        <div className="software__inner">
          <div className="software__text">
            <h3>Powerful and Intuitive Ground Control Software for Managing your Drone Operations</h3>
            <Link to="/software" className="software__learn-link">Learn More &rsaquo;</Link>
          </div>
          <div className="software__device">
            <div className="software__tablet-frame">
              <img src="/images/doc4_page8_28.jpeg" alt="Karman GCS Interface" />
            </div>
            <p className="software__download-label">Test Our Windows Beta Version</p>
            <div className="software__windows-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                <path d="M3 12V6.75l8-1.25V12H3zm0 .5h8v6.5l-8-1.25V12.5zM11.5 5.37l9.5-1.5V12h-9.5V5.37zM11.5 12.5H21v6.63l-9.5 1.5V12.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftwareSection
