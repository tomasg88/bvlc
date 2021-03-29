import React from "react"
import Layout from "../components/layout"
import { activeForceQuery } from "../lib/queries"
import { getClient } from "../lib/sanity.server"
import Hero from "../components/hero"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"

export default function CuerpoActivo({ list }) {
  return (
    <Layout>
      <div className="min-h-screen bg-red-900">
        <div className="relative p-12 pt-32 overflow-hidden text-left text-white bg-gray-900 md:text-center bg-opacity-95 ">
          <div className="mx-auto max-w-7xl">
            <h1 className="relative z-10 mb-2 font-sans text-4xl uppercase font-bolder">
              Cuerpo Activo
            </h1>
          </div>
          <BackgroundImage image={BG_CONSTANTS.team} opacity={20} />
        </div>

        <div id="integrantes" className="h-screen p-6 pt-2 mx-auto bg-white max-w-7xl ">
          <div className="grid gap-3 py-6 pb-24 mx-auto max-w-7xl md:grid-cols-4 sm:grid-cols-2">
            {list &&
              list.map((n) => (
                <Hero key={n._id} name={n.title} description={n.rank} image={n.image} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const list = await getClient(false).fetch(activeForceQuery)

  return {
    props: {
      list,
    },
  }
}
