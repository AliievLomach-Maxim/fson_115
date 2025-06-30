import Header from '@/components/Header/Header'
import './globals.css'
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--custom-font',
})

export const metadata: Metadata = {
  title: 'QWERTY',
  description: 'qwerty',
  openGraph: {
    title: 'openGraph',
    description: 'some description',
    url: 'https://www.edu.goit.global/uk/account/login?redirect=%2Fhomepage',
  },
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={robotoFont.variable}>
        <TanStackProvider>
          <Header />
          <hr />
          <br />
          {children}
          {modal}
        </TanStackProvider>
      </body>
    </html>
  )
}
