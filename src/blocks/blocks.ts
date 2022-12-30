import { BlockTemplates } from "./blockTemplates"
import { ColumnsBlock, columnsDef } from "./Columns/columnsDef"
import { ContactsBlock, contactsDef } from "./Contacts/contactsDef"
import { coverDef, CoverBlock } from "./Cover/coverDef"
import { GalleryBlock, galleryDef } from "./Gallery/galleryDef"
import { PersonsBlock, personsDef } from "./Persons/personsDef"
import { QuotationBlock, quotationDef } from "./Quotation/quotationDef"
import { RichTextBlock, richTextDef } from "./RichText/richTextDef"

export interface Block {
  id: string
  anchor: string
  order: number
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

export const blockDefs: Record<BlockTemplates, BlockDef<any>> = {
  columns: columnsDef,
  contacts: contactsDef,
  cover: coverDef,
  gallery: galleryDef,
  persons: personsDef,
  quotation: quotationDef,
  richText: richTextDef,
}

export interface BlockDef<T> {
  title: string
  template: BlockTemplates
  component: React.FC<T>
}
