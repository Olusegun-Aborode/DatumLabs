import type { SchemaTypeDefinition } from "sanity"

import { author } from "./author"
import { blockContent } from "./blockContent"
import { category } from "./category"
import { post } from "./post"
import { report } from "./report"
import { seo } from "./seo"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, report, author, category, blockContent, seo],
}
