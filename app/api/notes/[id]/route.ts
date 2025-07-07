import { NextRequest, NextResponse } from 'next/server'
import { api } from '../../api'

type Props = {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: Props) {
  const res = await params
  const { data } = await api(`/notes/${res.id}`)

  if (data) return NextResponse.json(data)
  return NextResponse.json({ status: '500', message: 'Some error' })
}
