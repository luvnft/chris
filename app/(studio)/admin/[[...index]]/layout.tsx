import type { Metadata } from 'next'
import '@/app/globals.css'

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    title: 'Sanity Studio',
    description: 'Generated by Next + Sanity',
    icons: {
      icon: '/sanity-studio.ico',
    },
  }
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
