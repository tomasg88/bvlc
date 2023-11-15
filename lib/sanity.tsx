import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createImageUrlBuilder } from 'next-sanity';
import { ImageUrlBuilder } from 'next-sanity-image';
import { sanityConfig } from './config';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: SanityImageSource): ImageUrlBuilder =>
  imageBuilder.image(source).auto('format').fit('max');
