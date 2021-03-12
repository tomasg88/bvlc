import React from "react"
import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import { activeForceQuery } from "../lib/queries"
import { getClient } from "../lib/sanity.server"
import Link from "next/link"


export default function Institucional({ list }) {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="relative py-24 overflow-hidden text-center text-white bg-gray-800 ">
          <h4 className="relative z-10 mb-6 font-sans text-2xl uppercase font-bolder">
            institucional
          </h4>
          <h1 className="relative z-10 font-sans text-6xl font-light">
            "Saber para servir"
          </h1>
          <Link href="cuerpo-activo">
            <a className="relative z-10 inline-block px-6 mx-auto mt-6 mr-3 cursor-pointer btn">
              Cuerpo Activo
            </a>
          </Link>
          <Link href="comision-directiva">
            <a className="relative z-10 inline-block px-6 mx-auto mt-6 cursor-pointer btn">
              Comisión Directiva
            </a>
          </Link>
          <BackgroundImage image="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/145919140_2818111668437412_458251714749266980_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_Uh04GCrRwIAX9lA8eJ&_nc_ht=scontent.faep8-2.fna&oh=61058e52c7a6fb69343074be16bcb93f&oe=606826B9" />
        </div>
        <div id="integrantes" className="bg-white">
          <h2 className="max-w-2xl px-5 pt-12 mx-auto text-6xl font-light text-left text-gray-400">
            Integrantes
          </h2>
          <div className="grid max-w-2xl min-h-screen grid-cols-1 gap-3 p-2 mx-auto mt-6 bg-white ">
            {list &&
              list.map((n) => (
                <div key={n._id} className="p-3 text-4xl border-b border-gray-200">
                  <p className="my-2 text-sm font-bold uppercase">{n.rank}</p>
                  <h3 className="font-sans text-3xl font-bold">{n.title}</h3>
                </div>
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
