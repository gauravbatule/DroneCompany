import React, { useState } from 'react'
import { companyInfo } from '../data/products.js'
import ScrollReveal from '../components/ScrollReveal.jsx'

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="page-hero page-hero--short">
        <div className="page-hero__solid" />
        <div className="page-hero__content">
          <ScrollReveal direction="up">
            <h1>CONTACT US</h1>
            <p>Let's discuss how we can help with your UAV requirements.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="contact-section">
        <div className="contact-section__inner">
          {/* Info */}
          <ScrollReveal direction="left">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-info__item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <div>
                  <strong>Phone</strong>
                  <p>{companyInfo.phone}</p>
                </div>
              </div>
              <div className="contact-info__item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <div>
                  <strong>Email</strong>
                  <p>{companyInfo.email}</p>
                </div>
              </div>
              <div className="contact-info__item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <div>
                  <strong>Location</strong>
                  <p>{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="60" height="60"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    <select name="subject" value={formData.subject} onChange={handleChange} required>
                      <option value="">Select Subject *</option>
                      <option value="product">Product Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <textarea name="message" placeholder="Your Message *" rows="5" required value={formData.message} onChange={handleChange} />
                  <button type="submit" className="pill-btn pill-btn--dark">Send Message ›</button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
