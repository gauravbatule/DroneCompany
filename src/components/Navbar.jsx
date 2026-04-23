import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const productLinks = [
  { slug: 'tailsitters', label: 'Tailsitters' },
  { slug: 'kamikaze', label: 'Kamikaze' },
  { slug: 'fixed-wing', label: 'Fixed Wing' },
  { slug: 'cropter', label: 'Cropter' },
]

const solutionLinks = [
  { slug: 'mapping', label: 'Mapping' },
  { slug: 'security', label: 'Security' },
]

function Navbar({ activeDropdown, setActiveDropdown }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [drawerExpanded, setDrawerExpanded] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const toggleDrawerSection = (name) => {
    setDrawerExpanded(drawerExpanded === name ? null : name)
  }

  const closeDrawer = () => {
    setMenuOpen(false)
    setDrawerExpanded(null)
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

      {/* Side Drawer */}
      <div className={`side-drawer ${menuOpen ? 'side-drawer--open' : ''}`}>
        {/* Close button */}
        <button className="side-drawer__close" onClick={closeDrawer} aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div className="side-drawer__content">
          {/* Products - expandable */}
          <div className="side-drawer__section">
            <button className="side-drawer__toggle" onClick={() => toggleDrawerSection('products')}>
              PRODUCTS
              <svg className={`side-drawer__chevron ${drawerExpanded === 'products' ? 'side-drawer__chevron--open' : ''}`} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
              </svg>
            </button>
            {drawerExpanded === 'products' && (
              <div className="side-drawer__submenu">
                {productLinks.map(p => (
                  <Link key={p.slug} to={`/product/${p.slug}`} onClick={closeDrawer}>{p.label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions - expandable */}
          <div className="side-drawer__section">
            <button className="side-drawer__toggle" onClick={() => toggleDrawerSection('solutions')}>
              SOLUTIONS
              <svg className={`side-drawer__chevron ${drawerExpanded === 'solutions' ? 'side-drawer__chevron--open' : ''}`} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
              </svg>
            </button>
            {drawerExpanded === 'solutions' && (
              <div className="side-drawer__submenu">
                {solutionLinks.map(s => (
                  <Link key={s.slug} to={`/solution/${s.slug}`} onClick={closeDrawer}>{s.label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Software - expandable (single link) */}
          <div className="side-drawer__section">
            <button className="side-drawer__toggle" onClick={() => toggleDrawerSection('software')}>
              SOFTWARE
              <svg className={`side-drawer__chevron ${drawerExpanded === 'software' ? 'side-drawer__chevron--open' : ''}`} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
              </svg>
            </button>
            {drawerExpanded === 'software' && (
              <div className="side-drawer__submenu">
                <Link to="/software" onClick={closeDrawer}>Karman GCS</Link>
              </div>
            )}
          </div>

          {/* Direct links */}
          <Link to="/blog" className="side-drawer__link" onClick={closeDrawer}>BLOG</Link>
          <Link to="/careers" className="side-drawer__link" onClick={closeDrawer}>CAREERS</Link>
          <Link to="/about" className="side-drawer__link" onClick={closeDrawer}>ABOUT US</Link>
          <Link to="/contact" className="side-drawer__link" onClick={closeDrawer}>CONTACT US</Link>
        </div>

        {/* Phone at bottom */}
        <div className="side-drawer__phone">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <a href="tel:+917853912533">+91-7853912533</a>
        </div>
      </div>
      {menuOpen && <div className="side-drawer__backdrop" onClick={closeDrawer} />}
    </>
  )
}

export default Navbar
