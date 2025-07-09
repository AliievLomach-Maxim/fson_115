import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { checkServerSession } from './lib/serverApi'
import { parse } from 'cookie'

const privateRoutes = ['/profile']
const publicRoutes = ['/sign-in', '/sign-up']

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  const cookieData = await cookies()
  const accessToken = cookieData.get('accessToken')?.value
  const refreshToken = cookieData.get('refreshToken')?.value

  const isPrivateRoute = privateRoutes.some((path) => path.startsWith(pathname))

  if (isPrivateRoute) {
    // ...
    if (!accessToken) {
      if (refreshToken) {
        try {
          const response = await checkServerSession()
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
          return NextResponse.next({
            headers: {
              Cookie: cookieData.toString(),
            },
          })
        } catch {
          return NextResponse.redirect(new URL('/sign-in', request.nextUrl.origin))
        }
      }
      return NextResponse.redirect(new URL('/sign-in', request.nextUrl.origin))
    }
  } else if (publicRoutes) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/', request.nextUrl.origin))
    } else {
      if (refreshToken) {
        try {
          const response = await checkServerSession()
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
          return NextResponse.redirect(new URL('/', request.nextUrl.origin), {
            headers: {
              Cookie: cookieData.toString(),
            },
          })
        } catch {
          return NextResponse.next()
        }
      }
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/profile', '/sign-in', '/sign-up'],
}
