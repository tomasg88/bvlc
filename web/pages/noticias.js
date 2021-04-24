import React from "react"
import Layout from "../components/layout"
import { getClient } from "../lib/sanity.server"
import { allPostQuery } from "../lib/queries"
import Hero from "../components/Heros/HeroNews"
import HorizontalCard from "../components/Cards/horizontalCard"

export default function News({ list }) {
  return (
    <Layout title="Noticias">
      <div className="pb-24 bg-gray-100">
        <Hero/>
        <div className="grid max-w-4xl grid-cols-1 gap-3 p-2 mx-auto mt-12">
          {list && list.map((n) => <HorizontalCard {...n} key={n._id} />)}
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
