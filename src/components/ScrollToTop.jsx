import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './Icons'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      className={`float-btn top-float ${show ? 'show' : ''}`}
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon size={20} />
    </button>
  )
}