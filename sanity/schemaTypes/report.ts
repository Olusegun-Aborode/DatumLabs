import { defineField, defineType } from "sanity"
import { DocumentPdfIcon } from "@sanity/icons"

export const report = defineType({
  name: "report",
  title: "Monthly Report",
  type: "document",
  icon: DocumentPdfIcon,
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "The URL segment, e.g. /resources/reports/your-slug",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: 'The month/quarter this report covers, e.g. "March 2026" or "Q1 2026".',
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
      description: "Indexable overview shown on the report landing page and in listings.",
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "pdf",
      title: "Report PDF",
      type: "file",
      options: { accept: ".pdf" },
      description: "The downloadable report file.",
    }),
    defineField({
      name: "body",
      title: "Highlights / Key findings",
      type: "blockContent",
      description: "Optional rich-text highlights rendered on the landing page (great for SEO).",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  orderings: [
    {
      title: "Published, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "coverImage", period: "period" },
    prepare: ({ title, media, period }) => ({ title, media, subtitle: period || "Report" }),
  },
})
