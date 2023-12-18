import React from "react";
import { tp } from "../../utils/tp";
import { Icon } from "../Icon/Icon";
import styled from "@emotion/styled";
import { PageBlocksColumnsColumns } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Column: React.FC<PageBlocksColumnsColumns> = ({ title, text, icon }) => (
  <article>
    <Header>
      {icon && (
        <Figure>
          <Icon icon={icon} />
        </Figure>
      )}
      <Heading>{tp(title)}</Heading>
    </Header>
    <TinaMarkdown
      content={text}
      components={{
        h1: ({ children }) => <Title>{children}</Title>,
        h2: ({ children }) => <Title>{children}</Title>,
        h3: ({ children }) => <Title>{children}</Title>,
        h4: ({ children }) => <Title>{children}</Title>,
        ul: ({ children }) => <List>{children}</List>,
        p: ({ children }) => <Paragraph>{children}</Paragraph>,
      }}
    />
  </article>
);

const Header = styled.header`
  display: flex;
  align-items: flex-end;
`;

const Figure = styled.figure`
  margin: -20px;
  z-index: -5;
  transform: scale(1.2, 1.2);
  user-select: none;
  width: 80px;
  height: 80px;
`;

const Heading = styled.h3`
  margin: 0 0 10px;
`;

const Title = styled.h4`
  margin: 0.6em 0 0;
  &:first-of-type {
    margin: 0;
  }
`;

const List = styled.ul`
  padding-left: 1.4em;
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 0 0 1em;
`;
