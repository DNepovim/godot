import { tp } from "../../utils/tp"
import React from "react"
import { Block } from "../../components/Block/Block"
import { theme } from "../../styles/theme"
import { QuotationFields } from "./quotationDef"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"

export const Quotation: React.FC<QuotationFields> = ({
  text,
  source,
  sourceUrl,
  ...block
}) => (
  <Block {...block}>
    <QuotationContainer>
      <Quote>{tp(text)}</Quote>
      <SourceLink href={sourceUrl} target="_blank" rel="noreferrer noopener">
        {tp(source)}
      </SourceLink>
    </QuotationContainer>
  </Block>
)

const QuotationContainer = styled(Container)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 800px;

  height: 100%;
  margin: 0 auto;
`

const Quote = styled.blockquote`
  color: ${theme.color.beige};
  font-style: italic;
  font-weight: 700;
  font-size: 1.4rem;

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
`

const SourceLink = styled.a`
  color: ${theme.color.yellow};
`
