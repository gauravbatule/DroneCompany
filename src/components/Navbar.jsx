import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ activeDropdown, setActiveDropdown }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <svg className="navbar__logo-svg" viewBox="0 0 80 35" fill="none">
              <path d="M5 30C15 10 40 2 75 8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
              <path d="M5 30C18 18 45 10 75 15" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
            </svg>
            <div className="navbar__logo-text">
              <span className="navbar__logo-title">AERO-TRANSITION</span>
              <span className="navbar__logo-sub">TECHNOLOGY</span>
            </div>
          </Link>

          <div className="navbar__center">
            <button className={`navbar__navbtn ${activeDropdown === 'products' ? 'active' : ''}`} onClick={() => toggleDropdown('products')}>PRODUCTS</button>
            <button className={`navbar__navbtn ${activeDropdown === 'solutions' ? 'active' : ''}`} onClick={() => toggleDropdown('solutions')}>SOLUTIONS</button>
            <Link to="/software" className="navbar__navbtn">SOFTWARE</Link>
          </div>

          <div className="navbar__right">
            <a href="tel:+917853912533" className="navbar__phone">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              +91-7853912533
            </a>
            <Link to="/contact" className="navbar__contact-btn">CONTACT US</Link>
            <button className="navbar__menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <div className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}>
                <span></span><span></span><span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className={`side-drawer ${menuOpen ? 'side-drawer--open' : ''}`}>
        <div className="side-drawer__content">
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
      {menuOpen && <div className="side-drawer__backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  )
}

export default Navbar
