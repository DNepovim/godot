/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"

export interface BlockFields {
  id?: string
  backgroundColor?: string
}

export const Block: React.FC<BlockFields> = ({
  id,
  backgroundColor,
  children,
}) => (
  <section
    id={id}
    css={css`
      position: relative;
      ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
    `}
  >
    {children}
  </section>
)
