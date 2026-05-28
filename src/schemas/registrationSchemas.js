import { z } from 'zod'

export const personalSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'Please fill details')
    .min(
      3,
      'First name must be at least 3 characters'
    ),

  lastName: z
    .string()
    .trim()
    .min(1, 'Please fill details')
    .min(
      3,
      'Last name must be at least 3 characters'
    ),

  dob: z
    .string()
    .min(1, 'Please fill details')
})

export const accountSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, 'Please fill details')
      .email('Enter a valid email address'),

    password: z
      .string()
      .min(1, 'Please fill details')
      .min(
        8,
        'Password must be at least 8 characters'
      ),

    confirmPassword: z
      .string()
      .min(1, 'Please fill details')
  })

  .superRefine((data, ctx) => {
    if (
      data.confirmPassword.length > 0 &&
      data.password !== data.confirmPassword
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'Passwords do not match'
      })
    }
  })