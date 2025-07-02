'use client'

import { useGlobalUser } from '@/lib/store/testStore'

const TestClient = () => {
  const user = useGlobalUser((store) => {
    return store.user
  })
  console.log('TestClient', user)
  return (
    <div>
      test.client
      {/* <button onClick={store.clearAll}>clear</button> */}
    </div>
  )
}

export default TestClient
