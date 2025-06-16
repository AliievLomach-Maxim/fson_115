import Header from '@/components/Header/Header'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <br />
        <footer>qwrety</footer>
      </body>
    </html>
  )
}
