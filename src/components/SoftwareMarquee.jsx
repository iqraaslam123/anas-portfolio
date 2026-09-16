import { portfolio } from '../data/portfolioData'

export default function SoftwareMarquee() {
  const items = [...portfolio.marqueeItems, ...portfolio.marqueeItems]
  return (
    <div className="software-marquee-section" aria-hidden="true">
      <div className="track">
        {items.map((name, i) => (
          <span className="soft-chip" key={i}>
            <span className="soft-mark">
              {portfolio.software.find((s) => s.name === name)?.mark ?? name.slice(0, 2)}
            </span>
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}