'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginUser } from '@/shared/api/auth'
import { loginSchema, type LoginFormValues } from '../model/schema'
import {
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  getRefreshToken,
} from '@/shared/lib/auth/token'
import { getCurrentUser } from '@/shared/api/profile'
import { useAuthStore } from '../../model/store'
import { logoutUser } from '@/shared/api/auth'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    const result = await loginUser(data)
    console.log('LOGIN RESULT:', result)
    setAccessToken(result.token)
    setRefreshToken(result.refreshToken)

    const user = await getCurrentUser()
    setUser(user)
    console.log('AUTH STORE:', useAuthStore.getState())
  }

  const handleLogout = async () => {
    const refreshToken = getRefreshToken()
    if (refreshToken) {
      await logoutUser(refreshToken)
    }
    removeAccessToken()
    removeRefreshToken()
    clearUser()
  }

  const setUser = useAuthStore((state) => state.setUser)
  const clearUser = useAuthStore((state) => state.clearUser)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">Password</label>
      <input type="text" id="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Login</button>

      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </form>
  )
}
