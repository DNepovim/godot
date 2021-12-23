/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Container } from "../../components/Container/Container"
import Image from "next/image"
import { theme } from "../../theme"
import { Block } from "../../components/Block/Block"
import { GalleryFields } from "./galleryDef"

const gap = 4

export const Gallery: React.FC<GalleryFields> = ({ id, images }) => (
  <Block id={id}>
    <Container
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      `}
    >
      {images.map((image, i) => (
        <figure
          key={1}
          css={css`
            box-sizing: border-box;
            text-align: center;
            width: calc(100% - ${gap * 2}px);
            margin: ${gap}px 0;

            @media (min-width: 500px) {
              width: calc(100% / 2 - ${gap * 2}px);
            }

            @media (min-width: 700px) {
              width: calc(100% / 3 - ${gap * 2}px);
            }
          `}
        >
          <Image
            src={image}
            alt={`Fotka ${i}`}
            width={theme.layout.width / 3}
            height={(theme.layout.width / 3) * 0.7}
            lazyBoundary="600px"
            css={css`
              background-color: ${theme.color.brand};
            `}
          />
        </figure>
      ))}
    </Container>
  </Block>
)
