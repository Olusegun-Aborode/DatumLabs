import { groq } from "next-sanity"

// ---- Blog posts ----

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{name, "slug": slug.current, image, role},
  "categories": categories[]->{title, "slug": slug.current}
}`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  body,
  publishedAt,
  _updatedAt,
  "author": author->{name, "slug": slug.current, image, role, bio},
  "categories": categories[]->{title, "slug": slug.current},
  seo
}`

// ---- Monthly reports ----

export const reportsQuery = groq`*[_type == "report" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  period,
  summary,
  coverImage,
  publishedAt,
  "pdfUrl": pdf.asset->url
}`

export const reportSlugsQuery = groq`*[_type == "report" && defined(slug.current)]{ "slug": slug.current }`

export const reportBySlugQuery = groq`*[_type == "report" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  period,
  summary,
  coverImage,
  body,
  publishedAt,
  _updatedAt,
  "pdf": pdf.asset->{url, originalFilename, size},
  seo
}`

// ---- Combined feed (hub + RSS + sitemap) ----

// All posts + reports, newest first, normalized for the Resources browser.
// `kind` is one of: "Articles" | "Reports" | "Case Study" | "Research".
export const allResourcesQuery = groq`*[_type in ["post", "report"] && defined(slug.current)] | order(publishedAt desc){
  _type,
  _id,
  title,
  "slug": slug.current,
  "kind": select(_type == "report" => "Reports", coalesce(contentType, "Articles")),
  "extra": select(_type == "report" => period, ""),
  publishedAt,
  "image": coalesce(mainImage, coverImage),
  "subtitle": coalesce(excerpt, summary)
}`

// Latest posts + reports interleaved by date, for the homepage research strip.
export const latestCombinedQuery = groq`*[_type in ["post", "report"] && defined(slug.current)] | order(publishedAt desc)[0...3]{
  _type,
  _id,
  title,
  "slug": slug.current,
  "category": select(_type == "report" => "Report", coalesce(contentType, "Articles")),
  "extra": select(_type == "report" => period, ""),
  publishedAt,
  "image": coalesce(mainImage, coverImage),
  "subtitle": coalesce(excerpt, summary)
}`

export const latestResourcesQuery = groq`{
  "posts": *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3]{
    _id, title, "slug": slug.current, excerpt, mainImage, publishedAt
  },
  "reports": *[_type == "report" && defined(slug.current)] | order(publishedAt desc)[0...3]{
    _id, title, "slug": slug.current, period, summary, coverImage, publishedAt
  }
}`
