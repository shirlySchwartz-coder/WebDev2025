import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mspwfone',
  dataset: 'ds-ecom',
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || '',
});

if (!client) {
  throw new Error('Sanity client is not initialized');
}
const builder = imageUrlBuilder(client);



export const urlFor = (source) =>  builder.image(source);


