import { portfolio } from '../data/portfolioData'
import { PenIcon, LayersIcon, ScissorsIcon, UsersIcon } from './Icons'

const skillIcons = [PenIcon, LayersIcon, ScissorsIcon, UsersIcon]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <span className="eyebrow">Toolkit</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Craft &amp; <em>Software</em>
            </h2>
            <p className="section-sub">
              The disciplines and tools behind every frame — honed across 100+ projects.
            </p>
          </div>
          <span className="section-number">( No fake percentages — just tools )</span>
        </div>

        <div className="skills-grid">
          <div className="skills-col" data-aos="fade-right">
            <h3>
              <span className="num">01</span> Additional Skills
            </h3>
            <div className="skill-list-card">
              {portfolio.additionalSkills.map((skill, i) => {
                const Icon = skillIcons[i % skillIcons.length]
                return (
                  <div className="skill-item" key={skill} data-aos="fade-up" data-aos-delay={i * 70}>
                    <span className="icon">
                      <Icon size={19} />
                    </span>
                    <span>{skill}</span>
                    <span className="arrow" aria-hidden="true">↗</span>
                  </div>
                )
              })}
            </div>
            <p className="soft-note">
              Also fluent in 2D rigging (Moho) and 3D integration (Cinema 4D) from premium client work.
            </p>
          </div>

          <div className="skills-col" data-aos="fade-left" data-aos-delay="100">
            <h3>
              <span className="num">02</span> Software
            </h3>
            <div className="soft-card-grid">
              {portfolio.software.map((s, i) => (
                <div className="soft-card" key={s.name} data-aos="fade-up" data-aos-delay={i * 60}>
                  <span className="soft-mark-tile">{s.mark}</span>
                  <strong>{s.name}</strong>
                  <small>{s.tag}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}