import Footer from '../components/footer'
import Header from '../components/header'
import Meta from '../components/meta'

export default function Layout({children }) {
    return (
      <>
        <Meta />
        <Header />
        <div className="min-h-screen bg-red-500">
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )
  }