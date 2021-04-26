import React from "react"
import Layout from "../components/layout"
import { getClient } from "../lib/sanity.server"
import { allPostQuery } from "../lib/queries"
import Hero from "../components/Heros/HeroNews"
import HorizontalCard from "../components/Cards/horizontalCard"
import NavCategorias from "../components/Navigation/NavCategorias"
import styles from "../styles/PageSidebar.module.css"

export default function News({ list }) {
  return (
    <Layout title="Noticias">
      <div className="pb-24 bg-gray-100">
        <Hero />
        <div className={styles.page}>
          <div className="grid max-w-6xl grid-cols-1 gap-6 px-6 pt-12 pb-24 mx-auto md:px-0 md:grid-cols-5">
            <div id="sidebar" className={styles.aside}>
              <div className={styles.widget}>
                <h2 className={styles.widgetTitle}>Categorías</h2>
                <NavCategorias />
              </div>
            </div>
            <div id="content" className={styles.main}>
              <div className="grid max-w-4xl grid-cols-1 gap-3 mx-auto ">
                {list && list.map((n) => <HorizontalCard {...n} key={n._id} />)}
              </div>
            </div>
          </div>
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
