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
    n: "# 002", cname: "RWA Terminal", logo: "/images/datum-logo.png", cat: "RWA · Aave Horizon",
    title: "Tokenized real-world assets, instrumented onchain.",
    chipK: "Focus", chipV: "Tokenized RWA",
    desc: "A live terminal for tokenized real-world assets across Aave Horizon and curated RWA markets, collateral, flows, and composability in one surface.",
    metrics: [{ k: "Focus", v: "Tokenized RWA" }, { k: "Coverage", v: "Aave Horizon" }, { k: "Status", v: "Live" }],
    ctaLabel: "Open terminal →", href: "/rwa-terminal",
  },
  {
    n: "# 003", cname: "Lending Terminal", logo: "/images/datum-logo.png", cat: "Lending · Ethereum",
    title: "Cross-protocol Ethereum lending, one surface.",
    chipK: "Chain", chipV: "Ethereum",
    desc: "Cross-protocol lending intelligence on Ethereum, rates, utilization, liquidations, and position health across the major markets, instrumented end to end.",
    metrics: [{ k: "Chain", v: "Ethereum" }, { k: "Scope", v: "Cross-protocol" }, { k: "Status", v: "Live" }],
    ctaLabel: "Open terminal →", href: "/lending-terminal",
  },
  {
    n: "# 004", cname: "Lending Terminal", logo: "/images/datum-logo.png", cat: "Lending · Sui",
    title: "Sui-native lending across every market.",
    chipK: "Chain", chipV: "Sui",
    desc: "Sui lending intelligence across NAVI, Suilend, Scallop and more, one cross-protocol surface for markets, utilization, and position health.",
    metrics: [{ k: "Chain", v: "Sui" }, { k: "Scope", v: "Cross-protocol" }, { k: "Status", v: "Live" }],
    ctaLabel: "Open terminal →", href: "/lending-terminal-sui",
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
