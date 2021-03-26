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
        name: 'slug',
        title: 'URL',
        type: 'slug',
        description: 'Click en el botón GENERATE para generar la ruta (URL)',
        validation: Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'body',
        title: 'Contenido',
        type: 'blockContent',
        validation: Rule => Rule.required(),
      },
    ],
  };
  