import React from "react"
import Link from "next/link"
import Layout from "../components/layout"
import HeroInstitucional from "../components/HeroInstitucional"
import { getClient } from "../lib/sanity.server"
import { leadershipQuery } from "../lib/queries"
import Hero from "../components/hero"
import { BG_CONSTANTS } from "../utils/constants"
export default function ComisionDirectiva({ list }) {
  return (
    <Layout>
      <div className="min-h-screen">
        <HeroInstitucional title="Comisión Directiva" image={BG_CONSTANTS.index_1} opacity={20} />
        <div className="p-6 mx-auto bg-white max-w-7xl">
          <div className="grid col-span-3 gap-3 py-6 pb-24 mx-auto max-w-7xl md:grid-cols-3 sm:grid-cols-2">
            {list &&
              list.map((n) => (
                <Hero
                  key={n._id}
                  name={n.title}
                  description={n.position}
                  image={n.image}
                />
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
