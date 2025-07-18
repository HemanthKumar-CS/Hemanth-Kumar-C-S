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
  title: "Hemanth Kumar C S | Portfolio",
  description: "Self Portfolio of Hemanth Kumar C S",
}

export default function PortfolioRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${orbitron.variable} ${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-black text-white no-cursor">
        {children}
      </body>
    </html>
  )
}
