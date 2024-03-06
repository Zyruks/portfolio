import { defineConfig } from 'tinacms';
import { PostTags } from '../src/common/constants/blog';
import { formatMonth, generateSlug } from './helper/utils';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'blog_assets',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'src/content/post',
        fields: [
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            description: 'If this is checked the post will not be published',
            required: true,
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
            options: [
              {
                value: 'Zyruks',
                label: 'Zyruks',
              },
            ],
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
            ui: {
              validate: (value) => {
                if (!value) return 'Title is required.';

                const lengthOfTitle = value.length;
                if (lengthOfTitle > 50) {
                  return 'The title is too long, max 50 characters.';
                }

                if (!value.match(/^[A-Z]/)) {
                  return 'The title must start with a capitalized letter.';
                }

                if (!value.endsWith('.')) {
                  return 'The title must end with a period.';
                }

                return undefined;
              },
            },
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
            ui: {
              validate: (value, data) => {
                console.log(value);
                const lengthOfTitle = data.title?.length || 0;
                const lengthOfDescription = value?.length || 0;
                if (lengthOfTitle >= lengthOfDescription) {
                  return 'The description must be longer than the title';
                }

                if (lengthOfDescription > 250) {
                  return 'The description is too long max 250 characters';
                }
              },
            },
          },
          {
            type: 'number',
            name: 'readTime',
            label: 'Read time',
            required: true,
            ui: {
              validate: (value) => {
                if (value < 1) {
                  return 'Read time must be at least 1 minute';
                }
              },
            },
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: true,
            ui: {
              dateFormat: 'MMM-DD-YYYY',
              label: 'Publication Date',
              description: 'Select the publication date for the post.',
            },
          },
          {
            type: 'image',
            name: 'cover',
            label: 'Cover Image',
            required: true,
          },
          {
            type: 'string',
            name: 'coverAlt',
            label: 'Cover Image Alt Text',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            options: Object.values(PostTags),
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              const date = new Date(values?.pubDate);
              const year = date.getFullYear();
              const month = formatMonth(date);

              return `/${year}/${month}/${generateSlug(values.title)}`;
            },
          },
        },
      },
    ],
  },
});
