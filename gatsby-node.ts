import { getMeta, getNavigation, getPage } from "./firebase/database"
import path from "path"

exports.createPages = async ({ actions: { createPage } }) => {
  const page = await getPage("hlavni-stranka")
  const navigation = await getNavigation()
  const meta = await getMeta()

  createPage({
    path: `/`,
    component: path.resolve("./src/templates/index.tsx"),
    context: {
      pageBlocks:
        page?.content
          .filter(({ isHidden }) => !isHidden)
          .sort((a, b) => a.order - b.order) ?? [],
      navigation: navigation?.items ?? [],
      meta,
    },
  })
}
