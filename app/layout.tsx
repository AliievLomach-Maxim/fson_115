import Header from '@/components/Header/Header'
import './globals.css'
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <TanStackProvider>
          <Header />
          <hr />
          <br />
          {children}
        </TanStackProvider>
      </body>
    </html>
  )
}
