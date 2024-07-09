import React, { FC, useState } from 'react';
import CardSpecialty from 'components/CardSpecialty/CardSpecialty';
import Gallery from 'components/Gallery/Gallery';
import Layout from 'components/Layout/Layout';
import { specialtyQuery } from 'lib/sanity.queries';
import { sanityClient } from 'lib/sanity.client';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import { GetStaticProps } from 'next';
import { ImageAsset } from '@sanity/types';
import { Specialty } from 'types/models';

export interface SpecialtyProps {
  specialties: Specialty[];
}

const Especialidades: FC<SpecialtyProps> = ({ specialties }): JSX.Element => {
  const [selected, setSelected] = useState<ImageAsset[]>([]);

  return (
    <Layout title="Especialidades">
      <div className="min-h-screen bg-gray-100">
        <HeroInstitucional title="Especialidades" image={BG_CONSTANTS.trucks} />
        <div className="flex flex-col items-center max-w-full p-6 mx-auto mt-6 bg-gray-100 md:px-12 md:py-20">
          {specialties?.map((eq) => (
            <CardSpecialty
              key={eq._id}
              title={eq.title}
              body={eq.body}
              cover={eq.imagesGallery[0]}
              onClick={() => setSelected(eq.imagesGallery)}
              members={eq.members}
            />
          ))}
        </div>
        {selected.length > 0 && <Gallery list={selected} onClose={() => setSelected([])} />}
      </div>
    </Layout>
  );
};

export default Especialidades;

export const getStaticProps: GetStaticProps = async () => {
  const specialties: Specialty[] = await sanityClient.fetch(specialtyQuery);
  return {
    props: {
      specialties,
    },
  };
};
