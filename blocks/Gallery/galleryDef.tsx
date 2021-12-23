import * as yup from "yup"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { Gallery } from "./Gallery"
import { Block, BlockDef } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"
import { BlockTemplates } from "../blockTemplates"

export interface GalleryBlock extends Block {
  template: BlockTemplates.Gallery
  fields: GalleryFields
}

export interface GalleryFields extends BlockFields {
  images: string[]
}

export const gallerySchema = withBlockSchema(
  yup.object().shape({
    images: yup.array().of(yup.string().required()).required(),
  })
)

export const galleryDef: BlockDef<GalleryFields> = {
  title: "Galerie",
  template: BlockTemplates.Gallery,
  schema: gallerySchema,
  adminFields: {
    images: {
      label: "Obrázky",
      clonable: true,
      component: (props) => <TextInput {...props} />,
    },
  },
  component: Gallery,
}
