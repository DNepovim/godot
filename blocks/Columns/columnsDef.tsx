import * as yup from "yup"
import { BlockDef } from "../../admin/adminFieldsDef"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Columns } from "./Columns"
import { Block } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"

export interface ColumnsBlock extends Block {
  template: BlockTemplates.Columns
  fields: ColumnsFields
}

export interface ColumnsFields extends BlockFields {
  title: string
  columns: {
    title: string
    text: string
    icon: string
  }[]
}

export const columnsSchema = withBlockSchema(yup.object().shape({
  title: yup.string().required("Musíš vyplnit nadpis").max(80),
  columns: yup.array().of(yup.object().shape({
    title: yup.string().required(),
    text: yup.string().required(),
    icon: yup.string().required()
  }))
}))

export const columnsDef: BlockDef<ColumnsFields> = {
  title: "Sloupce",
  template: BlockTemplates.Columns,
  schema: columnsSchema,
  adminFields: {
    title: {
      label: "Nadpis",
      component: props => <TextInput {...props} />
    },
    columns: {
      label: "Sloupce",
      clonable: true,
      fields: {
        title: {
          label: "Nadpis",
          component: props => <TextInput {...props} />
        },
        text: {
          label: "Text",
          component: props => <TextInput {...props} />
        },
        icon: {
          label: "Ikona",
          component: props => <TextInput {...props} />
        }
      }
    }
  },
  component: Columns
}