import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/layout"
import HomeCarousel from "../components/homeCarousel"
import Link from "next/link"
import { getClient } from "../lib/sanity.server"
import { indexQuery } from "../lib/queries"
import CoverImage from "../components/coverImage"

export default function Home({ news }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full ">
          <HomeCarousel />
          {/*<HomeCarousel arrows={true} />*/}
          <div className="bg-gray-100">
            <div className="flex flex-col items-center justify-center max-w-6xl pt-24 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
              <h2 className="text-5xl font-light !bg-red-500 text-center text-gray-900 ">
                Últimas noticias
              </h2>
            </div>
            <div className="grid max-w-6xl gap-3 p-8 pb-12 mx-auto mt-6 md:grid-cols-3 sm:grid-cols-2">
              {news &&
                news.map((n) => (
                  <div
                    key={n._id}
                    className="relative overflow-hidden text-4xl duration-500 transform translate-y-0 bg-white rounded-md shadow-md hover:shadow-2xl hover:-translate-y-2 "
                  >
                    <Link href={`/noticias/${n.slug}`}>
                      <a
                        aria-label={n.title}
                        className="transition-all duration-500 hover:opacity-80"
                      >
                        <CoverImage title={n.title} image={n.mainImage} />
                      </a>
                    </Link>
                    <div className="px-6 py-3 pb-8">
                      <h3 className="font-sans text-lg font-bold md:text-xl">
                        {n.title}
                      </h3>
                      <p className="my-2 text-base line-clamp-4">{n.excerpt}</p>
                      <Link href={`/noticias/${n.slug}`}>
                        <a className="relative z-10 block mt-6 text-base text-center btn">
                          Leer nota completa
                        </a>
                      </Link>
                    </div>
                  </div>
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
  const { news, lastMembers, lastLeaders } = await getClient(false).fetch(indexQuery)
  return {
    props: {
      news,
      lastMembers,
      leadership: lastLeaders,
    },
  }
}
