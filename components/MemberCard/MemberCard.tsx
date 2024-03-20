import styles from './MemberCard.module.scss';
import { sanityConfig } from 'lib/sanity.config';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { FC } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { NO_PROFILE_IMAGE } from 'utils/constants';

type MemberCardProps = {
  name: string;
  description: string;
  image: SanityImageSource;
};

const MemberCard: FC<MemberCardProps> = ({ name, description, image }): JSX.Element => {
  const imageProps = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, image);

  const src = imageProps?.src || NO_PROFILE_IMAGE;

  return (
    <figure id="hero" className={styles.root}>
      <div className={styles.imageContainer}>
        <Image
          alt={name}
          className={styles.image}
          height={100}
          width={100}
          src={src}
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

export default MemberCard;
