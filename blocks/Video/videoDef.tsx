import * as yup from "yup"
import { BlockDef } from "../../admin/adminFieldsDef"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { ResponsiveVideoProps } from "../../components/ResponsiveVideo/ResponsiveVideo"
import { BlockTemplates } from "../blockTemplates"
import { Video } from "./Video"
import { Block } from "../blocks"
import { NumberInput } from "../../components/NumberInput/NumberInput"
import { TextInput } from "../../components/TextInput/TextInput"

export interface VideoBlock extends Block {
  template: BlockTemplates.Video
  fields: VideoFields
}

export interface VideoFields extends BlockFields {
  video: ResponsiveVideoProps
}

export const videoSchema = withBlockSchema(yup.object().shape({
  video: yup.object().shape({
    src: yup.string().required(),
    width: yup.number().required(),
    height: yup.number().required(),
  })
}))

export const videoDef: BlockDef<VideoFields> = {
  title: "Video",
  template: BlockTemplates.Video,
  schema: videoSchema,
  adminFields: {
    video: {
      label: "Video",
      fields: {
        src: {
          label: "Zdroj",
          component: props => <TextInput {...props} />
        },
        width: {
          label: "Šířka",
          component: props => <NumberInput {...props} />
        },
        height: {
          label: "Výška",
          component: props => <NumberInput {...props} />
        }
      }
    }
  },
  component: Video
}