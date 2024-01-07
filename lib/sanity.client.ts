import { createClient } from 'next-sanity';
import { config } from 'sanity.config';

const token = process.env.SANITY_API_TOKEN;

export const sanityClient = createClient({
  // use same config as in studio
  ...config,
  // use a today's UTC date unless there is a reason not to
  // docs: https://www.sanity.io/help/js-client-api-version
  apiVersion: '2023-03-11',
  token,
  useCdn: false,
});
