import { NextResponse } from "next/server"

import { sanityFetch } from "@/sanity/lib/client"
import { latestCombinedQuery } from "@/sanity/lib/queries"
import { demoEnabled, demoResources } from "@/sanity/lib/demo-content"

export const revalidate = 60

// Returns the latest 3 posts/reports for the homepage research strip.
export async function GET() {
  let items = await sanityFetch<{ category?: string }[]>(latestCombinedQuery, {}, [])
  if (items.length === 0 && demoEnabled) {
    items = demoResources.slice(0, 3).map((r) => ({
      ...r,
      category: r._type === "report" ? "Report" : r.kind,
    }))
  }
  return NextResponse.json({ items })
}
