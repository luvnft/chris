import '@/app/globals.css'
import { AnalyticsWrapper } from '@/components/AnalyticsWrapper'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar/NavBar'
import ScrollToTop from '@/components/ScrollToTop'
import { seo } from '@/lib/site'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '../components/ThemeProvider'

import { Inter as FontSans } from 'next/font/google'

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    metadataBase: new URL(seo.url),
    title: {
      default: seo.name,
      template: `%s | ${seo.name}`,
    },
    description: seo.description,
    openGraph: {
      type: 'website',
      title: seo.name,
      description: seo.description,
      url: seo.url,
      siteName: seo.siteName,
      images: [
        {
          url: seo.image,
          width: 1920,
          height: 1080,
        },
      ],
      locale: 'en-US',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: seo.name,
      card: 'summary_large_image',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <NavBar />
              <main className="z-10">
                {children}
                <AnalyticsWrapper />
                <SpeedInsights />
              </main>
              <Footer />
            </div>
          </div>

          {/* toaster for when an email is sent from the contact form */}
          <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
