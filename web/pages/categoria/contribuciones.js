import { getClient } from '../../lib/sanity.server';
import { contributionPostQuery } from '../../lib/queries';
import Layout from '../../components/layout';
import AlbumCover from '../../components/albumCover';
import { useState } from 'react';
import Gallery from '../../components/gallery';
import Card from '../../components/Cards/cardNews';
import styles from '../../styles/PageSidebar.module.css';
import NavCategorias from '../../components/Navigation/NavCategorias';

export default function ContribucionesCategory({ news, albums }) {
    const [selectedAlbum, setSelectedAlbum] = useState([]);
    return (
        <Layout title="Contribuciones">
            <div className={styles.page}>
                <div className={styles.container}>
                    <div id="sidebar" className={styles.aside}>
                        <div className={styles.widget}>
                            <h2 className={styles.widgetTitle}>Categorías</h2>
                            <NavCategorias />
                        </div>
                    </div>
                    <div id="content" className={styles.main}>
                        <div className={styles.header}>
                            <h2 className={styles.headerTitle}>
                                Contribuciones
                            </h2>
                        </div>
                        <div className={styles.gridNews}>
                            {news &&
                                news.map((n) => <Card {...n} key={n._id} />)}
                        </div>
                        <div id="ver-galeria" className={styles.header}>
                            <h2 className={styles.headerTitle}>
                                Imágenes de contribuciones
                            </h2>
                        </div>
                        <div className={styles.gridGallery}>
                            {albums?.map((a) => (
                                <AlbumCover
                                    key={a._id}
                                    title={a.title}
                                    description={a.description}
                                    cover={a.cover}
                                    album={a.imageList}
                                    selectAlbum={setSelectedAlbum}
                                />
                            ))}
                        </div>
                        {selectedAlbum.length > 0 && (
                            <Gallery
                                list={selectedAlbum}
                                onClose={() => setSelectedAlbum([])}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const { news, albums } = await getClient().fetch(contributionPostQuery);
    const members = [{ title: 'Adrián Gil', position: 'director' }];
    return {
        props: { news, albums },
    };
}
