import Image from 'next/image';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/sanity.config';
import { urlForImage } from 'lib/sanity.image';

import BlockContent from '@sanity/block-content-to-react';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import styles from 'styles/Article.module.css';
import { SRLWrapper } from 'simple-react-lightbox';
import getYouTubeID from 'get-youtube-id';
import ReactPlayer from 'react-youtube';
import { FC } from 'react';
import { NewsBody } from 'types/News';

const ArticleContent: FC<NewsBody> = ({ title, mainImage, publishedAt, body }): JSX.Element => {
  const date = parseISO(publishedAt);

  const options = {
    settings: {
      overlayColor: 'rgb(255, 255, 255)',
    },
  };

  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node;
        const id = getYouTubeID(url);
        if (!id) return null;
        return (
          <div className={styles.videoResponsive}>
            <ReactPlayer id={id} />
          </div>
        );
      },
    },
  };

  const imageProps = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, mainImage, {
    imageBuilder: () => urlForImage(mainImage).height(1300).width(2000),
  });

  return (
    <>
      {title && mainImage && publishedAt && (
        <div className={styles.heroArticle}>
          <div className={styles.heroImageContainer}>
            <Image
              alt={`Cover Image for ${title}`}
              {...imageProps}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className={styles.heroBox}>
            <h1 className={styles.heroText}>{title}</h1>
            {publishedAt && (
              <div className={styles.publishedAt}>
                Publicado el{' '}
                <time dateTime={publishedAt}>
                  {format(date, 'do LLLL, yyyy', {
                    locale: es,
                  })}
                </time>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.mainContent}>
        <SRLWrapper options={options}>
          <article className={styles.articleText}>
            <BlockContent
              blocks={body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              imageOptions={{ w: 1200, fit: 'fill' }}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              serializers={serializers}
            />
          </article>
        </SRLWrapper>
      </div>
    </>
  );
};

export default ArticleContent;
