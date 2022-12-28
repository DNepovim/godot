import React from "react"
import { tp } from "../../utils/tp"
import { Block } from "../../components/Block/Block"
import { CenteredContainer } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { RichTextFields } from "./richTextDef"

export const RichText: React.FC<RichTextFields> = ({ id, title, text }) => (
  <Block theme={"brown"} id={id}>
    <CenteredContainer>
      <Heading>{tp(title)}</Heading>
      <div dangerouslySetInnerHTML={{ __html: tp(text) }} />
    </CenteredContainer>
  </Block>
)
