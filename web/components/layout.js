import Footer from '../components/footer'
import Header from '../components/header'
import Meta from '../components/meta'
import Offcanvas from "../components/offcanvas"

export default function Layout({children }) {
    return (
      <>
        <Meta />
        <Offcanvas />
        <Header />
        <div className="min-h-screen bg-red-500">
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )
  }