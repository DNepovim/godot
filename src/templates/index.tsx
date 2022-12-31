import React, { useEffect, useState } from "react"
import { Global } from "@emotion/react"
import { globalStyles } from "../styles/global"
import { blockDefs } from "../blocks/blocks"
import { BlockTemplates } from "../blocks/blockTemplates"
import { theme } from "../styles/theme"
import { MetaTags } from "../components/MetaTags/MetaTags"
import { fonts } from "../styles/fonts"
import { HeadFC, PageProps } from "gatsby"
import { getMeta, getNavigation, getPage } from "../../firebase/database"
import { SiteMeta, NavigationItem, Page } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import styled from "@emotion/styled"

interface Props {
  meta: SiteMeta
  navigation: NavigationItem[]
  pageBlocks: Page["content"]
}

const IndexPage = ({
  pageContext: { pageBlocks, navigation, meta },
}: PageProps<{}, Props>) => (
  <div>
    <Global styles={fonts} />
    <Global styles={globalStyles} />

    <Main>
      <>
        {navigation.length > 0 && (
          <Navigation title={meta?.title} items={navigation} />
        )}
        {pageBlocks
          .filter((block) => !!block && !block.isHidden)
          .map(({ template, fields, id, anchor, palette }, i) =>
            React.createElement(
              blockDefs[template as BlockTemplates].component,
              {
                ...fields,
                key: id,
                id: anchor,
                palette,
              }
            )
          )}
      </>
    </Main>
  </div>
)

export const Head: HeadFC = ({ pageContext }) => {
  const { meta } = pageContext
  return (
    <MetaTags
      title={meta?.title ?? ""}
      description={meta?.description ?? ""}
      brandColor={theme.color.yellow}
      themeColor={theme.color.yellow}
      url={meta?.url ?? (typeof window !== "undefined" ? window.origin : "")}
      image="../images/cover.png"
      manifest="../images/favicons/site.webmanifest"
      fontOrigin="https://cdn.skauting.cz"
      icons={{
        appleTouchIcon: "../images/favicons/apple-touch-icon.png",
        largeIcon: "../images/favicons/favicon-32x32.png",
        smallIcon: "../images/favicons/favicon-16x16.png",
        maskIcon: "../images/favicons/safari-pinned-tab.svg",
      }}
    />
  )
}

const Main = styled.main`
  min-height: 300vh;
  padding-top: 3.2em;
`

export default IndexPage
