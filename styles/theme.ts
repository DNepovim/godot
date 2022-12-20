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
    lighterBlue: "#2fb7d0",
    yellow: "#ccc15a",
    brown: "#3a2205",
    lightBrown: "#70330b",
    gray: "#787671",
    beige: "#ffeecb",
    sky: "#d7ecef",
    snow: "#ffffff99",
  },
  fonts: {
    text: "themix, verdana, sans-serif",
    headings: "skautbold, verdana, sans-serif",
  },
}

export const min = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint]}px)`
export const max = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint] - 1}px)`
