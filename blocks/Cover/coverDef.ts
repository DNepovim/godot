import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields as BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blockTemplates"
import { Cover } from "./Cover"

export interface CoverBlock {
  template: BlockTemplates.Cover
  fields: CoverFields
}

export interface CoverFields extends BlockFields {
  title: string,
  subtitle: string,
  claim: string,
  button: {
    label: string,
    link: string,
    targetBlank: boolean
  }
}

export const coverDef: BlockDef<CoverFields> = {
  title: "Plakát",
  template: BlockTemplates.Cover,
  adminFields: {
    title: {
      label: "Nadpis",
      input: adminComponentsDef.text
    },
    subtitle: {
      label: "Podnadpis",
      input: adminComponentsDef.text
    },
    claim: {
      label: "Podpodnadpis",
      input: adminComponentsDef.text
    },
    button: {
      label: "Button",
      fields: {
        label: {
          label: "Nápis",
          input: adminComponentsDef.text
        },
        link: {
          label: "Odkaz",
          input: adminComponentsDef.text
        },
        targetBlank: {
          label: "Otevřít v novém okně",
          // @ts-ignore
          input: adminComponentsDef.checkkbox
        }
      }
    }
  },
  component: Cover
}

export default coverDef