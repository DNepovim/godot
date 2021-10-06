/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { ParallaxBanner } from "react-scroll-parallax"
import { Block, BlockProps } from "../../components/Block/Block"
import { theme } from "../../theme"

export interface QuotationProps extends BlockProps {
  text: string
  source: string
  sourceUrl: string
}

export const Quotation: React.FC<QuotationProps> = ({id, text, source, sourceUrl}) => (
  <Block id={id}>
    <ParallaxBanner
      layers={[
        {
          image: "/images/sky.png",
          amount: 0.2,
        }
      ]}
    >
      <div css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        max-width: 800px;
        height: 100%;
        margin: 0 auto;
      `}>
        <blockquote css={css`
          color: white;
          font-style: italic;
          font-weight: 700;
          font-size: ${theme.font.sizes[2]};
          font-family: themix;

          &:before,
          &:after {
            color: ${theme.color.brand};
          }

          &:before {
            content: "„";
          }

          &:after {
            content: "“";
          }
        `}>
          {text}
        </blockquote>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          {source}
        </a>
      </div>
    </ParallaxBanner>
  </Block>
)