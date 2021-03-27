import React from "react"
import Layout from "../components/layout"
import { getClient } from "../lib/sanity.server"
import ArticleContent from "../components/articleContent"
import { SRLWrapper } from "simple-react-lightbox"
import { pagesQuery } from "../lib/queries"

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
          <div
            className="absolute inset-0 z-0 hidden bg-fixed bg-no-repeat bg-cover opacity-50 md:block"
            style={{
              backgroundImage:
                "url(https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/145919140_2818111668437412_458251714749266980_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_Uh04GCrRwIAX9lA8eJ&_nc_ht=scontent.faep8-2.fna&oh=61058e52c7a6fb69343074be16bcb93f&oe=606826B9)",
            }}
          ></div>
          
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
