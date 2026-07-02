import Link from "next/link"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { HeroDither } from "@/components/hero-dither"
import { RevealController } from "@/components/reveal-controller"
import { StackPipeline } from "@/components/stack-pipeline"
import { SelectedWork } from "@/components/selected-work"
import { EngagementTiers } from "@/components/engagement-tiers"

const CAL = "https://calendly.com/datumlabss/30min"

const TICKER: { name: string; logo?: string }[] = [
  { name: "Aave", logo: "/images/aave-logo.png" },
  { name: "Moonwell", logo: "/images/logo-6.png" },
  { name: "Morpho", logo: "/images/logo-3.png" },
  { name: "Navi", logo: "/images/navi-logo.png" },
  { name: "SparkLend", logo: "/images/sparklend-logo.png" },
  { name: "CoW Protocol", logo: "/images/cow-logo.png" },
  { name: "Seamless", logo: "/images/logo-5.png" },
  { name: "Venus", logo: "/images/logo-7.png" },
  { name: "Level", logo: "/images/level-logo.png" },
  { name: "Falcon Finance", logo: "/images/logo-1.png" },
  { name: "Commerce Payments" },
  { name: "Onchain Labs", logo: "/images/onchain-labs-logo.png" },
  { name: "Incentiv", logo: "/images/incentiv-logo.png" },
  { name: "Dexwin" },
  { name: "ORBT", logo: "/images/orbt-logo.svg" },
  { name: "Goldfish", logo: "/images/goldfish-logo.png" },
]

const WHY = [
  { n: "01", h: "Products, not decks", p: "We ship SaaS like OnchainSuite. Recurring problems get recurring solutions, owned, versioned, supported." },
  { n: "02", h: "Operate, don't advise", p: "We run the pipelines, the warehouse, the surfaces. You see results, not invoices for setup." },
  { n: "03", h: "Models with semantics", p: "A user is a user. A position is a position. We hand you protocol-aware models, not raw rows." },
  { n: "04", h: "Strategic latency", p: "When a vote, an exploit, or a competitor move lands, you have a read on impact in hours, not weeks." },
]

const HERO_WORDS = [
  { t: "Beyond", br: false },
  { t: "Analytics.", br: true },
  { t: "Beyond", br: false },
  { t: "Ordinary.", br: false, it: true },
]

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.datumlab.xyz/#org",
      name: "Datum Labs",
      url: "https://www.datumlab.xyz",
      logo: "https://www.datumlab.xyz/brand/logo-mark-blue.svg",
      description: "The data execution layer for web3 — pipelines, models, and surfaces for DeFi lending, risk, and governance teams.",
      email: "hello@datumlab.xyz",
      sameAs: ["https://x.com/Datumlabs_", "https://www.linkedin.com/showcase/dat-umlab/", "https://dune.com/jorel"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.datumlab.xyz/#site",
      url: "https://www.datumlab.xyz",
      name: "Datum Labs",
      publisher: { "@id": "https://www.datumlab.xyz/#org" },
    },
  ],
}

