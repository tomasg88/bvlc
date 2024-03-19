// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

import { schemas } from './studio/schemas/schema';

export const config = defineConfig({
  basePath: '/sanity-admin',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  name: 'bvlc',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  plugins: [deskTool(), visionTool(), vercelDeployTool()],
  schema: {
    types: schemas,
  },
  title: 'Bomberos Vol. Lujan de Cuyo',
});
