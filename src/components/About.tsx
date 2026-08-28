import { motion } from 'motion/react'

const dimensions = [
  'Engineering',
  'Design',
  'Learning',
  'Creativity',
  'Communication',
]

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* INTRO */}
        <div className="about-intro">
          <div>
            <span className="section-kicker">02 / ABOUT</span>

            <h2 className="about-main-title">
              More than <span>code,</span>
            </h2>
          </div>

          <div className="about-intro-copy">
            <p>
              I’m a Software Engineering undergraduate who enjoys turning
              ideas into thoughtful digital experiences.
            </p>

            <div className="about-tags">
              <span>Software Engineering</span>
              <span>Full-Stack + Mobile</span>
              <span>UI / UX Thinking</span>
            </div>
          </div>
        </div>

        {/* MAIN ABOUT */}
        <div className="about-content">

          <div className="about-copy">
            <motion.p
              className="about-statement"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
            >
              I build,
              <br />
              I learn,
              <br />
              I design,
              <br />
              <span>I keep evolving.</span>
            </motion.p>

            <p className="about-description">
              Technology is one part of the journey. I keep exploring design,
              communication, people and new ways of thinking along the way.
            </p>
          </div>

          {/* BALANCE WORLD */}
          <div className="balance-world">

            <div className="balance-core">
              <img
                src="/images/logo.png"
                alt="Imasha Sachinthani logo"
                className="balance-core-logo"
              />
            </div>

            <div className="balance-ring ring-one" />
            <div className="balance-ring ring-two" />
            <div className="balance-ring ring-three" />

            {dimensions.map((item, index) => (
              <motion.div
                key={item}
                className={`dimension dimension-${index + 1}`}
                animate={{
                  y: [0, index % 2 === 0 ? -8 : 8, 0],
                }}
                transition={{
                  duration: 5 + index * 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </motion.div>
            ))}

            <div className="balance-glow" />
          </div>
        </div>

        {/* ENDING */}
        <div className="about-bottom">
          <div className="about-line" />

          <div className="about-bottom-text">
            <span>STILL LEARNING.</span>
            <span>STILL BUILDING.</span>
            <span className="accent-text">STILL BECOMING.</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About