export default function Home() {
  return (
    <>
      <RevealController />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <SiteNav />

      {/* Hero */}
      <section className="hero">
        <HeroDither />
        <div className="wrap">
          <h1 data-anim-words>
            {HERO_WORDS.map((w, i) => (
              <span key={i}>
                <span className={`anim-word${w.it ? " it" : ""}`} style={{ animationDelay: `${i * 90}ms` }}>
                  {w.t}
                </span>
                {w.br ? <br /> : " "}
              </span>
            ))}
          </h1>
          <p className="lede">
            We build intelligence solutions engineered to solve custom data problems. Protocols shouldn&apos;t settle for
            dashboards that recap yesterday, they should rely on architecture that models what happens next, and the apps
            that capitalize on it first.
          </p>
          <div className="hero-ctas">
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a Call →</a>
            <Link href="/#stack" className="btn btn-stack">Read the Stack</Link>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="ticker">
        <span className="label">Protocols we&apos;ve analyzed ·</span>
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((p, i) => (
            <span key={i} aria-hidden={i >= TICKER.length ? true : undefined}>
              {p.logo ? <img className="tlogo" src={p.logo} alt="" /> : <span className="dot" />}
              {p.name}
            </span>
          ))}
        </div>
      </section>

      <main id="main" className="wrap">
        {/* Why Datum */}
        <section className="section" id="why">
          <div className="section-head" data-reveal>
            <div className="meta"><span className="kicker">Why Datum</span></div>
            <h2>An execution layer, not a dashboard vendor.</h2>
            <p>Most analytics work ends at the chart. Ours begins there. We treat data the same way you treat your protocol, as a product that must perform, not a deck.</p>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div key={w.n} data-reveal>
                <div className="why-num">{w.n}</div>
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Stack */}
        <section className="section" id="stack">
          <div className="section-head" data-reveal>
            <div className="meta"><span className="kicker">The Stack</span></div>
            <h2>One pipeline. Five surfaces. Yours.</h2>
            <p>The same instrumentation we built for funds and foundations powers your ops. Hover any layer to see what we operate.</p>
          </div>
          <StackPipeline />
        </section>

        {/* Engagement tiers */}
        <section className="section" id="services">
          <div className="section-head" data-reveal>
            <div className="meta"><span className="kicker">Engagement Tiers</span></div>
            <h2>Match the intel level to the stage.</h2>
            <p>From a quarterly partner read to a fully embedded data org, we shape the engagement to your maturity, not a price card.</p>
          </div>
          <EngagementTiers />
        </section>

        {/* Selected work */}
        <section className="section" id="cases">
          <div className="section-head" data-reveal>
            <div className="meta"><span className="kicker">Selected Work</span></div>
            <h2>Receipts.</h2>
            <p>Four dashboards we built and run. Real protocols, real numbers, real handoffs.</p>
          </div>
          <SelectedWork />
          <div className="hero-ctas" style={{ marginTop: 32 }}>
            <Link href="/case-studies" className="btn btn-stack">View all cases →</Link>
            <Link href="/dune-dashboard" className="btn btn-stack">Public Dune index →</Link>
          </div>
        </section>

        {/* Operators */}
        <section className="section" id="operators">
          <div className="section-head" data-reveal>
            <div className="meta"><span className="kicker">Operators</span></div>
            <h2>Built by people who&apos;d rather operate than advise.</h2>
            <p>Datum Labs is a small, senior team of analysts and engineers. We built our reputation on Dune before we built a company around it.</p>
          </div>
          <div className="operators-grid">
            <div className="operator-bio" data-reveal>
              <span className="kicker">The Team</span>
              <p><strong>Senior data engineers and protocol analysts</strong> with backgrounds at Dune, leading L2s, and DeFi research desks. Every engagement is led by an operator who has shipped this exact problem before, for a real protocol, with real money on the line.</p>
              <p>We are deliberately small. There is no junior bench, no AE layer, no &quot;implementation team.&quot; The person you meet on the first call is the person who lives in your data.</p>
            </div>
            <div className="operator-stat" data-reveal><div className="num">12</div><div className="lbl">Protocols</div><div className="desc">Embedded engagements across DeFi, L2s, payments, stablecoins.</div></div>
            <div className="operator-stat" data-reveal><div className="num">11</div><div className="lbl">Dune Dashboards</div><div className="desc">Authored, maintained dashboards on dune.com, public receipts.</div></div>
            <div className="operator-stat" data-reveal><div className="num">14</div><div className="lbl">Chains</div><div className="desc">Archive-node coverage across the networks our partners live on.</div></div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" id="contact">
          <div className="section-head" data-reveal>
            <div className="meta"><span className="kicker">Get In</span></div>
            <h2>Talk to a risk analyst.</h2>
            <p>No sales loop. The first call is with someone who&apos;ll be in your pipelines.</p>
          </div>
          <div className="spotlight" data-reveal>
            <div className="spotlight-inner">
              <div>
                <h2>Schedule a 30-minute analytics audit, free.</h2>
                <p>We&apos;ll review your current data infrastructure and identify three immediate opportunities for competitive advantage. You leave with the brief whether you hire us or not.</p>
              </div>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-flag">Book a Call ↗</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
