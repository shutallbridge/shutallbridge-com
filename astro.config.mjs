// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  devToolbar: {
    enabled: false,
  },
  vite: {
    // @ts-expect-error
    plugins: [tailwindcss()],
  },
});