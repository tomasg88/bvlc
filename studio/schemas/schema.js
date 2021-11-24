//
// Para activar los cambios y subirlos al CMS de Prod
//
// sanity graphql deploy
// sanity deploy
//

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import page from "./page";
import author from "./author";
import leadership from "./leadership";
import activeForce from "./activeForce";
import general from "./general";
import equipment from "./equipment";
import album from "./album";
import youtube from "./youtube";
import specialty from "./specialty";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
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
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    youtube,
  ]),
});
