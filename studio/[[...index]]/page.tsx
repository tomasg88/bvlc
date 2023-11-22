// ./src/app/studio/[[...index]]/page.tsx
import { Studio } from './Studio';

// Ensures the Studio route is statically generated
export const dynamic = 'force-static';

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from 'next-sanity/studio/metadata';
export { viewport } from 'next-sanity/studio/viewport';

export default function StudioPage(): JSX.Element {
  return <Studio />;
}
