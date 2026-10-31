import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  // Log out, close the menu, and go back to the homepage
  function handleLogout() {
    logout()
    closeMenu()
    navigate('/')
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-semibold text-brand-600 dark:text-brand-300'
      : 'text-gray-700 hover:text-brand-600 dark:text-gray-200 dark:hover:text-brand-300'

  return (
    <header className="border-b border-white/50 bg-white/70 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/70">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={closeMenu} className="text-xl font-bold text-brand-600 dark:text-brand-300">
          Null & Void
        </Link>

        {/* Theme toggle + menu button (on desktop, moved after the links) */}
        <div className="flex items-center gap-2 md:order-last">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-2xl text-gray-700 md:hidden dark:text-gray-200"
            aria-expanded={isOpen}
            aria-controls="main-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        <ul
          id="main-menu"
          className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col gap-4 pt-4 md:flex md:w-auto md:flex-row md:gap-6 md:pt-0`}
        >
          <li><NavLink to="/" end onClick={closeMenu} className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/sessions" onClick={closeMenu} className={linkClass}>Sessions</NavLink></li>

          {/* Links change depending on whether someone is logged in */}
          {currentUser ? (
            <>
              <li><NavLink to="/sessions/new" onClick={closeMenu} className={linkClass}>Host a Session</NavLink></li>
              <li><NavLink to="/dashboard" onClick={closeMenu} className={linkClass}>My Sessions</NavLink></li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-brand-600 dark:text-gray-200 dark:hover:text-brand-300"
                >
                  Logout ({currentUser.name.split(' ')[0]})
                </button>
              </li>
            </>
          ) : (
            <>
              <li><NavLink to="/login" onClick={closeMenu} className={linkClass}>Login</NavLink></li>
              <li><NavLink to="/register" onClick={closeMenu} className={linkClass}>Register</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar