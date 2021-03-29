import Footer from "../components/footer"
import Header from "../components/header"
import Meta from "../components/meta"
import Offcanvas from "../components/offcanvas"
import SimpleReactLightbox from "simple-react-lightbox"
import Head from "next/head"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="theme-color" content="#dc2626" />
      </Head>
      <Meta />
      <Offcanvas />
      <Header />
      <div className="min-h-screen bg-red-500 pt-28">
        <SimpleReactLightbox>
          <main>{children}</main>
        </SimpleReactLightbox>
      </div>
      <Footer />
    </>
  )
}
