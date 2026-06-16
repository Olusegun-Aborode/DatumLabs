import type { StructureResolver } from "sanity/structure"

// Groups the Studio sidebar so non-technical editors see Resources clearly.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .child(S.documentTypeList("post").title("Blog Posts")),
      S.listItem()
        .title("Monthly Reports")
        .child(S.documentTypeList("report").title("Monthly Reports")),
      S.divider(),
      S.listItem()
        .title("Authors")
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem()
        .title("Categories")
        .child(S.documentTypeList("category").title("Categories")),
    ])
