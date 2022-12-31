import { Styles } from "../styles/theme"
import { BlockTemplates } from "./blockTemplates"
import { ColumnsBlock, columnsDef } from "./Columns/columnsDef"
import { ContactsBlock, contactsDef } from "./Contacts/contactsDef"
import { coverDef, CoverBlock } from "./Cover/coverDef"
import { GalleryBlock, galleryDef } from "./Gallery/galleryDef"
import { PersonsBlock, personsDef } from "./Persons/personsDef"
import { QuotationBlock, quotationDef } from "./Quotation/quotationDef"
import { RichTextBlock, richTextDef } from "./RichText/richTextDef"
import {
  TestimonialsBlock,
  testimonialsDef,
} from "./Testimonials/testimonialsDef"

export interface Block {
  id: string
  anchor: string
  order: number
  palette?: Styles
  isHidden?: boolean
}

export type BlocksDefs =
  | ColumnsBlock
  | ContactsBlock
  | CoverBlock
  | GalleryBlock
  | PersonsBlock
  | QuotationBlock
  | RichTextBlock
  | TestimonialsBlock

export const blockDefs: Record<BlockTemplates, BlockDef<any>> = {
  columns: columnsDef,
  contacts: contactsDef,
  cover: coverDef,
  gallery: galleryDef,
  persons: personsDef,
  quotation: quotationDef,
  richText: richTextDef,
  testimonials: testimonialsDef,
}

export interface BlockDef<T> {
  title: string
  template: BlockTemplates
  component: React.FC<T>
}
