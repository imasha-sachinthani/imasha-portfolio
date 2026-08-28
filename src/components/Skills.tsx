import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const skillGroups = {
  Interface: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Material UI',
    'Framer Motion',
  ],

  Systems: [
    'Node.js',
    'Express.js',
    'REST API',
    'JWT',
    'Spring Boot',
    '.NET 8',
  ],

  Mobile: [
    'Flutter',
    'Dart',
    'Android Studio',
    'Firebase',
  ],

  Data: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Prisma ORM',
    'Entity Framework',
  ],

  Cloud: [
    'AWS',
    'Docker',
    'Git',
    'GitHub',
    'Cloudinary',
  ],

  Design: [
    'Figma',
    'Wireframing',
    'Prototyping',
    'Responsive Design',
    'User Research',
  ],
}

type SkillGroup = keyof typeof skillGroups

function Skills() {
  const [activeGroup, setActiveGroup] =
    useState<SkillGroup | null>(null)

  const toggleGroup = (group: SkillGroup) => {
    setActiveGroup((current) =>
      current === group ? null : group
    )
  }

  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header">

          <div>
            <span className="section-kicker">
              03 / TECHNICAL ECOSYSTEM
            </span>

            <h2 className="skills-title">
              How I <span>build,</span>
            </h2>
          </div>

          <p className="skills-intro">
            Not a list of tools — a connected system for
            turning ideas into working digital products.
          </p>

        </div>


        {/* TECH ECOSYSTEM */}
        <div className="skills-stage">

          <div className="skills-grid-bg" />

          {/* CONNECTION LINES */}
          <div className="skill-line line-1" />
          <div className="skill-line line-2" />
          <div className="skill-line line-3" />
          <div className="skill-line line-4" />
          <div className="skill-line line-5" />
          <div className="skill-line line-6" />


          {/* CORE */}
          <motion.div
            className="skills-core"
            animate={{
              boxShadow: [
                '0 0 35px rgba(124,108,255,0.10)',
                '0 0 60px rgba(124,108,255,0.20)',
                '0 0 35px rgba(124,108,255,0.10)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span>CORE</span>
            <small>IMASHA / STACK</small>
          </motion.div>


          {/* NODES */}
          {Object.keys(skillGroups).map(
            (group, index) => {

              const typedGroup = group as SkillGroup
              const isActive =
                activeGroup === typedGroup

              return (
                <div
                  key={group}
                  className={`skill-node-wrap node-wrap-${
                    index + 1
                  }`}
                >

                  <motion.button
                    className={`skill-node ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() =>
                      toggleGroup(typedGroup)
                    }
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <strong>{group}</strong>

                    <small>
                      {isActive
                        ? 'CLOSE −'
                        : 'EXPLORE +'}
                    </small>
                  </motion.button>


                  {/* LOCAL TECH BOX */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="node-tech-box"
                        initial={{
                          opacity: 0,
                          scale: 0.92,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.94,
                          y: 6,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <div className="node-tech-header">
                          <span>STACK / {group}</span>
                        </div>

                        <div className="node-tech-list">
                          {skillGroups[
                            typedGroup
                          ].map((skill) => (
                            <motion.span
                              key={skill}
                              className="node-tech-chip"
                              whileHover={{
                                x: 3,
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              )
            }
          )}

        </div>


        {/* END NOTE */}
        <div className="skills-footer">
          <p>
            Technology changes. The way I think and build
            keeps evolving with it.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Skills