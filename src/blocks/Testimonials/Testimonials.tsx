import React, { useState } from "react"
import { tp } from "../../utils/tp"
import { theme } from "../../styles/theme"
import { Container } from "../../components/Container/Container"
import { Block } from "../../components/Block/Block"
import styled from "@emotion/styled"
import { TestimonialsFields } from "./testimonialsDef"
import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.css"

export const Testimonials: React.FC<TestimonialsFields> = ({
  testimonials,
  ...block
}) => {
  const [selectedItem, setSelectedItem] = useState(
    Math.floor(testimonials.length / 2)
  )
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
      >
        {testimonials?.map(({ name, text }, i) => (
          <>
            <p>{tp(text)}</p>
            <Name>{name}</Name>
          </>
        ))}
      </CarouselWrapper>
    </Block>
  )
}

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
      transition: all 300ms ${theme.animation.function};
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
      transition: opacity 600ms ${theme.animation.function},
        transform 600ms ${theme.animation.function};

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
      padding: 0;
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      list-style: none;
      margin: 16px 0;
      height: 18px;

      .dot {
        background: ${theme.color.darkBlue};
        border-radius: 50%;
        width: 12px;
        height: 12px;
        cursor: pointer;
        transition: background-color 300ms, height 300ms, width 300ms;

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
`

const Name = styled.strong`
  justify-self: flex-end;
  color: ${theme.color.brown};
  font-size: 1.4rem;
`
