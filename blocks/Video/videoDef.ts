import { BlockDef } from "../../admin/adminFieldsDef"
import { adminComponentsDef } from "../../admin/adminComponentsDef"
import { BlockFields } from "../../components/Block/Block"
import { ResponsiveVideoProps } from "../../components/ResponsiveVideo/ResponsiveVideo"
import { BlockTemplates } from "../blockTemplates"
import { Video } from "./Video"

export interface VideoBlock {
  template: BlockTemplates.Video
  fields: VideoFields
}

export interface VideoFields extends BlockFields {
  video: ResponsiveVideoProps
}


export const videoDef: BlockDef<VideoFields> = {
  title: "Video",
  template: BlockTemplates.Video,
  adminFields: {
    video: {
      label: "Video",
      fields: {
        src: {
          label: "Zdroj",
          input: adminComponentsDef.text
        },
        width: {
          label: "Šířka",
          input: adminComponentsDef.number
        },
        height: {
          label: "Výška",
          input: adminComponentsDef.number
        }

      }
    }
  },
  component: Video
}