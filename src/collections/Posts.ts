import { CollectionConfig } from 'payload/types';
import Quote from '../blocks/Quote';
import Content from '../blocks/Content';
import Alert from '../blocks/Alert';
import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'tags', 'status']
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'postMeta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'id',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'hero',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'intro',
      type: 'richText',
    },
    {
      name: 'tableofcontents',
      type: 'array',
      label: 'Table of Contents',
      labels: {
        singular: 'Table of Content',
        plural: 'Table of Contents',
      },
      admin: {
        components: {
          RowLabel: ({ data }: RowLabelArgs) => {
            return data?.title as string;
          },
        },
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {

          }
        },
        {
          name: 'subtitle',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            }
          ]
        }
      ]
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Quote,
        Content,
        Alert
      ],
    },
    {
      name: 'template',
      type: 'select',
      options: [
        {
          value: 'guide',
          label: 'Guide',
        },
        {
          value: 'regular',
          label: 'Regular',
        },
      ],
      defaultValue: 'regular',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        position: 'sidebar',
      }
    },
  ]
}