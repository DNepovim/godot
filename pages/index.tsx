/** @jsxImportSource @emotion/react */
import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { NavigationItem, Page, SiteMeta } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import { css, Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { blockDefs } from "../blocks/blocks"
import { BlockTemplates } from "../blocks/blockTemplates"
import { getMeta, getNavigation, getPage } from "../firebase/database"
import { theme } from "../theme"

const Home: NextPage<Props> = ({ meta, navigation, page }) => (
  <div>
    <Head>
      <title>{meta.title}</title>

      {/* <link rel="icon" href={`/favicons/favicon.ico`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-16x16.png`}
      />
      <link rel="manifest" href={`/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`/safari-pinned-tab.svg`}
        color={theme.color.lightBlue}
      /> */}
      <meta name="msapplication-TileColor" content={theme.color.background} />
      <meta name="theme-color" content={theme.color.background} />

      <link rel="preconnect" href="https://cdn.skauting.cz" />
      <link href="https://cdn.skauting.cz/fonts/fonts.css" rel="stylesheet" />
    </Head>

    <Global styles={globalStyles} />

    <main
      css={css`
        min-height: 300vh;
        padding-top: 90px;
      `}
    >
      <Navigation logo={`/images/logo.svg`} items={navigation} />
      {page.blocks
        .filter((block) => !!block)
        .map(({ template, fields }, i) =>
          React.createElement(blockDefs[template as BlockTemplates].component, {
            ...fields,
            key: i,
          })
        )}
    </main>
  </div>
)

export const getStaticProps = async () => ({
  props: {
    meta: (await getMeta()) ?? {},
    navigation: (await getNavigation()) ?? [],
    page: (await getPage("frontPage")) ?? [],
  },
})

interface Props {
  meta: SiteMeta
  navigation: NavigationItem[]
  page: Page
}

export default Home
