import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Footer } from '@/components/footer'
import {
  Bricolage_Grotesque,
  Syne,
  Great_Vibes,
  Black_Ops_One,
  East_Sea_Dokdo,
} from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes-script',
  display: 'swap',
  weight: ['400'],
})

const blackOpsOne = Black_Ops_One({
  subsets: ['latin'],
  variable: '--font-black-ops-one',
  display: 'swap',
  weight: ['400'],
})

const eastSeaDokdo = East_Sea_Dokdo({
  subsets: ['latin'],
  variable: '--font-east-sea-dokdo',
  display: 'swap',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Favour Ranger — Graphic Designer & Visual Artist',
  description:
    'Portfolio of Favour Ranger, a professional graphic designer and visual artist specializing in brand identity, logo design, portrait art, and digital marketing visuals. 4+ years crafting impactful visual experiences.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#2c2d1e' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={[
        bricolage.variable,
        syne.variable,
        greatVibes.variable,
        blackOpsOne.variable,
        eastSeaDokdo.variable,
        'bg-background',
      ].join(' ')}
    >
      <body className="antialiased bg-background text-foreground">
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
