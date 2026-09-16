import { useEffect, useState } from 'react'
import { portfolio, whatsappUrl } from '../data/portfolioData'
import { WhatsappIcon, VimeoIcon, BehanceIcon, LinkedinIcon } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = portfolio.nav.map((n) => n.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); goTo('#home') }} aria-label="Muhammad Anas — home">
            Muhammad <span>Anas</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); goTo(item.href) }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="nav-cta"
            href="#contact"
            onClick={(e) => { e.preventDefault(); goTo('#contact') }}
          >
            Let&rsquo;s Talk
          </a>

          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Mobile">
        <button className="m-close" onClick={() => setOpen(false)} aria-label="Close menu">
          close
        </button>
        <div>
          {portfolio.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`m-link ${active === item.href.slice(1) ? 'active' : ''}`}
              style={{ transitionDelay: `${open ? 0.08 + i * 0.05 : 0}s` }}
              onClick={(e) => { e.preventDefault(); goTo(item.href) }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="m-footer">
          <a
            className="btn btn-whatsapp btn-sm btn-block"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon size={16} /> Let&rsquo;s Talk on WhatsApp
          </a>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {[portfolio.social.vimeo, portfolio.social.behance, portfolio.social.linkedin].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="social-pill"
                style={{ justifyContent: 'center', color: 'var(--white)', borderColor: 'var(--line-dark)' }}
              >
                {s.label === 'Vimeo' && <VimeoIcon size={16} />}
                {s.label === 'Behance' && <BehanceIcon size={16} />}
                {s.label === 'LinkedIn' && <LinkedinIcon size={16} />}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}