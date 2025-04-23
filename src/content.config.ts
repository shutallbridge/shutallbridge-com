import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    duration: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })),
  }),
});

const collections = { projects };

export { collections };
