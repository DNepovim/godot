import { BlockTemplates } from "../blocks"
import { PersonsProps } from "./Persons"

export interface PersonsBlock {
  template: BlockTemplates.Persons
  fields: PersonsProps
}