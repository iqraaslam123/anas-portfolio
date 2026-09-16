const words = [
  'Motion Graphics',
  'Animation',
  'Video Editing',
  'Brand Campaigns',
  'Character Animation',
  '3D Animation',
  'Visual Storytelling'
]

export default function MarqueeBand() {
  const items = [...words, ...words]
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="track">
        {items.map((word, i) => (
          <span className="band-item" key={i}>
            {word} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}