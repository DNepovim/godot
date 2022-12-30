import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

export interface ContainerProps {
  minHeight?: string
}

export const Container = styled("div")`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  max-width: ${theme.layout.width}px;
  ${({ minHeight }: ContainerProps) =>
    minHeight
      ? css`
          min-height: ${minHeight};
        `
      : ""}
  margin: 0 auto;
  padding: 100px ${theme.layout.gap}px;
`

export const CenteredContainer = styled(Container)`
  text-align: center;
`

export const JustifiedContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ColumnContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 800px;
`
