import { SanityDocumentStub } from '@sanity/client';
import { SanityImageSource, SanityAsset } from '@sanity/image-url/lib/types/types';
import { ImageProps } from 'next/image';

export interface News {
    _id: string;
    body: SanityDocumentStub;
    excerpt: string;
    mainImage: SanityImageSource;
    publishedAt: string;
    slug: string;
    title: string;
}

export interface Album {
    _id: string;
    title: string;
    description?: string;
    imageList?: SanityAsset[];
    cover: SanityImageSource;
    onClick: () => void;
}

export interface Contact {
    _id: string;
    title: string;
    value: string;
}

export interface IGallery {
    list: {
        _key: string;
        image: SanityImageSource;
    }[];
}

export interface NewsHighlighted {
    title: string;
    slug: string;
    mainImage: SanityImageSource;
}

export interface ComisionPerson {
    name: string;
    description: string;
    image: SanityImageSource;
}

export interface ActiveForcePerson {
    _id: string;
    title: string;
    description: string;
    image: SanityImageSource;
}

export interface Equipment {
    body: SanityDocumentStub;
    cover: SanityImageSource;
    onClick: () => void;
    title: string;
}

export interface Specialty {
    body: SanityDocumentStub;
    cover: SanityImageSource;
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
    pages: {
        title?: string;
        mainImage?: SanityImageSource;
        dateString?: string;
        body: SanityDocumentStub;
    }
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
        body: SanityDocumentStub;
        cover: SanityImageSource;
        imagesGallery: SanityImageSource[];
        onClick: () => void;
        title: string;
    }[];
}

export interface SpecialtyType {
    specialties: {
        _id: string;
        body: SanityDocumentStub;
        cover: SanityImageSource;
        imagesGallery: SanityAsset[];
        members: ActiveForcePerson[];
        onClick: () => void;
        title: string;
    }[];
}

export interface GaleriaType {
    albums: Album[]
}