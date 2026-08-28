import { ArrowUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <div className="footer-brand-row">

            <div className="footer-logo-mark">
              <img
                src="/images/logo.png"
                alt="Imasha Sachinthani logo"
                className="footer-logo-image"
              />
            </div>

            <div>
              <strong>Imasha Sachinthani</strong>
              <span>Software Engineering Undergraduate</span>
            </div>

          </div>

          <p>
            Building thoughtful digital experiences through
            engineering, design and continuous learning.
          </p>

        </div>


        {/* MIDDLE */}
        <div className="footer-links">

          <span className="footer-heading">
            QUICK LINKS
          </span>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>

        </div>


        {/* RIGHT */}
        <div className="footer-connect">

          <span className="footer-heading">
            CONNECT
          </span>

          <div className="footer-socials">

            <a
              href="mailto:imashasachinthani2001@gmail.com"
              aria-label="Email"
              title="Email"
            >
              @
            </a>

            <a
              href="https://www.linkedin.com/in/imasha-sachinthani-229461304"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>

            <a
              href="https://github.com/imasha-sachinthani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              GH
            </a>

          </div>


          <button
            className="footer-top-button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            Back to top
            <ArrowUpRight size={14} />
          </button>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <span>
          © 2026 Imasha Sachinthani. All rights reserved.
        </span>

        <span>
          BUILT WITH CURIOSITY.
          <strong> STILL EVOLVING.</strong>
        </span>

      </div>

    </footer>
  )
}

export default Footer