import React, { FC, useState } from 'react';
import CardSpecialty from 'components/CardSpecialty/CardSpecialty';
import Layout from 'components/Layout/Layout';
import { specialtyQuery } from 'lib/sanity.queries';
import { sanityClient } from 'lib/sanity.client';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import { GetStaticProps } from 'next';
import { Specialty, SpecialtyType } from 'types/News';
import { ModalSpecialty } from 'components/ModalSpecialty/ModalSpecialty';

const YellowBorder = () => (
  <div className="w-40 border-b-2 border-yellow-400 my-16 h-1">&nbsp;</div>
);

const Especialidades: FC<SpecialtyType> = ({ specialties }): JSX.Element => {
  const [selected, setSelected] = useState<Specialty | null>(null);

  return (
    <Layout title="Especialidades">
      <div className="min-h-screen bg-gray-100">
        <HeroInstitucional title="Especialidades" image={BG_CONSTANTS.trucks} />
        <div className="flex flex-col items-center max-w-full p-6 mx-auto mt-6 bg-gray-100 md:px-12 md:py-20">
          {specialties?.map((specialty, index) => (
            <React.Fragment key={specialty._id}>
              <CardSpecialty
                title={specialty.title}
                cover={specialty.imagesGallery[0]}
                onClick={() => setSelected(specialty)}
              />
              {index !== specialties.length - 1 && <YellowBorder />}
            </React.Fragment>
          ))}
        </div>
        {selected && (
          <ModalSpecialty
            body={selected.body}
            close={() => setSelected(null)}
            imagesGallery={selected.imagesGallery}
            members={selected.members}
            open={!!selected}
            title={selected.title}
          />
        )}
      </div>
    </Layout>
  );
};

export default Especialidades;

export const getStaticProps: GetStaticProps = async () => {
  const specialties: SpecialtyType = await sanityClient.fetch(specialtyQuery);
  return {
    props: {
      specialties,
    },
  };
};
