import React from "react";
import { ColumnBlock } from "./Columns/columnsDef";
import { Columns } from "./Columns/Columns";
import { Contacts } from "./Contacts/Contacts";
import { ContactsBlock } from "./Contacts/contactsDef";
import { Cover } from "./Cover/Cover";
import { CoverBlock } from "./Cover/coverDef";
import { Gallery } from "./Gallery/Gallery";
import { GalleryBlock } from "./Gallery/galleryDef";
import { Persons } from "./Persons/Persons";
import { PersonsBlock } from "./Persons/personsDef";
import { Quotation } from "./Quotation/Quotation";
import { QuotationBlock } from "./Quotation/quotationDef";
import { RichText } from "./RichText/RichText";
import { RichTextBlock } from "./RichText/richTextDef";
import { Video } from "./Video/Video";
import { VideoBlock } from "./Video/videoDef";

export enum BlockTemplates {
  Columns = "columns",
  Contacts = "contacts",
  Cover = "cover",
  Gallery = "gallery",
  Persons = "persons",
  Quotation = "quotation",
  RichText = "richText",
  Video = "video"
}

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

export type BlocksDefs = ColumnBlock | ContactsBlock | CoverBlock | GalleryBlock | PersonsBlock | QuotationBlock | RichTextBlock | VideoBlock