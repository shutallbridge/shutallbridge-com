import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  duration: z.string(),
  links: z.array(z.object({ label: z.string(), url: z.string().url() })),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/projects" }),
  schema: projectSchema,
});

const collections = { projects };

export { projectSchema, collections };
