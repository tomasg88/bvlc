import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';
import styles from './MediaObject.module.scss';
import { sanityConfig } from 'lib/config';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { FC } from 'react';

interface IProp {
  name: string;
  description: string;
  image: SanityImageSource;
}

const MediaObject: FC<IProp> = ({ name, description, image }): JSX.Element => {
  const NO_PROFILE_IMAGE = '/no-profile-image.png';
  let imageProps = { src: '' };
  try {
    imageProps = useNextSanityImage(sanityConfig, image);
  } catch (error) {
    imageProps.src = NO_PROFILE_IMAGE;
  }

  return (
    <figure id="hero" className={styles.root}>
      <div className={styles.imageContainer}>
        <Image
          src={imageProps.src}
          height={100}
          width={100}
          alt={name}
          className={styles.image}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className={styles.dataContainer}>
        <figcaption className={styles.data}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </figcaption>
      </div>
    </figure>
  );
};

MediaObject.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: sanityImagePropType,
};

export default MediaObject;
