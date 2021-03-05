import CoverImage from "./coverImage"
import BlockContent from "@sanity/block-content-to-react"
import { parseISO, format } from "date-fns"

export default function ArticleContent({ title, mainImage, dateString, body }) {
  const date = parseISO(dateString)
  return (
    <>
      <h1 className="pt-12 mb-12 text-3xl font-bold leading-tight tracking-tighter text-center md:text-7xl lg:text-5xl md:leading-none">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} image={mainImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
        </div>
        <div className="max-w-2xl mx-auto">
          <BlockContent
            blocks={body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            imageOptions={{ w: 1200, fit: "fill" }}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </div>
      </div>
    </>
  )
}
