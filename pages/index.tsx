import styles from 'styles/Home.module.css';
import Layout from 'components/Layout/Layout';
import HeroHomeCarousel from 'components/HeroHomeCarousel/HeroHomeCarousel';

import { sanityClient } from 'lib/sanity.client';
import { indexQuery } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Album, News } from 'types/models';
import { LatestNews } from 'components/HomeSections/LatestNews';
import { HighlightedNewsSection } from 'components/HomeSections/HighlightedNewsSection';
import { HeadquarterSection } from 'components/HomeSections/HeadquartersSection';
import { SponsorsSection } from 'components/HomeSections/SponsorsSection';

type HomeProps = {
  recentNews: News[];
  highlighted?: News;
  heroImages: Album['imageList'];
};

const Home: FC<HomeProps> = ({ recentNews, highlighted, heroImages }) => (
  <Layout>
    <div className={styles.container}>
      <main className="w-full ">
        <HeroHomeCarousel arrows={false} images={heroImages} />
        <div className="bg-gray-200 pt-24">
          <HeadquarterSection />
          <SponsorsSection />
          <HighlightedNewsSection highlighted={highlighted} />
          <LatestNews recentNews={recentNews} />
        </div>
      </main>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const { recentNews, highlighted, heroImages } = await sanityClient.fetch(indexQuery);

  return {
    props: {
      recentNews,
      heroImages: heroImages.imageList,
      highlighted,
    },
  };
};

export default Home;
