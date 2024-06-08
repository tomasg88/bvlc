import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'equipment',
  type: 'document',
  title: 'Equipamiento',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Equipo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagesGallery',
      title: 'Imagenes del equipo',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'body',
      title: 'Ficha Técnica',
      type: 'blockContent',
      description: 'Debajo puede escribir las características técnicas del equipo.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      position: 'string',
    },
  },
});
