import { BlockDef, adminComponentsDef } from "../../admin/adminFieldsDef"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { RichText } from "./RichText"

export interface RichTextBlock {
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
      label: "Nadpis",
      input: adminComponentsDef.text
    },
    textAlign: {
      label: "Zarovnání",
      input: adminComponentsDef.text
    },
  },
  component: RichText
}
