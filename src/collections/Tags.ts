import { CollectionConfig } from "payload/types"

export const Tags: CollectionConfig = {
  slug: 'tags',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'posts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
    },
  ],
}