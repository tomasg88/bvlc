import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import CoverImage from '../coverImage';
import styles from './CardNewsHorizontal.module.scss';

const getDate = (date) => {
    const day = '0' + format(parseISO(date), 'd', { locale: es });
    return day.slice(-2);
};

const getMonth = (date) => format(parseISO(date), 'LLL', { locale: es });

// title, mainImage, excerpt, slug
export default function HorizontalCard({
    title,
    mainImage,
    excerpt,
    slug,
    publishedAt,
}) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                {mainImage ? (
                    <Link href={`/noticias/${slug}`}>
                        <a aria-label={title}>
                            <CoverImage title={title} image={mainImage} />
                        </a>
                    </Link>
                ) : (
                    <></>
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
