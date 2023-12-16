import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { theme } from "../../styles/theme"

export interface ButtonProps {
  link: string
  targetBlank?: boolean
  isSmall?: boolean
  dark?: boolean
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  link,
  targetBlank,
  isSmall,
  dark,
}) => (
  <StyledButton
    isSmall={isSmall ?? false}
    dark={dark}
    href={link}
    {...(targetBlank
      ? {
          target: "_blank",
          rel: "noreferrer noopener",
        }
      : null)}
  >
    <span>{children}</span>
  </StyledButton>
)

interface StyledButtonProps {
  isSmall: boolean
  dark?: boolean
}

const StyledButton = styled.a`
  position: relative;
  display: inline-block;
  font-size: ${({ isSmall }: StyledButtonProps) => (isSmall ? 0.8 : 1.4)}rem;
  color: ${theme.color.background} !important;
  background-color: ${({ dark }: StyledButtonProps) =>
    dark ? theme.color.darkBlue : theme.color.lightBlue};
  padding: 0.6em 1em;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({ dark }: StyledButtonProps) =>
      dark ? theme.color.darkerBlue : theme.color.darkBlue};
    transition: width 700ms ${theme.animation.function};
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
  @media (min-width: 400px) {
    font-size: ${({ isSmall }: { isSmall: boolean }) => (isSmall ? 1 : 1.4)}rem;
  }
`
