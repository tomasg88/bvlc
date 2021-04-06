import React from "react"
import Layout from "../components/layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { getClient } from "../lib/sanity.server"
import { allPostQuery } from "../lib/queries"
import CoverImage from "../components/coverImage"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"

export default function News({ list }) {
  const router = useRouter()
  return (
    <Layout>
      <div className="pb-24 bg-gray-100">
        <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Últimas noticias
          </h1>
          <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
          <div className="bottom-0 left-0 right-0 flex flex-col w-full max-w-xl p-6 pb-0 mx-auto sm:space-x-4 sm:flex-row sm:absolute ">
            <Link href="/institucional">
              <a className="relative z-10 flex flex-col items-center justify-center w-full p-3 px-6 mx-auto mt-6 text-red-600 duration-100 bg-gray-100 shadow-sm rounded-t-md hover:bg-red-600 hover:text-red-100 hover:shadow-lg">
                <span className="text-lg font-bold uppercase">Contribuciones</span>
              </a>
            </Link>
            <Link href="/institucional">
              <a className="relative z-10 flex flex-col items-center justify-center w-full p-3 px-6 mx-auto mt-6 text-red-600 duration-100 bg-gray-100 shadow-sm rounded-t-md hover:bg-red-600 hover:text-red-100 hover:shadow-lg">
                <span className="text-lg font-bold uppercase">Academia</span>
              </a>
            </Link>
            <Link href="/institucional">
              <a className="relative z-10 flex flex-col items-center justify-center w-full p-3 px-6 mx-auto mt-6 text-red-600 duration-100 bg-gray-100 shadow-sm rounded-t-md hover:bg-red-600 hover:text-red-100 hover:shadow-lg">
                <span className="text-lg font-bold uppercase">Equipamiento</span>
              </a>
            </Link>
          </div>
        </div>
        
        <div className="grid max-w-6xl gap-3 p-2 mx-auto mt-12 md:grid-cols-3 sm:grid-cols-2 ">
          {list &&
            list.map((n) => (
              <div
                key={n._id}
                className="relative overflow-hidden text-4xl duration-500 transform translate-y-0 bg-white rounded-md shadow-md hover:shadow-2xl hover:-translate-y-1 "
              >
                <Link href={router.pathname + "/" + n.slug.current}>
                  <a className="transition-all duration-500 hover:opacity-80">
                    <CoverImage title={n.title} image={n.mainImage} />
                  </a>
                </Link>
                <div className="px-6 py-3 pb-6">
                  <h3 className="font-sans text-xl font-bold">{n.title}</h3>
                  <p className="mt-2 text-base line-clamp-4">{n.excerpt}</p>
                  <Link href={router.pathname + "/" + n.slug.current}>
                    <a className="relative z-10 mt-6 text-base btn">Leer nota completa</a>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const list = await getClient(false).fetch(allPostQuery)
  // just a test
  return {
    props: { list },
  }
}
