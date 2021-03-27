import React, { useState } from "react"
import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import { urlForImage } from "../lib/sanity"
import { getClient } from "../lib/sanity.server";
import { albumsQuery } from "../lib/queries"
import Gallery from "../components/gallery"
import { BG_CONSTANTS } from "../utils/constants";

function AlbumCover({ album, selectAlbum }) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <img
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={() => selectAlbum(album.imageList)}
      className="cursor-pointer hover:opacity-80" 
      src={urlForImage(album.cover).url()} 
    />
  )
}

export default function Galeria({ albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="relative py-64 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Galería fotográfica
          </h1>
          <BackgroundImage image={BG_CONSTANTS.team} />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2 bg-white">
          {
            albums?.map(a => (
              <AlbumCover key={a._id} album={a} selectAlbum={setSelectedAlbum} />
            ))
          }
        </div>
        {
          selectedAlbum.length > 0 &&
            <Gallery 
              list={selectedAlbum} 
              onClose={() => setSelectedAlbum([])} 
            />
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const albums = await getClient().fetch(albumsQuery);

  return {
    props: { albums }
  }
}