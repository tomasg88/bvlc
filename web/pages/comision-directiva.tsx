import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { ComisionType } from '../types/News';
import { getClient } from 'lib/sanity.server';
import { leadershipQuery } from 'lib/queries';

import Layout from 'components/Layout/Layout';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import MemberCard from 'components/MemberCard/MemberCard';
import { BG_CONSTANTS } from 'utils/constants';
import Fade from 'react-reveal/Fade';
import groupAndOrder from 'utils/list';

const ComisionDirectiva: FC<ComisionType> = ({ list }): JSX.Element => {
  const { orderedList, getTranslation } = groupAndOrder('position', list);

  return (
    <Layout title="Comisión Directiva">
      <div className="min-h-screen">
        <HeroInstitucional title="Comisión Directiva" image={BG_CONSTANTS.index_1} />
        <div id="integrantes" className="p-6 mx-auto bg-white max-w-7xl">
          {Object.keys(orderedList).map((key) => {
            return (
              <div key={key}>
                <div className="flex flex-col items-center max-w-6xl py-6 mx-auto border-b-2 border-yellow-400 md:flex-row">
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

export default ComisionDirectiva;

export const getStaticProps: GetStaticProps = async () => {
  const list: ComisionType[] = await getClient(false).fetch(leadershipQuery);
  return {
    props: {
      list,
    },
  };
};
