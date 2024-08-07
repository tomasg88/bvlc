import { getDate, getMonth } from 'utils/dates';
import Link from 'next/link';
import CoverImage from '../CoverImage/CoverImage';
import styles from './CardNews.module.scss';
import Fade from 'react-reveal/Fade';
import { FC } from 'react';
import { News } from 'types/models';

const CardNews: FC<News> = ({ title, mainImage, excerpt, slug, publishedAt }): JSX.Element => (
  <Fade>
    <div className={styles.card}>
      <div className={styles.image}>
        {mainImage && (
          <Link href={`/noticias/${slug}`} aria-label={title}>
            <CoverImage title={title} image={mainImage} />
          </Link>
        )}
        <time className={styles.time}>
          {getDate(publishedAt)}/<span className="capitalize">{getMonth(publishedAt)}</span>
        </time>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`/noticias/${slug}`} className={styles.action}>
          Leer nota completa
        </Link>
      </div>
    </div>
  </Fade>
);

export default CardNews;
