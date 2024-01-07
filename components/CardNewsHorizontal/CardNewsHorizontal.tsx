import { getDate, getMonth } from 'utils/dates';
import Link from 'next/link';
import CoverImage from 'components/CoverImage/CoverImage';
import styles from './CardNewsHorizontal.module.scss';
import { FC } from 'react';
import { News } from 'types/News';

const CardNewsHorizontal: FC<News> = ({
  title,
  mainImage,
  excerpt,
  slug,
  publishedAt,
}): JSX.Element => (
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
      <Link href={`/noticias/${slug}`} aria-label={title} className={styles.title}>
        {title}
      </Link>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  </div>
);

export default CardNewsHorizontal;
