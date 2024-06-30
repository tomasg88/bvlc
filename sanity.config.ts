// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { types } from './studio/schemas';

const plugins =
  process.env.NODE_ENV !== 'production'
    ? [deskTool(), visionTool(), vercelDeployTool()]
    : [deskTool(), vercelDeployTool()];

export const config = defineConfig({
  basePath: '/sanity-admin',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  name: 'bvlc',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  plugins,
  schema: {
    types,
  },
  title: 'Bomberos Vol. Lujan de Cuyo',
});
