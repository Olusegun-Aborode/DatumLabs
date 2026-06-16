import type { Metadata } from "next"
import Link from "next/link"

import { SiteNav } from "@/components/site-nav"
import { SiteBackground, SiteFooter } from "@/components/site-background"
import { ResourcesBrowser, type ResourceItem } from "@/components/resources-browser"
import { sanityFetch } from "@/sanity/lib/client"
import { allResourcesQuery } from "@/sanity/lib/queries"
import { demoEnabled, demoResources } from "@/sanity/lib/demo-content"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Resources — Reports & Insights | Datum Labs",
  description:
    "Articles, monthly reports, case studies, and research from Datum Labs — DeFi protocol intelligence, lending markets, RWAs, and data-driven analysis.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources — Reports & Insights | Datum Labs",
    description: "Articles, reports, case studies, and research from Datum Labs.",
    url: "/resources",
    type: "website",
  },
}

export default async function ResourcesPage() {
  let items = await sanityFetch<ResourceItem[]>(allResourcesQuery, {}, [])
  if (items.length === 0 && demoEnabled) items = demoResources

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SiteBackground />
      <SiteNav active="Resources" />

      <main className="relative px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Reports & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Articles, monthly reports, case studies, and research shaping onchain asset management.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/60 bg-muted/20 p-12 text-center">
              <p className="text-muted-foreground">
                Reports and posts will appear here once published.{" "}
                <Link href="/studio" className="text-primary hover:underline">
                  Open the Studio
                </Link>{" "}
                to add the first one.
              </p>
            </div>
          ) : (
            <ResourcesBrowser items={items} />
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
