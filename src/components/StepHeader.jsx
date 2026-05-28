import { motion } from 'framer-motion'

export default function StepHeader({ step, total }) {
  const progress = (step / total) * 100
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between gap-4 text-sm text-slate-500 sm:text-base">
        <div>
          <p className="uppercase tracking-[0.24em] text-slate-500">Progress</p>
          <p className="mt-1 text-slate-900">Step {step} of {total}</p>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-slate-700">{Math.round(progress)}%</div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="h-full rounded-full bg-sky-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
