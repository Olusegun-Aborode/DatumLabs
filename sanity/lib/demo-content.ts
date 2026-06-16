// Local-only sample content for previewing the Resources UI before real
// content is published. Returned ONLY when DEMO_CONTENT=1 (set in .env.local,
// never in Vercel) and the live dataset is empty. Never ships demo data to prod.
export const demoEnabled = process.env.DEMO_CONTENT === "1"

export type ResourceItem = {
  _type: "post" | "report"
  _id: string
  title: string
  slug: string
  kind: "Articles" | "Reports" | "Case Study" | "Research"
  extra?: string
  publishedAt: string
  image?: unknown
  subtitle?: string
}

export const demoResources: ResourceItem[] = [
  {
    _type: "post",
    _id: "demo-warroom",
    title: "Inside the War Room: How Datum Labs Responds",
    slug: "demo-war-room",
    kind: "Case Study",
    publishedAt: "2026-06-10T00:00:00Z",
    subtitle: "When DeFi protocols are exploited",
  },
  {
    _type: "report",
    _id: "demo-eth",
    title: "ETH Yield Term Vault",
    slug: "demo-eth-yield",
    kind: "Reports",
    extra: "Jun 2026",
    publishedAt: "2026-06-03T00:00:00Z",
    subtitle: "Predictable ETH lending",
  },
  {
    _type: "report",
    _id: "demo-rwa",
    title: "USDC Prime RWA Vault",
    slug: "demo-usdc-rwa",
    kind: "Reports",
    extra: "May 2026",
    publishedAt: "2026-05-28T00:00:00Z",
    subtitle: "Real-world collateral, curated onchain",
  },
  {
    _type: "post",
    _id: "demo-curators",
    title: "How Curators Allocate Across Vaults",
    slug: "demo-curators",
    kind: "Research",
    publishedAt: "2026-05-20T00:00:00Z",
    subtitle: "A look inside Morpho curation strategy",
  },
  {
    _type: "post",
    _id: "demo-lending",
    title: "DeFi Lending: State of the Market",
    slug: "demo-lending-state",
    kind: "Articles",
    publishedAt: "2026-05-12T00:00:00Z",
    subtitle: "Cross-protocol rates, utilization, and risk",
  },
  {
    _type: "post",
    _id: "demo-liq",
    title: "The Liquidator Economy, Explained",
    slug: "demo-liquidators",
    kind: "Articles",
    publishedAt: "2026-05-04T00:00:00Z",
    subtitle: "Who keeps lending markets solvent, and how they profit",
  },
]

// A full report detail (body + pdf) for previewing the lead-gate locally.
// Served only when demoEnabled and the slug starts with "demo-".
function block(key: string, text: string, style = "normal") {
  return { _type: "block", _key: key, style, markDefs: [], children: [{ _type: "span", _key: key + "s", text, marks: [] }] }
}

export const demoReportDetail = {
  title: "USDC Prime RWA Vault",
  slug: "demo-usdc-rwa",
  period: "May 2026",
  summary:
    "Real-world collateral, curated onchain. This report breaks down the USDC Prime RWA vault — its collateral mix, yield sources, risk controls, and how it compares to on-chain money markets.",
  publishedAt: "2026-05-28T00:00:00Z",
  _updatedAt: "2026-05-28T00:00:00Z",
  pdf: { url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", originalFilename: "usdc-prime-rwa.pdf", size: 2_400_000 },
  body: [
    block("h1", "Key findings", "h2"),
    block("p1", "The vault holds a blend of tokenized T-bills and prime money-market collateral, targeting a stable real yield while keeping redemption liquidity high."),
    block("p2", "Curators rebalance weekly; the report details allocation bands, oracle setup, and the liquidation waterfall in stress scenarios."),
    block("h2", "Collateral & yield", "h2"),
    block("p3", "Yield is sourced primarily from short-duration sovereign instruments, with a smaller sleeve in over-collateralized on-chain lending for flexibility."),
    block("p4", "We model three rate environments and show how net APY to depositors holds up across each, net of curator and protocol fees."),
  ],
}
