import { defineCollection, z } from 'astro:content';

enum BlogTags {
  // Web Development General
  WebDevelopment = 'Web Development',
  JavaScript = 'JavaScript',
  CSS = 'CSS',
  HTML = 'HTML',

  // Frameworks & Libraries
  React = 'React',
  Vue = 'Vue',
  Angular = 'Angular',
  Svelte = 'Svelte',
  NodeJS = 'Node.js',

  // UX/UI Design
  UXDesign = 'UX Design',
  UIDesign = 'UI Design',
  Figma = 'Figma',
  Sketch = 'Sketch',
  AdobeXD = 'Adobe XD',

  // Frontend Development
  FrontendBasics = 'Frontend Basics',
  Accessibility = 'Accessibility',
  ResponsiveDesign = 'Responsive Design',
  Performance = 'Performance',

  // Backend & Full Stack
  BackendBasics = 'Backend Basics',
  FullStackDevelopment = 'Full Stack Development',
  APIDevelopment = 'API Development',
  Serverless = 'Serverless',

  // PC & Hardware
  PCHardware = 'PC Hardware',
  CustomPCBuilds = 'Custom PC Builds',
  GamingPCs = 'Gaming PCs',
  Workstations = 'Workstations',

  // Tools & Software
  VersionControl = 'Version Control',
  CI_CD = 'CI/CD',
  Docker = 'Docker',
  Kubernetes = 'Kubernetes',

  // Database Technologies
  SQLDatabases = 'SQL Databases',
  NoSQLDatabases = 'NoSQL Databases',
  GraphQL = 'GraphQL',

  // Miscellaneous
  CareerDevelopment = 'Career Development',
  ProjectManagement = 'Project Management',
  AgileMethodology = 'Agile Methodology',
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
