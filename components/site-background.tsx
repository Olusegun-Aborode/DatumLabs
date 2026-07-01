/**
 * v2 is a flat platinum canvas — no animated background. `SiteBackground` is a
 * no-op kept for import compatibility with the Resources pages. `SiteFooter`
 * re-exports the new footer.
 */
export function SiteBackground() {
  return null
}

export { SiteFooter } from "@/components/site-footer"
