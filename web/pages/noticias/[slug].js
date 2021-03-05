import Layout from "../../components/layout";
import { getClient, sanityClient } from "../../lib/sanity.server";
import { postQuery, postSlugsQuery } from '../../lib/queries'
import { urlForImage } from "../../lib/sanity";
import Head from "next/head";
import ArticleContent from "../../components/articleContent";
import Link from "next/link";

export default function Article(props) {
  const {article, moreArticles} = props.data;
  return (
    <Layout>
      {
        article && 
          <article className="text-center">
            <Head>
              <title>{article.title}</title>
              <meta
                key="ogImage"
                property="og:image"
                content={urlForImage(article.mainImage)
                  .width(1200)
                  .height(627)
                  .fit('crop')
                  .url()}
              />
            </Head>
            <ArticleContent
              title={article.title}
              mainImage={article.mainImage}
              dateString={article.publishedAt}
              body={article.body}
            />
          </article>
      }
      <hr className="border-accent-2 mt-28 mb-24" />
      <div>
        Otras noticias:
        {
          moreArticles && moreArticles.length > 0 &&
            moreArticles.map(ma => 
              <Link key={ma._id} href={`/noticias/${ma.slug}`}>
                <a>
                  {ma.title}
                </a>
              </Link>
            )
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })
  return {
    props: {
      preview,
      data: {
        article: post,
        moreArticles: morePosts
      },
    },
  }
}

// Returns ALL dynamic pages based on content
export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}