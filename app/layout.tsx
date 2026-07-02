import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google"
import { ConditionalAnalytics } from "@/components/conditional-analytics"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

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
  generator: "v0.app",
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
    <html lang="en" data-theme="light" className={`${geist.variable} ${geistMono.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased dl">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <ConditionalAnalytics />
      </body>
    </html>
  )
}
