import React from 'react';
import Layout from 'components/Layout/Layout';
import { getClient } from 'lib/sanity.server';
import { allPostQuery } from 'lib/queries';
import HeroNews from 'components/HeroNews/HeroNews';
import CardNewsHorizontal from 'components/CardNewsHorizontal/CardNewsHorizontal';
import styles from 'styles/PageSidebar.module.css';

export default function News({ list }) {
    return (
        <Layout title="Noticias">
            <div className="pb-24 bg-gray-100">
                <HeroNews />
                <div className={styles.page}>
                    <div className="max-w-5xl grid-cols-1 gap-6 px-6 pt-12 pb-24 mx-auto md:px-0">
                        {/* <div id="sidebar" className={styles.aside}>
                            <div className={styles.widget}>
                                <h2 className={styles.widgetTitle}>Categorías</h2>
                                <NavCategorias />
                            </div>
                        </div> */}
                        <div id="content" className="w-full">
                            <div className="grid max-w-4xl grid-cols-1 gap-3 mx-auto ">
                                {list &&
                                    list.map((n) => (
                                        <CardNewsHorizontal
                                            {...n}
                                            key={n._id}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const list = await getClient(false).fetch(allPostQuery);
    return {
        props: { list },
    };
}
