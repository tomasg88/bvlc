import '../styles/globals.css'
import "../components/offcanvas.css"
import { getClient } from '../lib/sanity.server';
import { contactDataQuery, rrssQuery } from '../lib/queries';

function MyApp({ Component, pageProps, rrss }) {
  return ( <Component {...pageProps} rrss={rrss} /> )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const rrss = await getClient(false).fetch(rrssQuery)
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, rrss };
};

export default MyApp
