import React from "react"
import Layout from "../components/layout"
import HeroInstitucional from "../components/Heros/HeroInstitucional"
import { getClient } from "../lib/sanity.server"
import { leadershipQuery } from "../lib/queries"
import Person from "../components/Cards/MediaObject"
import { BG_CONSTANTS } from "../utils/constants"
import Fade from "react-reveal/Fade"
import groupAndOrder from "../utils/list"

export default function ComisionDirectiva({ list }) {
  const { orderedList, getTranslation } = groupAndOrder('position', list);

  return (
    <Layout title="Comisión Directiva">
      <div className="min-h-screen">
        <HeroInstitucional
          title="Comisión Directiva"
          image={BG_CONSTANTS.index_1}
          opacity={20}
        />
        <div id="integrantes" className="p-6 mx-auto bg-white max-w-7xl">
          {
            Object.keys(orderedList).map(key => {
              return (
                <div key={key}>
                  <div className="flex flex-col items-center max-w-6xl py-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
                    <Fade cascade>
                      <h2 className="text-4xl font-light text-gray-900 ">
                        {getTranslation(key)}
                      </h2>
                    </Fade>
                  </div>
                  <div className="grid max-w-6xl gap-3 p-8 pb-12 mx-auto mt-6 md:grid-cols-3 sm:grid-cols-2">
                    {
                      orderedList[key].map(n => (
                        <Fade key={n._id}>
                          <Person name={n.title} description={getTranslation(key)} image={n.image} />
                        </Fade>
                      ))
                    }
                  </div>
                </div>
              )
            })
          }
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
