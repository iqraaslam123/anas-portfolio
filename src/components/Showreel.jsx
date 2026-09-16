import { useEffect, useRef, useState } from 'react'
import { PlayIcon } from './Icons'

function formatTime(secs) {
  if (!Number.isFinite(secs)) return '00:00'
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function Showreel() {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onMeta = () => setDuration(video.duration)
    video.addEventListener('loadedmetadata', onMeta)
    return () => video.removeEventListener('loadedmetadata', onMeta)
  }, [])

  const play = () => {
    const video = videoRef.current
    if (!video) return
    video.play()
    setStarted(true)
  }

  return (
    <section className="showreel" id="showreel">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <span className="eyebrow light">Featured Work</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Show<em>reel</em>
            </h2>
            <p className="section-sub">
              Selected motion graphics and visual storytelling work.
            </p>
          </div>
          <span className="section-number" style={{ color: 'rgba(255,255,255,0.4)' }}>
            ( Play · Relax · Watch )
          </span>
        </div>

        <div className="showreel-frame" data-aos="zoom-in" data-aos-delay="60">
          <div className="showreel-track">
            <div className="showreel-inner">
              <video
                ref={videoRef}
                src="/assets/video/showreel.mp4"
                controls
                preload="metadata"
                playsInline
                aria-label="Muhammad Anas — motion graphics showreel"
                width={1280}
                height={720}
              />
              <span className="rec-tag">
                <span className="dot" /> SHOWREEL
              </span>
              <span className="duration-tag">{formatTime(duration)}</span>

              {!started && (
                <button className="video-overlay" onClick={play} type="button" aria-label="Play showreel">
                  <span className="big-play">
                    <PlayIcon size={30} />
                  </span>
                  <p>CLICK TO PLAY — MUHAMMAD ANAS SHOWREEL</p>
                </button>
              )}
            </div>
          </div>

          <div className="film-strip" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span className="film-cell" key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}