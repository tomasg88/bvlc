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
          {title: 'Presidente', value: 'presidente'},
          {title: 'Vice Presidente', value: 'vice-presidente'},
          {title: 'Secretario', value: 'secretario'},
          {title: 'Pro secretario', value: 'pro-secretario'},
          {title: 'Tesorero', value: 'tesorero'},
          {title: 'Pro tesorero', value: 'pro-tesorero'},
          {title: 'Vocal Titular', value: 'vocal-titular'},
          {title: 'Vocal Suplente', value: 'vocal-suplente'},
          {title: 'Rev. de Ctas. Titular', value: 'cuentas-titular'},
          {title: 'Rev. de Ctas. Suplente', value: 'cuentas-suplente'}
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
