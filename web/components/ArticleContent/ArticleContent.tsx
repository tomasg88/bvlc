import CoverImage from '../CoverImage/CoverImage';
import BlockContent from '@sanity/block-content-to-react';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import styles from 'styles/Article.module.css';
import { SRLWrapper } from 'simple-react-lightbox';
import PropTypes from 'prop-types';
import getYouTubeID from 'get-youtube-id';
import YouTube from 'react-youtube';
import { FC } from 'react';
import { sanityImagePropType } from 'utils/sanityPropType';
import { NewsBody } from 'interfaces/News';

const ArticleContent: FC<NewsBody> = ({
    title,
    mainImage,
    publishedAt,
    body,
}): JSX.Element => {
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
                return (
                    <div className={styles.videoResponsive}>
                        <YouTube videoId={id} />
                    </div>
                );
            },
        },
    };

    return (
        <>
            {title && mainImage && publishedAt && (
                <div className={styles.heroArticle}>
                    <div className={styles.heroImageContainer}>
                        <CoverImage title={title} image={mainImage} />
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
                            projectId={
                                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                            }
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

ArticleContent.defaultProps = {
    title: '',
    publishedAt: '',
};

ArticleContent.propTypes = {
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    mainImage: sanityImagePropType,
};

export default ArticleContent;
