import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Image src='https://picsum.photos/200/300' alt='' width={100} height={100} />
      <Image src='/image.png' alt='' width={100} height={100} />
    </div>
  )
}
