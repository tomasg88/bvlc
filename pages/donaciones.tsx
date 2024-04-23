import React, { FC } from 'react';
import Layout from 'components/Layout/Layout';
import { sanityClient } from 'lib/sanity.client';
import { campaignsQuery, pagesQuery } from 'lib/sanity.queries';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import { GetStaticProps } from 'next';
import { CampaignsPage } from 'types/News';
import { CampaignCard } from 'components/CampaignCard/CampaignCard';

const Donaciones: FC<CampaignsPage> = ({
  pages,
  campaigns: { restOfCampaigns, showFirst },
}): JSX.Element => {
  const { title } = pages;

  return (
    <Layout title={pages.title}>
      <div className="bg-white ">
        <HeroInstitucional image={BG_CONSTANTS.station} title={title} />
        <div id="body" className="bg-white block">
          <div className="mt-6 p-6 mx-auto max-w-7xl">
            <div className="text-center text-gray-800">
              <h2 className="text-4xl py-6 border-b-2 border-yellow-400">
                Campaña de Socios Protectores
              </h2>
              <div className="lg:w-[800px] w-full mx-auto mt-12">
                <CampaignCard
                  campaignLink={showFirst.campaignLink}
                  description={showFirst.description}
                  isActive={showFirst.isActive}
                  name={showFirst.name}
                />
              </div>
            </div>
          </div>

          {/* Sección */}
          <div className="bg-gradient-to-b to-gray-100 from-white mt-20">&nbsp;</div>
          <div className="bg-gray-100 text-gray-800 from-white w-full py-12">
            <div className="max-w-7xl mx-auto">
              <p className="mx-6 text-2xl text-center leading-loose">
                Contar con el apoyo solidario de cada uno de ustedes nos ayuda a mantener en
                condiciones las instalaciones del cuartel, las unidades y el equipamiento necesario
                para nuestra labor, además de promover el sentido de pertenencia a nuestra
                Institución
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-gray-100 to-white mb-10">&nbsp;</div>

          <div className="mt-6 p-6 mx-auto max-w-7xl bg-white">
            <div className="text-center text-gray-800">
              <h2 className="text-4xl py-6 border-b-2 border-yellow-400">Otras Campañas</h2>
              <div className="lg:w-[800px] w-full mx-auto mt-12">
                <ul>
                  {restOfCampaigns.map((campaign) => (
                    <li key={campaign._id}>
                      <CampaignCard
                        campaignLink={campaign.campaignLink}
                        description={campaign.description}
                        isActive={campaign.isActive}
                        name={campaign.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donaciones;

export const getStaticProps: GetStaticProps = async () => {
  const slug = 'donaciones';
  const pages = await sanityClient.fetch(pagesQuery, { slug });
  const campaigns = await sanityClient.fetch(campaignsQuery);

  const showFirst = campaigns.filter((campaign) => campaign.showFirst);
  const restOfCampaigns = campaigns.filter((campaign) => !campaign.showFirst);

  return {
    props: {
      pages,
      campaigns: {
        showFirst: showFirst[0] || [],
        restOfCampaigns,
      },
    },
  };
};
