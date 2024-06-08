import { defineField, defineType, useClient } from 'sanity';

const hightlightedNewsQuery = `*[_type == "post" && isHighlighted && _id != $id]`;

const trimDraftFromString = (str) => str.replace('drafts.', '');

// Returns the first news encountered and marked as "highlighted"
// Returns undefined if no other news encountered as marked
const checkOtherPosts = (document, list) =>
  list.find((post) => trimDraftFromString(document._id) !== trimDraftFromString(post._id));

const printErrorMsg = () => 'Ya hay una noticia destacada. Revisala: ';

const checkForOtherHighlightedNews = (document) => {
  const client = useClient({ apiVersion: '2021-10-21' });
  return client
    .fetch(hightlightedNewsQuery, {
      id: document._id,
    })
    .then((list) => {
      if (list.length) {
        const result = checkOtherPosts(document, list);
        if (result) return printErrorMsg() + result.title;
        else return true;
      } else {
        return true;
      }
    })
    .catch((err) => err);
};

export default defineType({
  name: 'post',
  title: 'Noticia',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Titulo de la nota',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Descripción breve',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Articulo',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Dia de la publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'Click en el botón GENERATE para generar la ruta (URL)',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isHighlighted',
      title: 'Noticia Destacada?',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) =>
        Rule.custom((field, { document }) => {
          if (!document?.isHighlighted) return true;
          else return checkForOtherHighlightedNews(document);
        }),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `Creado por ${author}`,
      });
    },
  },
});
