/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { RichTextFields } from "./richTextDef"

export const RichText: React.FC<RichTextFields> = ({id, title, text, textAlign}) => (
  <Block id={id}>
    <Container
      css={css`
        text-align: ${textAlign};
      `}
    >
      <Heading level={2}>{title}</Heading>
      <div dangerouslySetInnerHTML={{__html: text}} />
    </Container>
  </Block>

)