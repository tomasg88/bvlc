import CoverImage from './coverImage'
import BlockContent from '@sanity/block-content-to-react'
import { parseISO, format } from "date-fns";

export default function ArticleContent({ title, mainImage, dateString, body }) {
  const date = parseISO(dateString)
  return (
    <>
      <h1 className="text-3xl md:text-7xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none pt-12 mb-12 text-center">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} image={mainImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
        </div>
        <div className="max-w-2xl mx-auto">
          <BlockContent blocks={body} />
        </div>
      </div>
    </>
  )
}