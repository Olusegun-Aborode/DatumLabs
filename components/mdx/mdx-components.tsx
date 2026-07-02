import type { ReactNode } from "react"

/**
 * Component map available inside report MDX. Standard markdown elements
 * (h2, p, ul, table, blockquote, code…) are styled by the `.report-body`
 * wrapper in ds-v2.css. The custom components below give reports structure
 * (callouts, KPI grids, figures). Add interactive/client components here as
 * Joel's reports need them (mark those files "use client").
 */

function Callout({ title, children, tone = "default" }: { title?: string; children: ReactNode; tone?: "default" | "brand" | "warn" }) {
  return (
    <div className={`rpt-callout rpt-callout-${tone}`}>
      {title ? <div className="rpt-callout-t">{title}</div> : null}
      <div>{children}</div>
    </div>
  )
}

function KPIGrid({ children }: { children: ReactNode }) {
  return <div className="rpt-kpis">{children}</div>
}

function KPI({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rpt-kpi">
      <div className="rpt-kpi-v">{value}</div>
      <div className="rpt-kpi-l">{label}</div>
      {sub ? <div className="rpt-kpi-s">{sub}</div> : null}
    </div>
  )
}

function Figure({ src, alt, caption }: { src: string; alt?: string; caption?: string }) {
  return (
    <figure className="rpt-figure">
      {/* plain img: report figures are often SVG/remote; no next/image sizing needed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt || ""} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export const mdxComponents = { Callout, KPIGrid, KPI, Figure }
