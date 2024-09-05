import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'general',
  type: 'document',
  title: 'Datos generales',

  fields: [
    defineField({
      name: 'type',
      type: 'string',
      title: '¿Qué tipo de dato desea cargar?',
      description: 'Seleccione entre un telefono, email o red social',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Telefono', value: 'Telefono' },
          { title: 'Email', value: 'Email' },
          { title: 'Red Social', value: 'Red Social' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: '¿Con qué nombre debe mostrarse este valor?',
      description: 'Este campo aplica únicamente si el tipo de dato es un Telefono o un Email',
      validation: (Rule) =>
        Rule.custom((thisField, context) => {
          const isPhone = context.document?.type === 'Telefono';
          const isEmail = context.document?.type === 'Email';
          if (!thisField && (isPhone || isEmail)) {
            return `Debe indicar con qué nombre mostraremos este dato`;
          }
          return true;
        }),
    }),
    defineField({
      name: 'value',
      type: 'string',
      title: 'Valor del dato',
      validation: (Rule) =>
        Rule.custom((thisField, context) => {
          const isPhoneOrEmail =
            context.document?.type === 'Telefono' || context.document?.type === 'Email';
          if (isPhoneOrEmail && !thisField) {
            return `Debe cargar este campo con el telefono`;
          }
          return true;
        }),
    }),
    defineField({
      name: 'rrss',
      type: 'string',
      title: '¿Qué red social desea cargar?',
      description: 'Se mostrará el icono de la Red Social en la web',
      validation: (Rule) =>
        Rule.custom((thisField, context) => {
          if (context.document?.type === 'Red Social' && !thisField) {
            return `Seleccione la Red Social que desea configurar`;
          }
          if (context.document?.type !== 'Red Social' && thisField) {
            return `Elimine la selección de este campo si el tipo de dato que desea cargar es un Telefono o un Email`;
          }
          return true;
        }),
      options: {
        list: [
          { title: 'Twitter', value: 'Twitter' },
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Instagram', value: 'Instagram' },
          { title: 'YouTube', value: 'Youtube' },
        ],
      },
    }),
    defineField({
      name: 'rrssUrl',
      type: 'url',
      title: 'Link a Red social',
      validation: (Rule) =>
        Rule.custom((thisField, context) => {
          if (context.document?.type === 'Red Social' && context.document?.rrss && !thisField) {
            return `Ingrese aquí la URL de su Red Social`;
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      type: 'type',
      title: 'title',
      rrss: 'rrss',
    },
    prepare(selection) {
      let { title, type, rrss } = selection;
      const subtitle = type;
      if (type === 'Red Social') {
        title = rrss;
      }
      return { title, subtitle };
    },
  },
});
