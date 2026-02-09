"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Mail,
  Menu,
  X,
  Shield,
  Users,
  Zap,
  TrendingUp,
  BarChart3,
  Layers,
  Code,
  Clock,
  Target,
  Building2,
} from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true)
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      {target}{suffix}
    </div>
  )
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".fade-in-section")
    sections.forEach((section) => {
      section.classList.add("translate-y-8", "transition-all", "duration-700", "ease-out")
      observerRef.current?.observe(section)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background */}
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
          <div className="flex items-center space-x-2">
            <img src="/images/datum-logo.png" alt="Datum Labs" className="h-8 w-8" />
            <span className="text-xl font-bold">Datum Labs</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#what-we-deliver"
              onClick={(e) => handleSmoothScroll(e, "what-we-deliver")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <Link href="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <a
              href="#why-datum"
              onClick={(e) => handleSmoothScroll(e, "why-datum")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="relative overflow-hidden group">
                <span className="relative z-10">Book Audit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>
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
              <a
                href="#what-we-deliver"
                onClick={(e) => handleSmoothScroll(e, "what-we-deliver")}
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Solutions
              </a>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Pricing
              </a>
              <Link
                href="/case-studies"
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <a
                href="#why-datum"
                onClick={(e) => handleSmoothScroll(e, "why-datum")}
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
              >
                About
              </a>
              <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full relative overflow-hidden group">
                  <span className="relative z-10">Book Audit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative">
        <div className="w-full max-w-none">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance mb-6">
              Protocol Intelligence for Growth-Stage DeFi
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-4">
              Real-time risk monitoring, behavioral analytics, and custom dashboards that drive measurable growth. Built for protocols scaling from $5M to $100M TVL.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-2 font-semibold text-primary">
                <span className="w-2 h-2 bg-primary rounded-full" />
                $14K+ Captured (2 weeks)
              </span>
              <span className="text-border">|</span>
              <span>10+ Protocol Partners</span>
              <span className="text-border">|</span>
              <span>2-Week Delivery</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8 relative group overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Book Analytics Audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
                </Button>
              </a>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-transparent border-primary/50 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  View Dashboards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Trusted By */}
          <div className="mt-20 lg:mt-24">
            <p className="text-sm text-muted-foreground mb-6">Trusted By Leading Protocols</p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll space-x-12 items-center">
                {[1, 2, 3, 5, 6, 7].map((n) => (
                  <img key={`a-${n}`} src={`/images/logo-${n}.png`} alt="Partner logo" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                ))}
                {[8, 9, 10, 11].map((n) => (
                  <img key={`a-${n}`} src={`/images/logo-${n}.jpg`} alt="Partner logo" className={`h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity ${n === 8 ? "rounded-full" : n === 9 || n === 11 ? "rounded-lg" : ""}`} />
                ))}
                {[1, 2, 3, 5, 6, 7].map((n) => (
                  <img key={`b-${n}`} src={`/images/logo-${n}.png`} alt="Partner logo" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                ))}
                {[8, 9, 10, 11].map((n) => (
                  <img key={`b-${n}`} src={`/images/logo-${n}.jpg`} alt="Partner logo" className={`h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity ${n === 8 ? "rounded-full" : n === 9 || n === 11 ? "rounded-lg" : ""}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Growth-Stage Protocols Need Intelligence */}
      <section className="py-24 px-6 lg:px-12 fade-in-section opacity-0">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 max-w-3xl">
            Why Growth-Stage Protocols Need Intelligence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Prevent Protocol Failures</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Risk monitoring prevents liquidation cascades, parameter exploits, and collateral concentration risks that can destroy TVL overnight.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Optimize User Growth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Behavioral analytics identify high-value users, predict churn, and reveal growth opportunities hidden in on-chain data.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Decide Faster</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real-time dashboards and weekly strategic insights turn data into action -- not reports that sit unread.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Scale Without Overhead</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Get a full data intelligence team without the $300K+/year cost and 6-month hiring timeline of building in-house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section id="what-we-deliver" className="py-24 px-6 lg:px-12 bg-muted/30 fade-in-section opacity-0">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 max-w-3xl">
            End-to-End Protocol Intelligence
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Risk Monitoring */}
            <div className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">Risk Monitoring</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Health factor tracking
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Liquidation cascade prevention
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Collateral concentration analysis
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Parameter optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Contract risk scoring
                </li>
              </ul>
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-primary">Moonwell captured $14K+ revenue in 2 weeks.</p>
              </div>
            </div>

            {/* Behavioral Analytics */}
            <div className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">Behavioral Analytics</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  User cohort segmentation
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Churn prediction and prevention
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Whale tracking and capital flows
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Cross-protocol user journeys
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Sybil detection
                </li>
              </ul>
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-primary">Identified 30% churn spike, recovered $500K+ TVL.</p>
              </div>
            </div>

            {/* Custom Dashboards */}
            <div className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">Custom Dashboards</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Protocol-specific metrics
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Multi-chain aggregation
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Governance analytics
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Revenue and fee tracking
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                  Stakeholder reporting
                </li>
              </ul>
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-primary">Commerce Protocol (Coinbase x Shopify) tracks adoption in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 px-6 lg:px-12 fade-in-section opacity-0">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 max-w-3xl">
            Trusted by Protocols Building the Future
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border/50 space-y-6">
              <h3 className="text-xl font-semibold">Moonwell Protocol</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground font-medium">Challenge:</span>
                  <span className="ml-2 text-foreground">Prove OEV upgrade captured revenue</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-medium">Solution:</span>
                  <span className="ml-2 text-foreground">Real-time revenue monitoring dashboard</span>
                </div>
                <div>
                  <span className="text-primary font-semibold">Result:</span>
                  <span className="ml-2 text-foreground font-medium">$14K+ captured (2 weeks), $300K+ incentives distributed</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border/50 space-y-6">
              <h3 className="text-xl font-semibold">Moonwell Governance</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground font-medium">Challenge:</span>
                  <span className="ml-2 text-foreground">Unified governance across Base + Optimism</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-medium">Solution:</span>
                  <span className="ml-2 text-foreground">Multi-chain governance aggregation</span>
                </div>
                <div>
                  <span className="text-primary font-semibold">Result:</span>
                  <span className="ml-2 text-foreground font-medium">Complete visibility, delegate tracking, proposal analytics</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border/50 space-y-6">
              <h3 className="text-xl font-semibold">Commerce Protocol</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground font-medium">Challenge:</span>
                  <span className="ml-2 text-foreground">Track user adoption for Coinbase x Shopify integration</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-medium">Solution:</span>
                  <span className="ml-2 text-foreground">User behavior and merchant analytics</span>
                </div>
                <div>
                  <span className="text-primary font-semibold">Result:</span>
                  <span className="ml-2 text-foreground font-medium">Real-time adoption tracking, executive reporting</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/case-studies">
              <Button variant="outline" className="group bg-transparent">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30 fade-in-section opacity-0">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter target="$14K+" />
              </div>
              <p className="text-sm text-muted-foreground">Revenue captured<br />(Moonwell, 2 weeks)</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter target="$300K+" />
              </div>
              <p className="text-sm text-muted-foreground">Liquidator incentives<br />distributed</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter target="10+" />
              </div>
              <p className="text-sm text-muted-foreground">Protocol<br />partners</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter target="2 weeks" />
              </div>
              <p className="text-sm text-muted-foreground">Average<br />delivery</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter target="99.9%" />
              </div>
              <p className="text-sm text-muted-foreground">Pipeline<br />uptime</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter target="<24hrs" />
              </div>
              <p className="text-sm text-muted-foreground">Response<br />time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section id="services" className="py-24 px-6 lg:px-12 fade-in-section opacity-0">
        <div className="w-full">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Growth Intel */}
            <div className="p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 space-y-6">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-xs font-semibold rounded-full mb-4">
                  Growth Intel
                </div>
                <h3 className="text-2xl font-bold mb-2">Strategic Partnership</h3>
                <p className="text-sm text-muted-foreground">For protocols scaling from $5M to $25M TVL</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Weekly performance analysis with actionable recommendations. Continuous dashboard maintenance as protocol mechanics evolve. Bi-weekly strategic sessions for ad-hoc insights. ROI measurement on major initiatives.
              </p>
              <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full group bg-transparent">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Strategic Intel */}
            <div className="p-8 rounded-2xl border-2 border-primary relative hover:shadow-xl hover:shadow-primary/10 transition-all space-y-6">
              <div className="absolute -top-3 right-6 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold rounded-full">
                Most Popular
              </div>
              <div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-xs font-semibold rounded-full mb-4">
                  Strategic Intel
                </div>
                <h3 className="text-2xl font-bold mb-2">Growth Intelligence</h3>
                <p className="text-sm text-muted-foreground">For protocols accelerating from $25M to $75M TVL</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time monitoring with automated alerts on critical metrics. Complete initiative tracking across all launches. Monthly competitor analysis. Embedded analyst in daily operations. Data-driven content for community engagement.
              </p>
              <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
                </Button>
              </a>
            </div>

            {/* Full Stack Intel */}
            <div className="p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 space-y-6">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-xs font-semibold rounded-full mb-4">
                  Full Stack Intel
                </div>
                <h3 className="text-2xl font-bold mb-2">Product Laboratory</h3>
                <p className="text-sm text-muted-foreground">For protocols scaling from $75M to $150M TVL</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Custom smart contract development integrated with analytics infrastructure (20 hours monthly). Data-informed feature development. Purpose-built analytics systems. Technical documentation, audit materials, and governance proposals. Team capability development.
              </p>
              <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full group bg-transparent">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-6 lg:px-12 bg-muted/30 fade-in-section opacity-0">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 max-w-3xl">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border/50 space-y-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Lending Protocols</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Risk monitoring is mission-critical. Health factors, liquidation analytics, collateral analysis -- the intelligence that prevents $5M+ cascades.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50 space-y-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Multi-Chain Protocols</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unified analytics across chains. One dashboard for Base, Optimism, Ethereum, Arbitrum -- complete visibility.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50 space-y-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">High-Growth Protocols</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build data infrastructure from launch. Core dashboards, KPIs, investor reporting -- foundation for scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Datum Labs */}
      <section id="why-datum" className="py-24 px-6 lg:px-12 fade-in-section opacity-0">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 max-w-3xl">
            Why Datum Labs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Built for Growth-Stage</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enterprise platforms serve $100M+ TVL protocols. We specialize in $5M-$100M TVL -- fast deployment, iterative solutions, intelligence that scales with growth.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Speed Wins</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  2-week delivery. Weekly insights. Real-time monitoring. When you move fast, your intelligence keeps pace.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Full-Stack Intelligence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Risk monitoring + behavioral analytics + smart contract development + strategic insights + technical writing. Not just dashboards.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Partnership</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Revenue from services funds product innovation (OnchainSuite launching Q2 2026). Long-term partnership, not project-based consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 fade-in-section opacity-0">
        <div className="w-full">
          <div className="relative overflow-hidden bg-[#0a0a1a] rounded-3xl p-8 lg:p-16 border border-primary/30 shadow-2xl">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
                Free Analytics Audit
              </h2>
              <p className="text-lg text-gray-400 mb-10">
                30-minute call. We analyze your data infrastructure and identify 3 immediate opportunities for competitive advantage.
              </p>
              <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 bg-white text-[#0a0a1a] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all font-semibold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Book Your Audit
                </Button>
              </a>
              <p className="text-sm text-gray-500 mt-6">
                Trusted by protocols on Base, Optimism, Ethereum, Arbitrum
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="w-full relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/images/datum-logo.png" alt="Datum Labs" className="h-8 w-8" />
                <span className="text-xl font-bold">Datum Labs</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Protocol intelligence for growth-stage DeFi.
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-semibold mb-4 text-sm">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                  <li><a href="#services" className="hover:text-primary transition-colors">Pricing</a></li>
                  <li><a href="#why-datum" className="hover:text-primary transition-colors">About</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">Connect</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8">
            <p className="text-sm text-muted-foreground">&copy; 2026 Datum Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
