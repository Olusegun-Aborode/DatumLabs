"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { urlFor } from "@/sanity/lib/image"

export type ResourceItem = {
  _type: "post" | "report"
  _id: string
  title: string
  slug: string
  kind: "Articles" | "Reports" | "Case Study" | "Research"
  extra?: string
  publishedAt: string
  image?: unknown
  subtitle?: string
}

const TABS = ["All", "Articles", "Reports", "Case Study", "Research"] as const
type Tab = (typeof TABS)[number]

function formatDate(d?: string) {
  if (!d) return ""
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

function hrefFor(item: ResourceItem) {
  return item._type === "report" ? `/resources/reports/${item.slug}` : `/resources/blog/${item.slug}`
}

function imgUrl(image: unknown, w: number, h: number) {
  // MDX report covers are plain public paths (e.g. "/images/foo.png"); use as-is.
  // Sanity images are objects/refs and go through the CDN URL builder.
  if (typeof image === "string") return image
  return urlFor(image).width(w).height(h).fit("crop").auto("format").url()
}

function Tag({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
        muted ? "text-muted-foreground bg-muted" : "text-primary bg-primary/10"
      }`}
    >
      {children}
    </span>
  )
}

export function ResourcesBrowser({ items }: { items: ResourceItem[] }) {
  const [tab, setTab] = useState<Tab>("All")

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: items.length }
    for (const t of TABS) if (t !== "All") c[t] = items.filter((i) => i.kind === t).length
    return c
  }, [items])

  const filtered = useMemo(
    () => (tab === "All" ? items : items.filter((i) => i.kind === tab)),
    [items, tab],
  )

  const featured = filtered[0]

  return (
    <div>
      {/* Featured / pinned (most recent in the current tab) */}
      {featured ? (
        <Link
          href={hrefFor(featured)}
          className="group relative block rounded-3xl overflow-hidden border border-border mb-10 min-h-[320px] lg:min-h-[420px]"
        >
          {featured.image ? (
            <Image
              src={imgUrl(featured.image, 1600, 840)}
              alt={featured.title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="absolute inset-0 bg-card"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1px, transparent 1px), radial-gradient(currentColor 1px, transparent 1px)",
                backgroundSize: "16px 16px, 16px 16px",
                backgroundPosition: "0 0, 8px 8px",
                color: "var(--muted-foreground)",
                opacity: 1,
              }}
            />
          )}
          {/* Legibility gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/85 lg:to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Tag>{featured.kind}</Tag>
              {featured.extra ? <Tag muted>{featured.extra}</Tag> : null}
              <span className="text-sm text-muted-foreground">{formatDate(featured.publishedAt)}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-balance group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            {featured.subtitle ? <p className="text-lg text-muted-foreground">{featured.subtitle}</p> : null}
          </div>
        </Link>
      ) : null}

      {/* Category tabs */}
      <div className="flex flex-wrap items-center gap-1 border-b border-border mb-8 overflow-x-auto">
        {TABS.map((t) => {
          const active = t === tab
          const count = counts[t] ?? 0
          if (t !== "All" && count === 0) return null
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
              {active ? <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" /> : null}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/60 bg-muted/20 p-12 text-center">
          <p className="text-muted-foreground">Nothing here yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <Link
              key={item._id}
              href={hrefFor(item)}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                {item.image ? (
                  <Image
                    src={imgUrl(item.image, 720, 450)}
                    alt={item.title}
                    width={720}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <Tag>{item.kind}</Tag>
                  {item.extra ? <Tag muted>{item.extra}</Tag> : null}
                  <span className="text-xs text-muted-foreground">{formatDate(item.publishedAt)}</span>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                {item.subtitle ? <p className="text-sm text-muted-foreground line-clamp-2">{item.subtitle}</p> : null}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
