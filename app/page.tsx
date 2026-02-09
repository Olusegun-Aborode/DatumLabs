"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
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
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-7 w-7" />
            <span className="text-base font-semibold">Datum Labs</span>
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
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-3">
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
        <section className="pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] max-w-4xl">
              Protocol Intelligence for Growth-Stage DeFi
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Real-time risk monitoring, behavioral analytics, and custom dashboards that drive measurable growth.
            </p>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span>$14K+ Revenue Captured (2 weeks)</span>
              <span className="text-border">--</span>
              <span>10+ Protocol Partners</span>
              <span className="text-border">--</span>
              <span>99.9% Uptime</span>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/datumlabss/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book Analytics Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
              >
                View Dashboards
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <section className="py-12 border-t border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Trusted by protocols building the future of DeFi
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-scroll space-x-16 items-center">
              {[1, 2, 3, 5, 6, 7].map((n) => (
                <img
                  key={`a-${n}`}
                  src={`/images/logo-${n}.png`}
                  alt="Partner logo"
                  className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
              {[8, 9, 10, 11].map((n) => (
                <img
                  key={`a-${n}`}
                  src={`/images/logo-${n}.jpg`}
                  alt="Partner logo"
                  className={`h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${n === 8 ? "rounded-full" : n === 9 || n === 11 ? "rounded" : ""}`}
                />
              ))}
              {[1, 2, 3, 5, 6, 7].map((n) => (
                <img
                  key={`b-${n}`}
                  src={`/images/logo-${n}.png`}
                  alt="Partner logo"
                  className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
              {[8, 9, 10, 11].map((n) => (
                <img
                  key={`b-${n}`}
                  src={`/images/logo-${n}.jpg`}
                  alt="Partner logo"
                  className={`h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${n === 8 ? "rounded-full" : n === 9 || n === 11 ? "rounded" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Protocols Need Intelligence -- Asymmetric numbered layout */}
        <section className="py-28 border-t border-border fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Why Growth-Stage Protocols Need Intelligence
                </h2>
              </div>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="text-sm font-medium text-muted-foreground mt-1 shrink-0">01</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Prevent Protocol Failures</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Risk monitoring prevents liquidation cascades, parameter exploits, and collateral concentration risks that can destroy TVL overnight.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-sm font-medium text-muted-foreground mt-1 shrink-0">02</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Optimize User Growth</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Behavioral analytics identify high-value users, predict churn, and reveal growth opportunities hidden in on-chain data.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-sm font-medium text-muted-foreground mt-1 shrink-0">03</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Decide Faster</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Real-time dashboards and weekly strategic insights turn data into action -- not reports that sit unread.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-sm font-medium text-muted-foreground mt-1 shrink-0">04</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Scale Without Overhead</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get a full data intelligence team without the $300K+/year cost and 6-month hiring timeline of building in-house.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions -- Editorial columns, no card borders */}
        <section id="solutions" className="py-28 border-t border-border fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20">
              End-to-End Protocol Intelligence
            </h2>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Risk Monitoring</h3>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>Health factor tracking</li>
                  <li>Liquidation cascade prevention</li>
                  <li>Collateral concentration analysis</li>
                  <li>Protocol parameter optimization</li>
                  <li>Smart contract risk scoring</li>
                </ul>
                <p className="mt-8 text-sm italic text-muted-foreground">
                  Moonwell captured $14K+ in protocol revenue in 2 weeks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Behavioral Analytics</h3>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>User cohort segmentation</li>
                  <li>Churn prediction and prevention</li>
                  <li>Whale tracking and capital flows</li>
                  <li>Cross-protocol user journeys</li>
                  <li>Sybil detection</li>
                </ul>
                <p className="mt-8 text-sm italic text-muted-foreground">
                  Identified 30% churn spike, recovered $500K+ TVL.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Custom Dashboards</h3>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>Protocol-specific metrics</li>
                  <li>Multi-chain aggregation</li>
                  <li>Governance analytics</li>
                  <li>Revenue and fee tracking</li>
                  <li>Stakeholder reporting</li>
                </ul>
                <p className="mt-8 text-sm italic text-muted-foreground">
                  Commerce Protocol tracks adoption in real-time.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
              >
                View All Capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Proof -- Case studies with detail */}
        <section id="work" className="py-28 border-t border-border fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20">
              Trusted by Protocols Building the Future
            </h2>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Moonwell OEV Dashboard</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Challenge:</span>
                    <p className="mt-1">Prove OEV upgrade captured revenue as designed.</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Solution:</span>
                    <p className="mt-1">Real-time revenue monitoring dashboard.</p>
                  </div>
                  <div>
                    <span className="font-semibold">Result:</span>
                    <p className="mt-1">$14K+ protocol revenue captured in first 2 weeks. $300K+ liquidator incentives distributed.</p>
                  </div>
                </div>
                <a
                  href="https://dune.com/jorel/moonwell-protocol-analytics-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm mt-6 text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Dashboard
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Moonwell Governance</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Challenge:</span>
                    <p className="mt-1">Unified governance across Base and Optimism.</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Solution:</span>
                    <p className="mt-1">Multi-chain governance aggregation dashboard.</p>
                  </div>
                  <div>
                    <span className="font-semibold">Result:</span>
                    <p className="mt-1">Complete visibility across all chains and proposals. Delegate tracking and analytics.</p>
                  </div>
                </div>
                <a
                  href="https://dune.com/jorel/moonwell-governance-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm mt-6 text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Dashboard
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Commerce Protocol</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Challenge:</span>
                    <p className="mt-1">Track user adoption for Coinbase x Shopify integration.</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Solution:</span>
                    <p className="mt-1">User behavior and merchant analytics.</p>
                  </div>
                  <div>
                    <span className="font-semibold">Result:</span>
                    <p className="mt-1">Real-time adoption tracking. Executive reporting for stakeholders.</p>
                  </div>
                </div>
                <a
                  href="https://dune.com/jorel/commerce-payments-protocol-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm mt-6 text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Dashboard
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* By The Numbers -- Two rows with context */}
        <section className="py-28 border-t border-border fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-16">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">$14K+</p>
                <p className="text-sm font-medium mt-2">Revenue Captured</p>
                <p className="text-sm text-muted-foreground italic mt-1">Moonwell (2 weeks)</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">$300K+</p>
                <p className="text-sm font-medium mt-2">Liquidator Incentives</p>
                <p className="text-sm text-muted-foreground italic mt-1">Distributed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">10+</p>
                <p className="text-sm font-medium mt-2">Protocol Partners</p>
                <p className="text-sm text-muted-foreground italic mt-1">Base, Optimism, Ethereum</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">2 weeks</p>
                <p className="text-sm font-medium mt-2">Average Delivery</p>
                <p className="text-sm text-muted-foreground italic mt-1">Kickoff to dashboards</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">99.9%</p>
                <p className="text-sm font-medium mt-2">Pipeline Uptime</p>
                <p className="text-sm text-muted-foreground italic mt-1">Zero downtime</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">{'<24hrs'}</p>
                <p className="text-sm font-medium mt-2">Response Time</p>
                <p className="text-sm text-muted-foreground italic mt-1">Insights and fixes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve -- With descriptions */}
        <section className="py-28 border-t border-border fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20">
              Who We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Lending Protocols</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Risk monitoring is mission-critical. Health factor tracking, liquidation analytics, collateral analysis -- the intelligence that prevents $5M+ cascades.
                </p>
                <p className="text-sm text-muted-foreground mt-6 italic">$10M-$100M TVL</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">Multi-Chain Protocols</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Managing data across chains is complex. We unify analytics into one real-time dashboard -- governance, users, TVL, everything.
                </p>
                <p className="text-sm text-muted-foreground mt-6 italic">Multi-chain deployments</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b border-foreground mb-6">High-Growth Protocols</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build data infrastructure from day one. Core dashboards, KPIs, investor reporting -- the foundation for scale.
                </p>
                <p className="text-sm text-muted-foreground mt-6 italic">Launch to $10M TVL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work With Us CTA -- NO pricing */}
        <section className="py-28 border-t border-border fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Get Started
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
                <p>Discovery call to understand your protocol's data needs.</p>
                <p>Custom proposal tailored to your TVL and growth stage.</p>
                <p>Ongoing intelligence infrastructure that scales with you.</p>
              </div>
              <a
                href="https://calendly.com/datumlabss/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book Analytics Audit
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA -- Dark background */}
        <section className="fade-in-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <div
              className="relative overflow-hidden px-8 py-20 lg:px-16 lg:py-24"
              style={{ backgroundColor: "#03072D" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/images/footer-bg.png')" }}
              />
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Free Analytics Audit
                </h2>
                <p className="text-gray-400 leading-relaxed mb-2">
                  30-minute consultation. We analyze your current data infrastructure and identify 3 immediate opportunities for competitive advantage.
                </p>
                <p className="text-gray-500 text-sm mb-8">
                  No pitch. No pressure. Just honest insights.
                </p>
                <a
                  href="https://calendly.com/datumlabss/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#03072D] px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Book Your Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="text-gray-600 text-xs mt-6">
                  Trusted by protocols on Base, Optimism, Ethereum, Arbitrum
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/images/datum-logo.png" alt="Datum Labs" className="h-6 w-6" />
                <span className="text-sm font-semibold">Datum Labs</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Protocol intelligence for growth-stage DeFi.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                    Risk Monitoring
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                    User Analytics
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dashboards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
                    Work
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://twitter.com/datumlabs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@datumlabs.xyz" className="text-muted-foreground hover:text-foreground transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 Datum Labs. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
