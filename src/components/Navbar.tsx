import { useState } from 'react'
import { NAV_LINKS } from '../data/siteData'
import Logo from './Logo'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); scrollTo('#home') }}>
          <Logo />
          <span className="navbar__brand-text">
            Prime <span>Carpet Cleaning</span>
          </span>
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--primary btn--sm"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
          >
            Book Free Consultation
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
