import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob, file } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string()
  })
})

const items = defineCollection({
  loader: file("./src/content/data/items.toml"),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    condition: z.enum(["Like New", "Good", "Fair"]),
    price: z.number(),
    description: z.string(),
    tags: z.array(z.string()),
    emoji: z.string(),
    sold: z.boolean().default(false)
  })
})

export const collections = { blog, items }
