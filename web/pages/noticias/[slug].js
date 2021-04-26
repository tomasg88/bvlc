import Layout from "../../components/layout"
import { getClient } from "../../lib/sanity.server"
import { postQuery, postSlugsQuery } from "../../lib/queries"
import { urlForImage } from "../../lib/sanity"
import ArticleContent from "../../components/articleContent"
import HorizontalCard from "../../components/Cards/horizontalCard"

export default function Article(props) {
  const { article, moreArticles } = props.data

  return (
    <Layout title={article.title} 
      image={urlForImage(article.mainImage).width(1200).height(627).fit("crop").url()}
      description={article.excerpt}
    >
      <div className="flex flex-col mx-auto bg-white">
        {article && (
          <article className="text-left">
            <ArticleContent
              title={article.title}
              mainImage={article.mainImage}
              dateString={article.publishedAt}
              body={article.body}
            />
          </article>
        )}
        <div className="flex flex-col w-full max-w-3xl px-4 py-6 mx-auto bg-white">
          <h3 className="pt-6 mb-3 font-sans text-3xl text-red-500 border-b border-red-600">Más noticias</h3>
          <div className="">
            {moreArticles &&
              moreArticles.length > 0 &&
              moreArticles.map((ma) => (
                <HorizontalCard {...ma} key={ma._id} />
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
  const paths = await getClient().fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })) || [],
    fallback: false,
  }
}
