"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ExternalLink,
  ArrowRight,
  Shield,
  BarChart3,
  CreditCard,
  AlertTriangle,
  ChevronDown,
} from "lucide-react"

const featuredDashboards = [
  {
    title: "Moonwell OEV Dashboard",
    link: "https://dune.com/jorel/moonwell-oev-dashboard",
    icon: BarChart3,
    category: "Revenue Analytics",
    summary:
      "Tracking how revenue from liquidations is captured and distributed following a governance upgrade.",
    fullContent:
      "We built the Moonwell OEV Dashboard for Moonwell Protocol following a governance upgrade that strengthened how revenue from liquidations is captured and distributed. With this dashboard, the Moonwell team can see how the updated contracts are performing: in just two weeks post-deployment, the protocol captured $14,000+ in revenue and distributed $300,000+ to liquidators as incentives \u2014 insights that would\u2019ve been extremely difficult to quantify without a custom analytics solution.",
    stats: [
      { label: "Revenue Captured", value: "$14K+" },
      { label: "Liquidator Incentives", value: "$300K+" },
      { label: "Time to Insight", value: "2 Weeks" },
    ],
  },
  {
    title: "Moonwell Governance Dashboard",
    link: "https://dune.com/jorel/moonwell-governance-dashboard",
    icon: Shield,
    category: "Governance",
    summary:
      "Aggregating governance activity across all supported chains with comprehensive proposal and voter stats.",
    fullContent:
      "Built for the governance team, the Moonwell Governance Dashboard aggregates governance activity across all supported chains. It provides comprehensive stats on both on-chain and Snapshot proposals, participation, voters, and delegates \u2014 a critical tool for teams that want to understand governance engagement at scale.",
    stats: [
      { label: "Coverage", value: "Multi-chain" },
      { label: "Proposals", value: "On-chain + Snapshot" },
      { label: "Metrics", value: "Voters & Delegates" },
    ],
  },
  {
    title: "Commerce Payments Protocol Dashboard",
    link: "https://dune.com/jorel/commerce-payments-protocol-dashboard",
    icon: CreditCard,
    category: "Payments",
    summary:
      "Tracking user behaviour, protocol performance, and adoption trends for Coinbase and Shopify's Commerce Payment Protocol.",
    fullContent:
      "When Coinbase and Shopify launched the Commerce Payment Protocol, we developed a dashboard that tracks user behaviour, protocol performance, and overall adoption trends. This gives stakeholders a clear view of how real users are interacting with a payments protocol built for mainstream commerce.",
    stats: [
      { label: "Partners", value: "Coinbase + Shopify" },
      { label: "Focus", value: "Adoption Trends" },
      { label: "Scope", value: "User Behaviour" },
    ],
  },
  {
    title: "Moonwell Risk Dashboard",
    link: "https://dune.com/jorel/moonwell-protocol-risk-dashboard",
    icon: AlertTriangle,
    category: "Risk Management",
    summary:
      "Evaluating risk across markets on Base and Optimism with individual user position health monitoring.",
    fullContent:
      "Risk management is central to any lending or borrowing protocol. Our Moonwell Risk Dashboard helps Moonwell evaluate risk across markets on Base and Optimism, and monitor the health factor of individual user positions, enabling proactive risk controls and healthier markets.",
    stats: [
      { label: "Chains", value: "Base + Optimism" },
      { label: "Focus", value: "Health Factors" },
      { label: "Impact", value: "Proactive Controls" },
    ],
  },
]

const additionalProtocols = [
  "SparkLend Protocol",
  "CoW Protocol",
  "Seamless Protocol",
  "AAVE Protocol (across multiple chains)",
  "Dexwin",
  "Incentiv L1",
  "ORBT",
  "Goldfish",
]

export default function CaseStudiesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-6 lg:px-12 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-8 w-8" />
            <span className="text-xl font-bold">Datum Labs</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/analytics" className="text-sm font-medium hover:text-primary transition-colors">
              Analytics
            </Link>
            <Link href="https://calendly.com/datumlabss/30min">
              <Button size="sm" className="relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </div>
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-xl">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/#services"
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="block text-sm font-medium text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/#about"
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/analytics"
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Analytics
              </Link>
              <Link href="https://calendly.com/datumlabss/30min" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full relative overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Our Work in <span className="text-primary">Action</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Below are examples that demonstrate both range and impact of our work. Each dashboard represents a unique intelligence architecture tailored to specific protocol needs.
            </p>
          </div>
        </section>

        {/* Featured Dashboards - Expandable */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Featured Dashboards</h2>
            <p className="text-muted-foreground mb-10">Click each case study to read the full story.</p>

            <div className="flex flex-col gap-6">
              {featuredDashboards.map((dashboard, index) => {
                const Icon = dashboard.icon
                const isExpanded = expandedIndex === index
                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl border overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                      isExpanded
                        ? "border-primary/50 shadow-xl shadow-primary/10"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    {/* Collapsed Header - Always Visible */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full text-left p-6 lg:p-8 flex items-center gap-5 cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <div
                        className={`p-3 rounded-xl border shrink-0 transition-colors ${
                          isExpanded
                            ? "bg-primary/20 border-primary/30"
                            : "bg-primary/10 border-primary/20"
                        }`}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h3 className="text-lg font-bold">{dashboard.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {dashboard.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">{dashboard.summary}</p>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expanded Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 lg:px-8 pb-8 pt-0">
                        <div className="border-t border-border/50 pt-6">
                          <p className="text-foreground leading-relaxed mb-8">
                            {dashboard.fullContent}
                          </p>

                          {/* Stats Row */}
                          <div className="flex flex-wrap gap-6 mb-8">
                            {dashboard.stats.map((stat, i) => (
                              <div
                                key={i}
                                className="p-4 rounded-xl bg-primary/5 border border-primary/10 min-w-[120px]"
                              >
                                <div className="text-lg font-bold text-primary">{stat.value}</div>
                                <div className="text-xs text-muted-foreground">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* View on Dune Link */}
                          <a
                            href={dashboard.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                          >
                            <span>View Dashboard on Dune</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Protocols */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">And More</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                Beyond Moonwell, our team has built dashboards for:
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Each solution is tailored to the protocol{"'"}s governance, economic, and risk metrics, giving teams the quantitative edge they need to optimize outcomes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {additionalProtocols.map((protocol, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium">{protocol}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">...amongst others, check out the Analytics section for more data       </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-12 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 p-8 lg:p-16">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Ready for Your Custom Dashboard?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {"Let's build an intelligence solution tailored to your protocol's unique needs."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://calendly.com/datumlabss/30min">
                    <Button size="lg">
                      Start a Conversation
                    </Button>
                  </Link>
                  <Link href="/analytics">
                    <Button size="lg" variant="outline" className="bg-transparent">
                      Explore Analytics
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-6 lg:px-12 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-6 w-6" />
            <span className="font-bold">Datum Labs</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Datum Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
