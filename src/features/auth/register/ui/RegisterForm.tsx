'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../model/schema'
import type { RegisterFormValues } from '../model/schema'
import { registerUser } from '@/shared/api/auth'
import { useState } from 'react'
import axios from 'axios'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const [serverError, setServerError] = useState<string | null>(null)
  const onSubmit = async (data: RegisterFormValues) => {
    setServerError(null)
    try {
      const result = await registerUser(data)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setServerError('User with this email already exists')
      }
    }
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
      {serverError && <p>{serverError}</p>}
      <button type="submit">Register</button>
    </form>
  )
}
