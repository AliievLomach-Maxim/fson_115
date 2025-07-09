'use client'

import { register, RegisterRequest } from '@/lib/clientApi'
import { useAuth } from '@/lib/store/authStore'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const setUser = useAuth((state) => state.setUser)

  const handleRegister = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as RegisterRequest
    const res = await register(payload)
    if (res) {
      setUser(res)
      router.push('/profile')
    }
  }

  return (
    <form action={handleRegister}>
      <input type='text' name='username' />
      <br />
      <br />
      <input type='email' name='email' />
      <br />
      <br />
      <input type='password' name='password' />
      <br />
      <br />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
