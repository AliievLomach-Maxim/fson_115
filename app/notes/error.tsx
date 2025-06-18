'use client'

type Props = {
  error: Error
  reset: () => void
}
const ErrorComponent = ({ error, reset }: Props) => {
  return (
    <>
      <h1 style={{ color: 'blue' }}>{error.message}</h1>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default ErrorComponent
