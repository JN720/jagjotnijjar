import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Jagjot Nijjar',
  description: 'Personal Website and ePortfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
