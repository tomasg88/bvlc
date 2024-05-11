import React, { FC } from 'react';
import Image from 'next/image';
import styles from './CardSpecialty.module.scss';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/sanity.config';
import Zoom from 'react-reveal/Zoom';
import { Specialty } from 'types/News';
import { SanityAsset } from '@sanity/image-url/lib/types/types';

type CardSpecialtyProps = {
  cover: SanityAsset;
  onClick: () => void;
  title: Specialty['title'];
};

const CardSpecialty: FC<CardSpecialtyProps> = ({ cover, title, onClick }) => {
  const { src, loader } = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, cover);

  return (
    <Zoom>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <Image
            loader={loader}
            src={src}
            className={styles.img}
            onClick={onClick}
            alt={title}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="absolute bg-black w-full rounded-3xl h-full inset-0 opacity-50 pointer-events-none"></div>
          <div
            className={
              'flex w-full h-full items-center justify-center text-white text-2xl absolute tracking-wider pointer-events-none'
            }
          >
            <p className="w-80 text-center leading-10">{title}</p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default CardSpecialty;
