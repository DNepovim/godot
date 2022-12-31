import { getMeta, getNavigation, getPage } from "./firebase/database"
import path from "path"
import { ref, listAll, getDownloadURL } from "firebase/storage"
import { storage } from "./firebase/storage"
import { QueryFieldFilterConstraint } from "firebase/firestore"

exports.createPages = async ({ actions: { createPage } }) => {
  const page = await getPage("hlavni-stranka")
  const navigation = await getNavigation()
  const meta = await getMeta()

  const blocks = await Promise.all(
    (page?.content ?? []).map(async (block) => {
      if (block.template === "gallery") {
        const objectRef = ref(storage, "gallery")
        const list = await listAll(objectRef)
        const images = await Promise.all(
          list.items.map(async (item) => await getDownloadURL(item))
        )

        return { ...block, fields: { ...block.fields, images } }
      }
      return block
    })
  )

  createPage({
    path: `/`,
    component: path.resolve("./src/templates/index.tsx"),
    context: {
      pageBlocks:
        blocks
          .filter(({ isHidden }) => !isHidden)
          .sort((a, b) => a.order - b.order) ?? [],
      navigation: navigation?.items ?? [],
      meta,
    },
  })
}
