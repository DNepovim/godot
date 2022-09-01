import { BlockFields } from "../../components/Block/Block"
import { Cover } from "./Cover"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

export interface CoverBlock extends Block {
  template: BlockTemplates.Cover
  fields: CoverFields
}

export interface CoverFields extends BlockFields {
  title: string
  subtitle: string
  claim: string
  button: {
    label: string
    link: string
    targetBlank?: boolean
    showButton?: boolean
  }
  isSnowfall?: boolean
}

export const coverDef: BlockDef<CoverFields> = {
  title: "Plakát",
  template: BlockTemplates.Cover,
  component: Cover,
}
