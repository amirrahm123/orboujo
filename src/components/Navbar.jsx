import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'אודות' },
  { href: '#services', label: 'אימונים' },
  { href: '#achievements', label: 'הישגים' },
  { href: '#gallery', label: 'גלריה' },
]

export default function Navbar({ wa }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="nav-logo-icon">🥊</span>
          <div>
            <span className="nav-logo-name">OR BOUJO</span>
            <span className="nav-logo-sub">KICKBOXING</span>
          </div>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="nav-cta">קבעו אימון</a>
          </li>
        </ul>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="תפריט">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
          ))}
          <li>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="mob-cta" onClick={close}>🥊 קבעו אימון</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
