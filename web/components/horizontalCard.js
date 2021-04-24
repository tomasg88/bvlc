import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"
import CoverImage from "./coverImage"

const getDate = (date) => {
  const day = "0" + format(parseISO(date), "d", { locale: es })
  return day.slice(-2)
}

const getMonth = (date) => format(parseISO(date), "LLL", { locale: es })

// title, mainImage, excerpt, slug
export default function HorizontalCard({ title, mainImage, excerpt, slug, publishedAt }) {
  return (
    <div className="relative flex flex-col w-full mb-4 duration-500 transform translate-y-0 bg-white rounded-md shadow-xl sm:flex-row">
      <div className="flex-none sm:w-64 rounded-tl-md">
        {mainImage ? (
          <Link href={`/noticias/${slug}`}>
            <a
              aria-label={title}
              className="w-64 h-64 transition-all duration-500 hover:opacity-50 rounded-tl-md"
            >
              <CoverImage title={title} image={mainImage} />
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="p-5 pb-0 xs:px-2">
        <Link href={`/noticias/${slug}`}>
          <a
            aria-label={title}
            className="inline-block pr-0 mb-2 font-sans text-lg font-bold md:pr-12 md:text-2xl hover:text-red-500"
          >
            {title}
          </a>
        </Link>
        <p className="my-2 text-lg line-clamp-2 xs:hidden">{excerpt}</p>
      </div>
      <div className="absolute bottom-0 left-0 m-1">
        <time className="flex items-center p-3 py-1 text-sm font-bold text-white bg-red-600 rounded-md bg-opacity-80">
          {getDate(publishedAt)}/
          <span className="capitalize">{getMonth(publishedAt)}</span>
        </time>
      </div>
    </div>
  )
}
