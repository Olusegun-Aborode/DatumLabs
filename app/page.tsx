"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-6 lg:px-12 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-8 w-8" />
            <span className="text-base font-semibold tracking-tight">Datum Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <Link href="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="https://calendly.com/datumlabss/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Audit
              </Button>
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
            <div className="px-6 py-4 flex flex-col gap-3">
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="text-sm font-medium hover:text-primary py-2"
              >
                Services
              </a>
              <Link
                href="/case-studies"
                className="text-sm font-medium hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="text-sm font-medium hover:text-primary py-2"
              >
                About
              </a>
              <a
                href="https://calendly.com/datumlabss/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Audit
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-balance">
                  Protocol Intelligence for Growth-Stage DeFi
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Real-time risk monitoring, behavioral analytics, and custom dashboards that drive measurable growth.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                      Book Analytics Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline" className="bg-transparent w-full sm:w-auto">
                      View Dashboards
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
                  <span>$14K+ Captured (2 weeks)</span>
                  <span>10+ Protocol Partners</span>
                  <span>2-Week Delivery</span>
                </div>
              </div>
              {/* Stats panel */}
              <div className="hidden lg:block">
                <div className="bg-muted rounded-xl p-8 space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground font-medium">Live Data</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-bold text-primary">$14K+</p>
                      <p className="text-xs text-muted-foreground mt-1">Revenue Captured</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">{'<24h'}</p>
                      <p className="text-xs text-muted-foreground mt-1">Response Time</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">99.9%</p>
                      <p className="text-xs text-muted-foreground mt-1">Pipeline Uptime</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">10+</p>
                      <p className="text-xs text-muted-foreground mt-1">Protocol Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By - Logo Carousel */}
        <section className="py-8 border-y border-border">
          <div className="px-6 lg:px-12 mb-5">
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

        {/* Why Protocols Need Intelligence */}
        <section className="py-20 lg:py-24 px-6 lg:px-12 fade-in-section">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Why Growth-Stage Protocols Need Intelligence
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Prevent Protocol Failures",
                    desc: "Risk monitoring prevents liquidation cascades, parameter exploits, and collateral concentration risks that can destroy TVL overnight.",
                  },
                  {
                    title: "Optimize User Growth",
                    desc: "Behavioral analytics identify high-value users, predict churn, and reveal growth opportunities hidden in on-chain data.",
                  },
                  {
                    title: "Make Better Decisions Faster",
                    desc: "Real-time dashboards and weekly strategic insights turn data into action -- not reports that sit unread.",
                  },
                  {
                    title: "Scale Without Overhead",
                    desc: "Get a full data intelligence team without the $300K+/year cost and 6-month hiring timeline of building in-house.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                    <span className="text-xs font-mono text-primary mb-3 block">0{i + 1}</span>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Metrics Band */}
        <section className="py-10 bg-muted border-y border-border fade-in-section">
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted to-transparent z-10" />
            <div className="flex animate-scroll-metrics space-x-16 items-center">
              {[
                { num: "$14K+", label: "Revenue Captured (2 weeks)" },
                { num: "$300K+", label: "Liquidator Incentives Distributed" },
                { num: "10+", label: "Protocol Partners" },
                { num: "2 wks", label: "Average Delivery" },
                { num: "99.9%", label: "Uptime" },
                { num: "<24h", label: "Response Time" },
                { num: "$14K+", label: "Revenue Captured (2 weeks)" },
                { num: "$300K+", label: "Liquidator Incentives Distributed" },
                { num: "10+", label: "Protocol Partners" },
                { num: "2 wks", label: "Average Delivery" },
                { num: "99.9%", label: "Uptime" },
                { num: "<24h", label: "Response Time" },
              ].map((item, idx) => (
                <div key={`${item.label}-${idx}`} className="shrink-0 flex items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-primary whitespace-nowrap">{item.num}</span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* End-to-End Protocol Intelligence */}
        <section id="services" className="py-20 lg:py-24 px-6 lg:px-12 fade-in-section">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End Protocol Intelligence</h2>
            <p className="text-muted-foreground mb-14 max-w-2xl">Three pillars that cover every angle of protocol data.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Risk Monitoring",
                  items: ["Health factor tracking", "Liquidation cascade prevention", "Collateral concentration analysis", "Parameter optimization", "Contract risk scoring"],
                  impact: "Moonwell captured $14K+ revenue in 2 weeks.",
                },
                {
                  title: "Behavioral Analytics",
                  items: ["User cohort segmentation", "Churn prediction and prevention", "Whale tracking and capital flows", "Cross-protocol user journeys", "Sybil detection"],
                  impact: "Identified 30% churn spike, recovered $500K+ TVL.",
                },
                {
                  title: "Custom Dashboards",
                  items: ["Protocol-specific metrics", "Multi-chain aggregation", "Governance analytics", "Revenue and fee tracking", "Stakeholder reporting"],
                  impact: "Commerce Protocol (Coinbase x Shopify) tracks adoption in real-time.",
                },
              ].map((solution) => (
                <div key={solution.title} className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-semibold mb-5">{solution.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {solution.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1 shrink-0">{">"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Impact:</span> {solution.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 lg:py-24 px-6 lg:px-12 bg-muted fade-in-section">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engagement Models</h2>
            <p className="text-muted-foreground mb-14 max-w-2xl">Choose the intelligence level that matches your protocol's growth stage.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  tier: "Growth Intel",
                  range: "$5M - $25M TVL",
                  desc: "Weekly performance analysis with actionable recommendations. Continuous dashboard maintenance. Bi-weekly strategic sessions. ROI measurement on major initiatives.",
                  features: ["Weekly performance analysis", "Dashboard maintenance", "Bi-weekly strategic sessions", "ROI measurement"],
                },
                {
                  tier: "Strategic Intel",
                  range: "$25M - $75M TVL",
                  popular: true,
                  desc: "Real-time monitoring with automated alerts. Complete initiative tracking. Monthly competitor analysis. Embedded analyst in daily operations. Data-driven content production.",
                  features: ["Real-time monitoring & alerts", "Initiative tracking", "Competitor analysis", "Embedded analyst", "Content production"],
                },
                {
                  tier: "Full Stack Intel",
                  range: "$75M - $150M TVL",
                  desc: "Custom smart contract development (20hrs/mo). Data-informed feature development. Purpose-built analytics systems. Documentation & governance proposals. Team training.",
                  features: ["Smart contract development", "Feature development", "Custom analytics systems", "Technical documentation", "Team training"],
                },
              ].map((plan) => (
                <div key={plan.tier} className={`relative border rounded-lg p-6 bg-background ${plan.popular ? "border-primary ring-1 ring-primary" : "border-border"} hover:border-primary/50 transition-colors`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-1">{plan.tier}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{plan.range}</p>
                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0">{">"}</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-transparent border border-border hover:border-primary/50"}`}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof - Case Studies */}
        <section className="py-20 lg:py-24 px-6 lg:px-12 fade-in-section">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-14">Trusted by Protocols Building the Future</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Moonwell Protocol",
                  challenge: "Prove OEV upgrade captured revenue",
                  solution: "Real-time revenue monitoring dashboard",
                  result: "$14K+ captured (2 weeks), $300K+ incentives distributed",
                  link: "https://dune.com/jorel/moonwell-protocol-analytics-dashboard",
                },
                {
                  name: "Moonwell Governance",
                  challenge: "Unified governance across Base + Optimism",
                  solution: "Multi-chain governance aggregation",
                  result: "Complete visibility, delegate tracking, proposal analytics",
                  link: "https://dune.com/jorel/moonwell-governance-dashboard",
                },
                {
                  name: "Commerce Protocol",
                  challenge: "Track user adoption for Coinbase x Shopify integration",
                  solution: "User behavior and merchant analytics",
                  result: "Real-time adoption tracking, executive reporting",
                  link: "https://dune.com/jorel/commerce-payments-protocol-dashboard",
                },
              ].map((study) => (
                <div key={study.name} className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-semibold mb-4">{study.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Challenge</span>
                      <p className="mt-1">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Solution</span>
                      <p className="mt-1">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">Result</span>
                      <p className="mt-1 font-medium">{study.result}</p>
                    </div>
                  </div>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary mt-5 hover:underline"
                  >
                    View Dashboard <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                View All Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section id="about" className="py-20 lg:py-24 px-6 lg:px-12 bg-muted fade-in-section">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-14">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lending Protocols",
                  desc: "Risk monitoring is mission-critical. Health factors, liquidation analytics, collateral analysis -- the intelligence that prevents $5M+ cascades.",
                  range: "$10M - $100M TVL",
                },
                {
                  title: "Multi-Chain Protocols",
                  desc: "Unified analytics across chains. One dashboard for Base, Optimism, Ethereum, Arbitrum -- complete visibility.",
                  range: "Multi-chain deployments",
                },
                {
                  title: "High-Growth Protocols",
                  desc: "Build data infrastructure from launch. Core dashboards, KPIs, investor reporting -- foundation for scale.",
                  range: "Launch to $10M TVL",
                },
              ].map((segment) => (
                <div key={segment.title} className="border border-border rounded-lg p-6 bg-background hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{segment.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{segment.desc}</p>
                  <span className="text-xs text-primary font-medium">{segment.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Datum Labs */}
        <section className="py-20 lg:py-24 px-6 lg:px-12 fade-in-section">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-14">Why Datum Labs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Built for Growth-Stage",
                  desc: "Enterprise platforms serve $100M+ protocols. We specialize in $5M-$100M TVL -- fast deployment, iterative solutions.",
                },
                {
                  title: "Speed Wins",
                  desc: "2-week delivery. Weekly insights. Real-time monitoring. When you move fast, your intelligence keeps pace.",
                },
                {
                  title: "Full-Stack Intelligence",
                  desc: "Risk monitoring + behavioral analytics + smart contract development + strategic insights + technical writing.",
                },
                {
                  title: "Sustainable Partnership",
                  desc: "Revenue funds product innovation (OnchainSuite launching Q2 2026). Long-term partnership, not project-based consulting.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-12 pb-20 lg:pb-24 fade-in-section">
          <div className="w-full max-w-7xl mx-auto">
            <div
              className="relative overflow-hidden rounded-xl px-8 py-16 lg:px-16 lg:py-20"
              style={{ backgroundColor: "#03072D" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{ backgroundImage: "url('/images/footer-bg.png')" }}
              />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Free Analytics Audit
                  </h2>
                  <p className="text-base text-gray-400 leading-relaxed max-w-md">
                    30-minute call. We analyze your data infrastructure and identify 3 immediate opportunities for competitive advantage.
                  </p>
                </div>
                <div className="lg:text-right">
                  <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-white text-[#03072D] hover:bg-white/90">
                      Book Your Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <p className="mt-4 text-xs text-gray-500">Trusted by protocols on Base, Optimism, Ethereum, Arbitrum</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="w-full px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <img src="/images/datum-logo.png" alt="Datum Labs" className="h-6 w-6" />
                  <span className="text-sm font-semibold">Datum Labs</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Protocol intelligence for growth-stage DeFi.
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Solutions</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Risk Monitoring</a></li>
                  <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">User Analytics</a></li>
                  <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Dashboards</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
                  <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://twitter.com/datumlabs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                  <li><a href="mailto:hello@datumlabs.xyz" className="text-muted-foreground hover:text-foreground transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-xs text-muted-foreground">&copy; 2026 Datum Labs. All rights reserved.</p>
              <div className="flex gap-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
