import { BlockTemplates } from "../blocks"
import { ContactsProps } from "./Contacts"

export interface ContactsBlock {
  template: BlockTemplates.Contacts
  fields: ContactsProps
}