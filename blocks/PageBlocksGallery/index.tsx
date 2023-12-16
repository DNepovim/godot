"use client";
import React from "react";
import { CenteredContainer, Container } from "../../components/Container/Container";
import { min, theme } from "../../styles/theme";
import { Block } from "../../components/Block/Block";
import styled from "@emotion/styled";
import { Button } from "../../components/Button/Button";
import Image from "next/image";
import { PageBlocksGallery } from "../../tina/__generated__/types";

const Gallery: React.FC<PageBlocksGallery> = ({ button, images, ...block }) => (
  <Block {...block}>
    <GrdiContainer>
      {images.map((image, i) => (
        <Figure key={image}>
          <Image
            src={image}
            width={312}
            height={183}
            // breakpoints={[624, 500, 400, 312, 250, 200, 150, 100]}
            sizes={`${min("l")} ${(theme.layout.width - 4 * theme.layout.gap) / 3}px, ${min("s")} calc((100vw - ${
              4 * theme.layout.gap
            }px) / 3), calc((100vw - ${3 * theme.layout.gap}px) / 2)`}
            // aspectRatio={1.7}
            // backgroundColor={theme.color.darkBlue}
            alt=""
          />
        </Figure>
      ))}
    </GrdiContainer>
    <ButtonContainer>
      <Button link={button.link} dark targetBlank={button.targetBlank}>
        {button.label}
      </Button>
    </ButtonContainer>
  </Block>
);

export default Gallery;

const Figure = styled.figure`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  margin: 0;
`;

const GrdiContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.layout.gap}px;
  padding-bottom: 18px;
  @media ${min("s")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ButtonContainer = styled(CenteredContainer)`
  padding-top: 18px;
`;
