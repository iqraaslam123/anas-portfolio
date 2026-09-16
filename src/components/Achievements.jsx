import { portfolio } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <span className="eyebrow">Milestones</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Key <em>Achievements</em>
            </h2>
            <p className="section-sub">
              Documented results from real client work across corporate, FMCG and education.
            </p>
          </div>
          <span className="section-number">( 100% Real — From CV )</span>
        </div>

        <div className="ach-grid">
          {portfolio.achievements.map((a, i) => (
            <article
              className="ach-card"
              key={a.number}
              data-aos="zoom-in"
              data-aos-delay={i * 90}
            >
              <span className="ach-ghost" aria-hidden="true">
                {a.number}
              </span>
              <span className="ach-num">ACHIEVEMENT {a.number}</span>
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-text">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}