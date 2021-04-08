export default {
  name: "leadership",
  type: "document",
  title: "Comisión directiva",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Nombre y apellido",
      validation: Rule => Rule.required(),
    },

    // Para rango (rank)
    // https://www.sanity.io/docs/content-modelling
    {
      name: "position",
      title: "Cargo",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Presidente', value: 'Presidente'},
          {title: 'Vice Presidente', value: 'Vice Presidente'},
          {title: 'Secretario', value: 'Secretario'},
          {title: 'Pro secretario', value: 'Pro secretario'},
          {title: 'Tesorero', value: 'Tesorero'},
          {title: 'Pro tesorero', value: 'Pro tesorero'},
          {title: 'Vocal Titular', value: 'Vocal Titular'},
          {title: 'Vocal Suplente', value: 'Vocal Suplente'},
          {title: 'Rev. de Ctas. Titular', value: 'Rev. de Ctas. Titular'},
          {title: 'Rev. de Ctas. Suplente', value: 'Rev. de Ctas. Suplente'}
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
      position: "string",
    },
  },
};
