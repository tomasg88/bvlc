import { getClient } from "../lib/sanity.server"
import { academyQuery } from "../lib/queries"
import Layout from "../components/layout"
import { BG_CONSTANTS } from "../utils/constants"
import AlbumCover from "../components/albumCover"
import { useState } from "react"
import Gallery from "../components/gallery"
import Card from "../components/cardNews"
import HeroPage from "../components/heroPage"

export default function Academia({ news, albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout title="Academia">
      {/* <HeroPage title="Academia" image={BG_CONSTANTS.academy} opacity={20} /> */}
      <div className="w-screen pt-2 mx-auto bg-gray-100">
        <div className="flex flex-col-reverse items-start max-w-full pt-2 pb-24 mx-auto md:pt-12 2xl:max-w-7xl md:flex-row-reverse">
          <div id="content" className="w-full px-4 md:w-3/4 ">
            <div className="flex flex-col items-end justify-between w-full pb-4 pr-3 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
              <h2 className="text-5xl font-light text-gray-900 ">
                Noticias de la Academia
              </h2>
              <a className="btn" href="#ver-galeria">
                Ver Galeria
              </a>
            </div>
            <div className="grid w-full gap-3 p-2 mx-auto mt-2 md:grid-cols-2 lg:grid-cols-3">
              {news && news.map((n) => <Card {...n} key={n._id} />)}
            </div>
            <div
              id="ver-galeria"
              className="flex flex-col items-center w-full pt-12 pb-4 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row"
            >
              <h2 className="text-3xl font-light text-gray-900 ">
                Imágenes de la Academia
              </h2>
            </div>
            <div className="grid w-full grid-cols-1 gap-3 mx-auto mt-2 md:grid-cols-2">
              {albums?.map((a) => (
                <AlbumCover
                  key={a._id}
                  title={a.title}
                  description={a.description}
                  cover={a.cover}
                  album={a.imageList}
                  selectAlbum={setSelectedAlbum}
                />
              ))}
            </div>
            {selectedAlbum.length > 0 && (
              <Gallery list={selectedAlbum} onClose={() => setSelectedAlbum([])} />
            )}
          </div>
          <div
            id="sidebar"
            className="w-full px-4 border-r border-gray-300 md:h-screen md:w-1/4"
          >
            <div className="pb-6 mb-6 md:bg-white md:p-3">
              <div className="flex flex-col items-center w-full pb-4 mr-8 font-sans border-b border-gray-600 md:flex-row">
                <h2 className="pt-1 text-2xl font-light text-gray-900 ">Autoridades</h2>
              </div>
              <div className="flex flex-col items-center w-full pt-2 mx-auto space-y-2 font-sans md:items-start">
                <div>
                  <p className="pt-2 font-bold text-gray-600">DIRECTOR</p>
                  <p className="text-xl font-thin">Adrián Gil</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="font-bold text-center text-gray-600 md:text-left">
                    INSTRUCTORES
                  </p>
                  <div className="block text-center text-gray-600 md:text-left">
                    <p className="text-xl font-thin">Otro instructor</p>
                    <p className="text-xl font-thin">Marisa González</p>
                    <p className="text-xl font-thin">Pedro y Pablo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { news, albums } = await getClient().fetch(academyQuery)
  const members = [{ title: "Adrián Gil", position: "director" }]
  return {
    props: { news, albums },
  }
}
