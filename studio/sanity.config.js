// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "Bomberos Vol. Lujan de Cuyo",
  projectId: "3nve3m96",
  dataset: "production",
  plugins: [
    deskTool({
      structure: (S, context) => {
        const { client } = context;

        // usa el cliente para construir la estructura
        return S.defaults();        
      }
    }),
  ],
  schema: {
    types: schemas,
  },
});