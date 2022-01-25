/** @jsxImportSource @emotion/react */
import React from "react"
import Snowfall from "react-snowfall"
import { tp } from "../../admin/utils/tp"
import { theme } from "../../theme"
import { css } from "@emotion/react"
import { ParallaxBanner } from "react-scroll-parallax"
import { Container } from "../../components/Container/Container"
import { Block } from "../../components/Block/Block"
import { CoverFields } from "./coverDef"
import { Button } from "../../components/Button/Button"
import { PROJECT } from "../../projects"

export const Cover: React.FC<CoverFields> = ({
  id,
  title,
  subtitle,
  claim,
  button,
  isSnowfall,
}) => (
  <Block id={id}>
    <ParallaxBanner
      layers={[
        {
          image: `/${PROJECT}/images/cover.webp`,
          amount: 0.2,
        },
      ]}
      css={css`
        height: auto !important;

        .parallax-outer {
          background-color: black;
        }

        .parallax-banner-layer-0 {
          opacity: 0.5;
        }
      `}
    >
      {isSnowfall && <Snowfall />}
      <Container
        css={css`
          padding: 120px 16px;
        `}
      >
        {title && (
          <h1
            css={css`
              font-family: skautbold;
              font-size: 2.2em;
              color: white;
              margin: 0 0 4px;
            `}
          >
            {tp(title)}
          </h1>
        )}
        {subtitle && (
          <p
            css={css`
              font-family: skautbold;
              font-size: 1.8em;
              color: white;
              margin: 0 0 4px;
            `}
          >
            {tp(subtitle)}
          </p>
        )}
        {claim && (
          <p
            css={css`
              font-size: ${theme.font.sizes[2]};
              color: white;
              margin: 0 0 32px;
            `}
            dangerouslySetInnerHTML={{ __html: tp(claim) }}
          />
        )}
        {button.showButton && (
          <Button link={button.link} targetBlank>
            {button.label}
          </Button>
        )}
      </Container>
    </ParallaxBanner>
  </Block>
)
