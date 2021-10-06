import { BlockTemplates } from "../blocks"
import { CoverProps } from "./Cover"

export interface CoverBlock {
  template: BlockTemplates.Cover
  fields: CoverProps
}