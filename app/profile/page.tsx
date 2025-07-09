import { getServerMe } from '@/lib/serverApi'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'profile',
  description: 'qwerty',
}

const Profile = async () => {
  const user = await getServerMe()

  return (
    <div>
      <h1>{user.userName}</h1>
    </div>
  )
}

export default Profile
