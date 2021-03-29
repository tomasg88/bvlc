import React, { useState } from "react"
import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import { urlForImage } from "../lib/sanity"
import { getClient } from "../lib/sanity.server"
import { albumsQuery } from "../lib/queries"
import Gallery from "../components/gallery"
import { BG_CONSTANTS } from "../utils/constants"

function AlbumCover({ album, selectAlbum }) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className="relative flex items-start justify-start mb-3 overflow-hidden border border-gray-300 rounded-sm shadow ">
      <img
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        
        className="object-cover w-48 h-48 cursor-pointer opacity-90"
        src={urlForImage(album.cover).url()}
      />
      <div className="relative z-10 pt-3 pl-3 text-gray-900">
        <div className="text-xl">{album.title}</div>
        <div className="text-base">{album.description}</div>
        <div onClick={() => selectAlbum(album.imageList)} className="mt-3 font-bold text-red-600 uppercase duration-150 cursor-pointer hover:opacity-80">abrir galeria</div>
      </div>
    </div>
  )
}

export default function Galeria({ albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="relative py-24 pt-32 mb-12 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Galería fotográfica
          </h1>
          <BackgroundImage image={BG_CONSTANTS.team} opacity={20} />
        </div>
        <div className="flex flex-col max-w-2xl mx-auto mt-2 bg-white">
          {albums?.map((a) => (
            <AlbumCover key={a._id} album={a} selectAlbum={setSelectedAlbum} />
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
  const albums = await getClient().fetch(albumsQuery)

  return {
    props: { albums },
  }
}
