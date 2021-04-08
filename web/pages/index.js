import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/layout"
import HomeCarousel from "../components/heroCarousel"
import Card from "../components/cardNews"
import Link from "next/link"
import { getClient } from "../lib/sanity.server"
import { indexQuery } from "../lib/queries"
import Fade from "react-reveal/Fade"

export default function Home({ recentNews }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full ">
          <HomeCarousel arrows={false} />
          <div className="bg-gray-100">
            <div className="flex flex-col items-center justify-center max-w-6xl pt-24 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
              <Fade cascade>
                <h2 className="text-5xl font-light text-center text-gray-900 ">
                  Últimas noticias
                </h2>
              </Fade>
            </div>
              <div className="grid max-w-6xl gap-3 p-8 pb-12 mx-auto mt-6 md:grid-cols-3 sm:grid-cols-2">
                {recentNews &&
                  recentNews.map((n) => (
                    <Fade>
                      <Card {...n} key={n._id} />
                    </Fade>
                  ))}
              </div>
            <div className="flex flex-col items-center justify-between max-w-6xl pb-24 mx-auto font-sans">
              <Link href="/noticias">
                <a className="relative z-10 px-8 py-3 mt-3 text-2xl font-bold text-red-600 bg-gray-100 border-b-2 border-red-600 rounded-md hover:bg-red-600 hover:text-white ">
                  Ver todas las Noticias
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const { recentNews } = await getClient(false).fetch(indexQuery)
  return {
    props: {
      recentNews
    },
  }
}
