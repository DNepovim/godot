import { BlockFields } from "../../components/Block/Block"
import { RichText } from "./RichText"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

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
  component: RichText,
}
