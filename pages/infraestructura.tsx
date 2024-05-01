import React, { FC, useState } from 'react';
import Gallery from 'components/Gallery/Gallery';
import Layout from 'components/Layout/Layout';
import { infrastructureQuery } from 'lib/sanity.queries';
import { sanityClient } from 'lib/sanity.client';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import { GetStaticProps } from 'next';
import { InfrastructureType } from 'types/News';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import CardInfrastructure from 'components/CardInfrastructure/CardInfrastructure';

const Especialidades: FC<InfrastructureType> = ({ areas }): JSX.Element => {
  const [selected, setSelected] = useState<SanityAsset[]>([]);
  console.log('{areas}', { areas });
  return (
    <Layout title="Infraestructura">
      <div className="min-h-screen bg-gray-100">
        <HeroInstitucional title="Infraestructura" image={BG_CONSTANTS.trucks} />
        <div className="flex flex-col items-center max-w-full p-6 mx-auto mt-6 bg-gray-100 md:px-12 md:py-20">
          {areas?.map((area) => (
            <CardInfrastructure
              key={area._id}
              name={area.name}
              description={area.description}
              imageList={area.imageList}
              onClick={() => setSelected(area.imageList)}
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
  const areas: InfrastructureType = await sanityClient.fetch(infrastructureQuery);
  return {
    props: {
      areas,
    },
  };
};
