import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";

export default function Contact(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full py-24 text-center text-white bg-gray-800 ">
          <h1 className="font-sans text-6xl font-bold">Contacto</h1>
        </div>
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
