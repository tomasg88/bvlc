import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import { DEFAULT_PAGE_IMAGE } from 'utils/constants';
import styles from './HomeSectionCard.module.scss';

const CTA_CLASSNAME =
  'z-10 block px-4 py-2 mt-6 text-base font-bold text-center text-white bg-red-700 border-b-4 border-red-700 rounded cursor-pointer hover:bg-red-600 hover:border-red-800';

export type HomeSectionCardProps = {
  background: string;
  ctaText: string;
  description: string;
  href: string;
  title: string;
};

export const HomeSectionCard = ({
  background,
  ctaText,
  description,
  href,
  title,
}: HomeSectionCardProps) => (
  <Fade>
    <div className="bg-gray-100 w-5/6 h-60 rounded-2xl flex">
      <div className={`${styles.imageClip} w-3/5 block relative`}>
        <Image
          alt={''}
          className={`rounded-l-2xl rounded-r-none`}
          fill
          sizes="100vw"
          src={background || DEFAULT_PAGE_IMAGE}
        />
        <div className="bg-black w-full h-full block relative rounded-l-2xl rounded-r-none opacity-60">
          &nbsp;
        </div>
      </div>
      <div className="p-6 w2/5 box-border flex flex-col justify-between">
        <div className="">
          <p className="text-2xl">{title}</p>
          <p className="">{description}</p>
        </div>
        <div className="w-60 block relative">
          <Link href={href} className={CTA_CLASSNAME}>
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  </Fade>
);
