import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"

const activeClassStyle = "text-red-100 border-b-4 border-red-100"

export default function HeaderLink({ url, title }) {
  const router = useRouter()
  const isActive = useCallback(() => {
    return router.route === url ? activeClassStyle : " border-b-4 border-transparent"
  }, [url])
  return (
    <Link href={url}>
      <a className={isActive(url)}>{title}</a>
    </Link>
  )
}
