import { Projects, PROJECT } from "./projects"

const projectTheme = {
  [Projects.insomnia]: {
    color: {
      background: "#ffffff",
      brand: "#9dcfc3",
      secondary: "#77cbb5",
      gray: "#787671",
      beige: "#f3f2eb",
    },
  },
  [Projects.godot]: {
    color: {
      background: "#ffffff",
      brand: "#5779c5",
      secondary: "#3e67c1",
      gray: "#787671",
      beige: "#b7d5ed",
    },
  },
}

export const theme = {
  layout: {
    width: 1000,
  },
  font: {
    sizes: {
      1: "1rem",
      2: "1.4rem",
      3: "1.8rem",
      4: "2.2rem",
    },
  },
  ...projectTheme[PROJECT],
}
