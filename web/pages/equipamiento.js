import React, { useState } from "react"
import AlbumCover from "../components/albumCover"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import { equipmentQuery } from "../lib/queries"
import { getClient } from "../lib/sanity.server"
import HeroInstitucional from "../components/HeroInstitucional"
import { BG_CONSTANTS } from "../utils/constants"

export default function Equipamiento({ equipment }) {
  const [selected, setSelected] = useState(null)
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <HeroInstitucional title="Equipamiento" image={BG_CONSTANTS.team} />
        <div className="max-w-6xl pt-6 mx-auto mt-6 bg-white ">
          <div className="grid grid-cols-3 gap-4">
            {equipment?.map((eq) => (
              <AlbumCover
                key={eq._id}
                title={eq.title}
                cover={eq.imagesGallery[0]}
                album={eq.imagesGallery}
                selectAlbum={setSelected}
              />
            ))}
          </div>
        </div>
        {selected && <Gallery list={selected} onClose={() => setSelected(null)} />}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const equipment = await getClient().fetch(equipmentQuery)
  return {
    props: {
      equipment,
    },
  }
}
