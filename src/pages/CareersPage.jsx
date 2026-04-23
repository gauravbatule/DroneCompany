import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'

const openings = [
  { title: 'UAV Systems Engineer', type: 'Full-time', location: 'New Delhi', desc: 'Design and develop next-generation drone platforms including airframe, avionics, and propulsion systems.' },
  { title: 'Embedded Software Developer', type: 'Full-time', location: 'New Delhi', desc: 'Develop firmware for flight controllers, ESCs, and onboard compute modules using C/C++ and Python.' },
  { title: 'GCS Software Developer', type: 'Full-time', location: 'Remote', desc: 'Build and maintain our Karman Ground Control Station using React, Electron, and WebSocket protocols.' },
  { title: 'Drone Pilot & Field Engineer', type: 'Full-time', location: 'Pan India', desc: 'Conduct flight operations, field testing, and customer deployments across India.' },
  { title: 'Business Development Manager', type: 'Full-time', location: 'New Delhi', desc: 'Drive sales and partnerships in defense, agriculture, and mapping sectors.' },
]

function CareersPage() {
  return (
    <main className="careers-page">
      <section className="page-hero page-hero--short">
        <div className="page-hero__solid" />
        <div className="page-hero__content">
          <ScrollReveal direction="up">
            <h1>CAREERS</h1>
            <p>Join us in building the future of unmanned aviation</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="careers-intro">
        <div className="careers-intro__inner">
          <ScrollReveal direction="up">
            <h2 className="section-title">Why Aero-Transition?</h2>
            <p className="about-text">We're a fast-growing drone technology startup where every team member directly impacts our products. From designing airframes to writing flight controller firmware, from flying missions in the field to closing defense contracts — the work here is real, hands-on, and high-impact.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="careers-openings">
        <div className="careers-openings__inner">
          <ScrollReveal direction="up"><h2 className="section-title">Open Positions</h2></ScrollReveal>
          <div className="openings-list">
            {openings.map((job, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="opening-card">
                  <div className="opening-card__header">
                    <h3>{job.title}</h3>
                    <div className="opening-card__tags">
                      <span className="opening-tag">{job.type}</span>
                      <span className="opening-tag">{job.location}</span>
                    </div>
                  </div>
                  <p>{job.desc}</p>
                  <Link to="/contact" className="pill-btn pill-btn--dark pill-btn--sm">Apply Now ›</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CareersPage
