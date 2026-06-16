import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ConditionalAnalytics } from "@/components/conditional-analytics"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Datum Labs | Beyond Analytics",
  description:
    "Beyond Analytics. Beyond Reports. Beyond Ordinary. We build intelligence solutions engineered to solve custom data problems for Web3 protocols.",
  keywords: [
    "Web3 analytics",
    "blockchain data",
    "DeFi analytics",
    "protocol intelligence",
    "on-chain data",
    "crypto analytics",
    "data dashboards",
    "Dune analytics",
    "Web3 data solutions",
  ],
  authors: [{ name: "Datum Labs" }],
  creator: "Datum Labs",
  publisher: "Datum Labs",
  metadataBase: new URL("https://www.datumlab.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.datumlab.xyz",
    siteName: "Datum Labs",
    title: "Datum Labs | Beyond Analytics",
    description:
      "Beyond Analytics. Beyond Reports. Beyond Ordinary. We build intelligence solutions engineered to solve custom data problems for Web3 protocols.",
    images: [
      {
        url: "/images/footer-bg.png",
        width: 1500,
        height: 500,
        alt: "Datum Labs - Web3 Intelligence Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datum Labs | Beyond Analytics",
    description: "Beyond Analytics. Beyond Reports. Beyond Ordinary. Intelligence solutions for Web3 protocols.",
    images: ["/images/footer-bg.png"],
    creator: "@Datumlabs_",
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
  // Note: no maximumScale/userScalable lock — it harms accessibility and, via
  // Next's viewport merging, would leak into /studio and make the embedded
  // Sanity Studio flicker.
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
        <ConditionalAnalytics />
      </body>
    </html>
  )
}
