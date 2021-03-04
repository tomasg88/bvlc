import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import BackgroundImage from "../components/backgroundImage";
import Link from "next/link";
import { FaFireExtinguisher } from "react-icons/fa";

export default function Contact(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative w-full py-64 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 flex flex-col items-center justify-center font-sans text-6xl font-bold"><FaFireExtinguisher/>Contacto</h1>
          <BackgroundImage image="https://images.unsplash.com/photo-1453726007388-5df12357fcc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1388&q=80"/>
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
