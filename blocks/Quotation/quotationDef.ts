import { BlockTemplates } from "../blocks"
import { QuotationProps } from "./Quotation"

export interface QuotationBlock {
  template: BlockTemplates.Quotation
  fields: QuotationProps
}