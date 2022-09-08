import styled from "@emotion/styled"

const BREAKPOINT = 740

export const ShowOnMobile = styled.span`
  @media (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`

export const ShowOnDesktop = styled.span`
  @media (max-width: ${BREAKPOINT - 1}px) {
    display: none;
  }
`
