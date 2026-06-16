import { defineField, defineType } from "sanity"

/**
 * Optional per-document SEO overrides. When empty, pages fall back to the
 * document title / excerpt.
 */
export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description: "Overrides the page <title>. ~60 chars max.",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
      description: "Shown in search results and social cards. ~155 chars max.",
      validation: (Rule) => Rule.max(170),
    }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      type: "image",
      description: "Falls back to the cover/main image when empty.",
    }),
  ],
})
