import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"

export default function Contact(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative flex items-start justify-center w-full min-h-screen overflow-hidden text-left text-gray-800 bg-gray-900 ">
          <div className="relative z-50 max-w-4xl px-12 py-12 mx-auto mt-12 bg-white shadow-2xl">
            <h1 className="relative z-10 flex flex-col mb-6 font-sans text-6xl font-light md:flex-row ">
              Contacto <small className="ml-2 text-lg font-bold opacity-80">24hs / 365 días</small>
            </h1>
            <p className="my-3 text-2xl font-light">
              Institución bomberil abocada desde 1968 a salvar vidas y bienes de la
              comunidad lujanina.
            </p>
            <div>
              <div class="border-t border-red-400">
                <dl>
                  <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-base font-medium text-gray-500">Emergencias</dt>
                    <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                    0261 498-0999
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="border-t border-red-400">
                <dl>
                  <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-base font-medium text-gray-500">Administrativo</dt>
                    <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                    0261 498-6341
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="border-t border-red-400">
                <dl>
                  <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-base font-medium text-gray-500">Email</dt>
                    <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                      info@bomberoslujanmza.com.ar
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="opacity-25">
          <BackgroundImage image="https://images.unsplash.com/photo-1453726007388-5df12357fcc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1388&q=80" />
          </div>
        </div>
      </div>
    </Layout>
  )
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
  }
}
