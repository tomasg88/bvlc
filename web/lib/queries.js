import { albumFields, equipmentFields, generalFields, pageFields, postFields } from "./fields"

export const indexQuery = `
{
  "recentNews": *[_type == "post"] | order(publishedAt desc)[0..5] { ${postFields} }
}`

export const pagesQuery = `
  *[_type == "page" && slug.current == $slug][0] { ${pageFields} }
`

export const allPostQuery = ` *[_type == "post"] { ${postFields} }`

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

export const academyQuery = `
{
  "albums": *[_type == "album" && "Academia" in categories[]->.title] { ${albumFields} },
  "news": *[_type == "post" && "Academia" in categories[]->.title] { ${postFields} }
}
`

export const activeForceQuery = ` *[_type == "activeForce"] `

export const leadershipQuery = ` *[_type == "leadership"] `

export const equipmentQuery = `*[_type == "equipment" ] { ${equipmentFields} }`

export const albumsQuery = `
  *[_type == "album"] { ${albumFields} }
`

export const contactDataQuery = `
{
  "phones": *[_type == "general" && type == 'Telefono' ] { ${generalFields} },
  "mails": *[_type == "general" && type == 'Email' ] { ${generalFields} },
  "rrss": *[_type == "general" && type == 'Red Social' ] { ${generalFields} } 
}
`

export const rrssQuery = `*[_type == "general" && type == 'Red Social' ] { ${generalFields} }`