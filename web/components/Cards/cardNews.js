import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"
import CoverImage from "../coverImage"
import styles from "./CardNews.module.css"

const getDate = (date) => {
  const day = "0" + format(parseISO(date), "d", { locale: es })
  return day.slice(-2)
}

const getMonth = (date) => format(parseISO(date), "LLL", { locale: es })

// title, mainImage, excerpt, slug
export default function Card({ title, mainImage, excerpt, slug, publishedAt }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {mainImage ? (
          <Link href={`/noticias/${slug}`}>
            <a aria-label={title}>
              <CoverImage title={title} image={mainImage} />
            </a>
          </Link>
        ) : (
          <></>
        )}
        <time className={styles.time}>
          {getDate(publishedAt)}/
          <span className="capitalize">{getMonth(publishedAt)}</span>
        </time>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`/noticias/${slug}`}>
          <a className={styles.action}>
            Leer nota completa
          </a>
        </Link>
      </div>
    </div>
  )
}
