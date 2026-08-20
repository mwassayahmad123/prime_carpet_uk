import { COMPANY_NAME, NAV_LINKS } from '../data/siteData'
import Logo from './Logo'

function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollTo('#home') }}>
            <Logo />
          </a>
          <p>Professional carpet &amp; upholstery steam cleaning. Book your free consultation today.</p>
        </div>
        <nav className="footer__nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
