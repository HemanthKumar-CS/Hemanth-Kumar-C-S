import type React from "react"
import { Orbitron, Sora, Inter } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function PortfolioRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${orbitron.variable} ${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 no-cursor">
        {children}
      </body>
    </html>
  )
}
