import { BlockFields } from "../../components/Block/Block"
import { Gallery } from "./Gallery"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

export interface GalleryBlock extends Block {
  template: BlockTemplates.Gallery
  fields: GalleryFields
}

export interface GalleryFields extends BlockFields {
  images: string[]
  button: {
    label: string
    link: string
    targetBlank?: boolean
    showButton?: boolean
  }
}

export const galleryDef: BlockDef<GalleryFields> = {
  title: "Galerie",
  template: BlockTemplates.Gallery,
  component: Gallery,
}
