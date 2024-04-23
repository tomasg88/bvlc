// schemas/schema.js
// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import page from './page';
import author from './author';
import leadership from './leadership';
import activeForce from './activeForce';
import general from './general';
import equipment from './equipment';
import album from './album';
import youtube from './youtube';
import specialty from './specialty';
import campaign from './campaign';

// Then we give our schema to the builder and provide the result to Sanity
export const schemas = [
  general,
  post,
  page,
  author,
  leadership,
  activeForce,
  category,
  equipment,
  specialty,
  album,
  campaign,
  blockContent,
  youtube,
];
