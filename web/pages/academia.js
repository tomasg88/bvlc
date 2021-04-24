import { getClient } from "../lib/sanity.server"
import { academyQuery } from "../lib/queries"
import Layout from "../components/layout"
import { BG_CONSTANTS } from "../utils/constants"
import AlbumCover from "../components/albumCover"
import { useState } from "react"
import Gallery from "../components/gallery"
import Card from "../components/Cards/cardNews"
import HeroPage from "../components/Heros/HeroPage"
import styles from "../styles/PageSidebar.module.css"

export default function Academia({ news, albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout title="Academia">
      {/* <div> que se oculta a partir de md: */}
      <div className="md:hidden">
        <HeroPage title="Academia" image={BG_CONSTANTS.academy} opacity={20} />
      </div>
      <div className={styles.page}>
        <div className={styles.container}>
          <div id="content" className={styles.main}>
            <div className={styles.header}>
              <h2 className={styles.headerTitle}>Noticias de la Academia</h2>
              <a className={styles.headerAction} href="#ver-galeria">
                Galeria
              </a>
            </div>
            <div className={styles.gridNews}>
              {news && news.map((n) => <Card {...n} key={n._id} />)}
            </div>
            <div id="ver-galeria" className={styles.header}>
              <h2 className={styles.headerTitle}>Imágenes de la Academia</h2>
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
              <Gallery list={selectedAlbum} onClose={() => setSelectedAlbum([])} />
            )}
          </div>
          <div id="sidebar" className={styles.aside}>
            <div className={styles.widget}>
              <h2 className={styles.widgetTitle}>Autoridades</h2>
              <div className={styles.widgetContent}>
                <dl>
                  <dt>DIRECTOR</dt>
                  <dd>Adrián Gil</dd>
                </dl>
                <dl>
                  <dt>INSTRUCTORES</dt>
                  <dd>Ignacio Rodriguez</dd>
                  <dd>Marisa González</dd>
                  <dd>Pedro y Pablo</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { news, albums } = await getClient().fetch(academyQuery)
  const members = [{ title: "Adrián Gil", position: "director" }]
  return {
    props: { news, albums },
  }
}
