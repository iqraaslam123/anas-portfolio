import { portfolio } from '../data/portfolioData'
import { GradIcon } from './Icons'

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <span className="eyebrow">Foundation</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Education
            </h2>
            <p className="section-sub">
              Academic foundations in mass communication and business administration.
            </p>
          </div>
          <span className="section-number">( 2018 — 2022 )</span>
        </div>

        <div className="edu-grid">
          {portfolio.education.map((edu, i) => (
            <article
              className="edu-card"
              key={edu.degree}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <span className="edu-year" aria-hidden="true">
                {edu.year}
              </span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">
                <GradIcon size={18} />
                {edu.institution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}