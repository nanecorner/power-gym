import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald'
});

export const metadata: Metadata = {
  title: 'POWER GYM | Transforma tu cuerpo, transforma tu vida',
  description: 'Gimnasio profesional con equipamiento de última generación, entrenadores certificados y programas personalizados. ¡Comienza tu transformación hoy!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-gym.png',
        type: 'image/png',
      },
      {
        url: '/icon-gym.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-gym.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/icon-gym.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
