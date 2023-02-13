import { urlForImage } from 'lib/sanity';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CardHighlighted.module.scss';
import Fade from 'react-reveal/Fade';
import { sanityImagePropType } from 'utils/sanityPropType';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/useWindowSizes';
import { News } from 'interfaces/News';

const CardHighlighted: FC<News> = ({ title, slug, mainImage }): JSX.Element => {
  const { width, isMobile } = useWindowSize();
  const imageHeight = isMobile || width <= 500 ? 1000 : 300;

  return (
    <Fade>
      <div className={styles.root}>
        <Link href={`/noticias/${slug}`} aria-label={title}>
          <Image
            alt={title}
            className={'rounded-md transition-all hover:opacity-80 w-full'}
            height={imageHeight}
            sizes={'maxWidth: 100vw'}
            src={urlForImage(mainImage).height(imageHeight).width(900).url()}
            width={900}
          />
          <p className={styles.title}>{title}</p>
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
