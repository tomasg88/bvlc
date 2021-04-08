import Footer from "../components/footer"
import Header from "../components/header"
import Offcanvas from "../components/offcanvas"
import SimpleReactLightbox from "simple-react-lightbox"
import Head from "next/head"
import { DEFAULT_PAGE_TITLE, DEFAULT_PAGE_DESCRIPTION } from "../utils/constants"

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title && `${title} |`} {DEFAULT_PAGE_TITLE}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#dc2626" />
        <meta name="description" content={description || DEFAULT_PAGE_DESCRIPTION} />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="theme-color" content="#dc2626" />
      </Head>
      <Offcanvas />
      <Header />
      <div className="pt-20 bg-red-600 bg-pattern">
        <SimpleReactLightbox>
          <main>{children}</main>
        </SimpleReactLightbox>
      </div>
      <Footer />
    </>
  )
}
