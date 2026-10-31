// Shared input with a label and an error message. Usage:
// <Input id="email" label="Email" type="email" value={email}
//        onChange={(e) => setEmail(e.target.value)} error={errors.email} />
function Input({ id, label, error, ...rest }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`rounded-xl border bg-white/80 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-400 dark:bg-slate-800 ${
          error ? 'border-red-500' : 'border-brand-200 dark:border-slate-600'
        }`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input