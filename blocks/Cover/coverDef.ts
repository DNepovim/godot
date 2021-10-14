import { adminComponentsDef, BlockDef } from "../../admin/adminFieldsDef"
import { BlockProps as BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../blocks"
import { Cover } from "./Cover"

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

export interface CoverBlock {
  template: BlockTemplates.Cover
  fields: CoverFields
}

export const coverDef: BlockDef<CoverFields> = {
  title: "Cover",
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