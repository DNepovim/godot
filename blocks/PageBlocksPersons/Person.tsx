"use client";
import styled from "@emotion/styled";
import React from "react";
import { min, theme } from "../../styles/theme";
import { tp } from "../../utils/tp";
import Image from "next/image";
import { PageBlocksPersonsPersons } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export interface Person {
  image: string;
  nick: string;
  name: string;
  text: string;
  isHidden?: boolean;
}

export interface PersonProps extends Person {}

export const Person: React.FC<PageBlocksPersonsPersons> = ({ image, nickname, name, text }) => (
  <Article>
    <Figure>
      {image && (
        <PersonImage
          // imgStyle={{ width: 170, height: 170 }}
          src={image}
          alt={nickname}
          sizes="174px"
          height={170}
          width={170}
          // breakpoints={[174, 348]}
          // aspectRatio={1}
        />
      )}
      <Frame src="../../images/frame.svg" alt="" />
    </Figure>
    <PersonNick>{tp(nickname)}</PersonNick>
    <PersonName>{tp(name)}</PersonName>
    <TinaMarkdown content={text} />
  </Article>
);

const Article = styled.article`
  max-width: 900px;
  margin: 0 0 32px;
  @media ${min("s")} {
    margin: 0 32px 32px;
  }
  @media ${min("l")} {
    width: 390px;
  }
`;

const Figure = styled.figure`
  position: relative;
  margin: 0 1em 0 0;
  shape-outside: circle(50%);
  width: 174px;
  height: 174px;
  @media ${min("s")} {
    float: left;
  }
`;

const PersonImage = styled(Image)`
  img {
    border-radius: 50%;
  }
`;

const Frame = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  margin: -4px;
  max-height: calc(100% + 4px);
`;

const PersonNick = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: ${theme.color.darkBlue};
`;

const PersonName = styled.div`
  font-weight: bold;
  margin-top: 0;
`;
