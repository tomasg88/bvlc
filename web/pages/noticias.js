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
        <div className="relative py-32 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">Últimas noticias</h1>
          <BackgroundImage image="https://images.unsplash.com/photo-1522578755536-1e6830124399?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
        </div>

        <div className="grid max-w-6xl gap-3 p-2 mx-auto mt-12 md:grid-cols-3 ">
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
                  <h3 className="font-sans text-3xl font-bold">{n.title}</h3>
                  <p className="mt-2 text-base">{n.excerpt}</p>
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
