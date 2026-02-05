"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Activity, BarChart3, ArrowRight } from "lucide-react"

export default function AnalyticsPage() {
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
            <Link href="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-primary transition-colors">
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
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
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
                className="block text-sm font-medium text-primary transition-colors py-2"
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
      <main className="relative px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Analytics</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Analytics & <span className="text-primary">Dashboards</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our live dashboards and on-chain analytics powering insights for leading DeFi protocols.
            </p>
          </div>

          {/* Two Section Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Live Dashboards Card */}
            <Link
              href="/aave-dashboard"
              className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Activity className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Live Dashboards</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Real-time protocol dashboards with live data feeds, market metrics, and interactive analytics built for DeFi protocols.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Dashboards</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Dune Dashboard Card */}
            <Link
              href="/case-studies"
              className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Dune Dashboard</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  On-chain analytics and SQL-powered dashboards on Dune, covering governance, lending, DEX, and protocol performance.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Dashboards</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
