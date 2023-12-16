"use client";
import { tp } from "../../utils/tp";
import React from "react";
import { Block } from "../../components/Block/Block";
import { theme } from "../../styles/theme";
import { Container } from "../../components/Container/Container";
import styled from "@emotion/styled";
import { PageBlocksQuotation } from "../../tina/__generated__/types";

const Quotation: React.FC<PageBlocksQuotation> = ({ quotation, source, sourceUrl, ...block }) => (
  <Block {...block}>
    <QuotationContainer>
      <Quote>{tp(quotation)}</Quote>
      <SourceLink href={sourceUrl} target="_blank" rel="noreferrer noopener">
        {tp(source)}
      </SourceLink>
    </QuotationContainer>
  </Block>
);

export default Quotation;

const QuotationContainer = styled(Container)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 800px;

  height: 100%;
  margin: 0 auto;
`;

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
`;

const SourceLink = styled.a`
  color: ${theme.color.yellow};
`;
