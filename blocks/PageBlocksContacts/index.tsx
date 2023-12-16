"use client";
import React from "react";
import { tp } from "../../utils/tp";
import { theme } from "../../styles/theme";
import { Block } from "../../components/Block/Block";
import { ColumnContainer } from "../../components/Container/Container";
import styled from "@emotion/styled";
import { PageBlocksContacts } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Contacts: React.FC<PageBlocksContacts> = ({ title, text, ...block }) => (
  <Block {...block}>
    <ColumnContainer>
      <ContactHeading>{tp(title)}</ContactHeading>
      <SmallParagraph content={text} />
    </ColumnContainer>
  </Block>
);

export default Contacts;

const getHref = (url: string): string => (url.includes("@") ? `mailto:${url}` : url);

const ContactHeading = styled.h2`
  font-size: 1.8rem;
  font-family: ${theme.fonts.headings};
  text-align: center;
  margin-bottom: 4px;
`;

const SmallParagraph = styled(TinaMarkdown)`
  font-size: 0.8em;
`;
