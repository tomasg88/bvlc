import React, { FC, useCallback } from 'react';
import Layout from 'components/Layout/Layout';
import { sanityClient } from 'lib/sanity.client';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import { SRLWrapper } from 'simple-react-lightbox';
import { pagesQuery } from 'lib/sanity.queries';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import Button from 'components/Button/Button';
import * as ga from 'lib/ga';
import { GetStaticProps } from 'next';
import { News } from 'types/News';

type LibroAmigosProps = {
  pages: News;
};

const BOOK_PUBLIC_URL =
  'https://drive.google.com/file/d/1-Ej0AXd14-xLfvooEfzWHG1bGdZYbOjO/view?usp=sharing';

const LibroAmigos: FC<LibroAmigosProps> = ({ pages }): JSX.Element => {
  const { body, publishedAt, title, mainImage } = pages;

  const handleClick = useCallback(() => {
    ga.pageEvent('download_book', {
      event_category: 'engagement',
      event_label: 'Libro descargado',
    });
  }, []);

  return (
    <Layout title={pages.title}>
      <div className="bg-white ">
        <HeroInstitucional image={BG_CONSTANTS.station} title={pages.title} />
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
        <Button
          text={'Descargalo acá!'}
          href={BOOK_PUBLIC_URL}
          target={'_blank'}
          onClick={handleClick}
        />
      </div>
    </Layout>
  );
};

export default LibroAmigos;

export const getStaticProps: GetStaticProps = async () => {
  const slug = 'libro-amigos';
  const pages = await sanityClient.fetch(pagesQuery, { slug });
  return {
    props: {
      pages,
    },
  };
};
