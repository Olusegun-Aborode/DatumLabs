import { sanityFetch } from "@/sanity/lib/client"
import { postsQuery } from "@/sanity/lib/queries"

const BASE = "https://www.datumlab.xyz"

export const revalidate = 3600

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!)
}

export async function GET() {
  const posts = await sanityFetch<{ title: string; slug: string; excerpt?: string; publishedAt: string }[]>(
    postsQuery,
    {},
    [],
  )

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE}/resources/blog/${p.slug}</link>
      <guid>${BASE}/resources/blog/${p.slug}</guid>
      ${p.excerpt ? `<description>${escapeXml(p.excerpt)}</description>` : ""}
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Datum Labs — Blog</title>
    <link>${BASE}/resources/blog</link>
    <description>Analysis and commentary on DeFi data and on-chain intelligence from Datum Labs.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
