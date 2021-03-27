import React, { useState } from "react"
import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import { urlForImage } from "../lib/sanity"
import { getClient } from "../lib/sanity.server";
import { albumsQuery } from "../lib/queries"
import Gallery from "../components/gallery"

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
            Galeria fotografica
          </h1>
          <BackgroundImage image="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/145919140_2818111668437412_458251714749266980_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_Uh04GCrRwIAX9lA8eJ&_nc_ht=scontent.faep8-2.fna&oh=61058e52c7a6fb69343074be16bcb93f&oe=606826B9" />
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