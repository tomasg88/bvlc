import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import HeroHomeCarousel from '../components/HeroHomeCarousel/HeroHomeCarousel';
import CardNews from '../components/CardNews/CardNews';
import Link from 'next/link';
import { getClient } from '../lib/sanity.server';
import { indexQuery } from '../lib/queries';
import Fade from 'react-reveal/Fade';

export default function Home({ recentNews }) {
    return (
        <Layout>
            <div className={styles.container}>
                <main className="w-full ">
                    <HeroHomeCarousel arrows={false} />
                    <div className="bg-gray-100">
                        <div className="flex flex-col items-center justify-center max-w-6xl pt-24 pb-6 mx-auto font-sans border-b-2 border-yellow-400 md:flex-row">
                            <Fade cascade>
                                <h2 className="text-5xl font-light text-center text-gray-900 ">
                                    Últimas noticias
                                </h2>
                            </Fade>
                        </div>
                        <div className="grid max-w-6xl gap-3 p-8 pb-12 mx-auto mt-6 lg:grid-cols-3 sm:grid-cols-2">
                            {recentNews &&
                                recentNews.map((n) => (
                                    <CardNews {...n} key={n._id} />
                                ))}
                        </div>
                        <div className="flex flex-col items-center justify-between max-w-6xl pb-24 mx-auto font-sans">
                            <Link href="/noticias">
                                <a className="relative z-10 px-8 py-3 mt-3 text-2xl font-bold text-red-600 bg-gray-100 border-b-2 border-red-600 hover:bg-red-600 hover:text-white ">
                                    Ver todas las Noticias
                                </a>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const { recentNews } = await getClient(false).fetch(indexQuery);
    return {
        props: {
            recentNews,
        },
    };
}
