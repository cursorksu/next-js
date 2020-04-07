import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
              <Head>
                  <title>My list of posts with Next.js</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link
                      href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Raleway:wght@300&display=swap"
                      rel="stylesheet"
                  />
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
          </Html>
        )
    }
}

// @ts-ignore
export default CustomDocument;