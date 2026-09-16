import Swal from 'sweetalert2'
import { portfolio, whatsappUrl } from '../data/portfolioData'
import {
  ArrowRightIcon,
  DownloadIcon,
  PlayIcon,
  VimeoIcon,
  BehanceIcon,
  LinkedinIcon,
  WhatsappIcon,
  SparkIcon
} from './Icons'

const downloadCV = () => {
  const a = document.createElement('a')
  a.href = portfolio.cv.download
  a.download = 'Muhammad-Anas-CV.jpg'
  document.body.appendChild(a)
  a.click()
  a.remove()
  Swal.fire({
    title: 'CV download started!',
    text: 'Thanks for your interest in Muhammad\u2019s work.',
    icon: 'success',
    confirmButtonColor: '#0B1D33'
  })
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="blob blob-navy" aria-hidden="true" />
      <div className="blob blob-gold" aria-hidden="true" />

      <div className="float-shape" aria-hidden="true" style={{ top: '18%', left: '4%' }}>
        <SparkIcon size={18} />
      </div>
      <div className="float-shape" aria-hidden="true" style={{ bottom: '16%', left: '8%', animationDelay: '1.4s' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C1915A" strokeWidth="2">
          <rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)" />
        </svg>
      </div>
      <div className="float-shape" aria-hidden="true" style={{ top: '12%', right: '38%', animationDelay: '2.2s' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12294a" strokeWidth="2" opacity="0.5">
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div>
      <div className="motion-line" aria-hidden="true" style={{ top: '30%', left: '30%', width: 120 }} />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">{portfolio.roleLabel}</span>

            <h1 className="hero-title">
              <span className="line"><span>Muhammad</span></span>
              <span className="line"><span className="name-outline">Anas<span className="dot">.</span></span></span>
            </h1>

            <p className="hero-role">Crafting motion that makes brands <em>move</em>.</p>
            <p className="hero-intro">{portfolio.heroIntro}</p>

            <div className="hero-ctas">
              <a href="#showreel" className="btn btn-primary">
                View My Work <ArrowRightIcon size={16} />
              </a>
              <button type="button" className="btn btn-outline" onClick={downloadCV}>
                <DownloadIcon size={16} /> Download CV
              </button>
              <a href="#contact" className="btn btn-gold">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a className="social-pill" href={portfolio.social.vimeo.url} target="_blank" rel="noreferrer">
                <VimeoIcon size={15} /> Vimeo
              </a>
              <a className="social-pill" href={portfolio.social.behance.url} target="_blank" rel="noreferrer">
                <BehanceIcon size={15} /> Behance
              </a>
              <a className="social-pill" href={portfolio.social.linkedin.url} target="_blank" rel="noreferrer">
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <span className="sep" aria-hidden="true" />
              <a className="hero-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsappIcon size={16} /> WhatsApp Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" aria-hidden="true" />

            <div className="hero-portrait-frame">
              <img
                src="/assets/images/portrait.jpg"
                alt="Portrait of Muhammad Anas, Motion Graphic Designer and Video Editor"
                width="840"
                height="966"
                fetchpriority="high"
              />
            </div>

            <div className="hero-rotating">
              <div className="rotating-text" aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <text fill="#12294a" fontSize="9.5" letterSpacing="2.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
                    <textPath href="#circ">SHOWREEL • MOTION GRAPHICS •</textPath>
                  </text>
                </svg>
              </div>
              <a className="rotating-center play-badge" href="#showreel" aria-label="Play showreel">
                <PlayIcon size={18} />
              </a>
            </div>

            <div className="hero-badge">
              <strong>100+</strong>
              <small>Projects Delivered</small>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <span className="hero-loc">{portfolio.location} — Open for projects</span>
          <a className="scroll-cue" href="#about">
            Scroll <span className="cue-line" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}