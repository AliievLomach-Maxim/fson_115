import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h1>Oops.. 404 Not Found Page</h1>
      <br />
      <Link href='/'>Back home</Link>
    </div>
  )
}

export default NotFound
