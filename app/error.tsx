'use client'

type Props = {
  error: Error
}
const ErrorComponent = ({ error }: Props) => {
  return <h1 style={{ color: 'red' }}>{error.message}</h1>
}

export default ErrorComponent
