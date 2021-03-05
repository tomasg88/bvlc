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
      <div className="">
        <div className="relative py-32 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-bold">Noticias</h1>
          <BackgroundImage image="https://images.unsplash.com/photo-1522578755536-1e6830124399?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
        </div>

        <div className="grid max-w-6xl grid-cols-3 gap-3 p-2 mx-auto mt-6">
          {list &&
            list.map((n) => (
              <div key={n._id} className="p-3 text-4xl bg-white shadow-2xl">
                <Link href={router.pathname + "/" + n.slug.current}>
                  <a>
                    <div className="transition-opacity duration-500 hover:opacity-80">
                      <CoverImage title={n.title} image={n.mainImage} />
                    </div>
                    <h3 className="mt-6 font-sans text-3xl font-bold">{n.title}</h3>
                    <p className="mt-2 text-sm">{n.excerpt}</p>
                  </a>
                </Link>
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
