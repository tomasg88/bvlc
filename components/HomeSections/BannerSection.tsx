import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import { DEFAULT_PAGE_IMAGE } from 'utils/constants';
import styles from './BannerSection.module.scss';
import { FaAngleRight } from 'react-icons/fa';
import classNames from 'classnames';

type ContentSectionProps = {
  ctaText: BannerSectionProps['ctaText'];
  description: BannerSectionProps['description'];
  href: BannerSectionProps['href'];
  title: BannerSectionProps['title'];
};

type ImageSectionProps = {
  background: BannerSectionProps['background'];
  rtl: BannerSectionProps['rtl'];
  title: BannerSectionProps['title'];
};

export type BannerSectionProps = {
  background: string;
  ctaText: string;
  description: string;
  href: string;
  rtl?: boolean;
  title: string;
};

const ImageSection = ({ background, rtl, title }: ImageSectionProps) => (
  <div className={`${rtl ? styles.rtlImageClip : styles.imageClip} w-3/5 block relative`}>
    <Image
      alt={`imágen de portada para ${title}`}
      className={classNames('bg-cover', rtl ? 'rounded-r-xl' : 'rounded-l-xl')}
      fill
      sizes="100vw"
      src={background || DEFAULT_PAGE_IMAGE}
    />
    {/* <div className="bg-black w-full h-full block bg-cover relative opacity-60"> */}
    {/* <h2 className="text-gray-100 text-2xl">{title}</h2> */}
    {/* &nbsp;
    </div> */}
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
}: BannerSectionProps) => (
  <Fade>
    <div className="bg-white w-full h-[500px] flex mb-16 shadow-xl rounded-xl">
      {rtl ? (
        <>
          <ContentSection ctaText={ctaText} description={description} href={href} title={title} />
          <ImageSection background={background} rtl={rtl} title={title} />
        </>
      ) : (
        <>
          <ImageSection background={background} rtl={rtl} title={title} />
          <ContentSection ctaText={ctaText} description={description} href={href} title={title} />
        </>
      )}
    </div>
  </Fade>
);
