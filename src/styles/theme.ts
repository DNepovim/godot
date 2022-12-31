export const theme = {
  layout: {
    width: 1000,
    gap: 16,
  },
  breakpoints: {
    s: 500,
    m: 700,
    l: 1000,
  },
  color: {
    background: "#ffffff",
    lighterBlue: "#2fb7d0",
    lightBlue: "#007d94",
    darkBlue: "#02505e",
    darkerBlue: "#013741",
    yellow: "#ccc15a",
    brown: "#3a2205",
    lightBrown: "#70330b",
    gray: "#787671",
    beige: "#ffeecb",
    sky: "#d7ecef",
    snow: "#ffffff99",
    black: "#000000",
  },
  fonts: {
    text: "themix, verdana, sans-serif",
    headings: "skautbold, verdana, sans-serif",
  },
  animation: {
    function: "cubic-bezier(0.1, 0.15, 0, 0.97)",
  },
}

export const min = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint]}px)`
export const max = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint] - 1}px)`

export type Styles = "sky" | "brown" | "beige" | "blue"

interface Theme {
  background: string
  selection: string
  title: string
  underline: string
  text: string
}

export const colorPalettes: Record<Styles, Theme> = {
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
