import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";
import { getClient } from "../lib/sanity.server";
import { indexQuery } from "../lib/queries";

export default function Home({news, lastMembers, leadership}) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full ">
          <div className="relative flex flex-col py-40 overflow-hidden text-center text-white bg-gray-700">
            <div className="relative z-10 max-w-3xl mx-auto text-4xl">
              Bomberos Voluntarios al servicio de la comunidad de
              <span className="ml-3 opacity-50" href="https://nextjs.org">
                Luján de Cuyo
              </span>
            </div>
            <Link href="/comision-directiva">
              <a className="relative z-10 max-w-xs mx-auto mt-6 btn">Conocé más sobre nosotros</a>
            </Link>
            <div className="absolute inset-0 z-0 opacity-30">
              <img
                className="object-cover w-full h-screen"
                src="https://images.unsplash.com/photo-1504591416434-49dfd16b211c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              />
            </div>
          </div>
          <div className="pt-12 bg-white">
            <Link href="/noticias">
              <a className="block max-w-6xl pt-12 pb-6 mx-auto font-sans text-6xl font-bold text-red-500">
                Últimas Noticias
              </a>
            </Link>
            <div className="grid max-w-6xl grid-cols-3 gap-3 px-2 py-6 mx-auto mt-6">
              {news &&
                news.map((n) => (
                  <div key={n._id} className="p-3 text-4xl bg-gray-100 shadow-md ">
                    <Link href={`/noticias/${n.slug}`}>
                      <a>
                        <h3 className="font-sans text-3xl font-bold">{n.title}</h3>
                        <p className="mt-2 text-sm">{n.excerpt}</p>
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="pt-12 bg-white">
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
          </div>
          <div className="pt-12 bg-white">
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
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const {news, lastMembers, lastLeaders} = await getClient(false).fetch(indexQuery);
  return {
      props: {
          news,
          lastMembers,
          leadership: lastLeaders
      },
  };
}
