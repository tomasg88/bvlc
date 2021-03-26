import React from "react"
import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import { activeForceQuery } from "../lib/queries"
import { getClient } from "../lib/sanity.server"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Hero from "../components/hero"

export default function CuerpoActivo({ list }) {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
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
          <div
            className="absolute inset-0 z-0 hidden bg-fixed bg-no-repeat bg-cover opacity-50 md:block"
            style={{
              backgroundImage:
                "url(https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/145919140_2818111668437412_458251714749266980_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_Uh04GCrRwIAX9lA8eJ&_nc_ht=scontent.faep8-2.fna&oh=61058e52c7a6fb69343074be16bcb93f&oe=606826B9)",
            }}
          ></div>
        </div>
        <div id="integrantes" className="bg-white">
          <h2 className="max-w-2xl px-5 pt-12 mx-auto text-6xl font-light text-left text-gray-400">Integrantes</h2>
          <div className="grid max-w-2xl min-h-screen grid-cols-1 gap-3 p-2 mx-auto mt-6 bg-white ">
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
