import type { Metadata } from "next"

import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RevealController } from "@/components/reveal-controller"

const SHOW_ID = "5ZZfeCsHFcZWXJ47FNeqJQ"
const SPOTIFY_SHOW = `https://creators.spotify.com/pod/show/${SHOW_ID}/home`
const SPOTIFY_EMBED = `https://open.spotify.com/embed/show/${SHOW_ID}?utm_source=generator`

export const metadata: Metadata = {
  title: "W3GM Podcast | Datum Labs",
  description:
    "W3GM — the Datum Labs podcast. Conversations with the operators, founders, and analysts building the onchain economy.",
  alternates: { canonical: "/resources/podcast" },
  openGraph: { title: "W3GM Podcast | Datum Labs", url: "/resources/podcast", type: "website" },
}

export default function PodcastPage() {
  return (
    <>
      <RevealController />
      <SiteNav active="Resources" />

      <header className="page-header">
        <div className="wrap">
          <span className="kicker">Resources · Podcast</span>
          <h1>W3GM. Conversations from the <span className="it">onchain frontier.</span></h1>
          <p>The Datum Labs podcast. We sit down with the operators, founders, and analysts building the onchain economy, the people actually shipping, not just posting.</p>
          <div className="meta-row">
            <span>Hosted by <strong>Datum Labs</strong></span>
            <span>Show · <strong>W3GM</strong></span>
            <span>On · <strong>Spotify</strong></span>
          </div>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="section" style={{ paddingTop: 32 }}>
          <div data-reveal style={{ borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-md)", border: "1px solid var(--border-subtle)" }}>
            <iframe
              title="W3GM on Spotify"
              src={SPOTIFY_EMBED}
              width="100%"
              height={520}
              style={{ border: 0, display: "block" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="hero-ctas" style={{ marginTop: 24 }}>
            <a href={SPOTIFY_SHOW} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Listen on Spotify ↗</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
