import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sponsor',
  type: 'document',
  title: 'Sponsors',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Link a la página de la empresa',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
