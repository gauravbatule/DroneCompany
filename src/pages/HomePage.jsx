import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import ProductCarousel from '../components/ProductCarousel.jsx'
import SolutionsTiles from '../components/SolutionsTiles.jsx'
import SoftwareSection from '../components/SoftwareSection.jsx'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductCarousel />
      <SolutionsTiles />
      <SoftwareSection />
    </main>
  )
}

export default HomePage
