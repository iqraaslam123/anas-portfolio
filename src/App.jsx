import { useEffect, useRef } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBand from './components/MarqueeBand'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Showreel from './components/Showreel'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import SoftwareMarquee from './components/SoftwareMarquee'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import { portfolio } from './data/portfolioData'

function ScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress')
    if (!bar) return
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const ratio = total > 0 ? window.scrollY / total : 0
      bar.style.transform = `scaleX(${ratio})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress" aria-hidden="true" />
}

function App() {
  const glowRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    })
  }, [])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return
    let raf
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX - 170}px, ${e.clientY - 170}px)`
      })
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <Stats />
        <About />
        <Experience />
        <Showreel />
        <Achievements />
        <Skills />
        <SoftwareMarquee />
        <Education />
        <Contact />
      </main>
      <Footer />
      <div className="float-actions">
        <ScrollToTop />
        <WhatsAppButton />
      </div>

      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: portfolio.name,
            jobTitle: portfolio.title,
            address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
            email: `mailto:${portfolio.email}`,
            telephone: portfolio.phoneRaw,
            sameAs: [portfolio.social.vimeo.url, portfolio.social.behance.url, portfolio.social.linkedin.url]
          })
        }}
      />
    </>
  )
}

export default App