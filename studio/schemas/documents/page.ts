import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Páginas',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'Click en el botón GENERATE para generar la ruta (URL)',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
