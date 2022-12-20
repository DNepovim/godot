/** @jsxImportSource @emotion/react */
import React from "react"
import type { NextPage } from "next"
import { NavigationItem, Page, SiteMeta } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import { css, Global } from "@emotion/react"
import { globalStyles } from "../styles/global"
import { blockDefs } from "../blocks/blocks"
import { BlockTemplates } from "../blocks/blockTemplates"
import { getMeta, getNavigation, getPage } from "../firebase/database"
import { theme } from "../styles/theme"
import { MetaTags } from "../components/MetaTags/MetaTags"
import { fonts } from "../styles/fonts"

const Home: NextPage<Props> = ({ meta, navigation, page }) => (
  <div>
    <MetaTags
      title={meta?.title ?? ""}
      description={meta?.description ?? ""}
      brandColor={theme.color.yellow}
      themeColor={theme.color.yellow}
      url={meta?.url ?? (typeof window !== "undefined" ? window.origin : "")}
      image="/images/cover.png"
      manifest="/favicons/site.webmanifest"
      fontOrigin="https://cdn.skauting.cz"
      icons={{
        appleTouchIcon: "/favicons/apple-touch-icon.png",
        largeIcon: "/favicons/favicon-32x32.png",
        smallIcon: "/favicons/favicon-16x16.png",
        maskIcon: "/favicons/safari-pinned-tab.svg",
      }}
    />

    <Global styles={fonts} />
    <Global styles={globalStyles} />

    <main
      css={css`
        min-height: 300vh;
        padding-top: 3.2em;
      `}
    >
      <Navigation title={meta?.title} items={navigation} />
      {page.blocks
        .filter((block) => !!block && !block.isHidden)
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
