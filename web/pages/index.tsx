import styles from 'styles/Home.module.css';
import Layout from 'components/Layout/Layout';
import HeroHomeCarousel from 'components/HeroHomeCarousel/HeroHomeCarousel';
import CardNews from 'components/CardNews/CardNews';
import Button from 'components/Button/Button';
import { getClient } from 'lib/sanity.server';
import { indexQuery } from 'lib/queries';
import Fade from 'react-reveal/Fade';
import CardHighlighted from 'components/CardHighlighted/CardHighlighted';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { HomeType } from 'interfaces/News';

const Home: FC<HomeType> = ({ recentNews, highlighted, heroImages }) => (
  <Layout>
    <div className={styles.container}>
      <main className="w-full ">
        <HeroHomeCarousel arrows={false} images={heroImages} />
        <div className="bg-gray-100">
          <div className="flex flex-col items-center justify-center max-w-6xl pt-24 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
            <Fade cascade>
              <h2 className="text-5xl font-light text-center text-gray-900 ">Últimas noticias</h2>
            </Fade>
          </div>
          {Object.keys(highlighted).length && (
            <div className="grid grid-cols-1 mx-auto w-full max-w-6xl h-70 p-8 mt-6 pb-0">
              <CardHighlighted {...highlighted} />
            </div>
          )}
          <div className="grid max-w-6xl gap-3 p-8 pb-12 mx-auto mt-6 lg:grid-cols-3 sm:grid-cols-2">
            {recentNews && recentNews.map((n) => <CardNews {...n} key={n._id} />)}
          </div>
          <Button text="Ver todas las Noticias" href="/noticias" />
        </div>
      </main>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const { recentNews, highlighted, heroImages } = await getClient().fetch(indexQuery);

  return {
    props: {
      recentNews,
      heroImages: heroImages.imageList,
      highlighted,
    },
  };
};

export default Home;
