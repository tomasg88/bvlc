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
        list: [
          { title: 'Comandante General', value: 'comandante-general' },
          { title: 'Comandante Mayor', value: 'comandante-mayor' },
          { title: 'Comandante', value: 'comandante' },
          { title: 'Subcomandante', value: 'subcomandante' },
          { title: 'Oficial Principal', value: 'oficial-principal' },
          { title: 'Oficial Inspector', value: 'oficial-inspector' },
          { title: 'Oficial Ayudante', value: 'oficial-ayudante' },
          { title: 'Suboficial Mayor', value: 'suboficial-mayor' },
          { title: 'Suboficial Principal', value: 'suboficial-principal' },
          { title: 'Suboficial Primero', value: 'suboficial-primero' },
          { title: 'Sargento Primero', value: 'sargento-primero' },
          { title: 'Sargento', value: 'sargento' },
          { title: 'Cabo Primero', value: 'cabo-primero' },
          { title: 'Cabo', value: 'cabo' },
          { title: 'Bombero', value: 'bombero' },
          { title: 'Aspirante', value: 'aspirante' },
          // {title: 'Cadete', value: 'cadete'},
        ],
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
