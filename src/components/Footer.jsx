import { portfolio, whatsappUrl } from '../data/portfolioData'
import { VimeoIcon, BehanceIcon, LinkedinIcon, WhatsappIcon, MailIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-name">
              Muhammad <span>Anas</span>
            </p>
            <p className="footer-role">{portfolio.footer.tagline}</p>
          </div>
          <div className="footer-right">
            {[portfolio.social.vimeo, portfolio.social.behance, portfolio.social.linkedin].map((s) => (
              <a className="footer-social" key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label === 'Vimeo' && <VimeoIcon size={16} />}
                {s.label === 'Behance' && <BehanceIcon size={16} />}
                {s.label === 'LinkedIn' && <LinkedinIcon size={16} />}
                {s.label}
              </a>
            ))}
            <a className="footer-social" href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsappIcon size={16} /> WhatsApp
            </a>
            <a className="footer-social" href={`mailto:${portfolio.email}`}>
              <MailIcon size={16} /> Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{portfolio.footer.rights}</span>
          <nav className="footer-links" aria-label="Footer">
            {portfolio.nav.slice(0, 5).map((n) => (
              <a href={n.href} key={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}