import Footer from "../components/footer"
import Header from "../components/header"
import Meta from "../components/meta"
import Offcanvas from "../components/offcanvas"
import SimpleReactLightbox from "simple-react-lightbox"
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Offcanvas />
      <Header />
      <div className="min-h-screen pt-12 bg-red-500">
        <SimpleReactLightbox>
          <main>{children}</main>
        </SimpleReactLightbox>
      </div>
      <Footer />
    </>
  )
}
