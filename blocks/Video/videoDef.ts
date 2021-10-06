import { BlockTemplates } from "../blocks"
import { VideoProps } from "./Video"

export interface VideoBlock {
  template: BlockTemplates.Video
  fields: VideoProps
}