import { getClient } from 'lib/sanity.server';
import { academyQuery } from 'lib/queries';
import Layout from 'components/Layout/Layout';
import { ACADEMY_MEMBERS, BG_CONSTANTS } from 'utils/constants';
import AlbumCover from 'components/AlbumCover/AlbumCover';
import { FC, useState } from 'react';
import Gallery from 'components/Gallery/Gallery';
import CardNews from 'components/CardNews/CardNews';
import HeroPage from 'components/HeroPage/HeroPage';
import styles from 'styles/PageSidebar.module.css';
import { MdPhotoCamera } from 'react-icons/md';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GetStaticProps } from 'next';
import { AcademiaType } from 'interfaces/News';
import { SanityAsset } from '@sanity/image-url/lib/types/types';

const Academia: FC<AcademiaType> = ({ news, albums }): JSX.Element => {
    const [selectedAlbum, setSelectedAlbum] = useState<SanityAsset[]>([]);
    return (
        <Layout title="Academia">
            {/* <div> que se oculta a partir de md: */}
            <div className="md:hidden">
                <HeroPage title="Academia" image={BG_CONSTANTS.academy} />
            </div>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div id="sidebar" className={styles.aside}>
                        <div className={styles.widget}>
                            <h2 className={styles.widgetTitle}>Autoridades</h2>
                            <div className={styles.widgetContent}>
                                {ACADEMY_MEMBERS.map((m, i) => (
                                    <dl key={i}>
                                        <dt className="uppercase">{m.title}</dt>
                                        <dd>{m.name}</dd>
                                    </dl>
                                ))}
                            </div>
                            <AnchorLink
                                href="#ver-galeria"
                                className={styles.headerAction}
                            >
                                <MdPhotoCamera className="absolute top-0 right-0 flex-none w-5 h-5 m-1" />
                                Imágenes de la Academia
                            </AnchorLink>
                        </div>
                    </div>
                    <div id="content" className={styles.main}>
                        <div className={styles.header}>
                            <h2 className={styles.headerTitle}>
                                Noticias de la Academia
                            </h2>
                        </div>
                        <div className={styles.gridNews}>
                            {news &&
                                news.map((n) => (
                                    <CardNews {...n} key={n._id} />
                                ))}
                        </div>
                        <div id="ver-galeria" className={styles.header}>
                            <h2 className={styles.headerTitle}>
                                Imágenes de la Academia
                            </h2>
                        </div>
                        <div className={styles.gridGallery}>
                            {albums?.map((a) => (
                                <AlbumCover
                                    key={a._id}
                                    {...a}
                                    onClick={() =>
                                        setSelectedAlbum(a.imageList)
                                    }
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
};

export default Academia;

export const getStaticProps: GetStaticProps = async () => {
    const { news, albums } = await getClient().fetch(academyQuery);
    return {
        props: { news, albums },
    };
};
