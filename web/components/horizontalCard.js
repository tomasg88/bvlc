import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"
import CoverImage from "./coverImage"

const getDate = (date) => {
  const day = '0' + format(parseISO(date), 'd', { locale: es })
  return day.slice(-2);
}

const getMonth = (date) => format(parseISO(date), 'LLL', { locale: es })

// title, mainImage, excerpt, slug
export default function HorizontalCard({ title, mainImage, excerpt, slug, publishedAt }) {
  return (
    <div className="relative flex flex-col w-full mb-4 duration-500 transform translate-y-0 bg-white border-b-4 border-red-600 rounded-md shadow-xl sm:flex-row">
      <div className="flex-none sm:w-64 rounded-tl-md">
        {mainImage ? (
          <Link href={`/noticias/${slug}`}>
            <a aria-label={title} className="w-64 h-64 transition-all duration-500 hover:opacity-80 rounded-tl-md">
              <CoverImage title={title} image={mainImage} />
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="px-6 pt-6 xs:px-2">
        <h3 className="font-sans text-lg font-bold md:text-3xl">{title}</h3>
        <p className="my-2 text-lg line-clamp-2 xs:hidden">{excerpt}</p>
      </div>
      <div className="absolute top-0 left-0 flex items-center p-2 py-1 text-white bg-red-600 rounded-br-md rounded-tl-md">
        <p className="mr-2 text-xl"> 
          {getDate(publishedAt)} 
        </p>
        <p className="text-sm"> 
          {getMonth(publishedAt)} 
        </p>
      </div>
    </div>
  )
}
