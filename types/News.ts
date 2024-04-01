import { ImageProps } from 'next/image';
import { Image, PortableTextBlock } from 'sanity';
import { SanityAsset } from '@sanity/image-url/lib/types/types';

export interface IButton {
  text: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
}

export interface NewsBody {
  body: PortableTextBlock;
  mainImage: SanityAsset;
  publishedAt: string;
  title: string;
}

export interface News extends NewsBody {
  _id: string;
  excerpt: string;
  slug: string;
}

export interface Album {
  _id: string;
  title: string;
  description?: string;
  imageList: SanityAsset[];
  cover: SanityAsset;
  onClick: () => void;
}

export interface Contact {
  _id?: string;
  title: string;
  value: string;
}

export interface IGallery {
  list: {
    _key: string;
    image: Image;
  }[];
}

export interface ComisionPerson {
  name: string;
  description: string;
  image: SanityAsset;
  position: string;
}

export interface ActiveForcePerson {
  _id: string;
  title: string;
  description: string;
  image: SanityAsset;
  rank: string;
}

export interface Campaign {
  _id: string;
  campaignLink: string; // URL
  isActive: boolean;
  name: string;
  showFirst: boolean;
}

export interface Equipment {
  body: PortableTextBlock;
  cover: SanityAsset;
  onClick: () => void;
  title: string;
}

export interface Specialty {
  body: PortableTextBlock;
  cover: SanityAsset;
  members: ActiveForcePerson[];
  onClick: () => void;
  title: string;
}

/**
 *  Below are the pages interfaces
 */

export interface HomeType {
  recentNews: News[];
  highlighted: News;
  heroImages: ImageProps[];
}

export interface NewsType {
  list: News[];
}

export interface SlugType {
  article: News;
  moreArticles: News[];
}

export interface Page {
  pages: NewsBody;
}

export interface CampaignsPage extends Page {
  campaigns: {
    showFirst: Campaign;
    restOfCampaigns: Campaign[];
  };
}

export interface AcademiaType {
  news: News[];
  albums: Album[];
}

export interface ComisionType {
  list: ComisionPerson[];
}

export interface ActiveForceType {
  list: ActiveForcePerson[];
}

export interface ContactoType {
  phones: Contact[];
  mails: Contact[];
}

export interface EquipmentType {
  equipment: {
    _id: string;
    body: PortableTextBlock;
    cover: SanityAsset;
    imagesGallery: SanityAsset[];
    onClick: () => void;
    title: string;
  }[];
}

export interface SpecialtyType {
  specialties: {
    _id: string;
    body: PortableTextBlock;
    cover: SanityAsset;
    imagesGallery: SanityAsset[];
    members: ActiveForcePerson[];
    onClick: () => void;
    title: string;
  }[];
}

export interface GaleriaType {
  albums: Album[];
}
