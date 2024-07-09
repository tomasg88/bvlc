import React, { FC, useState } from 'react';
import { ImageAsset } from '@sanity/types';
import Layout from 'components/Layout/Layout';
import { sanityClient } from 'lib/sanity.client';
import { albumsQuery } from 'lib/sanity.queries';
import Gallery from 'components/Gallery/Gallery';
import AlbumCover from 'components/AlbumCover/AlbumCover';
import HeroPage from 'components/HeroPage/HeroPage';
import Fade from 'react-reveal/Fade';
import { GetStaticProps } from 'next';
import { Album } from 'types/models';
import { BG_CONSTANTS } from 'utils/constants';

interface GaleriaType {
  albums: Album[];
}

const Galeria: FC<GaleriaType> = ({ albums }): JSX.Element => {
  const [selectedAlbum, setSelectedAlbum] = useState<ImageAsset[]>([]);
  return (
    <Layout title="Galería">
      <div className="min-h-screen bg-white">
        <HeroPage image={BG_CONSTANTS.team} title="Galería fotográfica" />
        <Fade>
          <h2 className="py-3 my-6 text-lg font-semibold tracking-wider text-center text-gray-800">
            Hacer click en un album para ver todas sus fotos
          </h2>
        </Fade>
        <div className="max-w-6xl mx-auto mt-6 bg-white">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
            {albums?.map((a) => (
              <AlbumCover key={a._id} {...a} onClick={() => setSelectedAlbum(a.imageList)} />
            ))}
          </div>
        </div>
        {selectedAlbum.length > 0 && (
          <Gallery list={selectedAlbum} onClose={() => setSelectedAlbum([])} />
        )}
      </div>
    </Layout>
  );
};

export default Galeria;

export const getStaticProps: GetStaticProps = async () => {
  const albums: Album[] = await sanityClient.fetch(albumsQuery);

  return {
    props: { albums },
  };
};
