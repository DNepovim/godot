import { BlockFields } from "../../components/Block/Block"
import { Quotation } from "./Quotation"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

export interface QuotationBlock extends Block {
  template: BlockTemplates.Quotation
  fields: QuotationFields
}

export interface QuotationFields extends BlockFields {
  text: string
  source: string
  sourceUrl: string
}

export const quotationDef: BlockDef<QuotationFields> = {
  title: "Citát",
  template: BlockTemplates.Quotation,
  component: Quotation,
}
