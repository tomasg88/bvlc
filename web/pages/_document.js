import Document, { Html, Head, Main,NextScript   } from 'next/document'

class HtmlDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript  />
        </body>
      </Html>
    )
  }
}

export default HtmlDocument