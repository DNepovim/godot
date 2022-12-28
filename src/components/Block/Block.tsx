import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { theme } from "../../styles/theme"

type Styles = "sky" | "brown" | "beige" | "blue"
export interface BlockFields {
  id?: string
  theme?: Styles
  children: ReactNode
}

interface Theme {
  background: string
  selection: string
  title: string
  underline: string
  text: string
}

const blockThemes: Record<Styles, Theme> = {
  ["sky"]: {
    background: theme.color.sky,
    selection: theme.color.darkBlue,
    title: theme.color.darkBlue,
    underline: theme.color.brown,
    text: theme.color.black,
  },
  ["brown"]: {
    background: theme.color.brown,
    selection: theme.color.yellow,
    title: theme.color.beige,
    underline: theme.color.yellow,
    text: theme.color.beige,
  },
  ["beige"]: {
    background: theme.color.beige,
    selection: theme.color.brown,
    title: theme.color.brown,
    underline: theme.color.yellow,
    text: theme.color.black,
  },
  ["blue"]: {
    background: theme.color.lightBlue,
    selection: theme.color.darkBlue,
    title: theme.color.yellow,
    underline: theme.color.yellow,
    text: theme.color.beige,
  },
}

export const Block: React.FC<BlockFields> = ({
  id,
  theme: style,
  children,
}) => (
  <StyledSection theme={style ?? "sky"} id={id}>
    {children}
  </StyledSection>
)

const StyledSection = styled.section`
  ${({ theme: style }: { theme: Styles }) => css`
    position: relative;
    background-color: ${blockThemes[style].background};
    color: ${blockThemes[style].text};

    ::selection {
      background-color: ${blockThemes[style].selection};
    }
    a {
      color: ${blockThemes[style].underline};
    }
    h1,
    h2,
    h3,
    h4 {
      color: ${blockThemes[style].title};

      &:after {
        background-color: ${blockThemes[style].underline};
      }
    }
  `}
`
