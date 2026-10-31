// Shared button (light glass style). Usage:
// <Button onClick={...}>Join</Button>
// <Button variant="secondary">Back</Button>
// <Button variant="danger">Cancel session</Button>
// <Button type="submit" className="w-full sm:w-auto">Save</Button>
function Button({ children, variant = 'primary', type = 'button', className = '', ...rest }) {
  const styles = {
        primary:
      'border-brand-300 bg-brand-300/40 text-brand-800 hover:bg-brand-300/60 dark:border-brand-400/20 dark:bg-brand-400/15 dark:text-brand-200 dark:hover:bg-brand-400/25',
    secondary:
      'border-white/60 bg-white/40 text-gray-700 hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20',
    danger:
      'border-red-200/70 bg-red-100/50 text-red-700 hover:bg-red-100/80 dark:border-red-400/20 dark:bg-red-400/15 dark:text-red-300 dark:hover:bg-red-400/25',
  }

  return (
    <button
      type={type}
      className={`rounded-lg border px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-md transition disabled:opacity-50 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button