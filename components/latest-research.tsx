"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { urlFor } from "@/sanity/lib/image"

type ResearchItem = {
  _type: "post" | "report"
  _id: string
  title: string
  slug: string
  category?: string
  extra?: string
  publishedAt?: string
  image?: unknown
  subtitle?: string
}

function formatDate(d?: string) {
  if (!d) return ""
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

function hrefFor(item: ResearchItem) {
  return item._type === "report" ? `/resources/reports/${item.slug}` : `/resources/blog/${item.slug}`
}

/**
 * "Research and perspectives" strip above the footer. Mirrors the reference
 * layout: section title + "View all", then a 3-card grid of the latest
 * posts/reports. Fetches client-side from /api/latest-research; renders
 * nothing until at least one item is published.
 */
export function LatestResearch() {
  const [items, setItems] = useState<ResearchItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let active = true
    fetch("/api/latest-research")
      .then((r) => r.json())
      .then((d) => {
        if (active) {
          setItems(Array.isArray(d.items) ? d.items : [])
          setLoaded(true)
        }
      })
      .catch(() => active && setLoaded(true))
    return () => {
      active = false
    }
  }, [])

  // Hide the whole section until there's something to show.
  if (!loaded || items.length === 0) return null

  return (
    <section className="py-20 px-6 lg:px-12 relative">
      <div className="w-full">
        <div className="flex items-start justify-between gap-6 mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl text-balance">
            Research and reports shaping onchain intelligence
          </h2>
          <Link
            href="/resources"
            className="shrink-0 rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <Link
              key={item._id}
              href={hrefFor(item)}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                {item.image ? (
                  <Image
                    src={urlFor(item.image).width(720).height(450).fit("crop").auto("format").url()}
                    alt={item.title}
                    width={720}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  {item.category ? (
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  ) : null}
                  {item.extra ? (
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                      {item.extra}
                    </span>
                  ) : null}
                  <span className="text-xs text-muted-foreground">{formatDate(item.publishedAt)}</span>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                {item.subtitle ? (
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.subtitle}</p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
