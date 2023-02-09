import 'styles/globals.css';
import 'styles/offcanvas.css';
import 'styles/Header.css';
import { getClient } from 'lib/sanity.server';
import { rrssQuery } from 'lib/queries';
import { useEffect, useState } from 'react';
import { RrssContext, IRrss } from 'components/context';
import * as ga from 'lib/ga';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

interface MyAppProps extends AppProps {
  rrss: IRrss[];
}

function MyApp({ Component, pageProps, rrss }: MyAppProps): JSX.Element {
  const [context] = useState<IRrss[]>(rrss);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => ga.pageView(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <RrssContext.Provider value={context}>
      <Component {...pageProps} />
    </RrssContext.Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const rrss = await getClient(false).fetch(rrssQuery);
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, rrss };
};

export default MyApp;
