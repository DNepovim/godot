"use client";
import React, { useEffect, useRef, useState } from "react";
import { tp } from "../../utils/tp";
import { theme } from "../../styles/theme";
import { Block } from "../../components/Block/Block";
import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";
import { useWindowSize } from "rooks";
import { PageBlocksTestimonials } from "../../tina/__generated__/types";

const Testimonials: React.FC<PageBlocksTestimonials> = ({ testimonials, ...block }) => {
  const { innerWidth } = useWindowSize();
  const activeIndicatorRef = useRef<HTMLLIElement>(null);
  const [indicatorPosition, setIndicatorPosition] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState(Math.floor(testimonials.length / 2));

  useEffect(() => {
    const activeIndicatorItemRec = activeIndicatorRef.current?.getBoundingClientRect();
    const indicatorContainerRect = activeIndicatorRef.current?.parentElement?.getBoundingClientRect();
    if (innerWidth && activeIndicatorItemRec && indicatorContainerRect) {
      const activeIndicatorItemLeft = activeIndicatorItemRec.left;
      const activeIndicatorItemWidth = activeIndicatorItemRec.width;
      const indicatorContainerLeft = indicatorContainerRect!.left;

      setIndicatorPosition(innerWidth / 2 - (activeIndicatorItemLeft - indicatorContainerLeft + activeIndicatorItemWidth / 2));
    }
  }, [innerWidth, selectedItem]);

  return (
    <Block {...block}>
      <CarouselWrapper
        selectedItem={selectedItem}
        onChange={(index) => setSelectedItem(index)}
        onClickItem={(index) => setSelectedItem(index)}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        transitionTime={600}
        renderIndicator={(onClick, isSelected, index) => (
          <>
            <Name ref={isSelected ? activeIndicatorRef : undefined} onClick={onClick} isSelected={isSelected}>
              {testimonials[index].name}
            </Name>
            {index < testimonials.length - 1 && "–"}
          </>
        )}
        indicatorContainerPosition={indicatorPosition ?? 0}
      >
        {testimonials?.map(({ text, name }) => (
          <p key={name}>{tp(text)}</p>
        ))}
      </CarouselWrapper>
    </Block>
  );
};

export default Testimonials;

const CarouselWrapper = styled(Carousel)`
  padding: 2rem 0 1rem;

  .carousel {
    position: relative;
    width: 100%;
    padding-bottom: 60px;
    overflow: hidden;

    .slider {
      display: flex;
      max-width: 34rem;
      margin: 0 auto;
      padding: 0;
      list-style: none;
      transition: all 600ms ${theme.animation.function};
    }

    .slide {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
      min-width: 100%;
      margin: 0;
      position: relative;
      text-align: center;
      transform: scale(1);
      transition: opacity 600ms ${theme.animation.function}, transform 600ms ${theme.animation.function};

      p {
        display: flex;
        align-items: center;
        flex: 1;
      }

      &:not(.selected) {
        cursor: pointer;
        opacity: 0.4;
        transform: scale(0.7);
      }
    }

    .control-dots {
      position: absolute;
      bottom: 0;
      left: ${({ indicatorContainerPosition }: { indicatorContainerPosition: number }) => indicatorContainerPosition}px;
      padding: 0;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      list-style: none;
      margin: 16px 0;
      height: 18px;
      transition: left 600ms ${theme.animation.function};

      .dot {
        background: ${theme.color.darkBlue};
        border-radius: 50%;
        width: 12px;
        height: 12px;
        cursor: pointer;
        transition: background-color 600ms, height 600ms, width 600ms;

        &.selected {
          background-color: ${theme.color.yellow};
          width: 18px;
          height: 18px;
        }
        &:hover {
          background-color: ${theme.color.yellow};
        }
      }
    }

    .control-disabled {
      display: none;
    }
  }
`;

interface NameProps {
  isSelected: boolean;
}

const Name = styled.strong`
  cursor: pointer;
  justify-self: flex-end;
  color: ${({ isSelected }: NameProps) => (isSelected ? theme.color.darkerBlue : theme.color.lightBlue)};
  font-size: ${({ isSelected }: NameProps) => (isSelected ? "1.4rem" : "1rem")};
  transition: font-size 600ms ${theme.animation.function};
`;
