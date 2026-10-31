import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  // Remembers whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false)

  // Closes the menu after clicking a link (on mobile)
  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    isActive ? 'font-semibold text-brand-600' : 'text-gray-700 hover:text-brand-600'

  return (
    <header className="border-b bg-white">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={closeMenu} className="text-xl font-bold text-brand-600">
          Null & Void
        </Link>

        {/* Menu button: only visible on phones (hidden from md: up) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-2xl text-gray-700 md:hidden"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Links: column on phones when open, always a row from md: up */}
        <ul
          id="main-menu"
          className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col gap-4 pt-4 md:flex md:w-auto md:flex-row md:gap-6 md:pt-0`}
        >
          <li><NavLink to="/" end onClick={closeMenu} className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/sessions" onClick={closeMenu} className={linkClass}>Sessions</NavLink></li>
          <li><NavLink to="/sessions/new" onClick={closeMenu} className={linkClass}>Host a Session</NavLink></li>
          <li><NavLink to="/dashboard" onClick={closeMenu} className={linkClass}>My Sessions</NavLink></li>
          <li><NavLink to="/login" onClick={closeMenu} className={linkClass}>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar