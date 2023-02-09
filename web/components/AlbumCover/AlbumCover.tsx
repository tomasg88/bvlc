import React, { FC } from 'react';
import Image from 'next/image';
import { MdPhotoCamera } from 'react-icons/md';
import styles from './AlbumCover.module.scss';
import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';
import { sanityConfig } from 'lib/config';
import { useNextSanityImage } from 'next-sanity-image';
import { Album } from 'interfaces/News';

const AlbumCover: FC<Album> = ({ cover, title, description, onClick }): JSX.Element => {
  const { src, loader } = useNextSanityImage(sanityConfig, cover);

  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <Image
          loader={loader}
          src={src}
          className={styles.img}
          alt={title}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
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

AlbumCover.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: sanityImagePropType.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AlbumCover;
