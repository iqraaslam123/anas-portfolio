import { portfolio } from '../data/portfolioData'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-lines" aria-hidden="true" />
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <span className="eyebrow light">Career</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Professional <em>Journey</em>
            </h2>
            <p className="section-sub">
              5+ years crafting motion for agencies and studios across Karachi.
            </p>
          </div>
          <span className="section-number" style={{ color: 'rgba(255,255,255,0.4)' }}>
            ( 2019 — Present )
          </span>
        </div>

        <div className="timeline">
          {portfolio.experience.map((job, i) => (
            <article className="exp-card" key={job.company} data-aos="fade-up" data-aos-delay={i * 90}>
              <span className="exp-node" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="card">
                <div className="exp-head">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">
                      <strong>{job.company}</strong> · {job.location}
                    </p>
                  </div>
                  <span className="exp-period">{job.period}</span>
                </div>
                <p className="exp-desc">{job.description}</p>
                <ul className="exp-list">
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="exp-stack">
                  {job.stack.map((s) => (
                    <span className="stack-badge" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}