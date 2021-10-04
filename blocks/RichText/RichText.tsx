/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { theme } from "../../theme"

interface Props {
  title: string
  text: string
  textAlign: string
}

export const RichText: React.FC<{data: Props}> = ({data}) => (
  <section>
    <Container
      css={css`
        text-align: ${data.textAlign};
      `}
    >
      <Heading level={2}>{data.title}</Heading>
      <div dangerouslySetInnerHTML={{__html: data.text}} />
    </Container>
  </section>

)