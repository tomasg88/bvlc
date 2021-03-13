export default {
    name: "page",
    type: "document",
    title: "Páginas",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Título",
      },
      {
        name: 'body',
        title: 'Contenido',
        type: 'blockContent',
        validation: Rule => Rule.required(),
      },
    ],
  };
  