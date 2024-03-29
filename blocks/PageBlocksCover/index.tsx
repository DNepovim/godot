"use client";
import React from "react";
import { tp } from "../../utils/tp";
import { theme } from "../../styles/theme";
import { Block } from "../../components/Block/Block";
import { Button } from "../../components/Button/Button";
import { GrowingRoots } from "../../components/GrowingRoots/GrowingRoots";
import { Container } from "../../components/Container/Container";
import styled from "@emotion/styled";
import useScrollPosition from "@react-hook/window-scroll";
import { underline } from "../../styles/utils";
import Snowfall from "react-snowfall";
import { Grass } from "./Grass";
import { leaves } from "./leaves";
import { Leave } from "./Leave";
import { PageBlocksCover } from "../../tina/__generated__/types";

const Cover: React.FC<PageBlocksCover> = ({ title, subtitle, claim, button, isSnowfall, ...block }) => {
  const scrollPosition = useScrollPosition();
  return (
    <Block {...block}>
      <Container minHeight={"calc(85vh - 92px)"}>
        <CoverWrapper>
          <CoverIn>
            {leaves.map((leave, i) => (
              <Leave key={i} src="../../images/leave.svg" alt="" scrollPosition={scrollPosition} index={i} {...leave} />
            ))}
            <CoverImage src="../../images/cover.svg" alt="" />
          </CoverIn>
        </CoverWrapper>
        {title && <CoverTitle isSnowfall={isSnowfall ?? false}>{tp(title)}</CoverTitle>}
        {subtitle && <CoverSubtitle>{tp(subtitle)}</CoverSubtitle>}
        {claim && <CoverClaim dangerouslySetInnerHTML={{ __html: claim }} />}
        {button && button.showButton && (
          <Button link={button.link} targetBlank>
            {button.label}
          </Button>
        )}
        <RootsWrapper>
          <GrowingRoots offset={400} />
        </RootsWrapper>
      </Container>
      {isSnowfall && <Snowfall color={theme.color.snow} style={{ zIndex: 10 }} />}
      <Grass isSnowfall={isSnowfall} />
    </Block>
  );
};

export default Cover;

const CoverWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 70vh;
  max-width: 100%;
  object-fit: cover;
  user-select: none;
`;

const CoverIn = styled.div`
  content: "";
  display: block;
  padding-top: 100%;
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
`;

const CoverTitle = styled.h1`
  display: inline-block;
  font-family: ${theme.fonts.headings};
  font-size: 3.4em;
  text-transform: uppercase;
  margin: 0 0 16px;
  color: ${theme.color.darkBlue};
  ${({ isSnowfall }: { isSnowfall: boolean }) => underline(isSnowfall ? theme.color.snow : theme.color.yellow, 8)}
`;

const CoverSubtitle = styled.p`
  color: ${theme.color.brown};
  font-size: 1.8em;
  margin: 0 0 4px;
`;

const CoverClaim = styled.p`
  font-size: 1.4rem;
  color: ${theme.color.brown};
  margin: 0 0 32px;
  max-width: 25rem;
`;

const RootsWrapper = styled.div`
  position: absolute;
  z-index: 5;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  width: 70vh;
  max-width: 100%;
`;
