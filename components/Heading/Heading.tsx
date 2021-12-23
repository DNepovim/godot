/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { theme } from "../../theme"

type TitleLevel = 1 | 2 | 3

export const Heading: React.FC<{ children: string; level: TitleLevel }> = ({
  children,
  level,
}) => {
  const props = {
    css: css`
      font-size: ${theme.font.sizes[3]};
      font-family: skautbold;
      text-align: center;
    `,
    children,
  }
  switch (level) {
    case 1:
      return <h1 {...props} />
    case 2:
      return <h2 {...props} />
    case 3:
      return <h3 {...props} />
  }
}
