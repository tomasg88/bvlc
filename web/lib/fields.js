export const postFields = `
  _id,
  name,
  title,
  publishedAt,
  excerpt,
  mainImage,
  body,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const generalFields = `
  _id, title, type, value, rrss, rrssUrl
`

export const pageFields = `_id, title, body,
  "publishedAt": _createdAt`