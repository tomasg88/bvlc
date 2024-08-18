import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import { DEFAULT_PAGE_IMAGE } from 'utils/constants';
import styles from './HomeSectionCard.module.scss';
import { FaAngleRight } from 'react-icons/fa';

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
          alt={`imágen de portada para ${title}`}
          className={`rounded-l-2xl rounded-r-none bg-cover`}
          fill
          sizes="100vw"
          src={background || DEFAULT_PAGE_IMAGE}
        />
        <div className="bg-black w-full h-full block bg-cover relative rounded-l-2xl rounded-r-none opacity-60">
          {/* <h2 className="text-gray-100 text-2xl">{title}</h2> */}
          &nbsp;
        </div>
      </div>
      <div className="p-6 w2/5 box-border flex flex-col justify-between">
        <div>
          <h2 className="text-2xl mb-2">{title}</h2>
          <p className="font-light text-xl tracking-normal">{description}</p>
        </div>
        <div className="relative self-end">
          <Link href={href} className={styles.ctaButton}>
            {ctaText}
            <FaAngleRight className="pl-2" />
          </Link>
        </div>
      </div>
    </div>
  </Fade>
);
