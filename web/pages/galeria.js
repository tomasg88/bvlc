import React, { useState } from "react"
import Layout from "../components/layout"
import { getClient } from "../lib/sanity.server"
import { albumsQuery } from "../lib/queries"
import Gallery from "../components/gallery"
import AlbumCover from "../components/albumCover"
import HeroPage from "../components/heroPage"
import Fade from "react-reveal/Fade"

export default function Galeria({ albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <HeroPage title="Galería fotográfica" />
        <Fade>
          <h2 className="py-3 -mt-16 text-lg font-semibold tracking-wider text-center text-gray-300">
            Hacer click en un album
          </h2>
        </Fade>
        <div className="max-w-6xl mx-auto mt-12 bg-white">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
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
  const albums = await getClient().fetch(albumsQuery)

  return {
    props: { albums },
  }
}
