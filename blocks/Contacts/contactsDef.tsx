import * as yup from "yup"
import {
  BlockFields,
  withBlockSchema as withBlockSchema,
} from "../../components/Block/Block"
import { Contacts } from "./Contacts"
import { Block, BlockDef } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"
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

export const contactsSchema = withBlockSchema(
  yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string().required(),
    contacts: yup
      .array()
      .of(
        yup.object().shape({
          type: yup.string().required(),
          icon: yup.string().required(),
          url: yup.string().url().required(),
        })
      )
      .required(),
  })
)

export const contactsDef: BlockDef<ContactsFields> = {
  title: "Kontakty",
  template: BlockTemplates.Contacts,
  schema: contactsSchema,
  adminFields: {
    title: {
      label: "Nadpis",
      component: (props) => <TextInput {...props} />,
    },
    subtitle: {
      label: "Podtext",
      component: (props) => <TextInput {...props} />,
    },
    contacts: {
      label: "Kontakty",
      clonable: true,
      fields: {
        type: {
          label: "Typ",
          component: (props) => <TextInput {...props} />,
        },
        icon: {
          label: "Ikona",
          component: (props) => <TextInput {...props} />,
        },
        url: {
          label: "Odkaz",
          component: (props) => <TextInput {...props} />,
        },
      },
    },
  },
  component: Contacts,
}
