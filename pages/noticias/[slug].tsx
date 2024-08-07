import Layout from 'components/Layout/Layout';
import { sanityClient } from 'lib/sanity.client';
import { postQuery, postSlugsQuery } from 'lib/sanity.queries';
import { urlForImage } from 'lib/sanity.image';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import CardNewsHorizontal from 'components/CardNewsHorizontal/CardNewsHorizontal';
import { FC } from 'react';
import { SlugType } from 'types/models';
import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import { useNextSanityImage, SanityClientOrProjectDetails } from 'next-sanity-image';
import { sanityConfig } from 'lib/sanity.config';

const Article: FC<SlugType> = ({ article, moreArticles }): JSX.Element => {
  const imageProps = useNextSanityImage(
    sanityConfig as SanityClientOrProjectDetails,
    article.mainImage,
    {
      imageBuilder: () => urlForImage(article.mainImage).width(2000).height(1300),
    }
  );

  return (
    <Layout title={article.title} image={imageProps.src} description={article.excerpt}>
      <div className="flex flex-col mx-auto bg-white">
        {article && (
          <article className="text-left">
            <ArticleContent
              title={article.title}
              mainImage={article.mainImage}
              publishedAt={article.publishedAt}
              body={article.body}
            />
          </article>
        )}
        <div className="flex flex-col w-full max-w-3xl px-4 py-6 mx-auto bg-white">
          <h3 className="pt-6 mb-3 text-3xl text-red-500 border-b border-red-600">Más noticias</h3>
          <div className="">
            {moreArticles &&
              moreArticles.length > 0 &&
              moreArticles.map((ma) => <CardNewsHorizontal {...ma} key={ma._id} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
  preview?: boolean;
}): Promise<GetStaticPropsResult<SlugType>> {
  const { post, morePosts } = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  });
  return {
    props: {
      article: post,
      moreArticles: morePosts,
    },
  };
}

// Returns ALL dynamic pages based on content
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })) || [],
    fallback: false,
  };
}
