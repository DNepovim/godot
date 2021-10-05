/** @jsxImportSource @emotion/react */
import React from "react"
import { theme } from "../../theme"
import { css } from "@emotion/react"
import { ParallaxBanner } from "react-scroll-parallax"
import { Container } from "../../components/Container/Container"
import { Block, BlockProps } from "../../components/Block/Block"

interface Props extends BlockProps {
  title: string,
  subtitle: string,
  claim: string,
  button: {
    label: string,
    link: string,
    targetBlank: boolean
  }
}

export const Cover: React.FC<Props> = ({id, title, subtitle, claim, button}) => (
  <Block id={id}>
    <ParallaxBanner
      layers={[
        {
          image: "/images/cover.jpg",
          amount: 0.2,
        }
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
      <Container
        css={css`padding: 64px 16px;`}
      >
        <h1 css={css`
          font-family: skautbold;
          font-size: 2.2em;
          font-weight: bold;
          color: white;
          margin: 0 0 4px;
        `}>
          {title}
        </h1>
        <p css={css`
          font-family: skautbold;
          font-size: 1.8em;
          font-weight: bold;
          color: white;
          margin: 0 0 4px;
        `}>
          {subtitle}
        </p>
        <p css={css`
          font-size: ${theme.font.sizes[2]};
          font-weight: bold;
          color: white;
          margin: 0 0 12px;
        `}
          dangerouslySetInnerHTML={{ __html: claim }}
        />
        <a
          href={button.link}
          {...(button.targetBlank ? {
            target: "_blank",
            rel: "noreferrer noopener"
          } : {})}
          css={css`
            display: inline-block;
            font-family: themix;
            font-size: ${theme.font.sizes[2]};
            color: white;
            padding: 0.6em 1em;
            border-radius: 4px;
            text-decoration: none;
            background-color: ${theme.color.brand};
          `}
        >
          {button.label}
        </a>
      </Container>
    </ParallaxBanner>
  </Block>
)