import React from "react"
import Layout from "../components/layout"
import { getClient } from "../lib/sanity.server"
import ArticleContent from "../components/articleContent"
import { SRLWrapper } from "simple-react-lightbox"
import { pagesQuery } from "../lib/queries"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"

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
      <div className="min-h-screen bg-white">
        <div className="relative py-24 overflow-hidden text-center text-white bg-gray-800">
          <h1 className="relative z-10 flex flex-col items-center justify-center font-sans text-6xl font-bold p-40">
            { pages.title }
          </h1>
          <BackgroundImage image={BG_CONSTANTS.team} />
        </div>
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
