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
      name: "image",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "position",
      title: "Cargo",
      type: "string",
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
