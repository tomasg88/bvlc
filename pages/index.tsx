import styles from 'styles/Home.module.css';
import Layout from 'components/Layout/Layout';
import HeroHomeCarousel from 'components/HeroHomeCarousel/HeroHomeCarousel';

import { sanityClient } from 'lib/sanity.client';
import { indexQuery } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Album, News, Sponsor } from 'types/models';
import { LatestNews } from 'components/HomeSections/LatestNews';
import { HighlightedNewsSection } from 'components/HomeSections/HighlightedNewsSection';
import { HeadquarterSection } from 'components/HomeSections/HeadquartersSection';
import { SponsorsSection } from 'components/HomeSections/SponsorsSection';

type HomeProps = {
  highlighted?: News;
  heroImages: Album;
  recentNews: News[];
  sponsorsList: Sponsor[];
};

const Home: FC<HomeProps> = ({ recentNews, highlighted, heroImages, sponsorsList }) => (
  <Layout>
    <div className={styles.container}>
      <main className="w-full">
        <HeroHomeCarousel arrows={false} images={heroImages} />
        <div className="bg-gray-200 pt-24">
          <h1 className="text-center text-[4.5rem] font-thin tracking-wide text-gray-900 py-18 my-24 mx-auto">
            Conocé más sobre nosotros!
          </h1>
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
  const { recentNews, highlighted, heroImages, sponsorsList } = await sanityClient.fetch<HomeProps>(
    indexQuery
  );

  return {
    props: { heroImages, highlighted, recentNews, sponsorsList },
  };
};

export default Home;
