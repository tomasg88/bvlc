const postFields = `
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

const generalFields = `
  _id, title, type, value, rrss, rrssUrl
`

export const contactDataQuery = `
{
  "phones": *[_type == "general" && type == 'Telefono' ] { ${generalFields} },
  "mails": *[_type == "general" && type == 'Email' ] { ${generalFields} },
  "rrss": *[_type == "general" && type == 'Red Social' ] { ${generalFields} } 
}
`

export const rrssQuery = `*[_type == "general" && type == 'Red Social' ] { ${generalFields} }`

export const indexQuery = `
{
  "news": *[_type == "post"] | order(date desc, _updatedAt desc) {
    ${postFields}
  },
  "lastMembers": *[_type == "activeForce"],
  "lastLeaders": *[_type == "leadership"]
}`

export const allPostQuery = ` *[_type == "post"] `
export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const activeForceQuery = ` *[_type == "activeForce"] `
export const leadershipQuery = ` *[_type == "leadership"] `