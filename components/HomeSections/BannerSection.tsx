import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import { DEFAULT_PAGE_IMAGE } from 'utils/constants';
import styles from './BannerSection.module.scss';
import { FaAngleRight } from 'react-icons/fa';

type ContentSectionProps = {
  ctaText: string;
  description: string;
  href: string;
  title: string;
};

type ImageSectionProps = {
  alt: string;
  background: string;
  rtl: boolean;
};

export type BannerSectionProps = {
  background: string;
  ctaText: string;
  description: string;
  href: string;
  rtl?: boolean;
  title: string;
};

const ImageSection = ({ alt, background, rtl }: ImageSectionProps) => (
  <div className={`${rtl ? styles.rtlImageClip : styles.imageClip} w-3/5 block relative`}>
    <Image
      alt={alt}
      className={`bg-cover`}
      fill
      sizes="100vw"
      src={background || DEFAULT_PAGE_IMAGE}
    />
    <div className="bg-black w-full h-full block bg-cover relative opacity-60">
      {/* <h2 className="text-gray-100 text-2xl">{title}</h2> */}
      &nbsp;
    </div>
  </div>
);

const ContentSection = ({ ctaText, description, href, title }: ContentSectionProps) => (
  <div className="p-6 w-2/5 box-border flex flex-col justify-between">
    <div>
      <h2 className="text-2xl mb-14">{title}</h2>
      <p className="font-thin text-4xl leading-normal tracking-normal">{description}</p>
    </div>
    <div className="relative self-end">
      <Link href={href} className={styles.ctaButton}>
        {ctaText}
        <FaAngleRight className="pl-2" />
      </Link>
    </div>
  </div>
);

export const BannerSection = ({
  background,
  ctaText,
  description,
  href,
  rtl = false,
  title,
}: BannerSectionProps) => {
  const imageAlt = `imágen de portada para ${title}`;
  return (
    <Fade>
      <div className="bg-gray-100 w-full h-[500px] flex mb-16 shadow-xl">
        {rtl ? (
          <>
            <ContentSection ctaText={ctaText} description={description} href={href} title={title} />
            <ImageSection alt={imageAlt} background={background} rtl={rtl} />
          </>
        ) : (
          <>
            <ImageSection alt={imageAlt} background={background} rtl={rtl} />
            <ContentSection ctaText={ctaText} description={description} href={href} title={title} />
          </>
        )}
      </div>
    </Fade>
  );
};
