import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/layout"
// import InfoRows from "../components/infoRows"
import HomeCarousel from "../components/homeCarousel"
import Link from "next/link"
import { getClient } from "../lib/sanity.server"
import { indexQuery } from "../lib/queries"
import CoverImage from "../components/coverImage"

export default function Home({ news, lastMembers, leadership }) {
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
            <div className="flex flex-col items-center justify-between max-w-6xl pt-12 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
              <h2 className="text-5xl font-light text-center text-gray-900 md:text-left">
                Últimas noticias
              </h2>
              <Link href="/noticias">
                <a className="relative z-10 px-6 mt-3 btn ">Ver todas las Noticias</a>
              </Link>
            </div>
            <div className="grid max-w-6xl gap-3 p-8 pb-24 mx-auto mt-6 md:grid-cols-3 sm:grid-cols-2">
              {news &&
                news.map((n) => (
                  <div
                    key={n._id}
                    className="relative overflow-hidden text-4xl duration-500 transform translate-y-0 bg-white rounded-md shadow-md hover:shadow-2xl hover:-translate-y-2 "
                  >
                    <Link href={`/noticias/${n.slug}`}>
                      <a aria-label={n.title} className="transition-all duration-500 hover:opacity-80">
                        <CoverImage title={n.title} image={n.mainImage} />
                      </a>
                    </Link>
                    <div className="px-6 py-3 pb-8">
                      <h3 className="font-sans text-lg font-bold md:text-xl">
                        {n.title}
                      </h3>
                      <p className="my-2 text-base line-clamp-3">{n.excerpt}</p>
                      <Link href={`/noticias/${n.slug}`}>
                        <a className="relative z-10 mt-6 text-base btn">
                          Leer nota completa
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/*
           <InfoRows />
           */}

          {/* <div className="hidden pt-12 bg-white md:block ">
            <Link href="/cuerpo-activo">
              <a className="block max-w-6xl pt-12 pb-6 mx-auto font-sans text-6xl font-bold text-red-500 hover:text-red-600">
                Nuevos miembros
              </a>
            </Link>
            <div className="grid max-w-6xl grid-cols-3 gap-3 px-2 py-6 mx-auto mt-6">
              {lastMembers &&
                lastMembers.map((n) => (
                  <div key={n._id} className="p-3 text-4xl bg-gray-100 shadow-md ">
                    <h3 className="font-sans text-3xl font-bold">{n.title}</h3>
                    <p className="mt-2 text-xl">{n.text}</p>
                  </div>
                ))}
            </div>
          </div> */}
          {/* <div className="hidden pt-12 bg-white md:block ">
            <Link href="/comision-directiva">
              <a className="block max-w-6xl pt-12 pb-6 mx-auto font-sans text-6xl font-bold text-red-500 hover:text-red-600">
                Comisión directiva
              </a>
            </Link>
            <div className="grid max-w-6xl grid-cols-3 gap-3 px-2 py-6 mx-auto mt-6">
              {leadership &&
                leadership.map((n) => (
                  <div key={n._id} className="p-3 text-4xl bg-gray-100 shadow-md ">
                    <h3 className="font-sans text-3xl font-bold">{n.title}</h3>
                    <p className="mt-2 text-xl">{n.text}</p>
                  </div>
                ))}
            </div>
          </div> */}
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
