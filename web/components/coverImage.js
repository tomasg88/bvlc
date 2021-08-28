import Link from 'next/link';
import { urlForImage } from '../lib/sanity';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from '../lib/config';
import styles from './CoverImage.module.scss';

export default function CoverImage({ title, slug, image: source }) {
    const imageProps = useNextSanityImage(sanityConfig, source, {
        imageBuilder: () => urlForImage(source).height(1300).width(2000),
    });

    const image = source ? (
        <Image
            width={2000}
            height={1300}
            alt={`Cover Image for ${title}`}
            className={styles.image}
            {...imageProps}
        />
    ) : (
        <div className={styles.default} />
    );

    return (
        <div className={styles.root}>
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
