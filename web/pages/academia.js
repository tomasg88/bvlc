import { getClient } from "../lib/sanity.server"
import { academyQuery } from "../lib/queries"
import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"
import Link from "next/link"
import CoverImage from "../components/coverImage"
import AlbumCover from "../components/albumCover"
import { useState } from "react"
import Gallery from "../components/gallery"


export default function Academia({ news, albums}) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout>
      <div className="pb-24 bg-gray-100">
        <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Nuestra Academia
          </h1>
          
          <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
        </div>
        <div className="flex flex-col items-center max-w-6xl pt-24 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
          <h2 className="text-5xl font-light !bg-red-500 text-gray-900 ">
            Últimas noticias
          </h2>
        </div>
        <div className="grid max-w-6xl gap-3 p-2 mx-auto mt-12 md:grid-cols-3 sm:grid-cols-2 ">
          {news &&
            news.map((n) => (
              <div
                key={n._id}
                className="relative overflow-hidden text-4xl duration-500 transform translate-y-0 bg-white rounded-md shadow-md hover:shadow-2xl hover:-translate-y-1 "
              >
                <Link href={"/noticias/" + n.slug}>
                  <a className="transition-all duration-500 hover:opacity-80">
                    <CoverImage title={n.title} image={n.mainImage} />
                  </a>
                </Link>
                <div className="px-6 py-3 pb-6">
                  <h3 className="font-sans text-xl font-bold">{n.title}</h3>
                  <p className="mt-2 text-base line-clamp-4">{n.excerpt}</p>
                  <Link href={"/noticias/" + n.slug}>
                    <a className="relative z-10 mt-6 text-base btn">
                      Leer nota completa
                    </a>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col items-center max-w-6xl pt-24 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
          <h2 className="text-5xl font-light !bg-red-500 text-gray-900 ">
            Imagenes
          </h2>
        </div>
        <div className="flex flex-col max-w-2xl mx-auto mt-12 bg-white">
          {albums?.map((a) => (
            <AlbumCover 
              key={a._id}
              title={a.title}
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
    </Layout>
  )
}

export async function getStaticProps() {
  const { news, albums } = await getClient().fetch(academyQuery)
  return {
    props: { news, albums }
  }
}