import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoInsight Hub',
  description: 'EcoInsight Hub offers personalized sustainability advice and educational content to small businesses looking to improve their environmental impact. By combining AI-driven insights with practical, actionable tips, EcoInsight Hub enables companies to navigate the complex world of sustainable practices.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoInsight Hub</h1>
      <p className="mt-4 text-lg">EcoInsight Hub offers personalized sustainability advice and educational content to small businesses looking to improve their environmental impact. By combining AI-driven insights with practical, actionable tips, EcoInsight Hub enables companies to navigate the complex world of sustainable practices.</p>
    </main>
  )
}
