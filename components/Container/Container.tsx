import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

export const Container = styled("div")`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  max-width: ${theme.layout.width}px;
  margin: 0 auto;
  padding: 100px 16px;
`
