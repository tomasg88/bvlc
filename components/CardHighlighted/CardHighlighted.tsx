import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import Fade from 'react-reveal/Fade';

import { sanityConfig } from 'lib/sanity.config';
import styles from './CardHighlighted.module.scss';
import { News } from 'types/models';

// TODO - restore usage of imageBuilder to highlight this news with
// the hook useNextSanityImage
const CardHighlighted: FC<News> = ({ title, slug, mainImage }): JSX.Element => {
  const imgProps = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, mainImage);

  return (
    <Fade>
      <div className={styles.root}>
        <Link href={`/noticias/${slug}`} aria-label={title}>
          <Image
            {...imgProps}
            alt={title}
            className={styles.image}
            style={{
              width: '100%',
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
