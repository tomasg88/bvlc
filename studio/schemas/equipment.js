export default {
  name: "equipment",
  type: "document",
  title: "Equipamiento",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Equipo",
      validation: Rule => Rule.required(),
    },
    {
      name: "imagesGallery",
      title: "Imagenes del equipo",
      type: "array",
      of: [{ type: "image" }]
    },
    {
      name: 'body',
      title: 'Ficha Técnica',
      type: 'blockContent',
      description: "Debajo puede escribir las características técnicas del equipo.",
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      position: "string",
    },
  },
};
