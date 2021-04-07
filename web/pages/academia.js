import { getClient } from "../lib/sanity.server"
import { academyQuery } from "../lib/queries"
import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"
import AlbumCover from "../components/albumCover"
import { useState } from "react"
import Gallery from "../components/gallery"
import Card from "../components/cardNews"


export default function Academia({ news, albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout>
      <div className="pb-24 bg-gray-100">
        <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">Academia</h1>
          <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
        </div>
        <div className="flex flex-col items-center max-w-6xl pt-12 pb-4 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
          <h2 className="text-5xl font-light !bg-red-500 text-gray-900 ">
            Últimas noticias
          </h2>
        </div>
        <div className="grid max-w-6xl gap-3 p-2 mx-auto mt-12 md:grid-cols-3 sm:grid-cols-2 ">
          {news && news.map((n) => <Card {...n} key={n._id} />)}
        </div>
        <div className="flex flex-col items-center max-w-6xl pt-12 pb-4 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
          <h2 className="text-5xl font-light !bg-red-500 text-gray-900 ">Imagenes</h2>
        </div>
        <div className="w-full max-w-6xl mx-auto mt-2 ">
          <div className="grid grid-cols-3 gap-3 ">
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
        </div>
        {selectedAlbum.length > 0 && (
          <Gallery list={selectedAlbum} onClose={() => setSelectedAlbum([])} />
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { news, albums } = await getClient().fetch(academyQuery)
  return {
    props: { news, albums },
  }
}
