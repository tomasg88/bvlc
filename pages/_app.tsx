import 'styles/globals.css';
import 'styles/offcanvas.css';
import 'styles/Header.css';
import { sanityClient } from 'lib/sanity.client';
import { rrssQuery } from 'lib/queries';
import { useEffect, useState } from 'react';
import { RrssContext, IRrss } from 'components/context';
import * as ga from 'lib/ga';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

interface MyAppProps extends AppProps {
  rrss: IRrss[];
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

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
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </RrssContext.Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const rrss = await sanityClient.fetch(rrssQuery);
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, rrss };
};

export default MyApp;
