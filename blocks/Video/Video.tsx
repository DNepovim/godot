/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Block, } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { ResponsiveVideo } from "../../components/ResponsiveVideo/ResponsiveVideo"
import { VideoFields } from "./videoDef"

export const Video: React.FC<VideoFields> = ({id, video}) => (
  <Block id={id}>
    <Container>
      <ResponsiveVideo {...video} />
    </Container>
  </Block>
)