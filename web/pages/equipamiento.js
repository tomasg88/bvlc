import React, { useState } from 'react'
import AlbumCover from '../components/albumCover';
import BackgroundImage from '../components/backgroundImage';
import Gallery from '../components/gallery';
import Layout from '../components/layout';
import { equipmentQuery } from '../lib/queries'
import { getClient } from '../lib/sanity.server'
import { BG_CONSTANTS } from '../utils/constants'

export default function Equipamiento({ equipment }) {
  const [selected, setSelected] = useState(null);
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="relative py-24 pt-32 mb-12 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Equipamiento
          </h1>
          <BackgroundImage image={BG_CONSTANTS.team} opacity={20} />
        </div>
        <div className="flex flex-col max-w-2xl mx-auto mt-2 bg-white">
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
        {selected && (
          <Gallery list={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const equipment = await getClient().fetch(equipmentQuery)
  return {
    props: {
      equipment
    }
  }
}