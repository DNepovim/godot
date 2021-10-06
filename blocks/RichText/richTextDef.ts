import { BlockTemplates } from "../blocks"
import { RichTextProps } from "./RichText"

export interface RichTextBlock {
  template: BlockTemplates.RichText
  fields: RichTextProps
}