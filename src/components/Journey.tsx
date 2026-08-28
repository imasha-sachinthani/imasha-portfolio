import { motion } from 'motion/react'
import {
  GraduationCap,
  Laptop2,
  Brain,
  Network,
  Mic2,
  BriefcaseBusiness,
} from 'lucide-react'


const journeyItems = [
  {
    number: '01',
    title: 'BSc (Hons) Software Engineering',
    skill: 'Software Engineering',
    description:
      'Building a strong foundation in software development, system design, problem solving and modern engineering practices at NSBM Green University.',
    icon: GraduationCap,
    className: 'journey-node-1',
  },

  {
    number: '02',
    title: 'Bachelor of Information Technology',
    skill: 'BIT · UCSC',
    description:
      'Expanding my technical foundation through the University of Colombo School of Computing. Diploma completed, with the Higher Diploma currently in progress.',
    icon: Laptop2,
    className: 'journey-node-2',
  },

  {
    number: '03',
    title: 'Psychology & Counseling',
    skill: 'People Understanding',
    description:
      'Exploring psychology, communication and human behaviour through diploma-level study at SITC Campus.',
    icon: Brain,
    className: 'journey-node-3',
  },

  {
    number: '04',
    title: 'Tech Communities & Certifications',
    skill: 'Continuous Learning',
    description:
      'Growing beyond coursework through NSBM FOSS, IEEE workshops, Microsoft learning experiences and hands-on technology communities.',
    icon: Network,
    className: 'journey-node-4',
  },

  {
    number: '05',
    title: 'Presenting & Communication',
    skill: 'Confidence',
    description:
      'Developing the ability to communicate ideas clearly, present confidently and connect with different audiences through university and community experiences.',
    icon: Mic2,
    className: 'journey-node-5',
  },

  {
    number: '06',
    title: 'Project-Based Learning',
    skill: 'Discipline',
    description:
      'Learning to plan, build, document and complete software projects through structured academic and independent work.',
    icon: BriefcaseBusiness,
    className: 'journey-node-6',
  },
]


const capabilities = [
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Adaptability',
  'Design Thinking',
  'Precision',
]


function Journey() {
  return (
    <section
      className="journey-section"
      id="journey"
    >
      <div className="journey-container">

        {/* ================= HEADER ================= */}

        <div className="journey-header">

          <div>
            <span className="section-kicker">
              05 / JOURNEY
            </span>

            <h2 className="journey-title">
              Different paths,
              <span>
                One evolving perspective
              </span>
            </h2>
          </div>


          <p className="journey-intro">
            Every experience added something different —
            technical thinking, communication, continuous
            learning and a deeper understanding of people.
          </p>

        </div>



        {/* ================= JOURNEY MAP ================= */}

        <div className="journey-map">

          <div className="journey-grid" />


          {/* PATH */}

          <svg
            className="journey-path"
            viewBox="0 0 1200 700"
            preserveAspectRatio="none"
            aria-hidden="true"
          >

            <motion.path
              d="M120 180 C260 80, 350 120, 430 220 S610 390, 710 260 S900 120, 1080 210"
              fill="none"
              stroke="url(#journeyGradient)"
              strokeWidth="2"
              strokeLinecap="round"

              initial={{
                pathLength: 0,
                opacity: 0,
              }}

              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}

              viewport={{
                once: true,
                amount: 0.3,
              }}

              transition={{
                duration: 1.8,
                ease: 'easeInOut',
              }}
            />


            <motion.path
              d="M1080 210 C960 390, 850 500, 690 470 S440 420, 300 520 S170 590, 110 540"
              fill="none"
              stroke="url(#journeyGradient)"
              strokeWidth="2"
              strokeLinecap="round"

              initial={{
                pathLength: 0,
                opacity: 0,
              }}

              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}

              viewport={{
                once: true,
                amount: 0.3,
              }}

              transition={{
                duration: 2,
                delay: 0.3,
                ease: 'easeInOut',
              }}
            />


            <defs>

              <linearGradient
                id="journeyGradient"
                x1="0"
                x2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#56c7e8"
                  stopOpacity="0.22"
                />

                <stop
                  offset="50%"
                  stopColor="#8c7cff"
                  stopOpacity="0.65"
                />

                <stop
                  offset="100%"
                  stopColor="#56c7e8"
                  stopOpacity="0.28"
                />

              </linearGradient>

            </defs>

          </svg>



          {/* ================= JOURNEY CARDS ================= */}

          {journeyItems.map((item, index) => {

            const Icon = item.icon

            return (

              <motion.div
                key={item.title}

                className={`journey-node ${item.className}`}

                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 18,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.35,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}

                whileHover={{
                  y: -6,
                }}
              >

                <div className="journey-node-top">

                  <span>
                    {item.number}
                  </span>

                  <Icon size={17} />

                </div>


                <strong>
                  {item.title}
                </strong>


                <div className="journey-skill">
                  {item.skill}
                </div>


                <p>
                  {item.description}
                </p>

              </motion.div>

            )
          })}



          {/* ================= CENTER CORE ================= */}

          <div className="journey-core">

            <div className="journey-core-logo-wrap">

              <img
                src="/images/logo.png"
                alt="Imasha Sachinthani logo"
                className="journey-core-logo"
              />

            </div>


            <span className="journey-core-label">
              NOW
            </span>


            <strong>
              Building
              <br />
              forward.
            </strong>

          </div>

        </div>



        {/* ================= WHAT I CARRY FORWARD ================= */}

        <div className="capability-section">


          <div className="capability-heading">

            <span>
              WHAT I CARRY FORWARD
            </span>


            <p>
              Skills shaped across different experiences,
              not just listed on a résumé.
            </p>

          </div>



          <div className="capability-constellation">


            {/* IMPORTANT:
                These are normal DIVs.
                NOT motion.div.
                This prevents Node 01 and 04 from moving.
            */}

            {capabilities.map((capability, index) => (

              <div
                key={capability}
                className={`capability capability-${index + 1}`}
              >

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {capability}

              </div>

            ))}



            {/* CENTER LOGO */}

            <div className="constellation-core">

              <img
                src="/images/logo.png"
                alt="Imasha Sachinthani logo"
                className="constellation-core-logo"
              />

            </div>



            {/* CONNECTION LINES */}

            <div className="constellation-line constellation-line-1" />
            <div className="constellation-line constellation-line-2" />
            <div className="constellation-line constellation-line-3" />
            <div className="constellation-line constellation-line-4" />
            <div className="constellation-line constellation-line-5" />
            <div className="constellation-line constellation-line-6" />


          </div>

        </div>


      </div>
    </section>
  )
}


export default Journey