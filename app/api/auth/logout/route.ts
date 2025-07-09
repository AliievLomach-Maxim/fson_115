import { NextResponse } from 'next/server'
import { api } from '../../api'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieData = await cookies()
  try {
    const { data } = await api.post('/auth/logout', { headers: { Cookie: cookieData.toString() } })
    cookieData.delete('accessToken')
    cookieData.delete('refreshToken')
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 401 })
  }
}
