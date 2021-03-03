export default {
  name: 'post',
  title: 'Noticia',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Titulo de la nota',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Descripción breve",
      type: "text",
    },
    {
      name: 'body',
      title: 'Articulo',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Dia de la publicación',
      type: 'datetime',
      validation: Rule => Rule.required(),
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
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required(),
    },
   
    
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `Creado por ${author}`,
      })
    },
  },
}
