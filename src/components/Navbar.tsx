import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Journey', 'Contact']

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => {
          const id = item.toLowerCase()
          const element = document.getElementById(id)

          if (!element) return null

          return {
            name: item,
            top: element.getBoundingClientRect().top,
          }
        })
        .filter(Boolean) as { name: string; top: number }[]

      const visible = sections
        .filter((section) => section.top <= 180)
        .pop()

      if (visible) {
        setActiveSection(visible.name)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="navbar-wrap">
      <nav className="navbar">

        {/* BRAND */}
        <a href="#home" className="nav-brand" aria-label="Go to home">
          <div className="nav-logo">
            <img
              src="/images/logo.png"
              alt="Imasha Sachinthani logo"
            />
          </div>

          <span className="nav-brand-name">
            IMASHA
          </span>
        </a>


        {/* DESKTOP LINKS */}
        <div className="nav-links">
          {navItems.map((item) => {
            const active = activeSection === item

            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${active ? 'active' : ''}`}
              >
                {item}
              </a>
            )
          })}
        </div>


        {/* MOBILE BUTTON */}
        <button
          className="menu-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>


        {/* MOBILE MENU */}
        {open && (
          <div className="mobile-menu">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={
                  activeSection === item
                    ? 'mobile-active'
                    : ''
                }
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar