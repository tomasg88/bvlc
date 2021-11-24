import 'styles/globals.css';
import 'styles/offcanvas.css';
import 'styles/Header.css';
import { getClient } from 'lib/sanity.server';
import { rrssQuery } from 'lib/queries';
import { useEffect, useState } from 'react';
import { Context } from 'components/context';
import * as ga from 'lib/ga';
import { useRouter } from 'next/router';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AppContextType } from 'next/dist/next-server/lib/utils';

function MyApp({ Component, pageProps, rrss }: AppProps): JSX.Element {
    const [context, setContext] = useState(rrss);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => ga.pageView(url);
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <Context.Provider value={[context, setContext]}>
            <Component {...pageProps} />
        </Context.Provider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContextType) => {
    const rrss = await getClient(false).fetch(rrssQuery);
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, rrss };
};

export default MyApp;
