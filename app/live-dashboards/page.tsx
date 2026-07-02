import type { Metadata } from "next"
import Link from "next/link"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"

const CAL = "https://calendly.com/datumlabss/30min"

export const metadata: Metadata = {
  title: "Live DeFi Protocol Dashboards — Aave, Morpho, NAVI | Datum Labs",
  description:
    "Custom-built, fully-operated DeFi dashboards — live onchain data, market metrics, and position-health analytics for Aave, Morpho, NAVI, SparkLend and more.",
  alternates: { canonical: "/live-dashboards" },
  openGraph: { title: "Live DeFi Protocol Dashboards — Aave, Morpho, NAVI | Datum Labs", url: "/live-dashboards", type: "website" },
}

type Card = { tag: string; name: string; sub: string; logo?: string; href: string; status: "LIVE" | "PENDING"; darkLogo?: boolean; external?: boolean }

const LENDING: Card[] = [
  { tag: "PROTOCOL · 01", name: "AAVE", sub: "Multi-chain lending markets", logo: "/images/aave-logo.png", href: "/aave-dashboard", status: "LIVE" },
  { tag: "PROTOCOL · 02", name: "Morpho", sub: "Curated lending vaults", logo: "/images/logo-3.png", href: "/morpho-terminal", status: "LIVE" },
  { tag: "PROTOCOL · 03", name: "NAVI", sub: "Sui-native money market", logo: "/images/navi-logo.png", href: "/navi", status: "LIVE", darkLogo: true },
  { tag: "PROTOCOL · 04", name: "Lending Terminal · SUI", sub: "Sui lending, cross-protocol", logo: "/images/lending-terminal-sui-logo.png", href: "/lending-terminal-sui", status: "LIVE" },
  { tag: "PROTOCOL · 05", name: "SparkLend", sub: "SparkLend markets", logo: "/images/sparklend-logo.png", href: "/sparklend", status: "LIVE" },
  { tag: "PROTOCOL · 06", name: "INCENTIV", sub: "L1 incentive accounting", logo: "/images/incentiv-logo.png", href: "https://www.datumlab.xyz/Incentiv/dashboard/overview", status: "LIVE", external: true },
]

const TERMINALS: Card[] = [
  { tag: "PROTOCOL · 07", name: "Centrifuge RWA", sub: "Tokenized RWA pools", logo: "/images/centrifuge-logo.svg", href: "/centrifugerwa", status: "LIVE" },
  { tag: "PROTOCOL · 08", name: "RWA Terminal", sub: "Aave Horizon tokenized RWA", logo: "/images/datum-logo.png", href: "/rwa-terminal", status: "LIVE" },
  { tag: "PROTOCOL · 09", name: "Lending Terminal", sub: "Cross-protocol lending intel", logo: "/images/datum-logo.png", href: "/lending-terminal", status: "LIVE" },
  { tag: "PROTOCOL · 10", name: "Liquidator Economy", sub: "Liquidator flows & incentives", logo: "/images/datum-logo.png", href: "/liquidator-economy", status: "LIVE" },
  { tag: "PROTOCOL · 11", name: "YOUR PROTOCOL", sub: "Next onboarding slot open", href: CAL, status: "PENDING" },
]

const INSIDE = [
  { n: "/ 01", h: "Live feeds", p: "Block-level data via dedicated archive nodes. No third-party API blackbox between us and the chain." },
  { n: "/ 02", h: "Market metrics", p: "TVL, utilisation, supply/borrow rates, liquidations, fee revenue. Cross-chain joins where relevant." },
  { n: "/ 03", h: "Position health", p: "Per-user health factors, risk bands, collateral composition. Streamed, not snapshotted." },
  { n: "/ 04", h: "Alerts", p: "Slack / PagerDuty hooks for liquidation events, governance triggers, parameter drift." },
  { n: "/ 05", h: "Embeddable", p: "iframe-ready or white-label. Drop directly into your protocol UI, your domain, our ops." },
]

