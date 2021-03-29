import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import { getClient } from "../lib/sanity.server"
import { contactDataQuery } from "../lib/queries"
import { Context } from "../components/context"
import { useContext } from "react"
import RrssIcon from "../components/rrssIcon"
import { BG_CONSTANTS } from "../utils/constants"

const ContactItem = ({ title, value }) => (
  <div className="border-t border-red-400">
    <dl>
      <div className="py-5 text-lg pxxl sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="font-medium text-gray-500">{ title }</dt>
        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
          { value }
        </dd>
      </div>
    </dl>
  </div>
)

export default function Contact({ phones, mails }) {
  const [rrss] = useContext(Context)
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bomberos Voluntarios de Luján de Cuyo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative flex items-start justify-center w-full min-h-screen overflow-hidden text-left text-gray-800 bg-gray-900 md:items-center ">
          <div className="relative z-50 max-w-4xl px-12 py-12 mx-auto mt-12 bg-white shadow-2xl">
            <h1 className="relative z-10 flex flex-col items-center mb-6 font-sans text-6xl font-light md:flex-row">
              Contacto <small className="mt-3 ml-6 text-lg font-bold opacity-80">24hs / 365 días</small>
            </h1>
            <p className="my-3 text-2xl font-light">
              Institución bomberil abocada desde 1968 a salvar vidas y bienes de la
              comunidad lujanina.
            </p>
            <div>
              {
                phones && phones.map(p => <ContactItem key={p._id} title={p.title} value={p.value} />)
              }
              {
                mails && mails.map(m => <ContactItem key={m._id} title={m.title} value={m.value} />)
              }
              <div className="border-t border-red-400">
                <dl>
                  <div className="px-4 py-5 text-xl sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="font-medium text-gray-500">Nuestras redes</dt>
                    <dd className="flex items-center mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                      { rrss.map(rs => <RrssIcon className={"mr-3 text-3xl"} key={rs._id} rrss={rs.rrss} url={rs.rrssUrl} />) }
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          
            <BackgroundImage image={BG_CONSTANTS.doors} opacity={90} />
          
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { phones, mails } = await getClient(false).fetch(contactDataQuery);
  return {
    props: {
      phones, mails
    }
  }
}