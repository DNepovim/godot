import React from "react";
import { ColumnsBlock, columnsDef } from "./Columns/columnsDef";
import { Columns } from "./Columns/Columns";
import { Contacts } from "./Contacts/Contacts";
import { ContactsBlock, contactsDef } from "./Contacts/contactsDef";
import { Cover } from "./Cover/Cover";
import coverDef, { CoverBlock } from "./Cover/coverDef";
import { Gallery } from "./Gallery/Gallery";
import { GalleryBlock, galleryDef } from "./Gallery/galleryDef";
import { Persons } from "./Persons/Persons";
import { PersonsBlock, personsDef } from "./Persons/personsDef";
import { Quotation } from "./Quotation/Quotation";
import { QuotationBlock, quotationDef } from "./Quotation/quotationDef";
import { RichText } from "./RichText/RichText";
import { RichTextBlock, richTextDef } from "./RichText/richTextDef";
import { Video } from "./Video/Video";
import { VideoBlock, videoDef } from "./Video/videoDef";
import { BlockTemplates } from "./blockTemplates";

type Blocks = Record<BlockTemplates, React.FC<any>>

export const blocks: Blocks = {
  columns: Columns,
  contacts: Contacts,
  cover: Cover,
  gallery: Gallery,
  persons: Persons,
  quotation: Quotation,
  richText: RichText,
  video: Video
}

export type BlocksDefs = ColumnsBlock | ContactsBlock | CoverBlock | GalleryBlock | PersonsBlock | QuotationBlock | RichTextBlock | VideoBlock

export const blockDefs = {
  columns: columnsDef,
  contacts: contactsDef,
  cover: coverDef,
  gallery: galleryDef,
  persons: personsDef,
  quotation: quotationDef,
  richText: richTextDef,
  video: videoDef
}