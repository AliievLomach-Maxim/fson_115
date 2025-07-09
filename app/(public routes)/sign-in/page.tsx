'use client'

import { login, LoginRequest } from '@/lib/clientApi'
import { useAuth } from '@/lib/store/authStore'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const setUser = useAuth((state) => state.setUser)

  const handleLogin = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as LoginRequest
    const res = await login(payload)
    if (res) {
      setUser(res)
      router.push('/profile')
    }
  }
  return (
    <form action={handleLogin}>
      <input type='email' name='email' />
      <br />
      <br />
      <input type='password' name='password' />
      <br />
      <br />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
