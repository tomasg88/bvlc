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

const Overlay = () => (
  <div className="absolute bg-black w-full rounded-3xl h-full inset-0 opacity-60 pointer-events-none"></div>
);

const CardSpecialty: FC<CardSpecialtyProps> = ({ cover, title, onClick }) => {
  const { src, loader, height, width } = useNextSanityImage(
    sanityConfig as SanityClientOrProjectDetails,
    cover
  );

  console.log({ height, width });

  return (
    <Zoom>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <Image
            alt={title}
            className={styles.img}
            height={height}
            width={width}
            loader={loader}
            onClick={onClick}
            quality={50}
            sizes="(max-width: 808px) 50vw, 75vw"
            src={src}
            style={{
              objectFit: 'cover',
            }}
          />
          <Overlay />
          <div
            className={
              'absolute inset-0 flex w-full h-full items-center justify-center text-white text-2xl tracking-wider pointer-events-none'
            }
          >
            <p className="w-80 text-center leading-10 z-50">{title}</p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default CardSpecialty;
