"use client";
import React from "react";
import { CenteredContainer, Container } from "../../components/Container/Container";
import { min, theme } from "../../styles/theme";
import { Block } from "../../components/Block/Block";
import styled from "@emotion/styled";
import { Button } from "../../components/Button/Button";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PageBlocksGallery } from "../../tina/__generated__/types";

const Gallery: React.FC<PageBlocksGallery> = ({ button, images, ...block }) => {
  const [imageIndex, setImageIndex] = React.useState(-1);

  return (
    <Block {...block}>
      <GrdiContainer>
        {images.map((image, i) => (
          <Figure key={image} onClick={() => setImageIndex(i)}>
            <Image
              src={image}
              width={312}
              height={183}
              // breakpoints={[624, 500, 400, 312, 250, 200, 150, 100]}
              sizes={`${min("l")} ${(theme.layout.width - 4 * theme.layout.gap) / 3}px, ${min("s")} calc((100vw - ${
                3 * theme.layout.gap
              }px) / 2), calc(100vw - ${2 * theme.layout.gap}px)`}
              // aspectRatio={1.7}
              // backgroundColor={theme.color.darkBlue}
              alt=""
            />
          </Figure>
        ))}
      </GrdiContainer>
      <Lightbox
        open={imageIndex > -1}
        index={imageIndex}
        close={() => setImageIndex(-1)}
        slides={images.map((src) => ({ src }))}
        carousel={{ imageFit: "contain", padding: 50 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: `${theme.color.darkerBlue}e0`, backdropFilter: "blur(5px)" },
        }}
      />
      <ButtonContainer>
        <Button link={button.link} dark targetBlank={button.targetBlank}>
          {button.label}
        </Button>
      </ButtonContainer>
    </Block>
  );
};

export default Gallery;

const Figure = styled.figure`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  margin: 0;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 312 / 183;
    object-fit: cover;
  }
`;

const GrdiContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.layout.gap}px;
  padding-bottom: 18px;
  @media ${min("s")} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${min("l")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ButtonContainer = styled(CenteredContainer)`
  padding-top: 18px;
`;
