/**
 * Embedded Sanity Studio at /studio.
 * Uses next-sanity's official metadata + viewport (the viewport export
 * overrides the site-wide zoom lock from app/layout.tsx, which otherwise
 * makes the Studio flicker/jump in Chrome). Indexing is already blocked via
 * robots.ts disallowing /studio.
 */
import { NextStudio } from "next-sanity/studio"

import config from "../../../sanity.config"

export const dynamic = "force-static"

export { metadata, viewport } from "next-sanity/studio"

export default function StudioPage() {
  return <NextStudio config={config} />
}
