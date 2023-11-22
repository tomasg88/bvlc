// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './studio/schemas/schema';

export default defineConfig({
  title: 'Bomberos Vol. Lujan de Cuyo',
  projectId: '3nve3m96',
  dataset: 'production',
  basePath: '/studio-admin',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
