import { BlockDef, adminComponentsDef } from "../../admin/adminFieldsDef"
import { BlockProps } from "../../components/Block/Block"
import { BlockTemplates } from "../blocks"
import { Columns } from "./Columns"

export interface ColumnsBlock {
  template: BlockTemplates.Columns
  fields: ColumnsFields
}

export interface ColumnsFields extends BlockProps {
  title: string
  columns: {
    title: string
    text: string
    icon: string
  }[]
}


export const columnsDef: BlockDef<ColumnsFields> = {
  title: "Columns",
  adminFields: {
    title: {
      label: "Nadpis",
      input: adminComponentsDef.text
    },
    columns: {
      label: "Sloupce",
      clonable: true,
      fields: {
        title: {
          label: "Nadpis",
          input: adminComponentsDef.text
        },
        text: {
          label: "Text",
          input: adminComponentsDef.text
        },
        icon: {
          label: "Ikona",
          input: adminComponentsDef.text
        }
      }
    }
  },
  component: Columns
}