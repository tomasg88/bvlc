import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Bomberos Voluntarios <br />
            de <a href="https://nextjs.org">Luján de Cuyo</a>
          </h1>
        </main>
      </div>
    </Layout>
  );
}
