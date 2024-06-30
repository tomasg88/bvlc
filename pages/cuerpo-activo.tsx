import React, { FC } from 'react';
import { sanityClient } from 'lib/sanity.client';
import { GetStaticProps } from 'next';

import { activeForceQuery } from 'lib/sanity.queries';
import { BG_CONSTANTS } from 'utils/constants';
import groupAndOrder from 'utils/list';
import { ActiveForce } from 'types/models';

import Fade from 'react-reveal/Fade';
import Layout from 'components/Layout/Layout';
import MemberCard from 'components/MemberCard/MemberCard';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';

export interface ActiveForcePageProps {
  list: ActiveForce[];
}

const CuerpoActivo: FC<ActiveForcePageProps> = ({ list }): JSX.Element => {
  const { orderedList, getTranslation } = groupAndOrder('rank', list);

  return (
    <Layout title="Cuerpo Activo">
      <div className="min-h-screen">
        <HeroInstitucional title="Cuerpo Activo" image={BG_CONSTANTS.team} />
        <div id="integrantes" className="p-6 mx-auto bg-white max-w-7xl">
          {Object.keys(orderedList).map((key) => {
            return (
              <div key={key}>
                <div className="flex flex-col items-center max-w-6xl pt-6 pb-6 mx-auto border-b-2 border-yellow-400 md:flex-row">
                  <Fade cascade>
                    <h2 className="text-4xl font-light text-gray-900 ">{getTranslation(key)}</h2>
                  </Fade>
                </div>
                <div className="grid max-w-6xl gap-3 p-8 pb-12 mx-auto mt-6 md:grid-cols-3 sm:grid-cols-2">
                  {orderedList[key].map((n) => (
                    <Fade key={n._id}>
                      <MemberCard
                        name={n.title}
                        description={getTranslation(key)}
                        image={n.image}
                      />
                    </Fade>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CuerpoActivo;

export const getStaticProps: GetStaticProps = async () => {
  const list: ActiveForce[] = await sanityClient.fetch(activeForceQuery);

  return {
    props: {
      list,
    },
  };
};
