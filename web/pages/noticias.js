import React from "react"
import Layout from "../components/layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { getClient } from "../lib/sanity.server"
import { allPostQuery } from "../lib/queries"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"
import Card from "../components/cardNews"

export default function News({ list }) {
  const router = useRouter()
  return (
    <Layout title="Noticias">
      <div className="pb-24 bg-gray-100">
        <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Últimas noticias
          </h1>
          <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
          <div className="bottom-0 left-0 right-0 flex flex-col justify-center w-full max-w-3xl p-6 pb-8 mx-auto sm:space-x-4 sm:flex-row sm:absolute ">
            <Link href="/academia">
              <a className="relative z-10 block mt-6 text-base text-center uppercase btn">
                Academia
              </a>
            </Link>
            <Link href="/institucional">
              <a className="relative z-10 block mt-6 text-base text-center uppercase btn">
                Equipamiento
              </a>
            </Link>
          </div>
        </div>

        <div className="grid max-w-6xl gap-3 p-2 mx-auto mt-12 md:grid-cols-3 sm:grid-cols-2 ">
          {list && list.map((n) => <Card {...n} key={n._id} />)}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const list = await getClient(false).fetch(allPostQuery)
  return {
    props: { list },
  }
}
