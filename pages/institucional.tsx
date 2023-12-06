import React, { FC } from 'react';
import Layout from 'components/Layout/Layout';
import { sanityClient } from 'lib/sanity.client';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import { SRLWrapper } from 'simple-react-lightbox';
import { pagesQuery } from 'lib/queries';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import { GetStaticProps } from 'next';
import { Page } from 'types/News';

const Institucional: FC<Page> = ({ pages }): JSX.Element => {
  const { body, publishedAt, title, mainImage } = pages;
  return (
    <Layout title={pages.title}>
      <div className="bg-white ">
        <HeroInstitucional image={BG_CONSTANTS.station} title={title} />
        <div id="body" className="bg-white">
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
    </Layout>
  );
};

export default Institucional;

export const getStaticProps: GetStaticProps = async () => {
  const slug = 'quienes-somos';
  const pages = await sanityClient.fetch(pagesQuery, { slug });

  return {
    props: {
      pages,
    },
  };
};
