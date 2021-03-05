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
      name: "rank",
      title: "Rango",
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
