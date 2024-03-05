import { PostTags } from '@common';
import { defineCollection, z } from 'astro:content';

const postTagsSchema = z.nativeEnum(PostTags);

const post = defineCollection({
  type: 'content',

  schema: z.object({
    draft: z.boolean(),
    author: z.string(),
    title: z.string(),
    description: z.string(),
    readTime: z.number(),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(postTagsSchema),
  }),
});

export const collections = { post };
