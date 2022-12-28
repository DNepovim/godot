import React from "react"
import { JustifiedContainer } from "../../components/Container/Container"
import { min, theme } from "../../styles/theme"
import { Block } from "../../components/Block/Block"
import { GalleryFields } from "./galleryDef"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const gap = 4

export const Gallery: React.FC<GalleryFields> = ({ id, images }) => (
  <Block id={id}>
    <JustifiedContainer>
      {images.map((image, i) => (
        <Figure key={1}>
          <GalleryImage
            src={`/images/${image}.webp`}
            alt={`Fotka ${i}`}
            width={theme.layout.width / 3}
            height={(theme.layout.width / 3) * 0.7}
          />
        </Figure>
      ))}
    </JustifiedContainer>
  </Block>
)

const Figure = styled.figure`
  box-sizing: border-box;
  text-align: center;
  width: calc(100% - ${gap * 2}px);
  margin: ${gap}px 0;

  @media ${min("s")} {
    width: calc(100% / 2 - ${gap * 2}px);
  }

  @media ${min("m")} {
    width: calc(100% / 3 - ${gap * 2}px);
  }
`

const GalleryImage = styled(StaticImage)`
  background-color: ${theme.color.lightBlue};
`
