'use client'

import { checkSession, getMe } from '@/lib/clientApi'
import { useAuth } from '@/lib/store/authStore'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuth((state) => state.setUser)
  const clearAuth = useAuth((state) => state.clearAuth)

  useEffect(() => {
    const fetchSession = async () => {
      const isAuth = await checkSession()
      if (isAuth) {
        const user = await getMe()
        setUser(user)
      } else {
        clearAuth()
      }
    }
    fetchSession()
  }, [clearAuth, setUser])

  return children
}

export default AuthProvider
