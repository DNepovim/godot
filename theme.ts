export const theme = {
  layout: {
    width: 1000,
  },
  breakpoints: {
    s: 500,
    m: 700,
    l: 1000,
  },
  color: {
    background: "#ffffff",
    lightBlue: "#007d94",
    darkBlue: "#02505e",
    yellow: "#ccc15a",
    brown: "#3a2205",
    lightBrown: "#70330b",
    gray: "#787671",
    beige: "#ffeecb",
    sky: "#d7ecef",
  },
}

export const min = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint]}px)`
export const max = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint] - 1}px)`
