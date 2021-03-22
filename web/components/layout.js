import Footer from "../components/footer"
import Header from "../components/header"
import Meta from "../components/meta"
import Offcanvas from "../components/offcanvas"
import SimpleReactLightbox from "simple-react-lightbox"
export default function Layout({ rrss, children }) {
  return (
    <>
      <Meta />
      <Offcanvas />
      <Header rrss={rrss} />
      <div className="min-h-screen bg-red-500">
        <SimpleReactLightbox>
          <main>{children}</main>
        </SimpleReactLightbox>
      </div>
      <Footer />
    </>
  )
}
