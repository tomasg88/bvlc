import { getDate, getMonth } from 'utils/dates';
import Link from 'next/link';
import CoverImage from 'components/CoverImage/CoverImage';
import styles from './CardNewsHorizontal.module.scss';
import PropTypes from 'prop-types';

function CardNewsHorizontal({ title, mainImage, excerpt, slug, publishedAt }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                {mainImage && (
                    <Link href={`/noticias/${slug}`}>
                        <a aria-label={title}>
                            <CoverImage title={title} image={mainImage} />
                        </a>
                    </Link>
                )}
                <time className={styles.time}>
                    {getDate(publishedAt)}/
                    <span className="capitalize">{getMonth(publishedAt)}</span>
                </time>
            </div>
            <div className={styles.content}>
                <Link href={`/noticias/${slug}`}>
                    <a aria-label={title} className={styles.title}>
                        {title}
                    </a>
                </Link>
                <p className={styles.excerpt}>{excerpt}</p>
            </div>
        </div>
    );
}

CardNewsHorizontal.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    slug: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
};

export default CardNewsHorizontal;
