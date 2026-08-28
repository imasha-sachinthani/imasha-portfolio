import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-status">
            <span className="status-dot" />
            <span>SOFTWARE ENGINEERING UNDERGRADUATE</span>
          </div>

          <h1 className="hero-name">
            Imasha
            <span>Sachinthani.</span>
          </h1>

          <p className="hero-role">
            Building thoughtful digital experiences
            <br />
            through <strong>engineering</strong> and{' '}
            <strong>design.</strong>
          </p>

          <p className="hero-description">
            A software engineering undergraduate exploring full-stack
            development, mobile applications and human-centred digital
            experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore my work
              <ArrowUpRight size={18} />
            </a>

            <a
  href="/resume.pdf"
  download="Imasha-Sachinthani-CV.pdf"
  className="secondary-button"
>
  <Download size={17} />
  <span>Download CV</span>
</a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={15} />
              Sri Lanka
            </span>

            <span className="meta-line" />

            <span>Full-Stack</span>
            <span>Mobile</span>
            <span>UI/UX</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: 'easeOut',
          }}
        >
          <div className="portrait-orbit portrait-orbit-one" />
          <div className="portrait-orbit portrait-orbit-two" />

          <div className="portrait-light" />

          <div className="portrait-frame">
            <img
              src="/images/profile.jpeg"
              alt="Imasha Sachinthani"
              className="portrait-image"
            />
          </div>

          <motion.div
  className="floating-card floating-card-one"
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <span>01</span>
  <p>ENGINEERING</p>
</motion.div>

          <motion.div
  className="floating-card floating-card-two"
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <span>02</span>
  <p>DESIGN</p>
</motion.div>

          <div className="visual-mark">
            <span />
            <p>BUILDING WITH PURPOSE</p>
          </div>
        </motion.div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>
    </section>
  )
}

export default Hero