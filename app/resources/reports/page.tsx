import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Download, FileText } from "lucide-react"

import { SiteNav } from "@/components/site-nav"
import { SiteBackground, SiteFooter } from "@/components/site-background"
import { sanityFetch } from "@/sanity/lib/client"
import { reportsQuery } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Monthly Reports | Datum Labs",
  description:
    "Download Datum Labs monthly on-chain reports — protocol performance, lending markets, RWAs, and data-driven DeFi research.",
  alternates: { canonical: "/resources/reports" },
  openGraph: { title: "Monthly Reports | Datum Labs", url: "/resources/reports", type: "website" },
}

type Report = {
  _id: string
  title: string
  slug: string
  period?: string
  summary?: string
  coverImage?: unknown
  publishedAt: string
  pdfUrl?: string
}

export default async function ReportsIndexPage() {
  const reports = await sanityFetch<Report[]>(reportsQuery, {}, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SiteBackground />
      <SiteNav active="Resources" />

      <main className="relative px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-primary">
                Resources
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-primary">Reports</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Monthly Reports</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              In-depth, downloadable reports on protocol performance, market structure, and on-chain trends.
            </p>
          </div>

          {reports.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/60 bg-muted/20 p-12 text-center">
              <p className="text-muted-foreground">
                No reports yet.{" "}
                <Link href="/studio" className="text-primary hover:underline">
                  Open the Studio
                </Link>{" "}
                to publish the first one.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((r) => (
                <div
                  key={r._id}
                  className="group rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all bg-card flex flex-col"
                >
                  <Link href={`/resources/reports/${r.slug}`} className="block">
                    {r.coverImage ? (
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <Image
                          src={urlFor(r.coverImage).width(720).height(405).fit("crop").auto("format").url()}
                          alt={r.title}
                          width={720}
                          height={405}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                        <FileText className="h-12 w-12 text-muted-foreground/40" />
                      </div>
                    )}
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    {r.period ? <div className="text-xs text-primary font-medium mb-2">{r.period}</div> : null}
                    <Link href={`/resources/reports/${r.slug}`}>
                      <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{r.title}</h2>
                    </Link>
                    {r.summary ? <p className="text-sm text-muted-foreground line-clamp-3 flex-1">{r.summary}</p> : null}
                    <div className="flex items-center gap-4 mt-5">
                      <Link
                        href={`/resources/reports/${r.slug}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Read more
                      </Link>
                      {r.pdfUrl ? (
                        <a
                          href={r.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
                        >
                          <Download className="h-4 w-4" /> PDF
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
