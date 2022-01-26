/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { theme } from "../../theme"

type TitleLevel = 1 | 2 | 3

export const Heading: React.FC<{
  children: string
  level: TitleLevel
  color?: string
}> = ({ children, level, color }) => {
  const props = {
    css: css`
      font-size: 2.6rem;
      font-family: skautbold;
      text-align: center;
      color: ${color ?? theme.color.brown};
      margin-top: 0;
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
