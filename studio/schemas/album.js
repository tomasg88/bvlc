export default {
  name: 'album',
  type: 'document',
  title: 'Álbum de fotos',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nombre del álbum',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      description: 'Añada una descripción para identificar al álbum.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'cover',
      title: 'Imagenes',
      type: 'image',
      description: 'Añada una imagen para la portada del álbum.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageList',
      title: 'Imagenes',
      type: 'array',
      description: 'Ingrese aquí todas las fotos del Álbum',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.min(5).error('Debe añadir al menos 5 imagenes al álbum'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      position: 'string',
    },
  },
};
