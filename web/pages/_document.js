import Document, { Html, Head, Main, NextScript } from 'next/document';
import {
    GoogleScriptHeaderTag,
    GoogleNoScriptBodyTag,
} from 'components/GoogleScripts/GoogleScripts';

class HtmlDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <GoogleScriptHeaderTag />
                </Head>
                <body>
                    <GoogleNoScriptBodyTag />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default HtmlDocument;
