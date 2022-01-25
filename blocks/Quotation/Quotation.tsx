/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { tp } from "../../admin/utils/tp"
import React from "react"
import { ParallaxBanner } from "react-scroll-parallax"
import { Block } from "../../components/Block/Block"
import { theme } from "../../theme"
import { QuotationFields } from "./quotationDef"
import { PROJECT } from "../../projects"

export const Quotation: React.FC<QuotationFields> = ({
  id,
  text,
  source,
  sourceUrl,
}) => (
  <Block id={id}>
    <ParallaxBanner
      layers={[
        {
          image: `/${PROJECT}/images/sky.webp`,
          amount: 0.2,
        },
      ]}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          max-width: 800px;
          height: 100%;
          margin: 0 auto;
        `}
      >
        <blockquote
          css={css`
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
          `}
        >
          {text}
        </blockquote>
        <a href={sourceUrl} target="_blank" rel="noreferrer noopener">
          {tp(source)}
        </a>
      </div>
    </ParallaxBanner>
  </Block>
)
