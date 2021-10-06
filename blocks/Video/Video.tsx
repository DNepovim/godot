/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Block, BlockProps } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { ResponsiveVideo, ResponsiveVideoProps } from "../../components/ResponsiveVideo/ResponsiveVideo"

export interface VideoProps extends BlockProps {
  video: ResponsiveVideoProps
}

export const Video: React.FC<VideoProps> = ({id, video}) => (
  <Block id={id}>
    <Container>
      <ResponsiveVideo {...video} />
    </Container>
  </Block>
)