import { NextRequest, NextResponse } from 'next/server'
import { api } from '../api'

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get('categoryId')
  const title = request.nextUrl.searchParams.get('title')

  const { data } = await api('/notes', {
    params: { categoryId, title },
  })

  if (data) return NextResponse.json(data)
  return NextResponse.json({ status: '500', message: 'Some error' })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { data } = await api.post('/notes', body)

  console.log('data', data)

  if (data) return NextResponse.json(data)
  return NextResponse.json({ status: '500', message: 'Some error' })
}
