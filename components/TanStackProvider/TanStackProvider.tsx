'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

type Props = {
  children: React.ReactNode
}

const TanStackProvider = ({ children }: Props) => {
  const [queryClient] = useState(new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default TanStackProvider
