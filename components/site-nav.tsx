"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/#services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#about", label: "About" },
  { href: "/analytics", label: "Analytics" },
  { href: "/resources", label: "Resources" },
]

/**
 * Shared top navigation used by the Resources pages, matching the inline nav on
 * the marketing pages. `active` highlights the current section.
 */
export function SiteNav({ active }: { active?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-6 lg:px-12 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/datum-logo.png" alt="Datum Labs" className="h-8 w-8" />
          <span className="text-xl font-bold">Datum Labs</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                active === l.label ? "text-primary" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
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
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block text-sm font-medium transition-colors hover:text-primary py-2 ${
                  active === l.label ? "text-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
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
  )
}
