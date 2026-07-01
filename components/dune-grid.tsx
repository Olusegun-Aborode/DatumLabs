"use client"

import { useState } from "react"

type Dune = { name: string; tag: string; desc: string; scope: string; href: string; cat: string; index?: boolean }

const CARDS: Dune[] = [
  { name: "Moonwell OEV Dashboard", tag: "Revenue / OEV", desc: "Liquidation revenue capture and distribution following the governance upgrade.", scope: "MOONWELL · BASE + OP", href: "https://dune.com/jorel/moonwell-oev-dashboard", cat: "Risk" },
  { name: "Moonwell Governance", tag: "Governance", desc: "Proposals, voting patterns, delegate activity across all supported chains.", scope: "MOONWELL · MULTI-CHAIN", href: "https://dune.com/jorel/moonwell-governance-dashboard", cat: "Governance" },
  { name: "Moonwell Risk", tag: "Risk", desc: "Market risk on Base + Optimism. Health factor monitoring at the position level.", scope: "MOONWELL · BASE + OP", href: "https://dune.com/jorel/moonwell-protocol-risk-dashboard", cat: "Risk" },
  { name: "Moonwell Protocol Analytics", tag: "DeFi · Lending", desc: "End-to-end lending, borrowing, and market dynamics across the full protocol.", scope: "MOONWELL", href: "https://dune.com/jorel/moonwell-protocol-analytics-dashboard", cat: "Lending" },
  { name: "Morpho Protocol Analysis", tag: "DeFi · Lending", desc: "Lending markets, utilization rates, and protocol health metrics for Morpho.", scope: "MORPHO", href: "https://dune.com/jorel/morpho-protocol", cat: "Lending" },
  { name: "Seamless Protocol", tag: "DeFi · Base", desc: "Real-time monitoring of Seamless Protocol's DeFi ecosystem performance on Base.", scope: "SEAMLESS · BASE", href: "https://dune.com/jorel/seamless-protocol-on-base", cat: "Lending" },
  { name: "Venus Protocol Analytics", tag: "DeFi · Lending", desc: "Full-stack analytics monitoring lending markets and liquidation events on BNB Chain.", scope: "VENUS · BNB", href: "https://dune.com/jorel/venus-protocol", cat: "Lending" },
  { name: "Level Protocol", tag: "Staking", desc: "LVL/USD metrics, staking analytics, and protocol revenue tracking.", scope: "LEVEL", href: "https://dune.com/0nchainlabs/level-lvlusd-dashboard", cat: "Stablecoin" },
  { name: "Falcon Finance", tag: "Stablecoin", desc: "USDF stablecoin metrics and protocol health analytics.", scope: "FALCON · USDF", href: "https://dune.com/0nchainlabs/falcon-finance-usdf", cat: "Stablecoin" },
  { name: "CoW Protocol", tag: "DEX · Batch", desc: "Batch auctions, solver performance, trade execution, MEV recapture.", scope: "COW", href: "https://dune.com/jorel/cow-protocol-analysis", cat: "DEX" },
  { name: "Commerce Payments", tag: "Payments", desc: "Payment flow analytics and merchant adoption, Coinbase × Shopify protocol.", scope: "CB × SHOPIFY", href: "https://dune.com/jorel/commerce-payments-protocol-dashboard", cat: "Payments" },
  { name: "All Datum dashboards", tag: "Wizard Index", desc: "Browse the complete Dune wizard profile, every public dashboard authored by the team.", scope: "OPEN PROFILE", href: "https://dune.com/jorel", cat: "index", index: true },
]

const FILTERS = ["All", "Lending", "DEX", "Stablecoin", "Governance", "Payments", "Risk"]

export function DuneGrid() {
  const [active, setActive] = useState("All")
  const shown = CARDS.filter((c) => active === "All" || c.cat === active)

  return (
    <>
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button key={f} className={`filter-chip${active === f ? " active" : ""}`} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="dune-grid" style={{ marginTop: 24 }}>
        {shown.map((c) => (
          <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className="dune-card" data-reveal>
            <div className="row1">
              <span className="flag">{c.tag}</span>
              <span>● Live</span>
            </div>
            <h3>{c.name}</h3>
            <p>{c.desc}</p>
            <div className="arrow"><span>{c.scope}</span><span>Dune ↗</span></div>
          </a>
        ))}
      </div>
    </>
  )
}
