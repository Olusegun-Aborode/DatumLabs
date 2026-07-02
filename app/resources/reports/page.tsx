import type { Metadata } from "next"
import Link from "next/link"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"
import { getAllReports } from "@/lib/reports"

export const metadata: Metadata = {
  title: "Reports | Datum Labs",
  description:
    "In-depth research and monthly reports from Datum Labs on DeFi lending, risk, market structure, and the on-chain economy.",
  alternates: { canonical: "/resources/reports" },
  openGraph: { title: "Reports | Datum Labs", url: "/resources/reports", type: "website" },
}

function formatDate(d?: string) {
  if (!d) return ""
  const t = new Date(d)
  return isNaN(t.getTime()) ? "" : t.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

export default function ReportsIndexPage() {
  const reports = getAllReports()

  return (
    <>
      <RevealController />
      <SiteNav active="Resources" />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Resources · Reports</span>
          <h1>Datum <span className="it">reports.</span></h1>
          <p>In-depth research on DeFi lending, risk, and market structure — the analysis behind the dashboards.</p>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="section" style={{ paddingTop: 24 }}>
          {reports.length === 0 ? (
            <div className="rpt-callout" data-reveal>
              <div className="rpt-callout-t">No reports published yet.</div>
              <div style={{ fontSize: 14 }}>Reports are authored as MDX in <code>content/reports/</code>. Add a file and it appears here.</div>
            </div>
          ) : (
            <div className="dune-grid">
              {reports.map((r) => (
                <Link key={r.slug} href={`/resources/reports/${r.slug}`} className="dune-card" data-reveal>
                  <div className="row1">
                    <span className="flag">{r.period || "Report"}</span>
                    <span>{formatDate(r.publishedAt)}</span>
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.excerpt || r.summary}</p>
                  <div className="arrow"><span>Read report</span><span>→</span></div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
