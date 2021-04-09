import React from "react"
import Layout from "../components/layout"
import { activeForceQuery } from "../lib/queries"
import { getClient } from "../lib/sanity.server"
import Hero from "../components/hero"
import HeroInstitucional from "../components/heroInstitucional"
import { BG_CONSTANTS } from "../utils/constants"
import Fade from "react-reveal/Fade"
import usePositionTranslation from "../hooks/usePositionTranslation"

export default function CuerpoActivo({ list }) {
  const { orderedList, getTranslation } = usePositionTranslation('rank', list);
  return (
    <Layout title="Cuerpo Activo">
      <div className="min-h-screen">
        <HeroInstitucional title="Cuerpo Activo" image={BG_CONSTANTS.team} />
        <div id="integrantes" className="p-6 mx-auto bg-white max-w-7xl">
          <div className="grid gap-3 py-6 pb-24 mx-auto max-w-7xl md:grid-cols-3 sm:grid-cols-2">
            {orderedList &&
              orderedList.map((n) => (
                <Fade key={n._id}>
                  <Hero name={n.title} description={getTranslation(n.rank)} image={n.image} />
                </Fade>
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
