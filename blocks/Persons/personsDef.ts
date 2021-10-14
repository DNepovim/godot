import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Persons } from "./Persons"

export interface PersonsBlock {
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
  adminFields: {
    title: {
      label: "Nadpis",
      input: adminComponentsDef.text
    },
    subtitle: {
      label: "Podnadpis",
      input: adminComponentsDef.text
    },
    persons: {
      label: "Lidé",
      clonable: true,
      fields: {
        nick: {
          label: "Přezdívka",
          input: adminComponentsDef.text
        },
        name: {
          label: "Jméno",
          input: adminComponentsDef.text
        },
        text: {
          label: "Popis",
          input: adminComponentsDef.text
        },
        image: {
          label: "Fotka",
          input: adminComponentsDef.text
        },
      }
    }

  },
  component: Persons
}
