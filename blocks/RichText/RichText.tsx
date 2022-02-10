/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { tp } from "../../admin/utils/tp"
import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { theme } from "../../styles/theme"
import { RichTextFields } from "./richTextDef"

export const RichText: React.FC<RichTextFields> = ({
  id,
  title,
  text,
  textAlign,
}) => (
  <Block backgroundColor={theme.color.brown} id={id}>
    <Container
      css={css`
        text-align: ${textAlign};
        color: ${theme.color.beige};
        *::selection {
          background-color: ${theme.color.yellow};
        }
      `}
    >
      <Heading color={theme.color.beige}>{tp(title)}</Heading>
      <div dangerouslySetInnerHTML={{ __html: tp(text) }} />
    </Container>
  </Block>
)
