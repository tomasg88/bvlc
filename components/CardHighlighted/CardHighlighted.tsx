import { urlForImage } from 'lib/sanity.image';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { useWindowSize } from 'react-use';
import Fade from 'react-reveal/Fade';

import { sanityConfig } from 'lib/config';
import styles from './CardHighlighted.module.scss';
import { News } from 'types/News';

const CardHighlighted: FC<News> = ({ title, slug, mainImage }): JSX.Element => {
  const { width } = useWindowSize();
  const imageHeight = width <= 500 ? 1000 : 300;
  console.log({ width, imageHeight });
  const imgProps = useNextSanityImage(sanityConfig, mainImage);

  return (
    <Fade>
      <div className={styles.root}>
        <Link href={`/noticias/${slug}`} aria-label={title}>
          <Image
            {...imgProps}
            alt={title}
            className={styles.image}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <p className={styles.title}>{title}</p>
        </Link>
      </div>
    </Fade>
  );
};

export default CardHighlighted;
