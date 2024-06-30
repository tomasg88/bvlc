import React, { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import CardEquipment from 'components/CardEquipment/CardEquipment';
import Gallery from 'components/Gallery/Gallery';
import Layout from 'components/Layout/Layout';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { equipmentQuery } from 'lib/sanity.queries';
import { sanityClient } from 'lib/sanity.client';
import { BG_CONSTANTS } from 'utils/constants';
import { Equipment } from 'types/models';

export interface EquipmentProps {
  equipment: Equipment[];
}

const Equipamiento: FC<EquipmentProps> = ({ equipment }): JSX.Element => {
  const [selected, setSelected] = useState<SanityAsset[] | []>([]);

  return (
    <Layout title="Equipamiento">
      <div className="min-h-screen bg-white">
        <HeroInstitucional title="Equipamiento" image={BG_CONSTANTS.trucks} />
        <div className="max-w-full p-6 pt-24 mx-auto mt-6 bg-white md:px-12 md:p-0">
          <div className="grid gap-4 2xl:grid-cols-2 ">
            {equipment?.map((eq) => (
              <CardEquipment
                key={eq._id}
                title={eq.title}
                body={eq.body}
                cover={eq.imagesGallery[0]}
                onClick={() => setSelected(eq.imagesGallery)}
              />
            ))}
          </div>
        </div>
        {selected.length > 0 && <Gallery list={selected} onClose={() => setSelected([])} />}
      </div>
    </Layout>
  );
};

export default Equipamiento;

export const getStaticProps: GetStaticProps = async () => {
  const equipment: Equipment[] = await sanityClient.fetch(equipmentQuery);
  return {
    props: {
      equipment,
    },
  };
};
