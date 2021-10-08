import { adminComponentsDef, BlockDef } from "../../admin/adminFieldsDef"
import { BlockTemplates } from "../blocks"
import { Cover, CoverProps } from "./Cover"

export interface CoverBlock {
  template: BlockTemplates.Cover
  fields: CoverProps
}

export const coverDef: BlockDef<CoverProps> = {
  id: "62524766-cd93-4efe-8731-2710abaff2e5",
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
