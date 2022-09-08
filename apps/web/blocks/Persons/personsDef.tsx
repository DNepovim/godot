import { BlockFields } from "../../components/Block/Block"
import { Persons } from "./Persons"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

export interface PersonsBlock extends Block {
  template: BlockTemplates.Persons
  fields: PersonsFields
}

export interface PersonsFields extends BlockFields {
  title: string
  subtitle: string
  persons: {
    nick: string
    name: string
    text: string
    image: string
  }[]
}

export const personsDef: BlockDef<PersonsFields> = {
  title: "Medailonky",
  template: BlockTemplates.Persons,
  component: Persons,
}
