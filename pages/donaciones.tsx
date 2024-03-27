import React, { FC } from 'react';
import Layout from 'components/Layout/Layout';
import { sanityClient } from 'lib/sanity.client';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import { SRLWrapper } from 'simple-react-lightbox';
import { pagesQuery } from 'lib/sanity.queries';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import { GetStaticProps } from 'next';
import { Page } from 'types/News';
import Image from 'next/image';

const SAMPLE_IMG =
  'https://images.unsplash.com/photo-1504667475460-eb4789043482?q=60&w=450&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Institucional: FC<Page> = ({ pages }): JSX.Element => {
  const { body, publishedAt, title, mainImage } = pages;
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
              <h4 className="text-xl my-6">
                Contar con el apoyo solidario de cada uno de ustedes nos ayuda a mantener en
                condiciones las instalaciones del cuartel, las unidades y el equipamiento necesario
                para nuestra labor, además de promover el sentido de pertenencia a nuestra
                Institución
              </h4>
            </div>
            <SRLWrapper>
              <ArticleContent
                publishedAt={publishedAt}
                mainImage={mainImage}
                title={title}
                body={body}
              />
            </SRLWrapper>
          </div>

          <div className="bg-gray-100 w-full py-12">
            <div className="grid max-w-6xl gap-6 grid-cols-1 sm:grid-cols-2 mx-auto">
              <h3 className="mx-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </h3>
              <div className="mx-16">
                <Image alt={'Sample image'} width={450} height={400} src={SAMPLE_IMG} />
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 mx-auto max-w-7xl bg-white">
            <div className="text-center text-gray-800">
              <h2 className="text-4xl py-6 border-b-2 border-yellow-400">Otras Campañas</h2>
              <h4 className="text-xl my-6">
                Contar con el apoyo solidario de cada uno de ustedes nos ayuda a mantener en
                condiciones las instalaciones del cuartel, las unidades y el equipamiento necesario
                para nuestra labor, además de promover el sentido de pertenencia a nuestra
                Institución
              </h4>
            </div>
            <SRLWrapper>
              <ArticleContent
                publishedAt={publishedAt}
                mainImage={mainImage}
                title={title}
                body={body}
              />
            </SRLWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Institucional;

export const getStaticProps: GetStaticProps = async () => {
  const slug = 'donaciones';
  const pages = await sanityClient.fetch(pagesQuery, { slug });

  return {
    props: {
      pages,
    },
  };
};
