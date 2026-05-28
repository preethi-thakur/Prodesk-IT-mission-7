import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import StepHeader from './components/StepHeader.jsx'
import StepPersonal from './pages/StepPersonal.jsx'
import StepAccount from './pages/StepAccount.jsx'
import StepReview from './pages/StepReview.jsx'

import steps from './utils/steps.js'

const initialData = {
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function App() {
  const [step, setStep] = useState(1)

  const [formData, setFormData] =
    useState(initialData)

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const activeStep = useMemo(
    () => steps[step - 1],
    [step]
  )


  const handleNext = (values) => {
    setFormData((current) => ({
      ...current,
      ...values
    }))

    setStep((current) =>
      Math.min(3, current + 1)
    )
  }

  
  const handleBack = () => {
    setStep((current) =>
      Math.max(1, current - 1)
    )
  }

  
  const handleSubmit = async () => {
    setIsSubmitting(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    )

    console.log(formData)

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="relative z-10">
          
            <div className="mb-8 flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Registration Wizard
                </p>

                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Create your account in 3 steps
                </h1>
              </div>

              <div className="rounded-3xl bg-white px-5 py-3 text-center text-sm text-slate-700 shadow-sm sm:text-base">
                {activeStep.label}
              </div>
            </div>

            
            <StepHeader step={step} total={3} />

            
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                  >
                    <StepPersonal
                      defaultValues={formData}
                      onNext={handleNext}
                    />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                  >
                    <StepAccount
                      defaultValues={formData}
                      onBack={handleBack}
                      onNext={handleNext}
                    />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                  >
                    <StepReview
                      data={formData}
                      onBack={handleBack}
                      onSubmit={handleSubmit}
                      isSubmitting={isSubmitting}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}