import { defineField, defineType } from 'sanity';
import { POSITIONS } from 'utils/constants';

export const leadership = defineType({
  name: 'leadership',
  type: 'document',
  title: 'Comisión directiva',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nombre y apellido',
      validation: (Rule) => Rule.required(),
    }),

    // Para rango (rank)
    // https://www.sanity.io/docs/content-modelling
    defineField({
      name: 'position',
      title: 'Cargo',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: POSITIONS,
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
      position: 'string',
    },
  },
});
