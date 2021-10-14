import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Contacts } from "./Contacts"

export interface ContactsBlock {
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
  adminFields: {
    title: {
      label: "Nadpis",
      input: adminComponentsDef.text
    },
    subtitle: {
      label: "Podtext",
      input: adminComponentsDef.text
    },
    contacts: {
      label: "Kontakty",
      clonable: true,
      fields: {
        type: {
          label: "Typ",
          input: adminComponentsDef.text
        },
        icon: {
          label: "Ikona",
          input: adminComponentsDef.text
        },
        url: {
          label: "Odkaz",
          input: adminComponentsDef.text
        },
      }
    }
  },
  component: Contacts
}