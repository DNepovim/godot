import { BlockFields } from "../../components/Block/Block"
import { Columns } from "./Columns"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

export interface ColumnsBlock extends Block {
  template: BlockTemplates.Columns
  fields: ColumnsFields
}

export enum Icons {
  Lile = "lile",
  Scout = "scout",
  Hand = "hand",
}

export interface ColumnsFields extends BlockFields {
  title: string
  gridView?: boolean
  columns: {
    title: string
    text: string
    icon: Icons
  }[]
}

export const columnsDef: BlockDef<ColumnsFields> = {
  title: "Sloupce",
  template: BlockTemplates.Columns,
  component: Columns,
}
