import React, { useEffect, useState } from "react"
import { css, Global } from "@emotion/react"
import { globalStyles } from "../styles/global"
import { blockDefs } from "../blocks/blocks"
import { BlockTemplates } from "../blocks/blockTemplates"
import { theme } from "../styles/theme"
import { MetaTags } from "../components/MetaTags/MetaTags"
import { fonts } from "../styles/fonts"
import { HeadFC } from "gatsby"
import { getMeta, getNavigation, getPage } from "../firebase/database"
import { SiteMeta, NavigationItem, Page } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import styled from "@emotion/styled"

interface Props {
  meta: SiteMeta
  navigation: NavigationItem[]
  pageBlocks: Page["content"]
}

const IndexPage = () => {
  const [{ meta, navigation, pageBlocks: page }, setData] = useState<Props>({
    meta: {},
    navigation: [],
    pageBlocks: [],
  })

  useEffect(() => {
    void (async () => {
      const meta = await getMeta()
      const navigation = await getNavigation()
      const page = await getPage("hlavni-stranka")
      setData({
        meta: meta ?? {},
        navigation: navigation?.items ?? [],
        pageBlocks: page?.content ?? [],
      })
    })()
  }, [])

  return (
    <div>
      <Global styles={fonts} />
      <Global styles={globalStyles} />

      <Main>
        <>
          {navigation.length > 0 && (
            <Navigation title={meta?.title} items={navigation} />
          )}
          {page
            .filter((block) => !!block && !block.isHidden)
            .map(({ template, fields, id, anchor }, i) =>
              React.createElement(
                blockDefs[template as BlockTemplates].component,
                {
                  ...fields,
                  key: id,
                  id: anchor,
                }
              )
            )}
        </>
      </Main>
    </div>
  )
}

export const Head: HeadFC = () => {
  const [meta, setMeta] = useState<SiteMeta>({})

  useEffect(() => {
    void (async () => {
      const meta = await getMeta()
      setMeta(meta ?? {})
    })
  })

  return (
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
  )
}

const Main = styled.main`
  min-height: 300vh;
  padding-top: 3.2em;
`

export default IndexPage
