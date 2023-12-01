import { z, defineCollection } from 'astro:content';

const bookCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    layout: z.string().optional(),
  }),
});

export const collections = {
  books: bookCollection,
};
