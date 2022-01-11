/** @jsxImportSource @emotion/react */
import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Navigation as NavigationType, Page } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import logo from "../images/logo.png"
import { css, Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { blockDefs } from "../blocks/blocks"
import { BlockTemplates } from "../blocks/blockTemplates"
import { getNavigation, getPage } from "../firebase/database"

const Home: NextPage<Props> = ({ navigation, page }) => (
  <div>
    <Head>
      <title>ČK Insomnia</title>

      <link rel="icon" href="favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9dcfc3" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="preconnect" href="https://cdn.skauting.cz" />
      <link href="https://cdn.skauting.cz/fonts/fonts.css" rel="stylesheet" />
    </Head>

    <Global styles={globalStyles} />

    <main
      css={css`
        min-height: 300vh;
        padding-top: 96px;
      `}
    >
      <Navigation logo={logo} items={navigation} />
      {page.blocks.map(({ template, fields }) =>
        React.createElement(
          blockDefs[template as BlockTemplates].component,
          fields
        )
      )}
    </main>
  </div>
)

export const getStaticProps = async () => ({
  props: {
    navigation: (await getNavigation()) ?? [],
    page: (await getPage("frontPage")) ?? [],
  },
})

interface Props {
  navigation: NavigationType
  page: Page
}

export default Home
