import { BlockTemplates } from "../blocks"
import { ColumnsProps } from "./Columns"

export interface ColumnBlock {
  template: BlockTemplates.Columns
  fields: ColumnsProps
}

export const columnsDef = {
  admin: {

  }
}