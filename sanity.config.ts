"use client"

/**
 * Sanity Studio config — mounted in the Next app at /studio.
 * Editors log in at https://datumlab.xyz/studio to write posts and upload
 * report PDFs. No separate deployment required.
 */
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schemaTypes"
import { structure } from "./sanity/structure"

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset,
  schema,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
})
