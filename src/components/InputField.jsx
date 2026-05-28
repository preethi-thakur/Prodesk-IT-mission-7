import { CheckCircle2 } from 'lucide-react'

export default function InputField({ label, icon: Icon, error, success, name, register, type = 'text', placeholder, ...props }) {
  return (
    <label className="relative block rounded-3xl border border-slate-200 bg-white p-2 transition focus-within:border-slate-400">
      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
        <Icon className="h-5 w-5" />
      </div>
      <input
        {...register(name)}
        {...props}
        type={type}
        placeholder=" "
        className="peer w-full rounded-3xl border border-transparent bg-transparent px-14 py-4 text-sm text-slate-900 outline-none transition focus:border-transparent focus:ring-0"
      />
      <span className="absolute left-14 top-1/2 -translate-y-1/2 text-sm text-slate-500 transition-all duration-200 peer-focus:top-3 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs">
          {label}
        </span>
      <p className="mt-3 text-sm text-rose-500 min-h-[1.35rem]">{error}</p>
    </label>
  )
}
