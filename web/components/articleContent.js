import CoverImage from "./coverImage"
import BlockContent from "@sanity/block-content-to-react"
import { parseISO, format } from "date-fns"
import styles from "../styles/Article.module.css";


export default function ArticleContent({ title, mainImage, dateString, body }) {
  const date = parseISO(dateString)
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full py-40 overflow-hidden text-center text-white bg-gray-800 ">
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl font-sans text-6xl font-light">
          <h1>{title}</h1>
          <div className="mt-6 text-lg">
            <time dateTime={dateString}>{format(date, "LLLL	d, yyyy" )}</time>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-40">
          <CoverImage title={title} image={mainImage} />
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-6">
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
