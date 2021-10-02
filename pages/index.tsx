/** @jsxImportSource @emotion/react */
import type { NextPage } from "next"
import Head from "next/head"
import { data } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import { Cover } from "../blocks/Cover/Cover"
import logo from "../images/logo.png"
import { css, Global } from "@emotion/react"
import { RichText } from "../blocks/RichText/RichText"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ČLK Insomnia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Global styles={css`
        @font-face {
          font-family: 'skautbold';
          src: url('../fonts/skaut-bold-webfont.eot');
          src: url('../fonts/skaut-bold-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/skaut-bold-webfont.woff2') format('woff2'),
            url('../fonts/skaut-bold-webfont.woff') format('woff'),
            url('../fonts/skaut-bold-webfont.ttf') format('truetype'),
            url('../fonts/skaut-bold-webfont.svg#skautbold') format('svg');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-4_semilight-webfont.eot');
          src: url('../fonts/themixc5-4_semilight-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-4_semilight-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-4_semilight-webfont.woff') format('woff'),
            url('../fonts/themixc5-4_semilight-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-4_semilight-webfont.svg#themix_c5semilight') format('svg');
          font-weight: normal;
          font-style: normal;
          font-display: auto;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-4isemilightita-webfont.eot');
          src: url('../fonts/themixc5-4isemilightita-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-4isemilightita-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-4isemilightita-webfont.woff') format('woff'),
            url('../fonts/themixc5-4isemilightita-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-4isemilightita-webfont.svg#themix_c5semilight_italic') format('svg');
          font-weight: normal;
          font-style: italic;
          font-display: auto;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-7_bold-webfont.eot');
          src: url('../fonts/themixc5-7_bold-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-7_bold-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-7_bold-webfont.woff') format('woff'),
            url('../fonts/themixc5-7_bold-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-7_bold-webfont.svg#themix_c5bold') format('svg');
          font-weight: bold;
          font-style: normal;
          font-display: auto;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-7ibolditalic-webfont.eot');
          src: url('../fonts/themixc5-7ibolditalic-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-7ibolditalic-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-7ibolditalic-webfont.woff') format('woff'),
            url('../fonts/themixc5-7ibolditalic-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-7ibolditalic-webfont.svg#themix_c5bold_italic') format('svg');
          font-weight: bold;
          font-style: italic;
          font-display: auto;
        }

        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-family: themix;
        }


      `} />

      <main css={css`min-height: 300vh;`}>
        <Navigation logo={logo} data={data.config.navigation} />
        <Cover data={data.pages.frontPage.blocks[0].fields} />
        <RichText data={data.pages.frontPage.blocks[1].fields} />
      </main>
    </div>
  )
}

export default Home
