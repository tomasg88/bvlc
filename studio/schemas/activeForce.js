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
          {title: 'Comandante General', value: 'comandante-general'},   // agregar jefe del cuerpo - 
          {title: 'Comandante', value: 'comandante'},                   // agregar 2do jefe del cuerpo -
          {title: 'Subcomandante', value: 'subcomandante'},
          {title: 'Oficial', value: 'oficial'},
          {title: 'Suboficial', value: 'suboficial'},
          {title: 'Sargento', value: 'sargento'},
          {title: 'Cabo', value: 'cabo'},
          {title: 'Bombero', value: 'bombero'},
          {title: 'Aspirante', value: 'aspirante'},
          {title: 'Cadete', value: 'cadete'},
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