function ProtoCard({ c }: { c: Card }) {
  const inner = (
    <>
      <div className="proto-tag">{c.tag}</div>
      <div className={`proto-logo-wrap${c.status === "PENDING" ? " empty" : ""}${c.darkLogo ? " dark" : ""}`}>
        {c.status === "PENDING" ? "+" : c.logo ? <img src={c.logo} alt="" /> : null}
      </div>
      <div className="proto-body">
        <div className="proto-name">{c.name}</div>
        <div className="proto-sub">{c.sub}</div>
      </div>
      <div className="proto-foot">
        <span className={`status${c.status === "PENDING" ? " pending" : ""}`}><span className="dot" />{c.status}</span>
        <span className="open">{c.status === "PENDING" ? "REQUEST →" : "OPEN ↗"}</span>
      </div>
    </>
  )
  const cls = `proto-card${c.status === "PENDING" ? " pending" : ""}`
  if (c.external || c.status === "PENDING") {
    return <a className={cls} href={c.href} target="_blank" rel="noopener noreferrer" data-reveal>{inner}</a>
  }
  return <Link className={cls} href={c.href} data-reveal>{inner}</Link>
}

export default function LiveDashboardsPage() {
  return (
    <>
      <RevealController />
      <SiteNav active="Dashboards" />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Live Dashboards · Telemetry</span>
          <h1>Real-time protocol dashboards. <span className="it">Hosted by us.</span></h1>
          <p>Custom-built, fully-owned dashboards we operate for protocol teams. Live data feeds, market metrics, and interactive analytics, instrumented end-to-end by Datum Labs and embedded directly inside their products.</p>
          <div className="meta-row">
            <span><strong>10</strong> Live Deployments</span>
            <span><strong>14</strong> Chains Covered</span>
            <span><strong>10</strong> Public Dashboards</span>
            <span>Uptime · 99.97%</span>
          </div>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="section">
          <div className="cat-bar" data-reveal>
            <span>Category · 01</span>
            <span className="cat-title">Borrow & Lend</span>
            <span className="cat-meta">6 Live</span>
          </div>
          <div className="proto-grid">
            {LENDING.map((c) => <ProtoCard key={c.name} c={c} />)}
          </div>

          <div className="cat-bar" data-reveal style={{ marginTop: 32 }}>
            <span>Category · 02</span>
            <span className="cat-title">RWA & Terminals</span>
            <span className="cat-meta">4 Live · 1 Pending</span>
          </div>
          <div className="proto-grid">
            {TERMINALS.map((c) => <ProtoCard key={c.name} c={c} />)}
          </div>
        </section>

        <section className="section">
          <div className="section-head" data-reveal>
            <div className="meta">§ 02 · <span className="kicker">What&apos;s Inside</span></div>
            <h2>What every dashboard ships with.</h2>
            <p>The deployments above are bespoke per protocol, but they all sit on the same instrumentation foundation. Five things are non-negotiable.</p>
          </div>
          <div className="lab-grid">
            {INSIDE.map((c) => (
              <div key={c.h} className="lab-card" data-reveal>
                <div className="lab-no">{c.n}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head" data-reveal>
            <div className="meta">§ 03 · <span className="kicker">Public Telemetry</span></div>
            <h2>Also on Dune.</h2>
            <p>For protocols that want public-facing analytics, we maintain 10 dashboards on dune.com. Different product, same instrumentation underneath.</p>
          </div>
          <Link href="/dune-dashboard" className="footer-cta-link">
            <span>Browse Dune Index</span><span>→</span>
          </Link>
        </section>

        <section className="section">
          <div className="spotlight" data-reveal>
            <div className="spotlight-inner">
              <div>
                <h2>Want a dashboard like these for your protocol?</h2>
                <p>30-min audit with an analyst. We come back with a working scope and three opportunities you didn&apos;t know you had.</p>
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
