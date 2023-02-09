import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/config';
import styles from './CoverImage.module.scss';
import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { FC } from 'react';

interface IProp {
  title: string;
  image: SanityImageSource;
}

const CoverImage: FC<IProp> = ({ title, image }): JSX.Element => {
  const imageProps = useNextSanityImage(sanityConfig, image, {
    imageBuilder: () => urlForImage(image).height(1300).width(2000),
  });

  return (
    <div className={styles.root}>
      {image ? (
        <Image
          width={2000}
          height={1300}
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

CoverImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: sanityImagePropType,
};

export default CoverImage;
