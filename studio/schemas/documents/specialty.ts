import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'specialty',
  type: 'document',
  title: 'Grupos Especiales',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nombre del grupo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagesGallery',
      title: 'Imagenes del grupo',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'members',
      title: 'Integrantes',
      description:
        'A continuación podrá seleccionar miembros del Cuerpo Activo que pertenezcan al grupo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'activeForce' },
          title: 'Seleccione los integrantes',
          description: '',
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'body',
      title: 'Tareas especiales',
      type: 'blockContent',
      description:
        'Describa las actividades especiales que diferencian a este grupo del resto del cuerpo y de las otras especialidades.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
