import { create } from 'zustand'
import { User } from '../clientApi'

export type AuthStoreType = {
  isAuth: boolean
  user: User | null
  setUser: (user: User) => void
  clearAuth: () => void
}

export const useAuth = create<AuthStoreType>()((set) => ({
  isAuth: false,
  user: null,
  setUser: (user: User) => set({ user, isAuth: true }),
  clearAuth: () =>
    set({
      isAuth: false,
      user: null,
    }),
}))
