import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolioData'

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active || target == null) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 4)
      setValue(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return value
}

function StatCard({ stat, index, active }) {
  const animated = useCountUp(stat.value, active)
  return (
    <div
      className="stat-card"
      data-aos="fade-up"
      data-aos-delay={index * 90}
    >
      <span className="stat-index" aria-hidden="true">
        0{index + 1}
      </span>
      <div className="stat-value">
        {stat.key === 'sectors' ? <span>{stat.valueText}</span> : <span>{animated}</span>}
        {stat.suffix && <span className="suffix">{stat.suffix}</span>}
      </div>
      <p className="stat-label">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats" id="stats" ref={ref} aria-label="Career statistics">
      <div className="container">
        <div className="stats-grid">
          {portfolio.stats.map((stat, i) => (
            <StatCard key={stat.key} stat={stat} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}