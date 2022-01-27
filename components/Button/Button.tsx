/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { theme } from "../../theme"

export interface ButtonProps {
  link: string
  targetBlank: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  link,
  targetBlank,
}) => (
  <a
    href={link}
    {...(targetBlank
      ? {
          target: "_blank",
          rel: "noreferrer noopener",
        }
      : {})}
    css={css`
      position: relative;
      display: inline-block;
      font-family: themix;
      font-size: 1.4rem;
      color: ${theme.color.background};
      padding: 0.6em 1em;
      border-radius: 4px;
      text-decoration: none;
      background-color: ${theme.color.lightBlue};
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: ${theme.color.darkBlue};
        transition: width 700ms ease-out;
      }

      span {
        position: relative;
        z-index: 10;
      }

      &:hover {
        text-decoration: none;

        &:before {
          width: 100%;
        }
      }
    `}
  >
    <span>{children}</span>
  </a>
)
