'use client'

import { useGlobalUser } from '@/lib/store/testStore'
import TestClient from './test.client'

const Test = () => {
  const store = useGlobalUser()
  console.log('Test PAGE', store)
  return (
    <div>
      <button onClick={store.generateSecretKey}>test</button>
      <br />
      <TestClient />
    </div>
  )
}

export default Test
