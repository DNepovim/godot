import { BlocksDefs } from "./blocks/blocks"

export interface Page {
  title: string
  lastEditedBy: string
  lastEditedTime: string
  content: BlocksDefs[]
}

export enum NavigationItemType {
  Button = "button",
}

export interface NavigationItem {
  title: string
  link: string
  type?: NavigationItemType.Button
  showAlways?: boolean
  showAfterScroll?: boolean
}
export interface SiteMeta {
  title?: string
  description?: string
  url?: string
}

export interface Data {
  config: {
    navigation: NavigationItem[]
  }
  pages: Record<string, Page>
}
