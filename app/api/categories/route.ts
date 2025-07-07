import { NextResponse } from 'next/server'
import { api } from '../api'

export async function GET() {
  try {
    const { data } = await api('/categories')
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ status: '500', message: 'Some error' })
  }
}
