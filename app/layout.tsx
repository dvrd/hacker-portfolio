import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Dan Castrillo - Full Stack Developer',
  description: 'Personal portfolio showcasing 10 years of software engineering experience. Polyglot engineer specializing in JavaScript/TypeScript, Python, Go, and systems programming.',
  keywords: ['developer', 'portfolio', 'full stack', 'software engineer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Dan Castrillo' }],
  openGraph: {
    title: 'Dan Castrillo - Full Stack Developer',
    description: 'Explore my software engineering journey and projects',
    url: 'https://dancastrillo.com',
    siteName: 'Dan Castrillo Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dan Castrillo Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dan Castrillo - Full Stack Developer',
    description: 'Software engineer with 10 years of experience',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {/* Scan lines overlay */}
        <div className="scan-lines" aria-hidden="true" />

        {children}
      </body>
    </html>
  )
}
