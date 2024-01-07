import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/sanity.config';
import styles from './CoverImage.module.scss';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { FC } from 'react';

interface CoverImageProps {
  title: string;
  image: SanityImageSource;
}

const CoverImage: FC<CoverImageProps> = ({ title, image }): JSX.Element => {
  const imageProps = useNextSanityImage(sanityConfig, image, {
    imageBuilder: () => urlForImage(image).height(1300).width(2000),
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
