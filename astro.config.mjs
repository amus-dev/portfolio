import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  image: {
   service: passthroughImageService(),
 },
});