"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ExternalLink, ArrowRight, Shield, BarChart3, CreditCard, AlertTriangle } from "lucide-react"

const featuredDashboards = [
  {
    title: "Moonwell OEV Dashboard",
    link: "https://dune.com/jorel/moonwell-oev-dashboard",
    icon: BarChart3,
    category: "Revenue Analytics",
    description:
      "Built for Moonwell Protocol following a governance upgrade that strengthened how revenue from liquidations is captured and distributed. In just two weeks post-deployment, the protocol captured $14,000+ in revenue and distributed $300,000+ to liquidators as incentives.",
    stats: [
      { label: "Revenue Captured", value: "$14K+" },
      { label: "Liquidator Incentives", value: "$300K+" },
    ],
  },
  {
    title: "Moonwell Governance Dashboard",
    link: "https://dune.com/jorel/moonwell-governance-dashboard",
    icon: Shield,
    category: "Governance",
    description:
      "Built for the governance team, this dashboard aggregates governance activity across all supported chains. It provides comprehensive stats on both on-chain and Snapshot proposals, participation, voters, and delegates.",
    stats: [
      { label: "Multi-chain", value: "Yes" },
      { label: "Coverage", value: "On-chain + Snapshot" },
    ],
  },
  {
    title: "Commerce Payments Protocol Dashboard",
    link: "https://dune.com/jorel/commerce-payments-protocol-dashboard",
    icon: CreditCard,
    category: "Payments",
    description:
      "When Coinbase and Shopify launched the Commerce Payment Protocol, we developed a dashboard that tracks user behaviour, protocol performance, and overall adoption trends for mainstream commerce.",
    stats: [
      { label: "Partners", value: "Coinbase + Shopify" },
      { label: "Focus", value: "Adoption Trends" },
    ],
  },
  {
    title: "Moonwell Risk Dashboard",
    link: "https://dune.com/jorel/moonwell-protocol-risk-dashboard",
    icon: AlertTriangle,
    category: "Risk Management",
    description:
      "Helps Moonwell evaluate risk across markets on Base and Optimism, and monitor the health factor of individual user positions, enabling proactive risk controls and healthier markets.",
    stats: [
      { label: "Chains", value: "Base + Optimism" },
      { label: "Focus", value: "Health Factors" },
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

        {/* Featured Dashboards */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Featured Dashboards</h2>
            <p className="text-muted-foreground mb-10">Deep-dive case studies showcasing quantifiable impact.</p>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredDashboards.map((dashboard, index) => {
                const Icon = dashboard.icon
                return (
                  <a
                    key={index}
                    href={dashboard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                  >
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-5">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {dashboard.category}
                          </Badge>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {dashboard.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {dashboard.description}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-6 pt-4 border-t border-border/50">
                        {dashboard.stats.map((stat, i) => (
                          <div key={i}>
                            <div className="text-lg font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View on Dune</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
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
              <p className="text-sm text-muted-foreground mt-6 italic">...amongst others</p>
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
