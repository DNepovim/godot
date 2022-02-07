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
import { MetaTags } from "../admin/components/MetaTags/MetaTags"

const Home: NextPage<Props> = ({ meta, navigation, page }) => (
  <div>
    <Head>
      <MetaTags
        title={meta?.title ?? ""}
        description={meta?.description ?? ""}
        brandColor={theme.color.yellow}
        themeColor={theme.color.lighterBlue}
        url={meta?.url ?? window?.origin ?? ""}
        image="/images/cover.png"
        manifest="/favicons/site.webmanifest"
        font="https://cdn.skauting.cz/fonts/fonts.css"
        icons={{
          appleTouchIcon: "/favicons/apple-touch-icon.png",
          largeIcon: "/favicons/favicon-32x32.png",
          smallIcon: "/favicons/favicon-16x16.png",
          maskIcon: "/favicons/safari-pinned-tab.svg",
        }}
      />
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
