import { defineField, defineType } from 'sanity';
import { RANKS } from 'utils/constants';

export default defineType({
  name: 'activeForce',
  type: 'document',
  title: 'Cuerpo Activo',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nombre y apellido',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rank',
      title: 'Rango',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: RANKS,
      },
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      description: 'Puede añadir una imagen de perfil para ser mostrada en la web',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
