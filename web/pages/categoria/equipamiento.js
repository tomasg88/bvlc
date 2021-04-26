import { getClient } from "../../lib/sanity.server"
import { equipmentPostQuery } from "../../lib/queries"
import Layout from "../../components/layout"
import AlbumCover from "../../components/albumCover"
import { useState } from "react"
import Gallery from "../../components/gallery"
import Card from "../../components/Cards/CardNews"
import styles from "../../styles/PageSidebar.module.css"
import Link from "next/link"
import NavCategorias from "../../components/Navigation/NavCategorias"

export default function EquipamientoCategory({ news, albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState([])
  return (
    <Layout title="Equipamiento">
      <div className={styles.page}>
        <div className={styles.container}>
          <div id="sidebar" className={styles.aside}>
            <div className={styles.widget}>
              <h2 className={styles.widgetTitle}>Categorías</h2>
              <NavCategorias/>
              <Link href="/equipamiento">
                <a className={styles.headerAction}>
                  Ver equipamiento activo
                </a>
              </Link>
            </div>
          </div>
          <div id="content" className={styles.main}>
            <div className={styles.header}>
              <h2 className={styles.headerTitle}>Noticias de Equipamiento</h2>
            </div>
            <div className={styles.gridNews}>
              {news && news.map((n) => <Card {...n} key={n._id} />)}
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
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { news, albums } = await getClient().fetch(equipmentPostQuery)
  const members = [{ title: "Adrián Gil", position: "director" }]
  return {
    props: { news, albums },
  }
}
