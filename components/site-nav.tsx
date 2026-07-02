"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const CAL = "https://calendly.com/datumlabss/30min"

type MegaRow = { label: string; desc: string; href: string; icon: React.ReactNode; external?: boolean }

const RESOURCES: MegaRow[] = [
  {
    label: "Datum Report",
    desc: "Risk & market intelligence",
    href: "/resources/reports",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5" /><path d="M9 13h7M9 17h7" />
      </svg>
    ),
  },
  {
    label: "Podcast",
    desc: "Listen to W3GM",
    href: "/resources/podcast",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
      </svg>
    ),
  },
  {
    label: "Products",
    desc: "OnchainSuite & Setnel",
    href: "/products",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

const DATA: MegaRow[] = [
  {
    label: "Dashboard",
    desc: "Live protocol monitoring",
    href: "/live-dashboards",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    desc: "On-chain analysis",
    href: "/analytics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16" /><path d="M8 16l3-4 3 2 4-6" />
      </svg>
    ),
  },
]

function Caret() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function Mega({ rows }: { rows: MegaRow[] }) {
  return (
    <div className="nav-dd-menu mega" role="menu">
      <div className="mega-inner">
        <div className="mega-list">
          {rows.map((r) => (
            <Link
              key={r.label}
              href={r.href}
              className="mega-row"
              role="menuitem"
              {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="mega-ico">{r.icon}</span>
              <span className="mega-label">{r.label}</span>
              <span className="mega-aside-panel">
                <span className="mega-desc">{r.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState<string | null>(null) // touch-open mega id
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  // scroll progress
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return
    let raf = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      bar.style.width = pct + "%"
      setScrolled(window.scrollY > 8)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  // outside click + esc close (touch mega + mobile drawer)
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null)
        setMobileOpen(false)
      }
    }
    const onResize = () => {
      if (window.innerWidth > 1024) setMobileOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const toggleTouch = (id: string) => {
    // Only intercept for no-hover (touch) devices; hover devices open via CSS.
    if (window.matchMedia("(hover: hover)").matches) return
    setOpen((cur) => (cur === id ? null : id))
  }

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} ref={navRef}>
      <div className="nav">
      <Link href="/" className="brand" aria-label="Datum Labs — home">
        <span className="nav-logo-lockup">
          <img src="/brand/logo-horizontal-color.svg" alt="Datum Labs" />
        </span>
      </Link>

      <div className="nav-links">
        <div className={`nav-item${open === "resources" ? " open" : ""}`}>
          <button
            className="nav-dd-trigger"
            aria-expanded={open === "resources"}
            aria-haspopup="true"
            onClick={() => toggleTouch("resources")}
          >
            Resources <Caret />
          </button>
          <Mega rows={RESOURCES} />
        </div>

        <div className={`nav-item${open === "data" ? " open" : ""}`}>
          <button
            className="nav-dd-trigger"
            aria-expanded={open === "data"}
            aria-haspopup="true"
            onClick={() => toggleTouch("data")}
          >
            Data <Caret />
          </button>
          <Mega rows={DATA} />
        </div>

        <Link href="/case-studies" className={`nav-link-top${active === "Case Studies" ? " active" : ""}`}>
          Case Studies
        </Link>
      </div>

      <div className="nav-cta">
        <Link href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Book a Call ↗
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      </div>

      <div className={`nav-mobile${mobileOpen ? " open" : ""}`} id="navMobile">
        <div className="nav-mobile-group">
          <span className="nav-mobile-h">Resources</span>
          {RESOURCES.map((r) => (
            <Link key={r.label} href={r.href} onClick={() => setMobileOpen(false)}>{r.label}</Link>
          ))}
        </div>
        <div className="nav-mobile-group">
          <span className="nav-mobile-h">Data</span>
          {DATA.map((r) => (
            <Link key={r.label} href={r.href} onClick={() => setMobileOpen(false)}>{r.label}</Link>
          ))}
        </div>
        <div className="nav-mobile-group">
          <Link className="nav-mobile-top" href="/case-studies" onClick={() => setMobileOpen(false)}>Case Studies</Link>
        </div>
        <Link href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-mobile-cta" onClick={() => setMobileOpen(false)}>
          Book a Call ↗
        </Link>
      </div>

      <div className="nav-progress" ref={progressRef} />
    </header>
  )
}
