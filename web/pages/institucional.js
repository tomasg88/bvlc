import React from "react"
import Layout from "../components/layout"
import { getClient } from "../lib/sanity.server"
import ArticleContent from "../components/articleContent"
import { SRLWrapper } from "simple-react-lightbox"
import { pagesQuery } from "../lib/queries"
import HeroInstitucional from "../components/HeroInstitucional"

const options = {
  settings: {
    overlayColor: "rgb(255, 255, 255)",
    opacity: '0.4',
    position: 'absolute'
  },
}

export default function Institucional({ pages }) {
  return (
    <Layout>
      <div className="bg-white ">
        <HeroInstitucional  title={pages.title}/>
        <div id="body" className="bg-white">
          <SRLWrapper>
            <ArticleContent body={pages.body} />
          </SRLWrapper>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const slug = 'quienes-somos'
  const pages = await getClient().fetch(pagesQuery, { slug });

  return {
    props: {
      pages,
    },
  }
}
