import '../styles/globals.css'
import "../styles/offcanvas.css"
import "../styles/Header.css"
import { getClient } from '../lib/sanity.server';
import { rrssQuery } from '../lib/queries';
import { useState } from 'react';
import { Context } from '../components/context';

function MyApp({ Component, pageProps, rrss }) {
  const [ context, setContext ] = useState(rrss)

  return ( 
    <Context.Provider value={[context, setContext]}>
      <Component {...pageProps} /> 
    </Context.Provider>
  )
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
