import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: 'src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seoTitle: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: 'src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string(),
    location: z.string(),
    price: z.string(),
    description: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: 'src/content/posts' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'pages': pages,
  'events': events,
  'posts': posts,
};
