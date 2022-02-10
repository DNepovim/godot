/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { tp } from "../../admin/utils/tp"
import React from "react"
import { Block } from "../../components/Block/Block"
import { theme } from "../../styles/theme"
import { QuotationFields } from "./quotationDef"
import { Container } from "../../components/Container/Container"

export const Quotation: React.FC<QuotationFields> = ({
  id,
  text,
  source,
  sourceUrl,
}) => (
  <Block id={id} backgroundColor={theme.color.lightBlue}>
    <Container
      css={css`
        position: relative;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        max-width: 800px;
        height: 100%;
        margin: 0 auto;
        *::selection {
          background-color: ${theme.color.darkBlue};
        }
      `}
    >
      <blockquote
        css={css`
          color: ${theme.color.beige};
          font-style: italic;
          font-weight: 700;
          font-size: 1.4rem;
          font-family: themix;

          &:before,
          &:after {
            color: ${theme.color.yellow};
          }

          &:before {
            content: "„";
          }

          &:after {
            content: "“";
          }
        `}
      >
        {tp(text)}
      </blockquote>
      <a
        css={css`
          color: ${theme.color.yellow};
        `}
        href={sourceUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        {tp(source)}
      </a>
    </Container>
  </Block>
)
