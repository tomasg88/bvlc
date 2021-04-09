import React from "react"
import Layout from "../components/layout"
import HeroInstitucional from "../components/heroInstitucional"
import { getClient } from "../lib/sanity.server"
import { leadershipQuery } from "../lib/queries"
import Hero from "../components/hero"
import { BG_CONSTANTS } from "../utils/constants"
import Fade from "react-reveal/Fade"
import usePositionTranslation from "../hooks/usePositionTranslation"

export default function ComisionDirectiva({ list }) {
  const { orderedList, getTranslation } = usePositionTranslation('position', list);

  return (
    <Layout title="Comisión Directiva">
      <div className="min-h-screen">
        <HeroInstitucional
          title="Comisión Directiva"
          image={BG_CONSTANTS.index_1}
          opacity={20}
        />
        <div className="p-6 mx-auto bg-white max-w-7xl">
          <div className="grid col-span-3 gap-3 py-6 pb-24 mx-auto max-w-7xl md:grid-cols-3 sm:grid-cols-2">
            {orderedList &&
              orderedList.map((n) => (
                <Fade key={n._id}>
                  <Hero name={n.title} description={getTranslation(n.position)} image={n.image} />
                </Fade>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const list = await getClient(false).fetch(leadershipQuery)
  return {
    props: {
      list,
    },
  }
}
