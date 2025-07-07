import { NextRequest, NextResponse } from 'next/server'
import { api } from '../../api'
import { parse } from 'cookie'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const response = await api.post('/auth/login', body)

  const cookieData = await cookies()

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

  if (response.data) return NextResponse.json(response.data)

  return NextResponse.json({ status: '500', message: 'Some error' })
}
