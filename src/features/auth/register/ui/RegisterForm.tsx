'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../model/schema'
import type { RegisterFormValues } from '../model/schema'
import { registerUser } from '@/shared/api/auth'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormValues) => {
    const result = await registerUser(data)

    console.log(result)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Register</button>
    </form>
  )
}
