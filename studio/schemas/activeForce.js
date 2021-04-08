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
          {title: 'Comandante General', value: 'Comandante General'},   // agregar jefe del cuerpo - 
          {title: 'Comandante', value: 'Comandante'},                   // agregar 2do jefe del cuerpo -
          {title: 'Subcomandante', value: 'Subcomandante'},
          {title: 'Oficial', value: 'Oficial'},
          {title: 'Suboficial', value: 'Suboficial'},
          {title: 'Sargento', value: 'Sargento'},
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
