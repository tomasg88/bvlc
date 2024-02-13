import React, { FC } from 'react';
import Image from 'next/image';
import { MdPhotoCamera } from 'react-icons/md';
import BlockContent from '@sanity/block-content-to-react';
import styles from './CardEquipment.module.scss';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/sanity.config';
import { Equipment } from 'types/News';

const CardEquipment: FC<Equipment> = ({ body, cover, onClick, title }): JSX.Element => {
  const { src, loader } = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, cover);
  return (
    <div className={styles.card}>
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
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <BlockContent
          blocks={body}
          className={styles.excerpt}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          imageOptions={{ w: 1200, fit: 'fill' }}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        />
        <div onClick={onClick} className={styles.action}>
          <MdPhotoCamera className="w-6 h-6 " />
          <span className="ml-3">Ver galería</span>
        </div>
      </div>
    </div>
  );
};

export default CardEquipment;
