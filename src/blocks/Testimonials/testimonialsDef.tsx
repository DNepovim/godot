import { BlockFields } from "../../components/Block/Block"
import { Block, BlockDef } from "../blocks"
import { BlockTemplates } from "../blockTemplates"
import { Testimonials } from "./Testimonials"

export interface TestimonialsBlock extends Block {
  template: BlockTemplates.Testimonials
  fields: TestimonialsFields
}

export interface TestimonialsFields extends BlockFields {
  testimonials: {
    name: string
    text: string
  }[]
}

export const testimonialsDef: BlockDef<TestimonialsFields> = {
  title: "Ohlasy",
  template: BlockTemplates.Testimonials,
  component: Testimonials,
}
