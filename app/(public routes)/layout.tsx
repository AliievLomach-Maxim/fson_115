'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}
const PublicLayout = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    router.refresh()
    setIsLoading(false)
  }, [router])

  return isLoading ? 'loading...' : children
}

export default PublicLayout
