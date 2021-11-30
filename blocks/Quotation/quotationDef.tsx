import * as yup from "yup"
import { BlockDef } from "../../admin/adminFieldsDef"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Quotation } from "./Quotation"
import { Block } from "../blocks"
import { TextAreaInput } from "../../components/TextAreaInput/TextAreaInput"
import { TextInput } from "../../components/TextInput/TextInput"

export interface QuotationBlock extends Block {
  template: BlockTemplates.Quotation
  fields: QuotationFields
}

export interface QuotationFields extends BlockFields {
  text: string
  source: string
  sourceUrl: string
}

export const quotationSchema = withBlockSchema(yup.object().shape({
  text: yup.string().required(),
  source: yup.string().required(),
  sourceUrl: yup.string().required(),
}))

export const quotationDef: BlockDef<QuotationFields> = {
  title: "Citát",
  template: BlockTemplates.Quotation,
  schema: quotationSchema,
  adminFields: {
    text: {
      label: "Citát",
      component: props => <TextAreaInput {...props} />
    },
    source: {
      label: "Název zdroje",
      component: props => <TextInput {...props} />
    },
    sourceUrl: {
      label: "Odkaz na zdroj",
      component: props => <TextInput {...props} />
    }
  },
  component: Quotation
}
