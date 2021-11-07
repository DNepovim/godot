/** @jsxImportSource @emotion/react */
import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Navigation as NavigationType, Page } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import logo from "../images/logo.webp"
import { css, Global } from "@emotion/react"
import { blocks } from "../blocks/blocks"
import { getNavigation, getPage } from "../firebase/firebase"
import { globalStyles } from "../globalStyles"

const Home: NextPage<Props> = ({navigation, page}) => (
  <div>
    <Head>
      <title>ČLK Insomnia</title>
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://cdn.skauting.cz" />
      <link href="https://cdn.skauting.cz/fonts/fonts.css" rel="stylesheet" />
    </Head>

    <Global styles={globalStyles} />

    <main css={css`
      min-height: 300vh;
      padding-top: 96px;
    `}>
      <Navigation logo={logo} items={navigation} />
      {page.blocks.map(block => React.createElement(blocks[block.template], block.fields))}
    </main>
  </div>
)

export const getStaticProps = async () => ({
  props: {
    navigation: await getNavigation() ?? [],
    page: await getPage("frontPage") ?? []
  }
})

interface Props {
  navigation: NavigationType
  page: Page
}

export default Home
