import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOPIC_NAMES } from './consts';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      topic: z.enum(TOPIC_NAMES),
      tags: z
        .array(z.string())
        .nullish()
        .transform((tags) => [...new Set((tags ?? []).map((t) => t.trim()).filter(Boolean))]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string().optional(),
            caption: z.string().optional(),
          }),
        )
        .optional(),
      recipe: z
        .object({
          servings: z.string().optional(),
          time: z.string().optional(),
          ingredients: z.array(z.string()).default([]),
          steps: z.array(z.string()).default([]),
        })
        .optional(),
    }),
});

export const collections = { posts };
