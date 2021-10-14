import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Gallery } from "./Gallery"

export interface GalleryBlock {
  template: BlockTemplates.Gallery
  fields: GalleryFields
}

export interface GalleryFields extends BlockFields {
  images: string[]
}

export const galleryDef: BlockDef<GalleryFields> = {
  title: "Galerie",
  template: BlockTemplates.Gallery,
  adminFields: {
    images: {
      label: "Obrázky",
      clonable: true,
      input: adminComponentsDef.text
    }
  },
  component: Gallery
}
