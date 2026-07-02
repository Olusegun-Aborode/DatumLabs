import type { Metadata } from "next"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"

const CAL = "https://calendly.com/datumlabss/30min"

export const metadata: Metadata = {
  title: "Contact | Datum Labs",
  description:
    "Talk to a Datum Labs analyst. Book a free 30-minute data audit or reach us at hello@datumlab.xyz.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Datum Labs", url: "/contact", type: "website" },
}

export default function ContactPage() {
  return (
    <>
      <RevealController />
      <SiteNav />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Contact</span>
          <h1>Talk to an <span className="it">analyst.</span></h1>
          <p>No sales loop. The first call is a free 30-minute audit with someone who&apos;ll be in your pipelines — you leave with three concrete opportunities whether you hire us or not.</p>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="section" style={{ paddingTop: 32 }}>
          <div className="legal" data-reveal>
            <h2>Book a call</h2>
            <p>Grab 30 minutes with an analyst: <a href={CAL} target="_blank" rel="noopener noreferrer">calendly.com/datumlabss/30min</a>.</p>

            <h2>Email</h2>
            <p>Prefer async? Write to <a href="mailto:hello@datumlab.xyz">hello@datumlab.xyz</a> with a sentence on your protocol and what you&apos;re trying to see.</p>

            <h2>Elsewhere</h2>
            <ul>
              <li><a href="https://x.com/Datumlabs_" target="_blank" rel="noopener noreferrer">X — @Datumlabs_</a></li>
              <li><a href="https://www.linkedin.com/showcase/dat-umlab/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://dune.com/jorel" target="_blank" rel="noopener noreferrer">Dune — public dashboards</a></li>
            </ul>
          </div>
          <div className="hero-ctas" style={{ marginTop: 8 }}>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a Call ↗</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
