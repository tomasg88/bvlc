import { defineField, defineType } from 'sanity';

export default defineType({
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Área',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      description: 'Breve descripción del uso que se le da al área',
      name: 'description',
      title: 'Descripción',
      type: 'blockContent',
    }),
    defineField({
      name: 'imageList',
      title: 'Imágenes',
      type: 'array',
      description: 'Imágenes del área',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.min(1).error('Debe añadir al menos una imágen al álbum'),
    }),
  ],
  name: 'infrastructure',
  title: 'Infraestructura',
  type: 'document',
});
