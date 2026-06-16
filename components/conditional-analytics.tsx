"use client"

import { usePathname } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"

/**
 * Vercel Analytics for the marketing site, but NOT the embedded Sanity Studio.
 * The Studio drives its own client-side routing; letting Analytics track those
 * route changes adds churn (and contributes to flicker) inside /studio.
 */
export function ConditionalAnalytics() {
  const pathname = usePathname()
  if (pathname?.startsWith("/studio")) return null
  return <Analytics />
}
