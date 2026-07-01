import type { MetadataRoute } from "next"

import { sanityFetch } from "@/sanity/lib/client"
import { postsQuery, reportsQuery } from "@/sanity/lib/queries"

const BASE = "https://www.datumlab.xyz"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/case-studies",
    "/case-studies/moonwell-oev",
    "/analytics",
    "/live-dashboards",
    "/dune-dashboard",
    "/resources",
    "/resources/blog",
    "/resources/reports",
    "/resources/podcast",
  ].map((path) => ({ url: `${BASE}${path}`, lastModified: new Date(), changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }))

  const [posts, reports] = await Promise.all([
    sanityFetch<{ slug: string; publishedAt: string }[]>(postsQuery, {}, []),
    sanityFetch<{ slug: string; publishedAt: string }[]>(reportsQuery, {}, []),
  ])

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/resources/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const reportRoutes: MetadataRoute.Sitemap = reports.map((r) => ({
    url: `${BASE}/resources/reports/${r.slug}`,
    lastModified: r.publishedAt ? new Date(r.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes, ...reportRoutes]
}
