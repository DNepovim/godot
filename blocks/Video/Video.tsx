/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Block, BlockProps } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { ResponsiveVideo, ResponsiveVideoProps } from "../../components/ResponsiveVideo/ResponsiveVideo"

interface Props extends BlockProps {
  video: ResponsiveVideoProps
}

export const Video: React.FC<Props> = ({id, video}) => (
  <Block id={id}>
    <Container>
      <ResponsiveVideo {...video} />
    </Container>
  </Block>
)