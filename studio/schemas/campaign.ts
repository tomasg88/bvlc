import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'campaign',
  title: 'Campañas',
  type: 'document',
  fields: [
    defineField({
      description: 'Nombre de la campaña que aparecerá en el sitio',
      name: 'name',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'campaignLink',
      title: 'Link de donaronline.com',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      description: 'Breve descripción para indicar el objetivo de esta campaña',
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      description: 'Indicar si la campaña está activa o no',
      initialValue: false,
      name: 'isActive',
      title: 'Activar',
      type: 'boolean',
    }),
    defineField({
      description:
        'Esta opción está pensada para indicar si una campaña debe mostrarse primera. Está pensada para la campaña de Socios Protectores',
      initialValue: false,
      name: 'showFirst',
      title: 'Mostrar arriba de todo',
      type: 'boolean',
    }),
  ],
});
