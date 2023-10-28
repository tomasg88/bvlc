import { urlForImage } from 'lib/sanity';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/config';
import styles from './CardHighlighted.module.scss';
import Fade from 'react-reveal/Fade';
import { sanityImagePropType } from 'utils/sanityPropType';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/useWindowSizes';
import { News } from 'interfaces/News';

const CardHighlighted: FC<News> = ({ title, slug, mainImage }): JSX.Element => {
  const { width, isMobile } = useWindowSize();
  const imageHeight = isMobile || width <= 500 ? 1000 : 300;

  const imgProps = useNextSanityImage(sanityConfig, mainImage, {
    imageBuilder: () => urlForImage(mainImage).size(900, imageHeight),
  });

  return (
    <Fade>
      <div className={styles.root}>
        <Link href={`/noticias/${slug}`} legacyBehavior>
          <a aria-label={title}>
            <Image {...imgProps} alt={title} className={styles.image} />
            <p className={styles.title}>{title}</p>
          </a>
        </Link>
      </div>
    </Fade>
  );
};

CardHighlighted.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  mainImage: sanityImagePropType,
};

export default CardHighlighted;
