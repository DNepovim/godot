import { BlocksDefs } from "./blocks/blocks";

export interface Page {
  title: string
  lastEditedBy: string
  lastEditedTime: string
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
