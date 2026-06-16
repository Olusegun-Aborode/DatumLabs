// Sanity environment configuration.
// Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local (and in Vercel) once the
// Sanity project exists. Until then the site still builds and renders empty
// states — see `isSanityConfigured`.
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01"

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ""

// True once a real project ID is configured. Data helpers fall back to empty
// results when this is false, so pages build and render without credentials.
export const isSanityConfigured = Boolean(projectId)
