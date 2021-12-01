import * as yup from "yup"
import { BlockDef } from "../../admin/adminFieldsDef"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { RichText } from "./RichText"
import { Block } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"

export interface RichTextBlock extends Block {
  template: BlockTemplates.RichText
  fields: RichTextFields
}

export interface RichTextFields extends BlockFields {
  title: string
  text: string
  textAlign: string
}

export const richTextSchema = withBlockSchema(yup.object().shape({
  title: yup.string().required(),
  text: yup.string().required(),
  textAlign: yup.string().required()
}))

export const richTextDef: BlockDef<RichTextFields> = {
  title: "Text",
  template: BlockTemplates.RichText,
  schema: richTextSchema,
  adminFields: {
    title: {
      label: "Nadpis",
      component: props => <TextInput {...props} />
    },
    text: {
      label: "Text",
      component: props => <TextInput {...props} />
    },
    textAlign: {
      label: "Zarovnání",
      component: props => <TextInput {...props} />
    },
  },
  component: RichText
}
