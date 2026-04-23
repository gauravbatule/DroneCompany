import React from 'react'
import { Link } from 'react-router-dom'

const productItems = [
  { slug: 'tailsitters', label: 'TAILSITTERS', icon: '/images/doc3_page3_6.jpeg' },
  { slug: 'kamikaze', label: 'KAMIKAZE', icon: '/images/doc3_page7_29.jpeg' },
  { slug: 'fixed-wing', label: 'FIXED WING', icon: '/images/doc3_page6_26.jpeg' },
  { slug: 'cropter', label: 'CROPTER', icon: '/images/doc3_page8_42.png' },
]

const solutionItems = [
  { slug: 'mapping', label: 'MAPPING', icon: '/images/doc4_page4_9.png' },
  { slug: 'security', label: 'SECURITY', icon: '/images/doc4_page6_25.png' },
]

function DropdownPanel({ activeDropdown, onItemClick }) {
  const items = activeDropdown === 'products' ? productItems : activeDropdown === 'solutions' ? solutionItems : []
  if (!activeDropdown || items.length === 0) return null

  const basePath = activeDropdown === 'products' ? '/product' : '/solution'

  return (
    <div className="dropdown-panel">
      <div className="dropdown-panel__inner">
        {items.map((item) => (
          <Link key={item.slug} to={`${basePath}/${item.slug}`} className="dropdown-panel__item" onClick={onItemClick}>
            <div className="dropdown-panel__icon">
              <img src={item.icon} alt={item.label} />
            </div>
            <span className="dropdown-panel__label">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DropdownPanel
