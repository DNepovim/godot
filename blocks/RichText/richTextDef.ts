import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { RichText } from "./RichText"
import * as yup from "yup"
import { Block } from "../blocks"

export interface RichTextBlock extends Block {
  template: BlockTemplates.RichText
  fields: RichTextFields
}

export interface RichTextFields extends BlockFields {
  title: string
  text: string
  textAlign: string
}

export const richTextDef: BlockDef<RichTextFields> = {
  title: "Text",
  template: BlockTemplates.RichText,
  adminFields: {
    title: {
      label: "Nadpis",
      input: adminComponentsDef.text
    },
    text: {
      label: "Text",
      input: adminComponentsDef.textArea
    },
    textAlign: {
      label: "Zarovnání",
      input: adminComponentsDef.text
    },
  },
  component: RichText
}
