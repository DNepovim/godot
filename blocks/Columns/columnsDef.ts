import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Columns } from "./Columns"
import { Block } from "../blocks"

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

export const columnsDef: BlockDef<ColumnsFields> = {
  title: "Sloupce",
  template: BlockTemplates.Columns,
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