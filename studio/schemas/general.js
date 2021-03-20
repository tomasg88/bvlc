export default {
  name: "general",
  type: "document",
  title: "Datos generales",

  fields: [
    {
      name: "type",
      type: "string",
      title: "¿Qué tipo de dato desea cargar?",
      description: "Seleccione entre un telefono, email o red social",
      validation: Rule => Rule.required(),
      options: {
        list: [ 
          {title: 'Telefono', value: 'Telefono'},
          {title: 'Email', value: 'Email'},
          {title: 'Red Social', value: 'Red Social'}
        ],
        layout: 'radio'
      }
    },
    {
      name: "title",
      type: "string",
      title: "¿Con qué nombre debe mostrarse este valor?",
      description: "Este campo aplica únicamente si el tipo de dato es un Telefono o un Email",
      validation: Rule => Rule.custom((thisField, context) => {
        const isPhone = context.document.type === 'Telefono';
        const isEmail = context.document.type === 'Email';
        if (!thisField && (isPhone || isEmail)) {
          return `Debe indicar con qué nombre mostraremos este dato`
        }
        return true;
      })
    },
    {
      name: "value",
      type: "string",
      title: "Valor del dato",
      validation: Rule => Rule.custom((thisField, context) => {
        const isPhone = context.document.type === 'Telefono';
        const isEmail = context.document.type === 'Email';
        if ((isPhone || isEmail) && !thisField) {
          const errorMessage = 
            (isPhone && `Debe cargar este campo con el telefono`) || (isEmail && `Debe cargar este campo con el email`)
          return errorMessage;
        }
        return true
      })
    },
    {
      name: "rrss",
      type: "string",
      title: "¿Qué red social desea cargar?",
      description: "Se mostrará el icono de la Red Social en la web",
      validation: Rule => Rule.custom((thisField, context) => {
        if (context.document.type === 'Red Social' && !thisField) {
          return `Seleccione la Red Social que desea configurar`;
        }
        if (context.document.type !== 'Red Social' && thisField) {
          return `Elimine la selección de este campo si el tipo de dato que desea cargar es un Telefono o un Email`
        }
        return true
      }),
      options: {
        list: [
          { title: 'Twitter', value: 'Twitter' },
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Instagram', value: 'Instragram' },
          { title: 'YouTube', value: 'Youtube' },
        ]
      }
    },
    {
      name: "rrssUrl",
      type: "string",
      title: "Link a Red social",
      validation: Rule => Rule.custom((thisField, context) => {
        if (context.document.type === 'Red Social' && context.document.rrss && !thisField) {
          return `Ingrese aquí la URL de su Red Social`;
        }
        return true
      }),
    },
  ],
  preview: {
    select: {
      type: 'type',
      title: 'title',
      rrss: 'rrss'
    },
    prepare(selection) {
      let {title, type, rrss} = selection,
        subtitle = type;
      if (type === "Red Social") {
        title = rrss
      } else {
        title = title
      }
      return { title, subtitle }
    }
  },
};
