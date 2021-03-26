import CoverImage from "./coverImage"
import BlockContent from "@sanity/block-content-to-react"
import { parseISO, format } from "date-fns"
import { es } from "date-fns/locale"
import styles from "../styles/Article.module.css"

export default function ArticleContent({ title, mainImage, dateString, body }) {
  const date = parseISO(dateString)
  return (
    <>
      <div className="relative flex flex-col-reverse items-center justify-center w-full overflow-hidden md:text-center md:text-white md:bg-gray-800 " style={{minHeight: "70vh"}}>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-3 font-sans text-6xl font-light">
          <div className="w-full pt-3 mb-6 text-lg">
            <time className="uppercase" dateTime={dateString}>
              {format(date, 'LLLL	d, yyyy', { locale: es })}
            </time>
          </div>
          <h1 className="pb-3 mb-3">{title}</h1>
        </div>
        <div className="inset-0 z-0 cursor-pointer md:absolute md:opacity-40">
          <CoverImage title={title} image={mainImage} />
        </div>
      </div>
      <div className="max-w-3xl px-3 mx-auto mt-6 prose prose-lg md:prose-xl">
        <article className={styles.article}>
          <BlockContent
            blocks={body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            imageOptions={{ w: 1200, fit: "fill" }}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </article>
      </div>
    </>
  )
}
