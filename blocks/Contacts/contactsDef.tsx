import { BlockFields } from "../../components/Block/Block"
import { Contacts } from "./Contacts"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

export interface ContactsBlock extends Block {
  template: BlockTemplates.Contacts
  fields: ContactsFields
}

export interface ContactsFields extends BlockFields {
  title: string
  subtitle: string
  contacts: {
    type: string
    icon: string
    url: string
  }[]
}

export const contactsDef: BlockDef<ContactsFields> = {
  title: "Kontakty",
  template: BlockTemplates.Contacts,
  component: Contacts,
}
