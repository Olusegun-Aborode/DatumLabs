import type { Metadata } from "next"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"
import { EngagementTiers } from "@/components/engagement-tiers"

const CAL = "https://calendly.com/datumlabss/30min"

export const metadata: Metadata = {
  title: "Analytics — Method & Scope | Datum Labs",
  description:
    "The analyst you should've already hired. Custom dashboards, pipelines, semantic models, alerts, and embedded analyst operations for Web3 protocols.",
  alternates: { canonical: "/analytics" },
  openGraph: { title: "Analytics — Method & Scope | Datum Labs", url: "/analytics", type: "website" },
}

const CAPS = [
  { n: "/ 01", h: "Custom dashboards", p: "Bespoke dashboards on Dune, Grafana, or hosted. Authored, instrumented, and maintained by us, not handed off.", items: ["protocol-specific KPIs", "live + historical", "cross-chain joins"] },
  { n: "/ 02", h: "Pipeline + warehouse", p: "From archive nodes to materialized views. We run the whole stack, you query the result.", items: ["archive nodes (14 chains)", "normalized indexer", "BigQuery / Clickhouse"] },
  { n: "/ 03", h: "Semantic models", p: "Protocol-aware models. A user is a user; a position is a position. Not raw event tables.", items: ["users / cohorts", "positions / flows", "incentive attribution"] },
  { n: "/ 04", h: "Alerts + monitoring", p: "The dashboard is half the job. The other half: pinging the team when something moves outside the band.", items: ["slack / pagerduty", "liquidation alerts", "governance triggers"] },
  { n: "/ 05", h: "Embedded analyst", p: "A senior analyst lives in your standups. Closes the loop between question, data, and decision.", items: ["weekly performance read", "ad-hoc deep dives", "governance memos"] },
  { n: "/ 06", h: "Data-integrated dApps", p: "When a chart isn't enough, we ship the smart contract, the indexer, and the dApp that uses both.", items: ["solidity / move", "react front-ends", "full handover"] },
]

const METHODS = [
  { n: "/ 01", h: "Audit", p: "30-min call, free. We review your current data infrastructure and identify three immediate opportunities for competitive advantage.", d: ["Audit memo", "Opportunity list", "Engagement scope"] },
  { n: "/ 02", h: "Instrument", p: "We stand up the pipeline, archive nodes, normalized indexer, warehouse partitions. Two-week sprint, fixed scope.", d: ["Live data pipeline", "Schema documentation", "First dashboard"] },
  { n: "/ 03", h: "Model", p: "Raw events become protocol-aware semantic models. A user is a user, a position is a position, not 12 joined tables.", d: ["Semantic layer", "Cohort models", "Validated KPIs"] },
  { n: "/ 04", h: "Operate", p: "Weekly reads, automated alerts, ad-hoc deep dives, on-call for launches. The analyst lives in your standups.", d: ["Weekly performance read", "Slack channel", "On-call rotation"] },
  { n: "/ 05", h: "Hand-over (optional)", p: "When you're ready to staff in-house, we train your team and hand them the keys. Most clients don't take this step. Some do.", d: ["Runbook", "Training sessions", "90-day support"] },
]

export default function AnalyticsPage() {
  return (
    <>
      <RevealController />
      <SiteNav active="Analytics" />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Analytics · Method & Scope</span>
          <h1>The analyst you should&apos;ve <span className="it">already hired.</span></h1>
          <p>Web3 protocols don&apos;t need another consulting deck. They need someone who lives in their data, ships dashboards on Friday, and knows what changed by Monday. That&apos;s the job.</p>
          <div className="meta-row">
            <span><strong>3</strong> Engagement Tiers</span>
            <span><strong>5</strong> Core Methods</span>
            <span><strong>14</strong> Chains Covered</span>
            <span>On-call · 24/5</span>
          </div>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="section">
          <div className="section-head" data-reveal>
            <div className="meta">§ 01 · <span className="kicker">Capabilities</span></div>
            <h2>Six things we do, well.</h2>
            <p>We are deliberately narrow. Every line below is something we&apos;ve shipped to production for a paying protocol, repeatedly.</p>
          </div>
          <div className="lab-grid">
            {CAPS.map((c) => (
              <div key={c.h} className="lab-card" data-reveal>
                <div className="lab-no">{c.n}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head" data-reveal>
            <div className="meta">§ 02 · <span className="kicker">Method</span></div>
            <h2>How an engagement runs.</h2>
            <p>Every project moves through the same five stages. The depth changes; the shape doesn&apos;t.</p>
          </div>
          <div className="methods">
            {METHODS.map((m) => (
              <div key={m.h} className="method" data-reveal>
                <div className="num">{m.n}</div>
                <h4>{m.h}</h4>
                <p>{m.p}</p>
                <div className="deliv">
                  Deliverable<br />
                  {m.d.map((x) => <span key={x}>· {x}<br /></span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head" data-reveal>
            <div className="meta">§ 03 · <span className="kicker">Engagement Tiers</span></div>
            <h2>Three ways to work together.</h2>
            <p>The depth scales to your maturity. We don&apos;t sell upgrades, we sell the right level of presence for what you&apos;re trying to ship.</p>
          </div>
          <EngagementTiers />
        </section>

        <section className="section">
          <div className="spotlight" data-reveal>
            <div className="spotlight-inner">
              <div>
                <h2>Schedule a 30-minute analytics audit, free.</h2>
                <p>We&apos;ll review your current data infrastructure and identify three immediate opportunities for competitive advantage. You leave with the brief whether you hire us or not.</p>
              </div>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-flag">BOOK_AUDIT.CAL ↗</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
