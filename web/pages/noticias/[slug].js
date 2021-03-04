import Layout from "../../components/layout";
import { getClient, sanityClient } from "../../lib/sanity.server";
import { postQuery, postSlugsQuery } from '../../lib/queries'

export default function Article(props) {
  console.log("🚀 ~ file: [slug].js ~ line 7 ~ Article ~ props", props)
  const {article, moreArticles} = props.data;

  return (
    <Layout>
      {
        article && 
          <article className="text-center">
            <h1>{article.title}</h1>
            <br />
            <p>{article.excerpt}</p>
          </article>
      }
      <div>
        Otras noticias:
        {
          moreArticles.length > 0 &&
            moreArticles.map(ma => <h3 key={ma._id}>{ma.title}</h3>)
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const res = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })
  console.log("🚀 ~ file: [slug].js ~ line 27 ~ res ~ res", res)

  const { post, morePosts } = res;

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

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}