import { POSITIONS } from 'utils/constants';

export default {
  name: 'leadership',
  type: 'document',
  title: 'Comisión directiva',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nombre y apellido',
      validation: (Rule) => Rule.required(),
    },

    // Para rango (rank)
    // https://www.sanity.io/docs/content-modelling
    {
      name: 'position',
      title: 'Cargo',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: POSITIONS,
      },
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      description: 'Puede añadir una imagen de perfil para ser mostrada en la web',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      position: 'string',
    },
  },
};
