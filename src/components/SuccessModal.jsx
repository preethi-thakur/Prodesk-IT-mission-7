import { motion } from 'framer-motion'

export default function SuccessModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 p-4">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-sky-600">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Registration complete</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Your account is ready. Close this dialog to continue to your dashboard.</p>
          <button onClick={onClose} className="mt-8 inline-flex rounded-3xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  )
}
