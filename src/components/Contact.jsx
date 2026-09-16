import { useState } from 'react'
import Swal from 'sweetalert2'
import { portfolio, whatsappUrl } from '../data/portfolioData'
import {
  WhatsappIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  VimeoIcon,
  BehanceIcon,
  LinkedinIcon,
  DownloadIcon,
  ArrowRightIcon
} from './Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.name.trim()) {
      Swal.fire({
        title: 'Please add your name',
        icon: 'warning',
        confirmButtonColor: '#0B1D33'
      })
      return
    }
    if (!emailRe.test(form.email)) {
      Swal.fire({
        title: 'Please enter a valid email address',
        icon: 'warning',
        confirmButtonColor: '#0B1D33'
      })
      return
    }
    if (form.message.trim().length < 10) {
      Swal.fire({
        title: 'Message is too short',
        text: 'Please write at least 10 characters so Muhammad can help you.',
        icon: 'warning',
        confirmButtonColor: '#0B1D33'
      })
      return
    }
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out. Muhammad Anas will get back to you soon.',
      icon: 'success',
      confirmButtonColor: '#0B1D33'
    })
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Get In <em>Touch</em>
            </h2>
          </div>
          <span className="section-number">{portfolio.location}</span>
        </div>

        <div className="contact-panel" data-aos="fade-up" data-aos-delay="80">
          <div className="contact-inner">
            <div data-aos="fade-right">
              <span className="eyebrow light">Let&rsquo;s Talk</span>
              <h3 className="contact-title">
                Let&rsquo;s Create Something <em>Impactful</em>
              </h3>
              <p className="contact-lead">
                Have a brand campaign, explainer, corporate film or animation project in mind?
                Muhammad is a message away.
              </p>

              <div className="contact-methods">
                <div className="contact-row">
                  <span className="ico"><MailIcon /></span>
                  <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
                </div>
                <div className="contact-row">
                  <span className="ico"><PhoneIcon /></span>
                  <a href={`tel:${portfolio.phoneRaw}`}>{portfolio.phone}</a>
                </div>
                <div className="contact-row">
                  <span className="ico"><PinIcon /></span>
                  <span style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-head)' }}>
                    {portfolio.location}
                  </span>
                </div>

                <div className="contact-row" style={{ gap: 10, borderBottom: 'none', flexWrap: 'wrap' }}>
                  <a className="social-pill" style={{ borderColor: 'var(--line-dark)', color: '#fff' }} href={portfolio.social.vimeo.url} target="_blank" rel="noreferrer">
                    <VimeoIcon size={15} /> Vimeo
                  </a>
                  <a className="social-pill" style={{ borderColor: 'var(--line-dark)', color: '#fff' }} href={portfolio.social.behance.url} target="_blank" rel="noreferrer">
                    <BehanceIcon size={15} /> Behance
                  </a>
                  <a className="social-pill" style={{ borderColor: 'var(--line-dark)', color: '#fff' }} href={portfolio.social.linkedin.url} target="_blank" rel="noreferrer">
                    <LinkedinIcon size={15} /> LinkedIn
                  </a>
                </div>
              </div>

              <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" style={{ marginTop: 22 }}>
                <WhatsappIcon size={18} /> Start a Project on WhatsApp
              </a>
              <a
                className="btn btn-outline light"
                href={portfolio.cv.download}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 22, marginLeft: 10 }}
              >
                <DownloadIcon size={16} /> View CV
              </a>
              <span className="form-note" style={{ display: 'inline-block', marginLeft: 10 }}>
                Portrait + full CV also on download.
              </span>
            </div>

            <form className="contact-form" onSubmit={onSubmit} data-aos="fade-left" data-aos-delay="140">
              <h4>Send Muhammad a message</h4>
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                />
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-gold">
                  Send Message <ArrowRightIcon size={16} />
                </button>
                <span className="form-note">
                  Or reach out fast on <a href={whatsappUrl} target="_blank" rel="noreferrer" style={{ color: '#4ce682', textDecoration: 'underline' }}>WhatsApp</a>.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}