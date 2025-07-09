'use client'
import { logOut } from '@/lib/clientApi'
import { useAuth } from '@/lib/store/authStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AuthNavigation = () => {
  const { isAuth, user, clearAuth } = useAuth()
  const router = useRouter()

  const handleLogOut = async () => {
    await logOut()
    clearAuth()
    router.replace('/sign-in')
  }

  return isAuth ? (
    <div style={{ display: 'flex', gap: '12px' }}>
      <h3>{user?.email}</h3>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  ) : (
    <>
      <li>
        <Link href='/sign-in'>Login</Link>
      </li>
      <li>
        <Link href='/sign-up'>Register</Link>
      </li>
    </>
  )
}

export default AuthNavigation
