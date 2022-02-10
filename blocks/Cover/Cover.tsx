/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import React from "react"
import { tp } from "../../admin/utils/tp"
import { theme } from "../../styles/theme"
import { css } from "@emotion/react"
import { Block } from "../../components/Block/Block"
import { CoverFields } from "./coverDef"
import { Button } from "../../components/Button/Button"
import { GrowingRoots } from "../../components/GrowingRoots/GrowingRoots"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import useScrollPosition from "@react-hook/window-scroll"

const leaves = [
  {
    top: 17,
    left: 83,
    rotate: 90,
    position: 60,
    duration: 1,
  },
  {
    top: 39,
    left: 15,
    rotate: -133,
    position: 100,
    duration: 1.7,
  },
  {
    top: 5,
    left: 51,
    rotate: 100,
    position: 40,
    duration: 1.2,
  },
  {
    top: 53,
    left: 83,
    rotate: 205,
    position: 120,
    duration: 2,
  },
  {
    top: 27,
    left: 60,
    rotate: 112,
    position: 95,
    duration: 1.1,
  },
  {
    top: 26,
    left: 27,
    rotate: 190,
    position: 80,
    duration: 1.9,
  },
  {
    top: 10,
    left: 80,
    rotate: 183,
    position: 35,
    duration: 1.3,
  },
  {
    top: 14,
    left: 69,
    rotate: 119,
    position: 70,
    duration: 1.4,
  },
  {
    top: 14,
    left: 40,
    rotate: 188,
    position: 80,
    duration: 2.1,
  },
  {
    top: 54,
    left: 21,
    rotate: 136,
    position: 110,
    duration: 1.2,
  },
  {
    top: 36,
    left: 47,
    rotate: 160,
    position: 75,
    duration: 2.2,
  },
]

export const Cover: React.FC<CoverFields> = ({
  id,
  title,
  subtitle,
  claim,
  button,
}) => {
  const scrollPosition = useScrollPosition()
  return (
    <Block id={id} backgroundColor={theme.color.sky}>
      <Container
        css={css`
          height: calc(85vh - 92px);
          *::selection {
            background-color: ${theme.color.darkBlue};
          }
        `}
      >
        <div
          css={css`
            position: absolute;
            right: 0;
            bottom: 0;
            width: 60vh;
            max-width: 100%;
            object-fit: cover;
            user-select: none;
          `}
        >
          <div
            css={css`
              content: "";
              display: block;
              padding-top: 100%;
            `}
          >
            {leaves.map((leave, i) => (
              <img
                key={i}
                css={css`
                  position: absolute;
                  top: ${leave.top}%;
                  left: ${leave.left}%;
                  transform-origin: bottom left;
                  width: 15px;
                  opacity: ${leave.position < scrollPosition ? 1 : 0};
                  transition: opacity 500ms;
                  animation-name: appearing-${i};
                  animation-duration: ${leave.duration}s;
                  animation-direction: alternate;
                  animation-iteration-count: infinite;
                  animation-timing-function: cubic-bezier(
                    0.45,
                    0.05,
                    0.55,
                    0.95
                  );
                  @keyframes appearing-${i} {
                    from {
                      transform: rotate(${leave.rotate - 5}deg);
                    }
                    to {
                      transform: rotate(${leave.rotate + 5}deg);
                    }
                  }
                `}
                src="/images/leave.svg"
                alt=""
              />
            ))}
            <img
              css={css`
                position: absolute;
                top: 0;
              `}
              src="/images/cover.svg"
              alt=""
            />
          </div>
        </div>
        {title && (
          <h1
            css={css`
              position: relative;
              display: inline-block;
              font-family: ${theme.fonts.headings};
              font-size: 3.4em;
              margin: 0 0 16px;
              color: ${theme.color.darkBlue};
              &:after {
                position: absolute;
                content: "";
                left: 0;
                bottom: 0;
                width: 0;
                height: 8px;
                background-color: ${theme.color.yellow};
                animation-name: underline;
                animation-fill-mode: forwards;
                animation-duration: 1s;
                animation-delay: 500ms;
                animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
              }

              @keyframes underline {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }
            `}
          >
            {tp(title)}
          </h1>
        )}
        {subtitle && (
          <p
            css={css`
              font-family: ${theme.fonts.headings};
              font-size: 1.8em;
              margin: 0 0 4px;
            `}
          >
            {tp(subtitle)}
          </p>
        )}
        {claim && (
          <p
            css={css`
              font-size: 1.4rem;
              color: ${theme.color.brown};
              margin: 0 0 32px;
            `}
            dangerouslySetInnerHTML={{ __html: tp(claim) }}
          />
        )}
        {button.showButton && (
          <Button link={button.link} targetBlank>
            {button.label}
          </Button>
        )}
        <GrowingRoots
          css={css`
            position: absolute;
            z-index: 5;
            right: 0;
            bottom: 0;
            transform: translateY(100%);
            width: 60vh;
            max-width: 100%;
          `}
          offset={400}
        />
      </Container>
      <Grass />
    </Block>
  )
}

const Grass = styled.div`
  position: absolute;
  z-index: 15;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 100%;
  height: 20px;
  background-image: url("/images/grass.svg");
  background-repeat: repeat-x;
  background-size: contain:
`
