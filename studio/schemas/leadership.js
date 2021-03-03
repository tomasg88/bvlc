export default {
  name: "leadership",
  type: "document",
  title: "Comisión directiva",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Nombre y apellido",
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
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
