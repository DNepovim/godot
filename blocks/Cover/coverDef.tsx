import * as yup from "yup"
import { BlockDef } from "../../admin/adminFieldsDef"
import { BlockFields as BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Cover } from "./Cover"
import { Block } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"
import { CheckInput } from "../../admin/components/Inputs/CheckInput/CheckInput"

export interface CoverBlock extends Block {
  template: BlockTemplates.Cover
  fields: CoverFields
}

export interface CoverFields extends BlockFields {
  title: string
  subtitle: string
  claim: string
  button: {
    label: string
    link: string
    targetBlank?: boolean
  }
  isSnowfall?: boolean
}

export const coverSchema = withBlockSchema(yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  claim: yup.string().required(),
  button: yup.object().shape({
    label: yup.string().required(),
    link: yup.string().required(),
    targetBlank: yup.bool()
  }),
  isSnowfall: yup.bool()
}))

export const coverDef: BlockDef<CoverFields> = {
  title: "Plakát",
  template: BlockTemplates.Cover,
  schema: coverSchema,
  adminFields: {
    title: {
      label: "Nadpis",
      component: props => <TextInput {...props} />
    },
    subtitle: {
      label: "Podnadpis",
      component: props => <TextInput {...props} />
    },
    claim: {
      label: "Podpodnadpis",
      component: props => <TextInput {...props} />
    },
    button: {
      label: "Tlačítko",
      fields: {
        label: {
          label: "Nápis",
          component: props => <TextInput {...props} />
        },
        link: {
          label: "Odkaz",
          component: props => <TextInput {...props} />
        },
        targetBlank: {
          label: "Otevřít v novém okně",
          component: props => <CheckInput {...props} />
        }
      }
    },
    isSnowfall: {
      label: "Sněžení",
      component: props => <CheckInput {...props} />
    }
  },
  component: Cover
}

export default coverDef