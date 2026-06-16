import { defineField, defineType } from "sanity"
import { DocumentTextIcon } from "@sanity/icons"

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "The URL segment, e.g. /resources/blog/your-slug",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contentType",
      title: "Type",
      type: "string",
      description: "Which tab this appears under on the Resources page.",
      options: {
        list: [
          { title: "Article", value: "Articles" },
          { title: "Case Study", value: "Case Study" },
          { title: "Research", value: "Research" },
        ],
        layout: "radio",
      },
      initialValue: "Articles",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary shown in listings and used as the meta description fallback.",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({ name: "mainImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
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
    select: { title: "title", media: "mainImage", date: "publishedAt" },
    prepare: ({ title, media, date }) => ({
      title,
      media,
      subtitle: date ? new Date(date).toLocaleDateString() : "Unpublished",
    }),
  },
})
