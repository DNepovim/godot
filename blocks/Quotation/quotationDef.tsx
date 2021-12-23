import * as yup from "yup"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { Quotation } from "./Quotation"
import { Block, BlockDef } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"
import { TextAreaInput } from "../../admin/components/Inputs/TextAreaInput/TextAreaInput"
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

export const quotationSchema = withBlockSchema(
  yup.object().shape({
    text: yup.string().required(),
    source: yup.string().required(),
    sourceUrl: yup.string().required(),
  })
)

export const quotationDef: BlockDef<QuotationFields> = {
  title: "Citát",
  template: BlockTemplates.Quotation,
  schema: quotationSchema,
  adminFields: {
    text: {
      label: "Citát",
      component: (props) => <TextAreaInput {...props} />,
    },
    source: {
      label: "Název zdroje",
      component: (props) => <TextInput {...props} />,
    },
    sourceUrl: {
      label: "Odkaz na zdroj",
      component: (props) => <TextInput {...props} />,
    },
  },
  component: Quotation,
}
