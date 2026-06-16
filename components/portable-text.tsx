import { PortableText, type PortableTextComponents } from "@portabletext/react"
import Image from "next/image"

import { urlFor } from "@/sanity/lib/image"

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold mt-10 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-8 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic my-6 text-muted-foreground">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="leading-relaxed my-4 text-foreground/90">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
  },
  marks: {
    code: ({ children }) => <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">{children}</code>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:no-underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(1200).fit("max").auto("format").url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="rounded-xl border border-border w-full h-auto"
          />
          {value.alt ? (
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">{value.alt}</figcaption>
          ) : null}
        </figure>
      ) : null,
  },
}

export function RichText({ value }: { value: unknown }) {
  if (!value) return null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />
}
