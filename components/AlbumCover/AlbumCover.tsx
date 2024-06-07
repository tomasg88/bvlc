import React, { FC } from 'react';
import Image from 'next/image';
import { MdPhotoCamera } from 'react-icons/md';
import styles from './AlbumCover.module.scss';
import { sanityConfig } from 'lib/sanity.config';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import { Album } from 'types/News';
import { urlForImage } from 'lib/sanity.image';

const AlbumCover: FC<Album> = ({ cover, title, description, onClick }): JSX.Element => {
  const { src, loader } = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, cover, {
    imageBuilder: () => urlForImage(cover).width(512),
  });

  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <Image alt={title} className={styles.img} fill loader={loader} sizes="100vw" src={src} />
      </div>
      <div onClick={onClick} className={styles.infoContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.ctaButton}>
          <MdPhotoCamera className={styles.icon} />
          <span className={styles.buttonText}>Abrir galería</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCover;
