import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Datum Labs | Protocol Intelligence for Growth-Stage DeFi",
  description:
    "Real-time risk monitoring, behavioral analytics, and custom dashboards that drive measurable growth. Built for protocols scaling from $5M to $100M TVL.",
  keywords: [
    "DeFi analytics",
    "protocol intelligence",
    "risk monitoring",
    "on-chain analytics",
    "DeFi dashboards",
    "behavioral analytics",
    "liquidation prevention",
    "TVL monitoring",
    "Dune analytics",
    "Web3 data",
  ],
  authors: [{ name: "Datum Labs" }],
  creator: "Datum Labs",
  publisher: "Datum Labs",
  metadataBase: new URL("https://datumlabs.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://datumlabs.xyz",
    siteName: "Datum Labs",
    title: "Datum Labs | Protocol Intelligence for Growth-Stage DeFi",
    description:
      "Real-time risk monitoring, behavioral analytics, and custom dashboards. Built for protocols scaling from $5M to $100M TVL.",
    images: [
      {
        url: "/images/footer-bg.png",
        width: 1500,
        height: 500,
        alt: "Datum Labs - Protocol Intelligence for Growth-Stage DeFi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datum Labs | Protocol Intelligence for Growth-Stage DeFi",
    description: "Real-time risk monitoring, behavioral analytics, and custom dashboards for growth-stage DeFi protocols.",
    images: ["/images/footer-bg.png"],
    creator: "@datumlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/datum-logo.png",
    shortcut: "/images/datum-logo.png",
    apple: "/images/datum-logo.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
