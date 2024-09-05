import { PortableTextBlock } from 'sanity';
import type { ImageAsset } from '@sanity/types';

export interface Page {
  _id: string;
  body: PortableTextBlock;
  publishedAt: string;
  slug: string;
  title: string;
}

/**
 * Represents document schema/document/post.ts
 */
export interface News {
  _id: string;
  body: PortableTextBlock;
  excerpt: string;
  isHightlighted: string;
  mainImage: ImageAsset;
  publishedAt: string;
  slug: string;
  title: string;
}

/**
 * Represents document schema/document/album.ts
 */
export interface Album {
  _id: string;
  cover: ImageAsset;
  description: string;
  imageList: ImageAsset[];
  title: string;
}

/**
 * Represents document schema/document/general.ts
 */
export interface General {
  _id?: string;
  type: 'Telefono' | 'Email' | 'Red Social';
  rrss: 'Twitter' | 'Facebook' | 'Instagram' | 'YouTube';
  rrssUrl: string;
  title: string;
  value: string;
}

/**
 * Represents document schema/document/leadership.ts
 */
export interface Leadership {
  _id: string;
  image: ImageAsset;
  position: string;
  title: string;
}

/**
 * Represents document schema/document/activeForce.ts
 */
export interface ActiveForce {
  _id: string;
  title: string;
  image: ImageAsset;
  rank: string;
}

/**
 * Represents document schema/document/campaign.ts
 */
export interface Campaign {
  _id: string;
  campaignLink: string; // URL
  description?: string;
  isActive?: boolean;
  name: string;
  showFirst?: boolean;
}

/**
 * Represents document schema/document/equipment
 */
export interface Equipment {
  _id: string;
  body: PortableTextBlock;
  imagesGallery: ImageAsset[];
  title: string;
}

/**
 * Represents document schema/document/specialty.ts
 */
export interface Specialty {
  _id: string;
  body: PortableTextBlock;
  imagesGallery: ImageAsset[];
  members: ActiveForce[];
  title: string;
}

/**
 * Represents document schema/document/infrastructure.ts
 */
export interface Infrastructure {
  _id: string;
  description: PortableTextBlock;
  name: string;
  imageList: ImageAsset[];
}

/**
 *  Below are the pages interfaces
 */

export interface SlugType {
  article: News;
  moreArticles: News[];
}

export interface Sponsor {
  name: string;
  logo: ImageAsset;
  url?: string;
}
