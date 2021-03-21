export default {
  name: "activeForce",
  type: "document",
  title: "Cuerpo Activo",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Nombre y apellido",
      validation: Rule => Rule.required(),
    },
    {
      name: "rank",
      title: "Rango",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Comandante General', value: 'Comandante General'},
          {title: 'Comandante', value: 'Comandante'},
          {title: 'Subcomandante', value: 'Subcomandante'},
          {title: 'Oficial Principal', value: 'Oficial Principal'},
          {title: 'Oficial Inspector', value: 'Oficial Inspector'},
          {title: 'Oficial Ayudante', value: 'Oficial Ayudante'},
          {title: 'Suboficial Mayor', value: 'Suboficial Mayor'},
          {title: 'Suboficial Principal', value: 'Suboficial Principal'},
          {title: 'Sargento 1°', value: 'Sargento 1°'},
          {title: 'Sargento', value: 'Sargento'},
          {title: 'Cabo 1°', value: 'Cabo 1°'},
          {title: 'Cabo', value: 'Cabo'},
          {title: 'Bombero', value: 'Bombero'},
          {title: 'Aspirante', value: 'Aspirante'},
          {title: 'Cadete', value: 'Cadete'},
        ]
      }
    },
    {
      name: "image",
      title: "Foto",
      type: "image",
      description: 'Puede añadir una imagen de perfil para ser mostrada en la web',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
