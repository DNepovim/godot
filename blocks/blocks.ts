import * as yup from 'yup'
import { FieldProps } from '../admin/components/Inputs/Fieldset/Fieldset'
import { Unarray } from "../admin/utilityTypes"
import { BlockTemplates } from './blockTemplates'
import { ColumnsBlock, columnsDef } from "./Columns/columnsDef"
import { ContactsBlock, contactsDef } from "./Contacts/contactsDef"
import { coverDef, CoverBlock } from "./Cover/coverDef"
import { GalleryBlock, galleryDef } from "./Gallery/galleryDef"
import { PersonsBlock, personsDef } from "./Persons/personsDef"
import { QuotationBlock, quotationDef } from "./Quotation/quotationDef"
import { RichTextBlock, richTextDef } from "./RichText/richTextDef"
import { VideoBlock, videoDef } from "./Video/videoDef"

export interface Block {
  id: string
}

export type BlocksDefs = ColumnsBlock | ContactsBlock | CoverBlock | GalleryBlock | PersonsBlock | QuotationBlock | RichTextBlock | VideoBlock

export const blockDefs: Record<BlockTemplates, BlockDef<any>> = {
  columns: columnsDef,
  contacts: contactsDef,
  cover: coverDef,
  gallery: galleryDef,
  persons: personsDef,
  quotation: quotationDef,
  richText: richTextDef,
  video: videoDef,
}

export interface BlockDef<T> {
  title: string
  template: BlockTemplates
  schema: yup.SchemaOf<T>
  adminFields: AdminFields<T>
  component: React.FC<T>
}

export type AdminFields<T> = {
  [K in keyof T]: AdminField<Unarray<T[K]>>
}

type AdminField<T> = GroupDef<T> | FieldDef<T>

interface GeneralDef {
  label: string
  clonable?: true
}

interface FieldDef<T> extends GeneralDef {
  component: React.FC<FieldProps<T>>
}

interface GroupDef<T> extends GeneralDef {
  fields: AdminFields<T>
}

export const isGroupField = <T extends {}>(component: AdminField<T>): component is GroupDef<T> => "fields" in component

export const checkBlockType = (block: BlocksDefs) => {

}