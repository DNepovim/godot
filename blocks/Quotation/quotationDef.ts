import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Quotation } from "./Quotation"
import { Block } from "../blocks"

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
  adminFields: {
    text: {
      label: "Citát",
      input: adminComponentsDef.textArea
    },
    source: {
      label: "Název zdroje",
      input: adminComponentsDef.text
    },
    sourceUrl: {
      label: "Odkaz na zdroj",
      input: adminComponentsDef.text
    }
  },
  component: Quotation
}