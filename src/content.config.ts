import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectSchemaWithoutCover = z.object({
  title: z.string(),
  summary: z.string(),
  duration: z.string(),
  links: z.array(z.object({ label: z.string(), url: z.string().url() })),
  featuredOrder: z.number().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/projects" }),
  schema: ({ image }) =>
    projectSchemaWithoutCover.extend({
      cover: image(),
      coverAlt: z.string(),
    }),
});

const collections = { projects };

export { projectSchemaWithoutCover, collections };
