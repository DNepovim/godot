import { BlockFields } from "../../components/Block/Block"
import { ResponsiveVideoProps } from "../../components/ResponsiveVideo/ResponsiveVideo"
import { Video } from "./Video"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"

export interface VideoBlock extends Block {
  template: BlockTemplates.Video
  fields: VideoFields
}

export interface VideoFields extends BlockFields {
  video: ResponsiveVideoProps
}

export const videoDef: BlockDef<VideoFields> = {
  title: "Video",
  template: BlockTemplates.Video,
  component: Video,
}
