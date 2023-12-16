"use client";
import React from "react";
import { tp } from "../../utils/tp";
import { Block } from "../../components/Block/Block";
import { CenteredContainer } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";
import { PageBlocksRichText } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const RichText: React.FC = ({ title, richText, ...block }: PageBlocksRichText) => (
  <Block {...block}>
    <CenteredContainer>
      {title && <Heading>{tp(title)}</Heading>}
      {richText && <TinaMarkdown content={richText} />}
    </CenteredContainer>
  </Block>
);

export default RichText;
