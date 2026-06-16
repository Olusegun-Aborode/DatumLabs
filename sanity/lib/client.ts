import { createClient } from "next-sanity"

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env"

export const client = createClient({
  // `createClient` requires a valid project-id shape; "placeholder" keeps the
  // module importable before setup. It is never queried because `sanityFetch`
  // short-circuits when `isSanityConfigured` is false.
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
})

/**
 * Thin wrapper around client.fetch that returns a fallback when Sanity isn't
 * configured yet, so list/detail pages render gracefully before the project ID
 * is set. Revalidates every 60s (ISR) once live.
 */
export async function sanityFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback
  return client.fetch<T>(query, params, { next: { revalidate: 60 } })
}
