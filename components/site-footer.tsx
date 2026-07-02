import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

const CAL = "https://calendly.com/datumlabss/30min"

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div className="footer-brand">
            <span className="footer-logo">
              <img src="/brand/logo-horizontal-color.svg" alt="Datum Labs" />
            </span>
            <p className="blurb">
              The data execution layer for web3. We build the pipelines, models, and surfaces that let protocols see and
              shape what happens next.
            </p>
            <div className="footer-socials">
              <a href="https://x.com/Datumlabs_" target="_blank" rel="noopener noreferrer"><IconX /> X</a>
              <a href="https://www.linkedin.com/showcase/dat-umlab/" target="_blank" rel="noopener noreferrer"><IconLinkedIn /> LinkedIn</a>
              <a href="mailto:hello@datumlab.xyz"><IconMail /> Email</a>
            </div>
            <div className="footer-newsletter">
              <NewsletterForm />
            </div>
          </div>

          <div className="footer-col">
            <h4>Stack</h4>
            <ul>
              <li><Link href="/#stack">Indexer</Link></li>
              <li><Link href="/#stack">Warehouse</Link></li>
              <li><Link href="/#stack">Models</Link></li>
              <li><Link href="/#stack">Surfaces</Link></li>
              <li><a href="https://onchainsuite.xyz" target="_blank" rel="noopener noreferrer">OnchainSuite ↗</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/analytics">Analytics</Link></li>
              <li><Link href="/#services">Growth Intel</Link></li>
              <li><Link href="/#services">Strategic Intel</Link></li>
              <li><Link href="/#services">Full-Stack Intel</Link></li>
              <li><a href={CAL} target="_blank" rel="noopener noreferrer">Book a call ↗</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Lab</h4>
            <ul>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/live-dashboards">Live Dashboards</Link></li>
              <li><Link href="/dune-dashboard">Dune Index</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/resources/podcast">Podcast</Link></li>
              <li><Link href="/resources/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Datum Labs · All rights reserved</span>
          <span>Built in Brooklyn · Lisbon · Singapore</span>
          <span className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
