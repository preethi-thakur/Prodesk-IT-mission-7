import { useMemo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign } from 'lucide-react'

import PasswordInput from '../components/PasswordInput.jsx'
import { accountSchema } from '../schemas/registrationSchemas.js'

const strengthLabels = [
  { label: 'Weak', className: 'bg-rose-500' },
  { label: 'Fair', className: 'bg-amber-400' },
  { label: 'Strong', className: 'bg-cyan-400' }
]

export default function StepAccount({
  defaultValues,
  onBack,
  onNext
}) {
  const {
    register,
    handleSubmit,
    watch,
    trigger
  } = useForm({
    mode: 'all',

    resolver: zodResolver(accountSchema),

    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      ...defaultValues
    }
  })

  const email = watch('email') || ''
  const password = watch('password') || ''
  const confirmPassword =
    watch('confirmPassword') || ''

  
  useEffect(() => {
    if (confirmPassword.length > 0) {
      trigger()
    }
  }, [password, confirmPassword, trigger])

 
  const strength = useMemo(() => {
    if (password.length >= 12)
      return strengthLabels[2]

    if (password.length >= 8)
      return strengthLabels[1]

    return strengthLabels[0]
  }, [password])

  return (
    <form className="space-y-6">
     
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2">
          <label
            className="sr-only"
            htmlFor="email"
          >
            Email
          </label>

          <div className="flex items-center gap-4 px-4 py-4 text-slate-700">
            <AtSign className="h-5 w-5 text-slate-500" />

            <input
              id="email"
              {...register('email')}
              placeholder="Email"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>

         
          {email.length > 0 &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
              email
            ) && (
              <p className="mt-2 px-4 text-sm font-medium text-red-500">
                Enter valid email
              </p>
            )}
        </div>
      </div>

      <PasswordInput
        label="Password"
        name="password"
        register={register}
        success={password.length > 0}
      />

    
      <div className="space-y-2 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-900">
            Password strength
          </span>

          <span className="text-slate-700">
            {strength.label}
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full ${strength.className}`}
            style={{
              width: `${Math.min(
                password.length * 8,
                100
              )}%`
            }}
          />
        </div>
      </div>

    
      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        success={confirmPassword.length > 0}
      />

      
      {password !== confirmPassword &&
        confirmPassword.length > 0 && (
          <p className="text-sm font-medium text-red-500">
            Passwords do not match
          </p>
        )}

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-300 sm:w-auto"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => {
            if (
              !email ||
              !password ||
              !confirmPassword
            ) {
              alert(
                'Please fill all required details'
              )
              return
            }

            if (
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                email
              )
            ) {
              alert('Enter valid email')
              return
            }

            if (password.length < 8) {
              alert(
                'Password must be at least 8 characters'
              )
              return
            }

            if (
              password !== confirmPassword
            ) {
              alert(
                'Passwords do not match'
              )
              return
            }

            handleSubmit((data) => {
              onNext(data)
            })()
          }}
          className="inline-flex w-full items-center justify-center rounded-3xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-sky-700 sm:w-auto"
        >
          Continue to review
        </button>
      </div>
    </form>
  )
}