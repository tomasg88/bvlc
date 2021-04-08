import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import { getClient } from "../lib/sanity.server"
import { contactDataQuery } from "../lib/queries"
import { Context } from "../components/context"
import { useContext } from "react"
import RrssIcon from "../components/rrssIcon"
import { BG_CONSTANTS, MAPS_URL } from "../utils/constants"

const ContactItem = ({ title, value }) => (
  <div className="px-12 border-t border-red-400">
    <dl>
      <div className="px-4 py-5 text-xl text-center md:text-left sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="mt-1 text-base font-medium text-gray-500 uppercase">{title}</dt>
        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
      </div>
    </dl>
  </div>
)

export default function Contact({ phones, mails }) {
  const [rrss] = useContext(Context)
  return (
    <Layout>
      <div className={styles.container}>
        <div className="relative flex items-start justify-center w-full pb-32 overflow-hidden text-left text-gray-800 bg-gray-900 md:pt-12 md:items-start ">
          <div className="relative z-50 w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl md:mt-12">
            <h1 className="relative z-10 flex flex-col items-center justify-between px-10 pt-12 pb-4 font-sans text-6xl font-light text-gray-700 bg-gray-100 pattern-vertical-lines-x ">
              Contacto{" "}
              <small className="mt-3 text-lg font-bold opacity-80">
                24hs / 365 días
              </small>
            </h1>
            <div className="mb-6">
              {phones &&
                phones.map((p) => (
                  <ContactItem key={p._id} title={p.title} value={p.value} />
                ))}
              {mails &&
                mails.map((m) => (
                  <ContactItem key={m._id} title={m.title} value={m.value} />
                ))}
              <div className="px-12 border-t border-red-400">
                <dl>
                  <div className="px-4 py-5 text-xl text-center md:text-left sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="mt-1 text-base font-medium text-gray-500 uppercase">Redes sociales</dt>
                    <dd className="flex items-center justify-center mt-1 text-gray-900 md:justify-start sm:mt-0">
                      {rrss.map((rs) => (
                        <RrssIcon
                          className={"mr-6 text-3xl"}
                          key={rs._id}
                          rrss={rs.rrss}
                          url={rs.rrssUrl}
                        />
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <iframe
              src={MAPS_URL}
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <BackgroundImage image={BG_CONSTANTS.doors} opacity={20} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { phones, mails } = await getClient(false).fetch(contactDataQuery)
  return {
    props: {
      phones,
      mails,
    },
  }
}
