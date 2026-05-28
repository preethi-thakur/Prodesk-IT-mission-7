import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  User,
  Users,
  CalendarDays
} from 'lucide-react'

import InputField from '../components/InputField.jsx'
import { personalSchema } from '../schemas/registrationSchemas.js'

export default function StepPersonal({
  defaultValues,
  onNext
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'all',

    resolver: zodResolver(personalSchema),

    defaultValues: {
      firstName: '',
      lastName: '',
      dob: '',
      ...defaultValues
    }
  })


  const firstName = watch('firstName')
  const lastName = watch('lastName')
  const dob = watch('dob')

  return (
    <form className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName?.message}
          success={
            !errors.firstName &&
            firstName?.length > 0
          }
          icon={User}
        />

        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName?.message}
          success={
            !errors.lastName &&
            lastName?.length > 0
          }
          icon={Users}
        />
      </div>

      <InputField
        label="Date of Birth"
        name="dob"
        register={register}
        type="date"
        error={errors.dob?.message}
        success={!errors.dob && dob?.length > 0}
        icon={CalendarDays}
      />

      <button
        type="button"
        onClick={() => {
          if (
            !firstName ||
            !lastName ||
            !dob
          ) {
            alert(
              'Please fill all required details'
            )
            return
          }

          handleSubmit((data) => {
            onNext(data)
          })()
        }}
        className="inline-flex w-full items-center justify-center rounded-3xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Continue to account details
      </button>
    </form>
  )
}