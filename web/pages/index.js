import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full ">
          <div className="py-64 text-center text-white bg-gray-900">
            <h1 className="max-w-3xl mx-auto text-6xl">
              Bomberos Voluntarios de
              <span className="ml-3 opacity-50" href="https://nextjs.org">
                Luján de Cuyo
              </span>
            </h1>
          </div>
          <div className="pt-12 bg-white">
            <Link href="/news">
              <a className="block max-w-6xl pt-12 pb-6 mx-auto font-mono text-6xl text-red-500">
                Ver Noticias
              </a>
            </Link>
            <div className="grid max-w-6xl grid-cols-3 gap-3 px-2 py-6 mx-auto mt-6">
              {props.news &&
                props.news.map((n) => (
                  <div className="p-3 text-4xl bg-gray-100 shadow-md ">
                    <h3 className="font-mono text-3xl font-bold">{n.title}</h3>
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
  return {
    props: {
      news: [
        {
          title: "noticia1",
          text: "prueba1",
        },
        {
          title: "noticia2",
          text: "prueba2",
        },
        {
          title: "noticia3",
          text: "prueba3",
        },
      ],
    },
  };
}
