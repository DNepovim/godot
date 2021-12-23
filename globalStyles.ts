/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { theme } from "./theme"

export const globalStyles = css`
  html {
    background-color: ${theme.color.brand};
  }

  body {
    background-color: ${theme.color.background};
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: themix;
  }

  a {
    color: ${theme.color.brand};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ::selection {
    background-color: ${theme.color.brand};
  }
`
