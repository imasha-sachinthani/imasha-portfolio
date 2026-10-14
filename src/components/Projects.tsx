import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Search,
  CalendarCheck,
  Star,
  UserRoundCheck,
  ReceiptText,
  CreditCard,
  Boxes,
  Landmark,
  ShieldCheck,
  BarChart3,
  Monitor,
  Tablet,
  Smartphone,
  LayoutDashboard,
  UsersRound,
  Layers3,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    slug: 'hirelanka',
    name: 'HireLanka',
    label: 'Professional Service Marketplace',
    description:
      'A full-stack service marketplace connecting customers with trusted service providers through secure booking, reviews and role-based workflows.',
    problem:
      'Service discovery, booking and provider management often happen across disconnected channels. HireLanka brings the complete service journey into one platform.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Bcrypt'],
    github:
      'https://github.com/imasha-sachinthani/hirelanka-marketplace',
  },

  {
    number: '02',
    slug: 'bizmanage',
    name: 'BizManage',
    label: 'Enterprise Resource Planning System',
    description:
      'A full-stack ERP system designed for Sri Lankan trading companies, combining invoicing, payments, inventory, VAT compliance and multi-company operations.',
    problem:
      'Business operations become difficult to manage when invoicing, payments, inventory, suppliers and compliance are spread across separate tools.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'JWT',
    ],
    github:
      'https://github.com/imasha-sachinthani/BizManage_System',
  },

  {
    number: '03',
    slug: 'apexaura',
    name: 'ApexAura',
    label: 'Corporate Digital Experience',
    description:
      'A responsive business platform combining a modern public-facing website with reusable UI systems and multi-role dashboards.',
    problem:
      'The platform needed a consistent experience across public pages, multiple devices and different internal user roles.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'Material UI',
      'Framer Motion',
    ],
    github:
      'https://github.com/imasha-sachinthani/jj-apexaura-website',
  },

  {
    number: '04',
    slug: 'unisphere',
    name: 'UniSphere',
    label: 'University Student Management Platform',
    description:
      'A full-stack Flutter application that centralizes assignments, notices, timetable, marketplace, lost & found, and student profile management in one streamlined campus experience.',
    problem:
      'Students often rely on multiple disconnected tools for academic tasks and campus updates. UniSphere brings essential university services together to improve accessibility, organization and communication.',
    tech: [
      'Flutter',
      'Dart',
      'Firebase Auth',
      'Firestore',
      'Firebase Storage',
      'Provider',
      'Material UI',
    ],
    github: 'https://github.com/imasha-sachinthani/UniSphere.git',
  },
]

function HireLankaVisual() {
  return (
    <div className="project-system project-system-hire">
      <div className="system-grid" />

      <div className="system-label">SERVICE JOURNEY</div>

      <div className="hire-flow">
        <motion.div className="flow-node" whileHover={{ y: -5 }}>
          <Search size={19} />
          <span>Discover</span>
        </motion.div>

        <div className="flow-arrow">→</div>

        <motion.div className="flow-node" whileHover={{ y: -5 }}>
          <UserRoundCheck size={19} />
          <span>Provider</span>
        </motion.div>

        <div className="flow-arrow">→</div>

        <motion.div className="flow-node" whileHover={{ y: -5 }}>
          <CalendarCheck size={19} />
          <span>Book</span>
        </motion.div>

        <div className="flow-arrow">→</div>

        <motion.div className="flow-node" whileHover={{ y: -5 }}>
          <Star size={19} />
          <span>Review</span>
        </motion.div>
      </div>

      <div className="hire-role-row">
        <div>
          <span>01</span>
          Customer
        </div>

        <div>
          <span>02</span>
          Provider
        </div>

        <div>
          <span>03</span>
          Admin
        </div>
      </div>

      <div className="booking-signal">
        <span>BOOKING STATUS</span>

        <div className="status-track">
          <i />
          <i />
          <i />
          <i />
        </div>

        <small>Pending → Approved → Completed</small>
      </div>
    </div>
  )
}

function BizManageVisual() {
  return (
    <div className="project-system project-system-biz">
      <div className="system-grid" />

      <div className="system-label">ERP OPERATIONS MAP</div>

      <div className="erp-core">
        <span>BIZ</span>
        <small>CORE</small>
      </div>

      <div className="erp-module erp-1">
        <ReceiptText size={18} />
        <span>Invoices</span>
      </div>

      <div className="erp-module erp-2">
        <CreditCard size={18} />
        <span>Payments</span>
      </div>

      <div className="erp-module erp-3">
        <Boxes size={18} />
        <span>Inventory</span>
      </div>

      <div className="erp-module erp-4">
        <Landmark size={18} />
        <span>VAT</span>
      </div>

      <div className="erp-module erp-5">
        <ShieldCheck size={18} />
        <span>RBAC</span>
      </div>

      <div className="erp-module erp-6">
        <BarChart3 size={18} />
        <span>Reports</span>
      </div>

      <div className="erp-line erp-line-1" />
      <div className="erp-line erp-line-2" />
      <div className="erp-line erp-line-3" />
      <div className="erp-line erp-line-4" />
      <div className="erp-line erp-line-5" />
      <div className="erp-line erp-line-6" />
    </div>
  )
}

function ApexAuraVisual() {
  return (
    <div className="project-system project-system-apex">
      <div className="system-grid" />

      <div className="system-label">RESPONSIVE EXPERIENCE</div>

      <div className="device-stage">
        <div className="device-card device-desktop">
          <Monitor size={24} />
          <span>Desktop</span>
        </div>

        <div className="device-card device-tablet">
          <Tablet size={22} />
          <span>Tablet</span>
        </div>

        <div className="device-card device-mobile">
          <Smartphone size={21} />
          <span>Mobile</span>
        </div>
      </div>

      <div className="role-architecture">
        <div className="role-root">
          <Layers3 size={18} />
          Public Website
        </div>

        <div className="role-connector" />

        <div className="role-cards">
          <div>
            <LayoutDashboard size={17} />
            Admin
          </div>

          <div>
            <UsersRound size={17} />
            Manager
          </div>

          <div>
            <UserRoundCheck size={17} />
            User
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === 'hirelanka') {
    return <HireLankaVisual />
  }

  if (slug === 'bizmanage') {
    return <BizManageVisual />
  }

  return <ApexAuraVisual />
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-opening">
          <span className="section-kicker">04 / SELECTED WORK</span>

          <h2>
  Selected <span>projects</span>
</h2>

<p>
  A collection of work across software systems,
  digital products and user experiences.
</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className={`project-case project-${project.slug} ${
                index % 2 === 1 ? 'project-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="project-case-info">
                <div className="project-case-label">
                  <span>{project.number}</span>
                  {project.label}
                </div>

                <h3>{project.name}</h3>

                <p className="project-case-description">
                  {project.description}
                </p>

                <div className="project-case-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-case-problem">
                  <span>THE PROBLEM</span>
                  <p>{project.problem}</p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-case-link"
                >
                  Explore the build
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <ProjectVisual slug={project.slug} />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects