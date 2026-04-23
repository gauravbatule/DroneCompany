import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import DropdownPanel from './components/DropdownPanel.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import SolutionPage from './pages/SolutionPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import SoftwarePage from './pages/SoftwarePage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app" onClick={(e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('.dropdown-panel')) {
          setActiveDropdown(null)
        }
      }}>
        <Navbar activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
        <DropdownPanel activeDropdown={activeDropdown} onItemClick={() => setActiveDropdown(null)} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/solution/:slug" element={<SolutionPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
