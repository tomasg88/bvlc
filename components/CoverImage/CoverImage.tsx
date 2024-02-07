import { FC } from 'react';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity.image';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/sanity.config';
import styles from './CoverImage.module.scss';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface CoverImageProps {
  title: string;
  image: SanityImageSource;
}

const CoverImage: FC<CoverImageProps> = ({ title, image }): JSX.Element => {
  const imageProps = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, image, {
    imageBuilder: () => urlForImage(image).height(260).width(400),
  });

  return (
    <div className={styles.root}>
      {image ? (
        <Image
          alt={`Cover Image for ${title}`}
          className={styles.image}
          {...imageProps}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      ) : (
        <div className={styles.default} />
      )}
    </div>
  );
};

export default CoverImage;
