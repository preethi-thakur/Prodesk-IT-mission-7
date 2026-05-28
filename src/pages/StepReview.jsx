import { useState } from 'react'
import {
  ArrowLeft,
  ClipboardCheck,
  CheckCircle2
} from 'lucide-react'

export default function StepReview({
  data,
  onBack,
  onSubmit,
  isSubmitting
}) {
  const [showSuccess, setShowSuccess] =
    useState(false)

  const handleFinalSubmit = async () => {
    await onSubmit()


    setShowSuccess(true)
  }

 
  const handleContinue = () => {
    window.location.reload()
  }

  return (
    <>
      <div className="space-y-8">
        
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-4 text-slate-700">
            <ClipboardCheck className="h-6 w-6 text-sky-500" />

            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Review details
              </p>

              <h2 className="text-2xl font-semibold text-slate-900">
                Confirm the information below
              </h2>
            </div>
          </div>

         
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Name
              </p>

              <p className="mt-3 text-lg font-semibold text-slate-900">
                {data.firstName} {data.lastName}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Date of birth
              </p>

              <p className="mt-3 text-lg font-semibold text-slate-900">
                {data.dob}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Email
              </p>

              <p className="mt-3 text-lg font-semibold text-slate-900">
                {data.email}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Password
              </p>

              <p className="mt-3 text-lg font-semibold text-slate-900">
                ••••••••••
              </p>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-300 sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Edit details
          </button>

          <button
            type="button"
            onClick={handleFinalSubmit}
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-3xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting
              ? 'Submitting...'
              : 'Submit registration'}
          </button>
        </div>
      </div>

      
      {showSuccess && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[90%] max-w-md rounded-[2rem] bg-white p-8 text-center shadow-2xl">
           
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">
              <CheckCircle2 className="h-10 w-10 text-sky-600" />
            </div>

           
            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              Registration Complete
            </h2>

            
            <p className="mt-3 text-slate-600">
              Your account has been created successfully.
            </p>

           
            <button
              onClick={handleContinue}
              className="mt-8 w-full rounded-2xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  )
}