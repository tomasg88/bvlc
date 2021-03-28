import React from "react"
import Layout from "../components/layout"
import { activeForceQuery } from "../lib/queries"
import { getClient } from "../lib/sanity.server"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Hero from "../components/hero"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"

export default function CuerpoActivo({ list }) {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <div className="relative py-64 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 mb-6 font-sans text-2xl uppercase font-bolder">
            Cuerpo Activo
          </h1>
          <h1 className="relative z-10 font-sans text-6xl font-light">
            "Saber para servir"
          </h1>
          <AnchorLink
            href="#integrantes"
            className="relative z-10 inline-block px-6 mx-auto mt-6 cursor-pointer btn"
          >
            Ver integrantes
          </AnchorLink>
          <BackgroundImage image={BG_CONSTANTS.team} />
        </div>

        <div id="integrantes" className="max-w-6xl p-12 mx-auto mt-6 ">
          <div className="flex items-center justify-between max-w-6xl pt-12 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
            <h3 className="text-5xl font-light text-center text-gray-900 md:text-left">
              Integrantes
            </h3>
          </div>
          <div className="grid max-w-6xl gap-3 px-2 py-6 pb-24 mx-auto mt-6 md:grid-cols-3 sm:grid-cols-2">
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
