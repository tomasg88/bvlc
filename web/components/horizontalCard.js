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
    <div className="relative flex h-28 overflow-hidden duration-500 transform translate-y-0 bg-white rounded-md shadow-xl border-b-4 border-red-600 mb-4">
      <div className="min-w-16 w-1/3 h-full">
        {mainImage ? (
          <Link href={`/noticias/${slug}`}>
            <a aria-label={title} className="transition-all duration-500 hover:opacity-80">
              <CoverImage title={title} image={mainImage} />
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="xs:px-2 px-6 pt-6 h-full">
        <h3 className="font-sans text-lg font-bold md:text-xl xs:truncate">{title}</h3>
        <p className="xs:hidden my-2 text-xs line-clamp-4 truncate">{excerpt}</p>
      </div>
      <div className="flex absolute bottom-0 left-0 bg-red-600 text-white items-center p-2 py-1 rounded-tr-md">
        <p className="text-xl mr-2"> 
          {getDate(publishedAt)} 
        </p>
        <p className="text-sm"> 
          {getMonth(publishedAt)} 
        </p>
      </div>
    </div>
  )
}
