import { RANKS } from 'utils/constants';

export default {
  name: 'activeForce',
  type: 'document',
  title: 'Cuerpo Activo',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nombre y apellido',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rank',
      title: 'Rango',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: RANKS,
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
      media: 'image',
    },
  },
};
