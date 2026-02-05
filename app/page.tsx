"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Database,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Mail,
  TrendingUp,
  LayoutDashboard,
  Activity,
  Menu,
  X,
} from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

function TypewriterText() {
  const words = ["Ordinary.", "Data.", "Growth."]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete) return

    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
          if (displayText === currentWord) {
            if (currentWordIndex === words.length - 1) {
              setIsComplete(true)
              return
            }
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1))
          if (displayText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => prev + 1)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex, isComplete])

  return (
    <span className="text-primary relative">
      {displayText}
      <span
        className={`ml-1 inline-block w-[3px] h-[1em] bg-primary align-middle ${isComplete ? "opacity-0" : "animate-pulse"}`}
      />
    </span>
  )
}

export default function Home() {
  const [dynamicWord, setDynamicWord] = useState("Ordinary")
  const [isAnimating, setIsAnimating] = useState(false)
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
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Animated gradient blobs */}
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
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Services
              </a>
              <Link
                href="/case-studies"
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
              >
                About
              </a>
              <Link
                href="/analytics"
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Analytics
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full relative overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-none">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
                Beyond Analytics. Beyond Reports. Beyond <TypewriterText />
              </h1>
              <h3 className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
                We build Intelligence Solutions engineered to solve custom data problems. Protocols should not settle
                for dashboards and data suites that tell them what happened yesterday. Rather, rely on an intelligence
                architecture that gives insight into what happens next, and the custom-built solutions that capitalize
                on it first.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-base px-8 relative group overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Get Started
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
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl animate-pulse-slow" />
                <div className="absolute inset-4 border border-primary/30 rounded-2xl shadow-[0_0_30px_rgba(var(--primary),0.1)]" />
                <div className="absolute inset-8 bg-gradient-to-tr from-primary/10 to-transparent rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="bg-card/80 backdrop-blur p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors group hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]">
                      <Database className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold">5B+</div>
                      <div className="text-xs text-muted-foreground">Data Points</div>
                    </div>
                    <div className="bg-card/80 backdrop-blur p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors group hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]">
                      <Zap className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold">&lt;24h</div>
                      <div className="text-xs text-muted-foreground">To Insight</div>
                    </div>
                    <div className="bg-card/80 backdrop-blur p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors group hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]">
                      <TrendingUp className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div className="bg-card/80 backdrop-blur p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors group hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]">
                      <Shield className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-xs text-muted-foreground">Protocols</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">Live Data</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="mt-20 lg:mt-24">
            <p className="text-sm text-muted-foreground mb-6 text-center lg:text-left">Trusted By Leading Protocols</p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll space-x-12 items-center">
                {/* First set of logos */}
                <img
                  src="/images/logo-1.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-2.png"
                  alt="Surgence Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-3.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-5.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-6.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-7.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-8.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity rounded-full"
                />
                <img
                  src="/images/logo-9.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity rounded-lg"
                />
                <img
                  src="/images/logo-10.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-11.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity rounded-lg"
                />
                {/* Duplicate set for seamless loop */}
                <img
                  src="/images/logo-1.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-2.png"
                  alt="Surgence Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-3.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-5.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-6.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-7.png"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-8.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity rounded-full"
                />
                <img
                  src="/images/logo-9.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity rounded-lg"
                />
                <img
                  src="/images/logo-10.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/logo-11.jpg"
                  alt="Company Logo"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-24 px-6 lg:px-12 fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="w-full">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-4 lg:sticky lg:top-24 md:text-7xl mt-10">
                Why Leading Protocols Choose Datum Labs
              </h2>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <LayoutDashboard className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">We Build Products, Not Just Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a Product and Data Lab, we create SaaS solutions like OnchainSuite that solve recurring problems.
                  You&apos;re not paying for consulting, you&apos;re investing in scalable, maintainable infrastructure.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">Data Insight that Scale Growth </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "As the data execution layer behind many of Web3’s most ambitious protocols. We provide a comprehensive suite of analytical deliverables that serves as a protocol's command center for monitoring, exploration, and data-driven decision-making"
                  }
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">Holistic Growth Understanding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  True Web3 growth stems from understanding on-chain behaviors, protocol dynamics, token economics, and
                  user engagement as interconnected systems, not isolated metrics.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Activity className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">Fast Turnaround, Strategic Outcomes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide performance-driven results with meticulous attention to detail. When protocols need rapid
                  intelligence for time-sensitive decisions, we deliver.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-border/30">
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll-metrics gap-12 w-max">
                {/* First set */}
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Database className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">5B+</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Data points processed monthly</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">&lt;24h</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Time to first insight</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Full Stack Protocol Partners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Pipeline Uptime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <LayoutDashboard className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Custom Dashboards Deployed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">10</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Live SaaS Data Products</div>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Database className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">5B+</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Data points processed monthly</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">&lt;24h</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Time to first insight</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Full Stack Protocol Partners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Pipeline Uptime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <LayoutDashboard className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Custom Dashboards Deployed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">10</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Live SaaS Data Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-24 px-6 lg:px-12 bg-muted/30 fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="lg:max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Strategic Data Partnership for Scaling Protocols
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Choose the intelligence level that matches your protocol's growth stage
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Strategic Data Partnership */}
            <div className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-secondary text-primary-foreground px-4 py-1.5 text-sm font-medium">
                    Growth Intel
                  </div>
                </div>
                <div className="text-2xl">Strategic Data Partnership</div>
                <div className="text-base">For scaling protocols</div>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  We work closely with your growth team to deliver weekly performance insights and maintain your data
                  pipelines. We track initiative ROI, provide bi-weekly office hours for ad-hoc requests.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Weekly performance insights
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Initiative ROI tracking
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Bi-weekly office hours
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Dashboard maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Complete Growth Intelligence */}
            <div className="relative overflow-hidden border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium">
                Most Popular
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-secondary text-primary-foreground px-4 py-1.5 text-sm font-medium">
                    Strategic Intel
                  </div>
                </div>
                <div className="text-2xl">Complete Growth Intelligence Ecosystem</div>
                <div className="text-base">Embedded analyst operations</div>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  We embed a dedicated analyst in your daily operations to deliver automated alerts, unlimited
                  initiative tracking, and competitor intelligence. We join your standups.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Dedicated embedded analyst
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Automated alerts & monitoring
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Competitor intelligence
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Technical documentation
                  </li>
                </ul>
              </div>
            </div>

            {/* End-to-End Product Lab */}
            <div className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-secondary text-primary-foreground px-4 py-1.5 text-sm font-medium">
                    Full Stack Intel
                  </div>
                </div>
                <div className="text-2xl">End-to-End Product Laboratory</div>
                <div className="text-base">Complete technical arm</div>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  We become your complete technical arm, building smart contracts, developing data-integrated dApps, and
                  creating custom analytics infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Smart contract development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Data-integrated dApps
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Custom analytics infrastructure
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Team training & optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="w-full">
          <div className="relative overflow-hidden bg-[#0a0a1a] rounded-3xl p-8 lg:p-16 border border-primary/30 shadow-2xl">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">
                  Ready to Transform Your Protocol's Data Intelligence?
                </h2>
                <p className="text-lg text-gray-400 text-pretty">
                  Schedule a free 30-minute analytics audit. We'll analyze your current data infrastructure and identify
                  3 immediate opportunities for competitive advantage.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a href="https://calendly.com/datumlabss/30min" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-white text-[#0a0a1a] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all w-full lg:w-auto font-semibold"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Book Your Free Analytics Audit
                  </Button>
                </a>
                <Link href="/case-studies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 bg-transparent border-white/20 text-white hover:bg-white/10 w-full lg:w-auto"
                  >
                    View Case Studies
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

        <div className="w-full relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/images/datum-logo.png" alt="Datum Labs" className="h-8 w-8" />
                <span className="text-xl font-bold">Datum Labs</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Web3's premier data intelligence partner. Building the future of protocol analytics.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Strategic Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Growth Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Product Lab
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Datum Labs. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
