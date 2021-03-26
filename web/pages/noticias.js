import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import Link from "next/link"
import { useRouter } from "next/router"
import { getClient } from "../lib/sanity.server"
import { allPostQuery } from "../lib/queries"
import CoverImage from "../components/coverImage"

export default function News({ list }) {
  const router = useRouter()
  return (
    <Layout>
      <div className="pb-24 bg-gray-200">
        <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Últimas noticias
          </h1>
          <Link href="cuerpo-activo">
            <a className="relative z-10 inline-block px-6 mx-auto mt-6 mr-3 cursor-pointer btn">
              Contribuciones
            </a>
          </Link>
          <Link href="cuerpo-activo">
            <a className="relative z-10 inline-block px-6 mx-auto mt-6 mr-3 cursor-pointer btn">
              Academia
            </a>
          </Link>
          <Link href="cuerpo-activo">
            <a className="relative z-10 inline-block px-6 mx-auto mt-6 mr-3 cursor-pointer btn">
              Equipamiento
            </a>
          </Link>
          <div
            className="absolute inset-0 z-0 hidden bg-fixed bg-no-repeat bg-cover opacity-50 md:block"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1522578755536-1e6830124399?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80)",
            }}
          ></div>
        </div>

        <div className="grid max-w-6xl gap-3 p-2 mx-auto mt-12 md:grid-cols-3 sm:grid-cols-2 ">
          {list &&
            list.map((n) => (
              <div
                key={n._id}
                className="relative overflow-hidden text-4xl duration-500 transform translate-y-0 bg-gray-100 rounded-md shadow-md hover:shadow-2xl hover:-translate-y-1 "
              >
                <Link href={router.pathname + "/" + n.slug.current}>
                  <a className="transition-all duration-500 hover:opacity-80">
                    <CoverImage title={n.title} image={n.mainImage} />
                  </a>
                </Link>
                <div className="px-6 py-3 pb-6">
                  <h3 className="font-sans text-xl font-bold">{n.title}</h3>
                  <p className="mt-2 text-base line-clamp-3">{n.excerpt}</p>
                  <Link href={`/noticias/${n.slug}`}>
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
  return {
    props: { list },
  }
}
