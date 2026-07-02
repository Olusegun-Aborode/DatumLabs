import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Download } from "lucide-react"

import { SiteNav } from "@/components/site-nav"
import { SiteBackground, SiteFooter } from "@/components/site-background"
import { RichText } from "@/components/portable-text"
import { ReportGate } from "@/components/report-gate"
import { Button } from "@/components/ui/button"
import { sanityFetch } from "@/sanity/lib/client"
import { reportBySlugQuery, reportSlugsQuery } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { isSanityConfigured } from "@/sanity/env"
import { demoEnabled, demoReportDetail } from "@/sanity/lib/demo-content"

export const revalidate = 60

type Report = {
  title: string
  slug: string
  period?: string
  summary?: string
  coverImage?: unknown
  body?: unknown
  publishedAt: string
  _updatedAt: string
  pdf?: { url?: string; originalFilename?: string; size?: number }
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: unknown }
}

export async function generateStaticParams() {
  if (!isSanityConfigured) return []
  const slugs = await sanityFetch<{ slug: string }[]>(reportSlugsQuery, {}, [])
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const report = await sanityFetch<Report | null>(reportBySlugQuery, { slug }, null)
  if (!report) return { title: "Report not found | Datum Labs" }

  const title = report.seo?.metaTitle || report.title
  const description = report.seo?.metaDescription || report.summary || undefined
  const ogSource = report.seo?.ogImage || report.coverImage
  const ogImage = ogSource ? urlFor(ogSource).width(1200).height(630).fit("crop").url() : undefined

  return {
    title: `${title} | Datum Labs`,
    description,
    alternates: { canonical: `/resources/reports/${report.slug}` },
    openGraph: {
      title,
      description,
      url: `/resources/reports/${report.slug}`,
      type: "article",
      publishedTime: report.publishedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description, images: ogImage ? [ogImage] : undefined },
  }
}

function formatDate(d?: string) {
  if (!d) return ""
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

function formatSize(bytes?: number) {
  if (!bytes) return ""
  const mb = bytes / (1024 * 1024)
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`
}

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let report = await sanityFetch<Report | null>(reportBySlugQuery, { slug }, null)
  if (!report && demoEnabled && slug.startsWith("demo-")) report = demoReportDetail as unknown as Report
  if (!report) notFound()

  const ogSource = report.seo?.ogImage || report.coverImage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: report.title,
    description: report.seo?.metaDescription || report.summary,
    datePublished: report.publishedAt,
    dateModified: report._updatedAt,
    author: { "@type": "Organization", name: "Datum Labs" },
    publisher: { "@type": "Organization", name: "Datum Labs" },
    image: ogSource ? urlFor(ogSource).width(1200).height(630).fit("crop").url() : undefined,
    mainEntityOfPage: `https://www.datumlab.xyz/resources/reports/${report.slug}`,
  }

  const downloadName = report.pdf?.originalFilename || `${report.slug}.pdf`

  // Show the first few body blocks openly (the readable intro), then gate the
  // PDF download + the remaining body behind the lead form.
  const bodyBlocks = Array.isArray(report.body) ? (report.body as unknown[]) : []
  const PREVIEW_BLOCKS = 3
  const previewBody = bodyBlocks.slice(0, PREVIEW_BLOCKS)
  const gatedBody = bodyBlocks.slice(PREVIEW_BLOCKS)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SiteBackground />
      <SiteNav active="Resources" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id="main" className="relative px-6 lg:px-12 py-16">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/resources/reports"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Reports
          </Link>

          {report.period ? <div className="text-sm text-primary font-medium mb-3">{report.period}</div> : null}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{report.title}</h1>
          <div className="text-sm text-muted-foreground mb-8">Published {formatDate(report.publishedAt)}</div>

          {report.coverImage ? (
            <Image
              src={urlFor(report.coverImage).width(1280).height(720).fit("crop").auto("format").url()}
              alt={report.title}
              width={1280}
              height={720}
              priority
              className="rounded-2xl border border-border w-full h-auto mb-8"
            />
          ) : null}

          {/* Summary + first few body paragraphs are the open preview (indexable, ungated) */}
          {report.summary ? <p className="text-lg text-muted-foreground leading-relaxed mb-8">{report.summary}</p> : null}

          {previewBody.length ? (
            <div className="text-lg">
              <RichText value={previewBody} />
            </div>
          ) : null}

          {/* PDF download + remaining body are lead-gated */}
          <ReportGate>
            {report.pdf?.url ? (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 mb-12">
                <div className="flex-1">
                  <div className="font-semibold">Download the full report</div>
                  <div className="text-sm text-muted-foreground">
                    PDF{report.pdf.size ? ` · ${formatSize(report.pdf.size)}` : ""}
                  </div>
                </div>
                <a href={`${report.pdf.url}?dl=${encodeURIComponent(downloadName)}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Download className="mr-2 h-5 w-5" /> Download PDF
                  </Button>
                </a>
              </div>
            ) : null}

            {gatedBody.length ? (
              <div className="text-lg">
                <RichText value={gatedBody} />
              </div>
            ) : null}
          </ReportGate>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
