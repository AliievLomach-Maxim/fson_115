'use client'

import { login, LoginRequest } from '@/lib/api'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()

  const handleLogin = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as LoginRequest
    const res = await login(payload)
    if (res) {
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
