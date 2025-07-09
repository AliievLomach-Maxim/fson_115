import { NextResponse } from 'next/server'
import { api } from '../../api'
import { cookies } from 'next/headers'
import { parse } from 'cookie'

export async function GET() {
  const cookieData = await cookies()
  const accessToken = cookieData.get('accessToken')?.value
  const refreshToken = cookieData.get('refreshToken')?.value

  if (accessToken) {
    return NextResponse.json({ success: true })
  }
  if (refreshToken) {
    try {
      const response = await api('/auth/session', { headers: { Cookie: cookieData.toString() } })
      const setCookies = response.headers['set-cookie']

      if (setCookies) {
        const cookiesArray = Array.isArray(setCookies) ? setCookies : [setCookies]

        for (const newCookieStr of cookiesArray) {
          const parsedCookie = parse(newCookieStr)
          const options = {
            path: parsedCookie.Path,
            maxAge: Number(parsedCookie['Max-Age']),
            expires: parsedCookie.Expires ? new Date(parsedCookie.Expires) : undefined,
            httpOnly: true,
            secure: true,
          }
          if (parsedCookie.accessToken) {
            cookieData.set('accessToken', parsedCookie.accessToken, options)
          }
          if (parsedCookie.refreshToken) {
            cookieData.set('refreshToken', parsedCookie.refreshToken, options)
          }
        }
      }
      return NextResponse.json({ success: true })
    } catch {
      return NextResponse.json({ success: false })
    }
  }
  return NextResponse.json({ success: false })
}
