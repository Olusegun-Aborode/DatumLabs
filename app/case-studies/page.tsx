import type { Metadata } from "next"
import Link from "next/link"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"

const CAL = "https://calendly.com/datumlabss/30min"

export const metadata: Metadata = {
  title: "Case Studies | Datum Labs",
  description:
    "Live, instrumented engagements operated by Datum Labs — Moonwell OEV, governance, and risk dashboards, Coinbase × Shopify payments, and a roster of protocols under observation.",
  alternates: { canonical: "/case-studies" },
  openGraph: { title: "Case Studies | Datum Labs", url: "/case-studies", type: "website" },
}

type Metric = { k: string; v: string }
type Featured = { num: string; name: string; logo?: string; cat: string; desc: string; metrics: Metric[]; read: string; href: string; external?: boolean }

const FEATURED: Featured[] = [
  {
    num: "001", name: "Moonwell OEV Dashboard", logo: "/images/logo-6.png", cat: "Revenue Analytics",
    desc: "Tracking how revenue from liquidations is captured and distributed following a governance upgrade. In two weeks: $14K+ revenue, $300K+ to liquidators.",
    metrics: [{ k: "Revenue", v: "$14K+" }, { k: "Incentives", v: "$300K+" }, { k: "Time→Insight", v: "2 wks" }],
    read: "Read →", href: "/case-studies/moonwell-oev",
  },
  {
    num: "002", name: "Moonwell Governance Dashboard", logo: "/images/logo-6.png", cat: "Governance · Multi-chain",
    desc: "Aggregates governance activity across all supported chains. On-chain + Snapshot proposals, participation, voters, delegates, at scale.",
    metrics: [{ k: "Coverage", v: "Multi-chain" }, { k: "Sources", v: "On-chain + SS" }, { k: "Scope", v: "Voters + Delegates" }],
    read: "Dune ↗", href: "https://dune.com/jorel/moonwell-governance-dashboard", external: true,
  },
  {
    num: "003", name: "Commerce Payments Protocol", cat: "Payments · Coinbase × Shopify",
    desc: "Tracking user behaviour, protocol performance, and adoption trends for the Coinbase + Shopify Commerce Payment Protocol. Built for mainstream commerce signal.",
    metrics: [{ k: "Partners", v: "CB + Shopify" }, { k: "Focus", v: "Adoption" }, { k: "Scope", v: "User Behaviour" }],
    read: "Dune ↗", href: "https://dune.com/jorel/commerce-payments-protocol-dashboard", external: true,
  },
  {
    num: "004", name: "Moonwell Risk Dashboard", logo: "/images/logo-6.png", cat: "Risk · Base + OP",
    desc: "Evaluates risk across markets on Base and Optimism. Monitors health factor of individual user positions for proactive risk controls and healthier markets.",
    metrics: [{ k: "Chains", v: "Base + OP" }, { k: "Focus", v: "Health Factors" }, { k: "Impact", v: "Proactive" }],
    read: "Dune ↗", href: "https://dune.com/jorel/moonwell-protocol-risk-dashboard", external: true,
  },
]

type Spec = { n: string; cat: string; name: string; logo?: string; init?: string; dark?: boolean }
const SPECIMENS: Spec[] = [
  { n: "001", cat: "LENDING", name: "AAVE Protocol", logo: "/images/aave-logo.png" },
  { n: "002", cat: "LENDING", name: "Morpho Protocol", logo: "/images/logo-3.png" },
  { n: "003", cat: "DEFI · BASE", name: "Seamless Protocol", logo: "/images/logo-5.png" },
  { n: "004", cat: "STABLECOIN", name: "Falcon Finance", logo: "/images/logo-1.png" },
  { n: "005", cat: "L1 · INFRA", name: "Incentiv L1", logo: "/images/incentiv-logo.png" },
  { n: "006", cat: "LENDING · BNB", name: "Venus Protocol", logo: "/images/logo-7.png" },
  { n: "007", cat: "LENDING", name: "SparkLend Protocol", logo: "/images/sparklend-logo.png" },
  { n: "008", cat: "DEX · BATCH", name: "CoW Protocol", logo: "/images/cow-logo.png" },
  { n: "009", cat: "STAKING", name: "Level Protocol", logo: "/images/level-logo.png" },
  { n: "010", cat: "PREDICTION", name: "Dexwin", init: "DX" },
  { n: "011", cat: "L2", name: "ORBT", logo: "/images/orbt-logo.svg" },
  { n: "012", cat: "DEFI", name: "Goldfish", logo: "/images/goldfish-logo.png" },
]

export default function CaseStudiesPage() {
  return (
    <>
      <RevealController />
      <SiteNav active="Case Studies" />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Cases · Selected Work</span>
          <h1>Receipts. Not <span className="it">case studies.</span></h1>
          <p>Every engagement below is live, instrumented, and operated by Datum Labs. Numbers are pulled straight from production, the same dashboards the protocol team uses to make decisions.</p>
          <div className="meta-row">
            <span><strong>12</strong> Active Engagements</span>
            <span><strong>4</strong> Featured</span>
            <span><strong>$5B+</strong> TVL Observed</span>
            <span><strong>14</strong> Chains</span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="section">
          <div className="case-rows">
            {FEATURED.map((c) => {
              const body = (
                <>
                  <div className="num">{c.num}</div>
                  <div className="title">
                    <div className="icon-box">
                      {c.logo ? <img src={c.logo} alt="" /> : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M2 10h20" /></svg>
                      )}
                    </div>
                    <div>
                      <div className="name">{c.name}</div>
                      <div className="cat">{c.cat}</div>
                    </div>
                  </div>
                  <div className="desc">{c.desc}</div>
                  <div className="metrics">
                    {c.metrics.map((m) => (
                      <div key={m.k}><span className="k">{m.k}</span><span className="v">{m.v}</span></div>
                    ))}
                  </div>
                  <div className="read">{c.read}</div>
                </>
              )
              return c.external ? (
                <a key={c.num} className="case-row" href={c.href} target="_blank" rel="noopener noreferrer" data-reveal>{body}</a>
              ) : (
                <Link key={c.num} className="case-row" href={c.href} data-reveal>{body}</Link>
              )
            })}
          </div>
        </section>

        <section className="section">
          <div className="section-head" data-reveal>
            <div className="meta">§ B · <span className="kicker">Protocol Roster</span></div>
            <h2>Protocols under observation.</h2>
            <p>Engagements past and present. Each protocol gets a custom-built data org, pipelines, models, and surfaces operated by Datum.</p>
          </div>
          <div className="specimen-grid">
            {SPECIMENS.map((s) => (
              <div key={s.n} className="specimen" data-reveal>
                <div className="spec-head">
                  <span>Specimen · {s.n}</span>
                  <span className="tag">{s.cat}</span>
                </div>
                <div className="spec-rule" />
                <div className="spec-logo">
                  {s.logo ? <img src={s.logo} alt="" /> : <span className="spec-init">{s.init}</span>}
                </div>
                <div className="spec-name">{s.name}</div>
                <div className="spec-foot">
                  <span>Observed 2024–26</span>
                  <span className="active">Active</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="spotlight" data-reveal>
            <div className="spotlight-inner">
              <div>
                <h2>Want a write-up like one of these?</h2>
                <p>The fastest way to find out what we&apos;d build for you is a 30-min audit. We&apos;ll show you, on your data, where the immediate signal is.</p>
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
