import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'

export default function PasswordInput({
  label,
  register,
  name,
  error,
  success
}) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex flex-col">
      <label
        className={`relative block rounded-3xl border bg-white p-2 transition
        ${
          error
            ? 'border-red-500'
            : success
            ? 'border-emerald-400'
            : 'border-slate-200 focus-within:border-slate-400'
        }`}
      >
        
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
          <Lock className="h-5 w-5" />
        </div>

       
        <input
          {...register(name)}
          type={visible ? 'text' : 'password'}
          placeholder=" "
          className="w-full rounded-3xl border border-transparent bg-transparent px-14 py-4 text-sm text-slate-900 outline-none focus:ring-0"
        />

        
        <span
          className={`absolute left-14 transition-all duration-200
          ${
            success
              ? 'top-3 text-xs text-slate-500'
              : 'top-1/2 -translate-y-1/2 text-sm text-slate-500'
          }`}
        >
          {label}
        </span>

        
        <button
          type="button"
          onClick={() =>
            setVisible((current) => !current)
          }
          className="absolute right-4 top-4 text-slate-500 transition hover:text-slate-700"
        >
          {visible ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </label>

      
      {error && (
        <p className="mt-2 px-2 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}