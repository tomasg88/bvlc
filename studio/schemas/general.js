export default {
  name: "general",
  type: "document",
  title: "Datos generales",
  fields: [
    {
      name: "key",
      type: "string",
      title: "Nombre del dato",
      validation: Rule => Rule.required(),
    },
    {
      name: "value",
      type: "string",
      title: "Valor del dato",
      validation: Rule => Rule.required()
    },
    // {
    //   type: 'object',
    //   name: 'person',
    //   fieldsets: [
    //     {name: 'social', title: 'Social media handles'}
    //   ],
    //   fields: [
    //     {
    //       title: 'Name',
    //       name: 'name',
    //       type: 'string'
    //     },
    //     {
    //       title: 'Twitter',
    //       name: 'twitter',
    //       type: 'string',
    //       fieldset: 'social'
    //     },
    //     {
    //       title: 'Instagram',
    //       name: 'instagram',
    //       type: 'string',
    //       fieldset: 'social'
    //     },
    //     {
    //       title: 'Facebook',
    //       name: 'facebook',
    //       type: 'string',
    //       fieldset: 'social'
    //     }
    //   ]
    // },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
