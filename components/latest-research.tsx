"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type ResearchItem = {
  _type: "post" | "report"
  _id: string
  title: string
  slug: string
  category?: string
  extra?: string
  publishedAt?: string
  subtitle?: string
}

function formatDate(d?: string) {
  if (!d) return ""
  const t = new Date(d)
  return isNaN(t.getTime()) ? "" : t.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

function hrefFor(item: ResearchItem) {
  return item._type === "report" ? `/resources/reports/${item.slug}` : `/resources/blog/${item.slug}`
}

/**
 * "Research and reports" strip on the homepage — latest posts (Sanity) +
 * reports (MDX) from /api/latest-research. v2-styled; hides until published.
 * Lives inside a .wrap parent.
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

  if (!loaded || items.length === 0) return null

  return (
    <section className="section" id="research">
      <div className="section-head" data-reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
        <div>
          <div className="meta"><span className="kicker">Latest</span></div>
          <h2>Research and reports shaping onchain intelligence</h2>
        </div>
        <Link href="/resources" className="btn btn-stack" style={{ flexShrink: 0 }}>View all</Link>
      </div>
      <div className="dune-grid">
        {items.map((item) => (
          <Link key={item._id} href={hrefFor(item)} className="dune-card" data-reveal>
            <div className="row1">
              <span className="flag">{item.category || (item._type === "report" ? "Report" : "Article")}</span>
              <span>{formatDate(item.publishedAt)}</span>
            </div>
            <h3>{item.title}</h3>
            {item.subtitle ? <p>{item.subtitle}</p> : null}
            <div className="arrow"><span>{item.extra || "Read"}</span><span>→</span></div>
          </Link>
        ))}
      </div>
    </section>
  )
}
