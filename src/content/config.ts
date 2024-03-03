import { defineCollection, z } from 'astro:content';

enum BlogTags {
  // Web Development General
  WebDevelopment = 'Web Development',
  JavaScript = 'JavaScript',
  CSS = 'CSS',
  HTML = 'HTML',

  // UX/UI Design
  UXUI = 'UX/UI',
  Figma = 'Figma',

  // Frontend Development
  FrontendBasics = 'Frontend Basics',
  Accessibility = 'Accessibility',
  ResponsiveDesign = 'Responsive Design',
  Performance = 'Performance',

  VersionControl = 'Version Control',
}
const blogTagsSchema = z.nativeEnum(BlogTags);
const blog = defineCollection({
  type: 'content',

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(blogTagsSchema),
  }),
});

export const collections = { blog };
