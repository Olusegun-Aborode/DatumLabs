import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/studio" },
    sitemap: "https://www.datumlab.xyz/sitemap.xml",
    host: "https://www.datumlab.xyz",
  }
}
