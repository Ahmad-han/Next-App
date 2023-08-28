import './globals.scss'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Content } from '@/components/Content/Content'


export const metadata: Metadata = {
  title: 'Lincode Blog',
  description: 'Created by Me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        </body>
    </html>
  )
}
