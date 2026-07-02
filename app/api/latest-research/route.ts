import { NextResponse } from "next/server"

import { sanityFetch } from "@/sanity/lib/client"
import { latestCombinedQuery } from "@/sanity/lib/queries"
import { demoEnabled, demoResources } from "@/sanity/lib/demo-content"
import { getAllReports } from "@/lib/reports"

export const revalidate = 60

type Item = {
  _type: string
  _id?: string
  title?: string
  slug?: string
  category?: string
  extra?: string
  publishedAt?: string
  image?: unknown
  subtitle?: string
}

// Latest 3 across blog (Sanity) + reports (repo MDX), for the homepage strip.
export async function GET() {
  const sanity = await sanityFetch<Item[]>(latestCombinedQuery, {}, [])
  let posts = sanity.filter((i) => i._type !== "report")
  if (posts.length === 0 && demoEnabled) {
    posts = demoResources
      .filter((r) => r._type !== "report")
      .map((r) => ({ ...r, category: r.kind }))
  }

  const reports: Item[] = getAllReports().map((r) => ({
    _type: "report",
    _id: `mdx-${r.slug}`,
    title: r.title,
    slug: r.slug,
    category: "Report",
    extra: r.period,
    publishedAt: r.publishedAt,
    subtitle: r.excerpt || r.summary,
  }))

  const items = [...posts, ...reports]
    .sort((a, b) => ((a.publishedAt ?? "") < (b.publishedAt ?? "") ? 1 : -1))
    .slice(0, 3)

  return NextResponse.json({ items })
}
