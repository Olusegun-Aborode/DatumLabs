"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Database, TrendingUp, Shield, Coins, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "MoonWell Governance Dashboard",
    description:
      "Comprehensive governance analytics tracking proposals, voting patterns, and delegate activity for the Moonwell protocol.",
    category: "Governance",
    platform: "Dune",
    link: "https://dune.com/jorel/moonwell-governance-dashboard",
    icon: Shield,
  },
  {
    title: "Morpho Protocol Analysis",
    description: "Deep-dive analytics on Morpho's lending markets, utilization rates, and protocol health metrics.",
    category: "DeFi Lending",
    platform: "Dune",
    link: "https://dune.com/jorel/morpho-protocol",
    icon: TrendingUp,
  },
  {
    title: "Seamless Protocol Analysis",
    description: "Real-time monitoring and analysis of Seamless Protocol's DeFi ecosystem performance.",
    category: "DeFi",
    platform: "Dune",
    link: "https://dune.com/jorel/seamless-protocol-on-base",
    icon: Database,
  },
  {
    title: "Venus Protocol Analytics",
    description: "Full-stack analytics dashboard monitoring Venus Protocol's lending markets and liquidation events.",
    category: "DeFi Lending",
    platform: "Dune",
    link: "https://dune.com/jorel/venus-protocol",
    icon: Coins,
  },
  {
    title: "Level Protocol Dashboard",
    description: "Comprehensive tracking of LVL/USD metrics, staking analytics, and protocol revenue.",
    category: "DeFi",
    platform: "Dune",
    link: "https://dune.com/0nchainlabs/level-lvlusd-dashboard",
    icon: TrendingUp,
  },
  {
    title: "Falcon Finance Analytics",
    description: "Real-time analysis of Falcon Finance USDF stablecoin metrics and protocol health.",
    category: "Stablecoin",
    platform: "Dune",
    link: "https://dune.com/0nchainlabs/falcon-finance-usdf",
    icon: Shield,
  },
  {
    title: "Moonwell Protocol Analytics",
    description: "End-to-end protocol analytics covering lending, borrowing, and market dynamics.",
    category: "DeFi Lending",
    platform: "Dune",
    link: "https://dune.com/jorel/moonwell-protocol-analytics-dashboard",
    icon: Database,
  },
  {
    title: "CoW Protocol Analysis",
    description: "Detailed analytics on CoW Protocol's batch auctions, solver performance, and trade execution.",
    category: "DEX",
    platform: "Dune",
    link: "https://dune.com/jorel/cow-protocol-analysis",
    icon: TrendingUp,
  },
  {
    title: "Commerce Payment Protocol",
    description: "Payment flow analytics and merchant adoption metrics for Commerce Protocol.",
    category: "Payments",
    platform: "Dune",
    link: "https://dune.com/jorel/commerce-payments-protocol-dashboard",
    icon: Coins,
  },
  {
    title: "Sparklend Dashboard",
    description: "Comprehensive lending analytics for Sparklend including TVL, rates, and user activity.",
    category: "DeFi Lending",
    platform: "Dune",
    link: "https://dune.com/jorel/sparklend",
    icon: Database,
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-6 lg:px-12 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-8 w-8" />
            <span className="text-xl font-bold">Datum Labs</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Case Studies & <span className="text-primary">Live Dashboards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Custom-built analytics powering decisions for leading DeFi protocols. Each dashboard is a unique intelligence architecture tailored to specific protocol needs.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Live Dashboards</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-1">$2B+</div>
              <div className="text-sm text-muted-foreground">TVL Monitored</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Chains Covered</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <a
                  key={index}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{
                      backgroundImage: `url('/images/footer-bg.png')`,
                    }}
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-[#03072D]/60" />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="text-xs bg-white/20 text-white border-white/30 hover:bg-white/30">
                          {study.platform}
                        </Badge>
                        <ArrowUpRight className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <Badge className="mb-3 text-xs bg-primary/30 text-white border-primary/50">{study.category}</Badge>

                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed">{study.description}</p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Dashboard</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-[#0a0a1a] p-8 lg:p-16 border border-primary/20">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready for Your Custom Dashboard?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                {"Let's build an intelligence solution tailored to your protocol's unique needs."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Start a Conversation
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6 lg:px-12 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-6 w-6" />
            <span className="font-bold">Datum Labs</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Datum Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
