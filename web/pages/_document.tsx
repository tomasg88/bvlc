import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
    DocumentContext,
} from 'next/document';
import {
    GoogleScriptHeaderTag,
    GoogleNoScriptBodyTag,
} from 'components/GoogleScripts/GoogleScripts';
import { ReactElement } from 'react';

class HtmlDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): ReactElement {
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
