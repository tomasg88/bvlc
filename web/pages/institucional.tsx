import React, { FC } from 'react';
import Layout from 'components/Layout/Layout';
import { getClient } from 'lib/sanity.server';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import { SRLWrapper } from 'simple-react-lightbox';
import { pagesQuery } from 'lib/queries';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import { GetStaticProps } from 'next';
import { Page } from 'interfaces/News';

const Institucional: FC<Page> = (props): JSX.Element => {
  console.log({ props });
  const { pages } = props;
  return (
    <Layout title={pages.title}>
      <div className="bg-white ">
        <HeroInstitucional image={BG_CONSTANTS.station} title={pages.title} />
        <div id="body" className="bg-white">
          <SRLWrapper>
            <ArticleContent body={pages.body} />
          </SRLWrapper>
        </div>
      </div>
    </Layout>
  );
};
export default Institucional;

export const getStaticProps: GetStaticProps = async () => {
  const slug = 'quienes-somos';
  const pages = await getClient().fetch(pagesQuery, { slug });
  return {
    props: {
      pages,
    },
  };
};
