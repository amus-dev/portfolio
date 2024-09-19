import { defineCollection, z } from "astro:content";
// z -> zod schema

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    image_desktop: z.string(),
    image_mobile: z.string(),
    website: z.string().url(),
    github: z.string().url(),
  }),
});

export const collections = { projects };
