import Layout from "../../components/layout"
import { getClient, sanityClient } from "../../lib/sanity.server"
import { postQuery, postSlugsQuery } from "../../lib/queries"
import { urlForImage } from "../../lib/sanity"
import Head from "next/head"
import ArticleContent from "../../components/articleContent"
import Link from "next/link"
import { SRLWrapper } from "simple-react-lightbox"

export default function Article(props) {
  const { article, moreArticles } = props.data
  const options = {
    settings: {
      overlayColor: "rgb(255, 255, 255)",
    },
  }
  return (
    <Layout>
      <div className="flex flex-col mx-auto bg-white">
        {article && (
          <article className="text-left">
            <Head>
              <title>{article.title}</title>
              <meta
                key="ogImage"
                property="og:image"
                content={urlForImage(article.mainImage)
                  .width(1200)
                  .height(627)
                  .fit("crop")
                  .url()}
              />
            </Head>
            <SRLWrapper options={options}>
              <ArticleContent
                title={article.title}
                mainImage={article.mainImage}
                dateString={article.publishedAt}
                body={article.body}
              />
            </SRLWrapper>
          </article>
        )}
        <div className="flex flex-col w-full max-w-xl px-4 py-6 mx-auto bg-white">
          <h3 className="font-sans text-2xl">Últimas noticias</h3>
          <div className="grid gap-2 md:grid-cols-3">
            {moreArticles &&
              moreArticles.length > 0 &&
              moreArticles.map((ma) => (
                <Link key={ma._id} href={`/noticias/${ma.slug}`}>
                  <a className="py-3 mb-3 border-b border-gray-400">{ma.title}</a>
                </Link>
              ))}
          </div>
        </div>
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
        moreArticles: morePosts,
      },
    },
  }
}

// Returns ALL dynamic pages based on content
export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  console.log("🚀 ~ file: [slug].js ~ line 71 ~ getStaticPaths ~ paths", paths)
  return {
    paths: paths.map((slug) => ({ params: { slug } })) || [],
    fallback: false,
  }
}
