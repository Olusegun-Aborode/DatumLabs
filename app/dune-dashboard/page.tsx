import type { Metadata } from "next"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"
import { DuneGrid } from "@/components/dune-grid"

const CAL = "https://calendly.com/datumlabss/30min"

export const metadata: Metadata = {
  title: "Dune Dashboards — Public Index | Datum Labs",
  description:
    "Live public Dune dashboards authored and maintained by Datum Labs — the same surfaces protocol teams check every morning across lending, DEX, stablecoins, governance, and payments.",
  alternates: { canonical: "/dune-dashboard" },
  openGraph: { title: "Dune Dashboards — Public Index | Datum Labs", url: "/dune-dashboard", type: "website" },
}

export default function DuneDashboardsPage() {
  return (
    <>
      <RevealController />
      <SiteNav active="Dashboards" />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Dune · Public Index</span>
          <h1>Live dashboards. <span className="it">Public receipts.</span></h1>
          <p>Every dashboard below is authored and maintained by Datum Labs. Click through to the live Dune surface, the same one the protocol team checks every morning.</p>
          <div className="meta-row">
            <span><strong>10</strong> Live</span>
            <span><strong>8</strong> Protocols</span>
            <span><strong>14</strong> Chains</span>
            <span>Updated · Continuously</span>
          </div>
        </div>
      </header>

      <main id="main" className="wrap">
        <DuneGrid />

        <section className="section">
          <div className="spotlight" data-reveal>
            <div className="spotlight-inner">
              <div>
                <h2>Want a custom dashboard?</h2>
                <p>The dashboards above are public. The ones we run for our partners are bespoke, instrumented, and tied to the protocol&apos;s actual KPIs. Tell us what you need to see.</p>
              </div>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-flag">SCOPE A DASHBOARD ↗</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
