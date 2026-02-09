"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

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
      <nav className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="max-w-[960px] mx-auto px-6 flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-7 w-7" />
            <span className="text-base font-semibold tracking-tight">Datum Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#solutions"
              onClick={(e) => handleSmoothScroll(e, "solutions")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <a
              href="#work"
              onClick={(e) => handleSmoothScroll(e, "work")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboards
            </Link>
            <a
              href="https://calendly.com/datumlabss/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-foreground text-background px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Book Audit
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="max-w-[960px] mx-auto px-6 py-4 flex flex-col gap-3">
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, "solutions")}
                className="text-sm text-muted-foreground hover:text-foreground py-2"
              >
                Solutions
              </a>
              <a
                href="#work"
                onClick={(e) => handleSmoothScroll(e, "work")}
                className="text-sm text-muted-foreground hover:text-foreground py-2"
              >
                Work
              </a>
              <Link
                href="/case-studies"
                className="text-sm text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboards
              </Link>
              <a
                href="https://calendly.com/datumlabss/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium bg-foreground text-background px-4 py-2 text-center hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Audit
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="max-w-[960px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-[680px]">
              Protocol Intelligence for Growth-Stage DeFi
            </h1>
            <p className="mt-5 text-base text-muted-foreground max-w-[480px] leading-relaxed">
              Real-time risk monitoring, behavioral analytics, and custom dashboards that drive measurable growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/datumlabss/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book Analytics Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium hover:border-foreground transition-colors"
              >
                View Dashboards
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs text-muted-foreground tracking-wide">
              <span>$14K+ Revenue Captured (2 weeks)</span>
              <span>10+ Protocol Partners</span>
              <span>99.9% Uptime</span>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <section className="py-10 border-y border-border">
          <div className="max-w-[960px] mx-auto px-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Trusted by leading protocols
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-scroll space-x-14 items-center">
              {[1, 2, 3, 5, 6, 7].map((n) => (
                <img
                  key={`a-${n}`}
                  src={`/images/logo-${n}.png`}
                  alt="Partner logo"
                  className="h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
                />
              ))}
              {[8, 9, 10, 11].map((n) => (
                <img
                  key={`a-${n}`}
                  src={`/images/logo-${n}.jpg`}
                  alt="Partner logo"
                  className={`h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0 ${n === 8 ? "rounded-full" : n === 9 || n === 11 ? "rounded" : ""}`}
                />
              ))}
              {[1, 2, 3, 5, 6, 7].map((n) => (
                <img
                  key={`b-${n}`}
                  src={`/images/logo-${n}.png`}
                  alt="Partner logo"
                  className="h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
                />
              ))}
              {[8, 9, 10, 11].map((n) => (
                <img
                  key={`b-${n}`}
                  src={`/images/logo-${n}.jpg`}
                  alt="Partner logo"
                  className={`h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0 ${n === 8 ? "rounded-full" : n === 9 || n === 11 ? "rounded" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why -- Numbered list, tighter */}
        <section className="py-20 lg:py-24 fade-in-section">
          <div className="max-w-[960px] mx-auto px-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  Why Protocols Need Intelligence
                </h2>
              </div>
              <div className="space-y-10">
                {[
                  {
                    num: "01",
                    title: "Prevent Protocol Failures",
                    desc: "Risk monitoring prevents liquidation cascades, parameter exploits, and collateral concentration risks that can destroy TVL overnight."
                  },
                  {
                    num: "02",
                    title: "Optimize User Growth",
                    desc: "Behavioral analytics identify high-value users, predict churn, and reveal growth opportunities hidden in on-chain data."
                  },
                  {
                    num: "03",
                    title: "Decide Faster",
                    desc: "Real-time dashboards and weekly strategic insights turn data into action -- not reports that sit unread."
                  },
                  {
                    num: "04",
                    title: "Scale Without Overhead",
                    desc: "Full data intelligence team without $300K+/year cost and 6-month hiring timeline."
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="text-xs font-medium text-muted-foreground mt-1.5 shrink-0 tabular-nums">{item.num}</span>
                    <div>
                      <h3 className="text-base font-semibold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Numbers -- Compact, anchored with muted bg */}
        <section className="py-14 bg-muted fade-in-section">
          <div className="max-w-[960px] mx-auto px-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-6">
              {[
                { num: "$14K+", label: "Revenue Captured", sub: "2 weeks" },
                { num: "$300K+", label: "Incentives Dist.", sub: "Moonwell" },
                { num: "10+", label: "Partners", sub: "Multi-chain" },
                { num: "2 wks", label: "Avg. Delivery", sub: "Kickoff to live" },
                { num: "99.9%", label: "Uptime", sub: "Zero downtime" },
                { num: "<24h", label: "Response", sub: "Insights & fixes" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight">{item.num}</p>
                  <p className="text-xs font-medium mt-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="py-20 lg:py-24 fade-in-section">
          <div className="max-w-[960px] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-14">
              End-to-End Protocol Intelligence
            </h2>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
              {[
                {
                  title: "Risk Monitoring",
                  items: ["Health factor tracking", "Liquidation cascade prevention", "Collateral concentration analysis", "Protocol parameter optimization", "Smart contract risk scoring"],
                  proof: "Moonwell captured $14K+ in protocol revenue in 2 weeks."
                },
                {
                  title: "Behavioral Analytics",
                  items: ["User cohort segmentation", "Churn prediction and prevention", "Whale tracking and capital flows", "Cross-protocol user journeys", "Sybil detection"],
                  proof: "Identified 30% churn spike, recovered $500K+ TVL."
                },
                {
                  title: "Custom Dashboards",
                  items: ["Protocol-specific metrics", "Multi-chain aggregation", "Governance analytics", "Revenue and fee tracking", "Stakeholder reporting"],
                  proof: "Commerce Protocol tracks adoption in real-time."
                },
              ].map((solution) => (
                <div key={solution.title}>
                  <h3 className="text-base font-semibold pb-3 border-b border-foreground mb-5">{solution.title}</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs text-muted-foreground italic">{solution.proof}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work -- Case studies */}
        <section id="work" className="py-20 lg:py-24 border-t border-border fade-in-section">
          <div className="max-w-[960px] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-14">
              Selected Work
            </h2>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
              {[
                {
                  title: "Moonwell OEV Dashboard",
                  challenge: "Prove OEV upgrade captured revenue as designed.",
                  solution: "Real-time revenue monitoring dashboard.",
                  result: "$14K+ protocol revenue captured in first 2 weeks. $300K+ liquidator incentives distributed.",
                  link: "https://dune.com/jorel/moonwell-protocol-analytics-dashboard",
                },
                {
                  title: "Moonwell Governance",
                  challenge: "Unified governance across Base and Optimism.",
                  solution: "Multi-chain governance aggregation dashboard.",
                  result: "Complete visibility across all chains and proposals. Delegate tracking and analytics.",
                  link: "https://dune.com/jorel/moonwell-governance-dashboard",
                },
                {
                  title: "Commerce Protocol",
                  challenge: "Track user adoption for Coinbase x Shopify integration.",
                  solution: "User behavior and merchant analytics.",
                  result: "Real-time adoption tracking. Executive reporting for stakeholders.",
                  link: "https://dune.com/jorel/commerce-payments-protocol-dashboard",
                },
              ].map((study) => (
                <div key={study.title}>
                  <h3 className="text-base font-semibold pb-3 border-b border-foreground mb-5">{study.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-xs text-muted-foreground">Challenge</span>
                      <p className="mt-0.5">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Solution</span>
                      <p className="mt-0.5">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium">Result</span>
                      <p className="mt-0.5">{study.result}</p>
                    </div>
                  </div>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs mt-5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Dashboard
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
              >
                View All Dashboards
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 lg:py-24 border-t border-border fade-in-section">
          <div className="max-w-[960px] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-14">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
              {[
                {
                  title: "Lending Protocols",
                  desc: "Risk monitoring is mission-critical. Health factor tracking, liquidation analytics, collateral analysis -- the intelligence that prevents $5M+ cascades.",
                  range: "$10M-$100M TVL",
                },
                {
                  title: "Multi-Chain Protocols",
                  desc: "Managing data across chains is complex. We unify analytics into one real-time dashboard -- governance, users, TVL, everything.",
                  range: "Multi-chain deployments",
                },
                {
                  title: "High-Growth Protocols",
                  desc: "Build data infrastructure from day one. Core dashboards, KPIs, investor reporting -- the foundation for scale.",
                  range: "Launch to $10M TVL",
                },
              ].map((segment) => (
                <div key={segment.title}>
                  <h3 className="text-base font-semibold pb-3 border-b border-foreground mb-5">{segment.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{segment.desc}</p>
                  <p className="text-xs text-muted-foreground mt-5 italic">{segment.range}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA -- Single, clear */}
        <section className="fade-in-section">
          <div className="max-w-[960px] mx-auto px-6 pb-20 lg:pb-24">
            <div
              className="relative overflow-hidden px-8 py-16 lg:px-14 lg:py-20"
              style={{ backgroundColor: "#03072D" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{ backgroundImage: "url('/images/footer-bg.png')" }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Free Analytics Audit
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-8">
                  30-minute call. We analyze your data infrastructure and identify 3 immediate opportunities. No pitch, no pressure.
                </p>
                <a
                  href="https://calendly.com/datumlabss/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#03072D] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Book Your Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <img src="/images/datum-logo.png" alt="Datum Labs" className="h-5 w-5" />
                <span className="text-sm font-semibold">Datum Labs</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Protocol intelligence for growth-stage DeFi.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Solutions</h4>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Risk Monitoring</a></li>
                <li><a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">User Analytics</a></li>
                <li><a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Dashboards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Company</h4>
              <ul className="space-y-1.5 text-sm">
                <li><Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
                <li><a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Connect</h4>
              <ul className="space-y-1.5 text-sm">
                <li><a href="https://twitter.com/datumlabs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="mailto:hello@datumlabs.xyz" className="text-muted-foreground hover:text-foreground transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">&copy; 2026 Datum Labs. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
