// schemas/schema.js
// We import object and document schemas
import type { SchemaTypeDefinition } from 'sanity';
import activeForce from './documents/activeForce';
import album from './documents/album';
import author from './documents/author';
import campaign from './documents/campaign';
import category from './documents/category';
import equipment from './documents/equipment';
import general from './documents/general';
import infrastructure from './documents/infrastructure';
import leadership from './documents/leadership';
import page from './documents/page';
import post from './documents/post';
import specialty from './documents/specialty';

import blockContent from './objects/blockContent';
import youtube from './objects/youtube';

// Then we give our schema to the builder and provide the result to Sanity
export const types: SchemaTypeDefinition[] = [
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
  infrastructure,
  blockContent,
  youtube,
];
