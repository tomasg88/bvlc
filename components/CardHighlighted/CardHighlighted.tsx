import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import Fade from 'react-reveal/Fade';

import { sanityConfig } from 'lib/config';
import styles from './CardHighlighted.module.scss';
import { News } from 'types/News';

// TODO - restore usage of imageBuilder to highlight this news with
// the hook useNextSanityImage
const CardHighlighted: FC<News> = ({ title, slug, mainImage }): JSX.Element => {
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
