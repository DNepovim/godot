import { BlocksDefs, BlockTemplates } from "./blocks/blocks";

export interface Page {
  blocks: BlocksDefs[]
}

export type Navigation = Array<{
  title: string
  link: string
}>

export interface Data {
  config: {
    navigation: Navigation
  },
  pages: Record<string, Page>
}
