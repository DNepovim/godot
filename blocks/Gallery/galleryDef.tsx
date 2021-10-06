import { BlockTemplates } from "../blocks"
import { GalleryProps } from "./Gallery"

export interface GalleryBlock {
  template: BlockTemplates.Gallery,
  fields: GalleryProps
}