import {
    albumFields,
    equipmentFields,
    generalFields,
    pageFields,
    postFields,
} from './fields';

/**
 * recentNews: latest news - restricted to 6
 * highlighted: only one news to be shown highlighted
 * heroImages: an album containing images for the Home hero
 */
export const indexQuery = `
{
    "recentNews": *[_type == "post" && (!isHighlighted || !defined(isHighlighted))] | order(publishedAt desc)[0..5] { ${postFields} },
    "highlighted": *[_type == "post" && isHighlighted][0] { ${postFields} },
    "heroImages": *[_type == "album" && title == "IMAGENES_HOME"][0] { ${albumFields} }
}`;

/**
 * content for specific pages
 */
export const pagesQuery = `
    *[_type == "page" && slug.current == $slug][0] { ${pageFields} }
`;

/**
 * all news, latest first
 */
export const allPostQuery = ` *[_type == "post"] | order(publishedAt desc) { ${postFields} }`;

/**
 * post: find news, and restrict to one
 * morePosts: other "related" news, limited to 3
 */
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
}`;

/**
 * all news with a defined slug
 */
export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`;

export const academyQuery = `
{
  "albums": *[_type == "album" && "Academia" in categories[]->.title] { ${albumFields} },
  "news": *[_type == "post" && "Academia" in categories[]->.title] | order(publishedAt desc) { ${postFields} }
}
`;

export const activeForceQuery = ` *[_type == "activeForce"] `;

export const leadershipQuery = ` *[_type == "leadership"] `;

export const equipmentQuery = `*[_type == "equipment" ] { ${equipmentFields} }`;

export const albumsQuery = `
  *[_type == "album" && title != "IMAGENES_HOME"] | order(_createdAt desc) { ${albumFields} }
`;

export const communityPostQuery = `
{
  "albums": *[_type == "album" && "Comunidad" in categories[]->.title] { ${albumFields} },
  "news": *[_type == "post" && "Comunidad" in categories[]->.title] { ${postFields} }
}
`;
export const equipmentPostQuery = `
{
  "albums": *[_type == "album" && "Equipamiento" in categories[]->.title] { ${albumFields} },
  "news": *[_type == "post" && "Equipamiento" in categories[]->.title] { ${postFields} }
}
`;
export const contributionPostQuery = `
{
  "albums": *[_type == "album" && "Contribuciones" in categories[]->.title] { ${albumFields} },
  "news": *[_type == "post" && "Contribuciones" in categories[]->.title] { ${postFields} }
}
`;

export const contactDataQuery = `
{
  "phones": *[_type == "general" && type == 'Telefono' ] { ${generalFields} },
  "mails": *[_type == "general" && type == 'Email' ] { ${generalFields} },
  "rrss": *[_type == "general" && type == 'Red Social' ] { ${generalFields} } 
}
`;

export const rrssQuery = `*[_type == "general" && type == 'Red Social' ] { ${generalFields} }`;
