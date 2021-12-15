import * as yup from "yup"
import { BlockDef } from "../../admin/adminFieldsDef"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Persons } from "./Persons"
import { Block } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"
import { TextAreaInput } from "../../admin/components/Inputs/TextAreaInput/TextAreaInput"

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

export const personsSchema = withBlockSchema(yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  persons: yup.array().of(yup.object().shape({
    nick: yup.string().required(),
    name: yup.string().required(),
    text: yup.string().required(),
    image: yup.string().required(),
  }))
}))


export const personsDef: BlockDef<PersonsFields> = {
  title: "Medailonky",
  template: BlockTemplates.Persons,
  schema: personsSchema,
  adminFields: {
    title: {
      label: "Nadpis",
      component: props => <TextInput {...props} />
    },
    subtitle: {
      label: "Podnadpis",
      component: props => <TextInput {...props} />
    },
    persons: {
      label: "Lidé",
      clonable: true,
      fields: {
        nick: {
          label: "Přezdívka",
          component: props => <TextInput {...props} />
        },
        name: {
          label: "Jméno",
          component: props => <TextInput {...props} />
        },
        text: {
          label: "Popis",
          component: props => <TextAreaInput {...props} />
        },
        image: {
          label: "Fotka",
          component: props => <TextInput {...props} />
        },
      }
    }

  },
  component: Persons
}
