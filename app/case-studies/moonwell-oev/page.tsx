import type { Metadata } from "next"
import Link from "next/link"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"

const CAL = "https://calendly.com/datumlabss/30min"
const DUNE = "https://dune.com/jorel/moonwell-oev-dashboard"

export const metadata: Metadata = {
  title: "Moonwell OEV Dashboard — Case Study | Datum Labs",
  description:
    "How Datum Labs built the dashboard the Moonwell team uses to verify a governance upgrade is paying for itself — $14K+ captured and $300K+ routed to liquidators in two weeks on Base and Optimism.",
  alternates: { canonical: "/case-studies/moonwell-oev" },
  openGraph: { title: "Moonwell OEV Dashboard — Case Study | Datum Labs", url: "/case-studies/moonwell-oev", type: "article" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Capturing $300K in liquidator value in two weeks",
  description: "How Datum Labs built the Moonwell OEV dashboard on Base and Optimism.",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  image: "https://www.datumlab.xyz/images/footer-bg.png",
  author: { "@type": "Organization", name: "Datum Labs" },
  publisher: {
    "@type": "Organization",
    name: "Datum Labs",
    logo: { "@type": "ImageObject", url: "https://www.datumlab.xyz/brand/logo-mark-blue.svg" },
  },
  mainEntityOfPage: "https://www.datumlab.xyz/case-studies/moonwell-oev",
}

export default function MoonwellOevPage() {
  return (
    <>
      <RevealController />
      <SiteNav active="Case Studies" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Moonwell · OEV Dashboard</span>
          <h1>Capturing $300K in <span className="it">liquidator value</span> in two weeks.</h1>
          <p>How we built the dashboard the Moonwell team uses to verify a governance upgrade is paying for itself, in real time, on Base and Optimism.</p>
          <div className="meta-row">
            <span>Protocol · <strong>Moonwell</strong></span>
            <span>Chains · <strong>Base · Optimism</strong></span>
            <span>Engagement · <strong>Strategic Data Partnership</strong></span>
            <span>Status · <strong>Live</strong></span>
          </div>
        </div>
      </header>

      <main id="main" className="wrap">
        <div className="cs-grid">
          <article className="cs-body">
            <h2>The brief</h2>
            <p>Moonwell shipped a governance upgrade that changed how the protocol captures and distributes <strong>OEV</strong>, the revenue surfaced when a position gets liquidated. The upgrade was already deployed when we joined: contracts on-chain, audit clean, ready to earn.</p>
            <p>The team had no way to see if it was actually working.</p>
            <blockquote>&quot;We can read the contracts, but we can&apos;t read the protocol. Build us the surface that proves the upgrade is paying for itself, or isn&apos;t.&quot;</blockquote>

            <h2>What we built</h2>
            <p>A purpose-built dashboard, hosted on Dune, that decomposes every liquidation event on Base and Optimism into the four flows that matter:</p>
            <ul>
              <li><strong>Revenue captured</strong> by the protocol</li>
              <li><strong>Incentives paid out</strong> to liquidators</li>
              <li><strong>Net OEV</strong> per market, per chain, per day</li>
              <li><strong>Liquidator concentration</strong>, who&apos;s doing the work, who&apos;s getting paid</li>
            </ul>
            <p>Behind it: a pipeline of normalized liquidation events sourced from our archive nodes, a per-market revenue model, and an alerting layer that pings the team when concentration exceeds a healthy threshold.</p>

            <h2>The numbers, first 14 days</h2>
            <div className="cs-callouts">
              <div className="cs-callout"><div className="lbl">Revenue Captured</div><div className="val">$14,000+</div><div className="cap">Routed to the Moonwell treasury via the upgraded liquidation contracts.</div></div>
              <div className="cs-callout"><div className="lbl">Liquidator Incentives</div><div className="val">$300,000+</div><div className="cap">Paid out to liquidators, keeping the market healthy and well-served.</div></div>
              <div className="cs-callout"><div className="lbl">Time to Insight</div><div className="val">2 weeks</div><div className="cap">From &quot;we shipped a contract&quot; to &quot;we can prove it works.&quot; Quantified, not anecdotal.</div></div>
            </div>

            <h2>Why it mattered</h2>
            <p>Without a custom analytics surface, this would have been impossibly tedious to quantify, events span two chains, multiple markets, and a flow that splits at the contract level. The team would have known the upgrade <strong>shipped</strong>. They wouldn&apos;t have known if it was <strong>working</strong>.</p>
            <p>The dashboard turns the upgrade into a continuous, public proof: every liquidation, every payout, on a single surface the team and the community check daily.</p>

            <h2>Stack</h2>
            <ul>
              <li><strong>Source</strong>, Datum Labs archive nodes, Base + Optimism</li>
              <li><strong>Indexer</strong>, liquidation event normalization, per-market</li>
              <li><strong>Warehouse</strong>, Dune-native, materialized for sub-second loads</li>
              <li><strong>Surface</strong>, public Dune dashboard + private slack alerts</li>
            </ul>

            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href={DUNE} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View live on Dune ↗</a>
              <Link href="/case-studies" className="btn btn-stack">← More cases</Link>
            </div>
          </article>

          <aside className="cs-aside">
            <h4>At a Glance</h4>
            <div className="stat"><div className="lbl">Revenue Captured</div><div className="val flag">$14K+</div></div>
            <div className="stat"><div className="lbl">Incentives Paid</div><div className="val">$300K+</div></div>
            <div className="stat"><div className="lbl">Chains</div><div className="val" style={{ fontSize: 20 }}>Base · Optimism</div></div>
            <div className="stat"><div className="lbl">Deploy → Insight</div><div className="val">2 weeks</div></div>
            <div className="stat"><div className="lbl">Engagement</div><div className="val mono" style={{ fontSize: 16 }}>STRATEGIC_INTEL</div></div>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%", marginTop: 20 }}>Book a 30-min audit ↗</a>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
