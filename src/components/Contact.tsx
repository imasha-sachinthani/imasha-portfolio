import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio message from ${name || 'a visitor'}`
    )

    const body = encodeURIComponent(
      `Hi Imasha,

${message}

From:
${name}
${email}`
    )

    window.location.href =
      `mailto:imashasachinthani2001@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact-section">

      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-container">

        {/* ================= HERO ================= */}

        <div className="contact-hero">

          <div className="contact-hero-left">
            <p className="contact-eyebrow">
              06 / CONTACT
            </p>

            <h2 className="contact-title">
              Let&apos;s connect
              <span>with purpose</span>
            </h2>
          </div>

          <div className="contact-hero-right">

            <p>
              Open to internships, collaborations, project opportunities
              and conversations around software, design and technology.
            </p>

            <div className="contact-status">
              <span className="status-dot" />

              <div>
                <small>CURRENT STATUS</small>
                <strong>Open to opportunities</strong>
              </div>
            </div>

          </div>

        </div>


        {/* ================= DIRECT CHANNELS ================= */}

        <div className="contact-channels">

          <div className="contact-section-heading">
            <span>DIRECT CHANNELS</span>

            <p>
              Choose the easiest way to reach me.
            </p>
          </div>


          <div className="contact-card-grid">

            {/* EMAIL */}

            <div className="contact-card email-card">

              <div className="contact-card-top">

                <span className="contact-number">
                  01
                </span>

                <div className="contact-icon">
                  📧
                </div>

              </div>


              <div className="contact-card-content">

                <span className="contact-label">
                  EMAIL
                </span>

                <h3>
                  Send me an email
                </h3>

                <a
                  href="mailto:imashasachinthani2001@gmail.com"
                  className="contact-email-address"
                >
                  imashasachinthani2001@gmail.com
                </a>

                <p>
                  For opportunities, projects or collaboration.
                </p>

              </div>


              <a
                href="mailto:imashasachinthani2001@gmail.com"
                className="contact-arrow"
                aria-label="Send email"
              >
                <ArrowUpRight size={18} />
              </a>

            </div>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/imasha-sachinthani-229461304"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-link"
            >

              <div className="contact-card-top">

                <span className="contact-number">
                  02
                </span>

                <div className="contact-icon">
                  💼
                </div>

              </div>


              <div className="contact-card-content">

                <span className="contact-label">
                  LINKEDIN
                </span>

                <h3>
                  Connect on LinkedIn
                </h3>

                <p>
                  Professional profile, experience and network.
                </p>

              </div>


              <span className="contact-arrow">
                <ArrowUpRight size={18} />
              </span>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/imasha-sachinthani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-link"
            >

              <div className="contact-card-top">

                <span className="contact-number">
                  03
                </span>

                <div className="contact-icon">
                  🐙
                </div>

              </div>


              <div className="contact-card-content">

                <span className="contact-label">
                  GITHUB
                </span>

                <h3>
                  View my GitHub
                </h3>

                <p>
                  Projects, repositories and development work.
                </p>

              </div>


              <span className="contact-arrow">
                <ArrowUpRight size={18} />
              </span>

            </a>

          </div>

        </div>


        {/* ================= MESSAGE AREA ================= */}

        <div className="contact-message-area">

          <div className="contact-message-info">

            <p className="contact-message-eyebrow">
              WRITE DIRECTLY
            </p>

            <h3>
              Have something
              <span>in mind?</span>
            </h3>

            <p className="contact-message-description">
              Leave a short message here. Your email app will open
              with everything prepared for you.
            </p>

            <div className="contact-note">
              <span>✦</span>

              No account needed. No long forms.
            </div>

          </div>


          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form-row">

              {/* NAME */}

              <div className="contact-field">

                <label htmlFor="contact-name">
                  YOUR NAME
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="How should I address you?"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="contact-field">

                <label htmlFor="contact-email">
                  YOUR EMAIL
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

              </div>

            </div>


            {/* MESSAGE */}

            <div className="contact-field contact-message-field">

              <div className="contact-message-label">

                <label htmlFor="contact-message">
                  YOUR MESSAGE
                </label>

                <span>
                  {message.length}/500
                </span>

              </div>


              <textarea
                id="contact-message"
                placeholder="Tell me a little about the opportunity, project or idea..."
                maxLength={500}
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                required
              />

            </div>


            {/* FORM BOTTOM */}

            <div className="contact-form-bottom">

              <p>
                Your message stays on your device until
                you choose to send it.
              </p>

              <button
                type="submit"
                className="contact-send-button"
              >
                Send Message
                <span>↗</span>
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact