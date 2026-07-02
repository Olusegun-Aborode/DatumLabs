"use client"

import { useState } from "react"
import Link from "next/link"

type Metric = { k: string; v: string }
type Entry = {
  n: string
  cname: string
  logo: string
  cat: string
  title: string
  chipK: string
  chipV: string
  desc: string
  metrics: Metric[]
  ctaLabel: string
  href: string
  external?: boolean
}

const ENTRIES: Entry[] = [
  {
    n: "# 001", cname: "Moonwell", logo: "/images/logo-6.png", cat: "OEV · Base + OP",
    title: "Liquidation revenue, captured and routed in two weeks.",
    chipK: "Revenue", chipV: "$14K+",
    desc: "Tracking how revenue from liquidations is captured and distributed following a governance upgrade. In two weeks: $14K+ in revenue, $300K+ to liquidators.",
    metrics: [{ k: "Revenue", v: "$14K+" }, { k: "Incentives", v: "$300K+" }, { k: "Time→Insight", v: "2 wks" }],
    ctaLabel: "Open entry ↗", href: "/case-studies/moonwell-oev",
  },
  {
    n: "# 002", cname: "Moonwell", logo: "/images/logo-6.png", cat: "Governance · Multi-chain",
    title: "Every chain's governance activity in a single view.",
    chipK: "Coverage", chipV: "Multi-chain",
    desc: "Aggregates governance activity across all supported chains. On-chain + Snapshot proposals, participation, voters, delegates, at scale.",
    metrics: [{ k: "Coverage", v: "Multi-chain" }, { k: "Sources", v: "On-chain + Snapshot" }, { k: "Scope", v: "Voters + Delegates" }],
    ctaLabel: "View on Dune ↗", href: "https://dune.com/jorel/moonwell-governance-dashboard", external: true,
  },
  {
    n: "# 003", cname: "Commerce Payments", logo: "", cat: "Payments · Coinbase × Shopify",
    title: "Adoption signal for Coinbase × Shopify payments.",
    chipK: "Partners", chipV: "CB + Shopify",
    desc: "Tracking user behaviour, protocol performance, and adoption trends for the Coinbase + Shopify Commerce Payment Protocol. Built for mainstream commerce signal.",
    metrics: [{ k: "Partners", v: "CB + Shopify" }, { k: "Focus", v: "Adoption" }, { k: "Scope", v: "User Behaviour" }],
    ctaLabel: "View on Dune ↗", href: "https://dune.com/jorel/commerce-payments-protocol-dashboard", external: true,
  },
  {
    n: "# 004", cname: "Moonwell", logo: "/images/logo-6.png", cat: "Risk · Base + OP",
    title: "Position-level risk across Base and Optimism.",
    chipK: "Markets", chipV: "Base + OP",
    desc: "Evaluates risk across markets on Base and Optimism. Monitors health factor of individual user positions, proactive risk controls and healthier markets.",
    metrics: [{ k: "Chains", v: "Base + OP" }, { k: "Focus", v: "Health Factors" }, { k: "Impact", v: "Proactive" }],
    ctaLabel: "View on Dune ↗", href: "https://dune.com/jorel/moonwell-protocol-risk-dashboard", external: true,
  },
]

export function SelectedWork() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="acc-list js-acc">
      {ENTRIES.map((e, i) => {
        const isOpen = openIdx === i
        return (
          <div key={e.n} className={`acc-entry${isOpen ? " open" : ""}`} data-reveal>
            <div
              className="acc-header"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`acc-body-${i}`}
              onClick={() => setOpenIdx(isOpen ? null : i)}
              onKeyDown={(ev) => {
                if (ev.key === "Enter" || ev.key === " ") {
                  ev.preventDefault()
                  setOpenIdx(isOpen ? null : i)
                }
              }}
            >
              <span className="acc-n">{e.n}</span>
              <span className="acc-ico">
                {e.logo ? (
                  <img src={e.logo} alt="" />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M2 10h20" /></svg>
                )}
              </span>
              <span className="acc-cname">{e.cname}</span>
              <span className="acc-cat">{e.cat}</span>
              <span className="acc-title">{e.title}</span>
              <span className="acc-chip"><span className="acc-chip-k">{e.chipK}</span>{e.chipV}</span>
              <span className="acc-chev">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </div>
            <div className="acc-body" id={`acc-body-${i}`} role="region" aria-label={`${e.cname} — ${e.cat}`}>
              <div className="acc-body-inner" inert={!isOpen ? true : undefined}>
                <div className="acc-detail">
                  <div>
                    <p className="acc-desc">{e.desc}</p>
                    <div className="acc-metrics">
                      {e.metrics.map((m) => (
                        <div key={m.k}>
                          <div className="k">{m.k}</div>
                          <div className="v">{m.v}</div>
                        </div>
                      ))}
                    </div>
                    {e.external ? (
                      <a className="acc-cta" href={e.href} target="_blank" rel="noopener noreferrer">{e.ctaLabel}</a>
                    ) : (
                      <Link className="acc-cta" href={e.href}>{e.ctaLabel}</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
