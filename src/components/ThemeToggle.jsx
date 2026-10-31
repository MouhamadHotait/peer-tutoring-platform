import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // Adds or removes the "dark" class on <html> whenever isDark changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className="rounded-full p-2 text-xl hover:bg-brand-100 dark:hover:bg-slate-700"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle