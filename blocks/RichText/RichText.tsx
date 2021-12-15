/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { tp } from "../../admin/utils/tp"
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
      <Heading level={2}>{tp(title)}</Heading>
      <div dangerouslySetInnerHTML={{__html: tp(text)}} />
    </Container>
  </Block>

)