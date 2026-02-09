"use client"

import { useEffect } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "MoonWell Governance Dashboard",
    description: "Comprehensive governance analytics tracking proposals, voting patterns, and delegate activity for the Moonwell protocol.",
    category: "Governance",
    link: "https://dune.com/jorel/moonwell-governance-dashboard",
  },
  {
    title: "Morpho Protocol Analysis",
    description: "Deep-dive analytics on Morpho's lending markets, utilization rates, and protocol health metrics.",
    category: "DeFi Lending",
    link: "https://dune.com/jorel/morpho-protocol",
  },
  {
    title: "Seamless Protocol Analysis",
    description: "Real-time monitoring and analysis of Seamless Protocol's DeFi ecosystem performance.",
    category: "DeFi",
    link: "https://dune.com/jorel/seamless-protocol-on-base",
  },
  {
    title: "Venus Protocol Analytics",
    description: "Full-stack analytics dashboard monitoring Venus Protocol's lending markets and liquidation events.",
    category: "DeFi Lending",
    link: "https://dune.com/jorel/venus-protocol",
  },
  {
    title: "Level Protocol Dashboard",
    description: "Comprehensive tracking of LVL/USD metrics, staking analytics, and protocol revenue.",
    category: "DeFi",
    link: "https://dune.com/0nchainlabs/level-lvlusd-dashboard",
  },
  {
    title: "Falcon Finance Analytics",
    description: "Real-time analysis of Falcon Finance USDF stablecoin metrics and protocol health.",
    category: "Stablecoin",
    link: "https://dune.com/0nchainlabs/falcon-finance-usdf",
  },
  {
    title: "Moonwell Protocol Analytics",
    description: "End-to-end protocol analytics covering lending, borrowing, and market dynamics.",
    category: "DeFi Lending",
    link: "https://dune.com/jorel/moonwell-protocol-analytics-dashboard",
  },
  {
    title: "CoW Protocol Analysis",
    description: "Detailed analytics on CoW Protocol's batch auctions, solver performance, and trade execution.",
    category: "DEX",
    link: "https://dune.com/jorel/cow-protocol-analysis",
  },
  {
    title: "Commerce Payment Protocol",
    description: "Payment flow analytics and merchant adoption metrics for Commerce Protocol.",
    category: "Payments",
    link: "https://dune.com/jorel/commerce-payments-protocol-dashboard",
  },
  {
    title: "Sparklend Dashboard",
    description: "Comprehensive lending analytics for Sparklend including TVL, rates, and user activity.",
    category: "DeFi Lending",
    link: "https://dune.com/jorel/sparklend",
  },
]

export default function CaseStudiesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        }
      },
      { threshold: 0.1 },
    )
    const sections = document.querySelectorAll(".fade-in-section")
    for (const section of sections) {
      observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-7 w-7" />
            <span className="text-base font-semibold">Datum Labs</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-24 pb-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Our Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
              Case Studies & Live Dashboards
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Custom-built analytics powering decisions for leading DeFi protocols. Each dashboard is a unique intelligence architecture tailored to specific protocol needs.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-20 border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tight">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Live Dashboards</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tight">$2B+</p>
                <p className="text-sm text-muted-foreground mt-1">TVL Monitored</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tight">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Chains Covered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tight">99.9%</p>
                <p className="text-sm text-muted-foreground mt-1">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="space-y-0">
              {caseStudies.map((study, index) => (
                <a
                  key={study.title}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-border hover:pl-4 transition-all duration-200"
                >
                  <div className="flex items-start gap-6 flex-1">
                    <span className="text-sm text-muted-foreground font-medium mt-1 shrink-0 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 max-w-xl leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 md:shrink-0 pl-12 md:pl-0">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{study.category}</span>
                    <span className="text-xs text-muted-foreground">Dune</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6 pb-20">
            <div
              className="relative overflow-hidden px-8 py-20 lg:px-16"
              style={{ backgroundColor: "#03072D" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/images/footer-bg.png')" }}
              />
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready for Your Custom Dashboard?
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {"Let's build an intelligence solution tailored to your protocol's unique needs."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/datumlabss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#03072D] px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/#solutions"
                    className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:border-white/40 transition-colors"
                  >
                    Explore Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-6 w-6" />
            <span className="text-sm font-semibold">Datum Labs</span>
          </div>
          <p className="text-xs text-muted-foreground">&copy; 2026 Datum Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
