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
` as string;

export const generalFields = `
  _id, title, type, value, rrss, rrssUrl
` as string;

export const pageFields = `
  _id, title, body,
  "publishedAt": _createdAt
` as string;

export const albumFields = `
  _id, title, description, cover, imageList,
  "publishedAt": _createdAt
` as string;

export const equipmentFields = `
  _id, title, imagesGallery, body
` as string;

// members is a reference
export const specialtyFields = `
  _id, title, imagesGallery, body, members[]->{_id, title, image}
` as string;

export const campaignFields = `
  _id, name, campaignLink, showFirst, isActive
` as string;
