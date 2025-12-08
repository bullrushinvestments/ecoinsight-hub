import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoInsight Hub',
  description: 'EcoInsight Hub offers personalized sustainability advice and educational content to small businesses looking to improve their environmental impact. By combining AI-driven insights with practical, actionable tips, EcoInsight Hub enables companies to navigate the complex world of sustainable practices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
