import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  // Style of each link: highlighted if it's the current page
  const linkClass = ({ isActive }) =>
    isActive ? 'font-semibold text-brand-600' : 'text-gray-700 hover:text-brand-600'

  return (
    <header className="border-b bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Main navigation"
      >
        <Link to="/" className="text-xl font-bold text-brand-600">
          Null & Void
        </Link>

        <ul className="flex gap-6">
          <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/sessions" className={linkClass}>Sessions</NavLink></li>
          <li><NavLink to="/sessions/new" className={linkClass}>Host a Session</NavLink></li>
          <li><NavLink to="/dashboard" className={linkClass}>My Sessions</NavLink></li>
          <li><NavLink to="/login" className={linkClass}>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar