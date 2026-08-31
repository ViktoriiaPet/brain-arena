import { create } from 'zustand'

type User = {
  id: number
  uuid: string
  name: string
  email: string
  role: string
  created_at: string
  updated_at: string
}

type AuthState = {
  user: User | null
  setUser: (user: User) => void

  clearUser: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  clearUser: () => set({ user: null }),
}))
