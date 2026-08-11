import { RegisterRequest, RegisterResponse } from '@/shared/types/auth'
import { api } from './axios'
import axios from 'axios'

export const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await api.post('/auth/register', data)
    return response.data as RegisterResponse
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    }
    throw new Error('Registration failed')
  }
}
