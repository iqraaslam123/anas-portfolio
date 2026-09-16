import { portfolio } from '../data/portfolioData'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text" data-aos="fade-right">
            <span className="eyebrow">About Me</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Visual <em>Storytelling,</em>
              <br />
              Behind The Lens.
            </h2>

            <p className="about-lead">{portfolio.about.lead}</p>
            {portfolio.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="highlight-chips">
              {portfolio.about.highlights.map((h, i) => (
                <span className="chip" key={h} data-aos="zoom-in" data-aos-delay={i * 80}>
                  {h}
                </span>
              ))}
            </div>

            <div className="signature" aria-hidden="true">— Muhammad Anas</div>
          </div>

          <div className="about-visual" data-aos="fade-left" data-aos-delay="120">
            <div className="about-frame-line" aria-hidden="true" />
            <div className="card">
              <img
                src="/assets/images/portrait.jpg"
                alt="Muhammad Anas on set — motion graphic designer at work"
                loading="lazy"
                width="853"
                height="1280"
              />
            </div>
            <div className="about-float-badge">
              <span className="years">5+</span>
              <span>
                Years of<br />Professional Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}