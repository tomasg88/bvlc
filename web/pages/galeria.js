import React, { useState } from "react"
import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import { getClient } from "../lib/sanity.server"
import { albumsQuery } from "../lib/queries"
import Gallery from "../components/gallery"
import { BG_CONSTANTS } from "../utils/constants"
import AlbumCover from "../components/albumCover"
import { motion, AnimatePresence } from "framer-motion"

export default function Galeria({ albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Galería fotográfica
          </h1>
          <BackgroundImage image={BG_CONSTANTS.team} opacity={20} />
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="py-3 mt-3 text-xl font-bold text-center text-gray-500"
        >
          Hacer click en un album
        </motion.h2>
        <div className="max-w-6xl mx-auto mt-2 bg-white">
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
