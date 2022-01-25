export enum Projects {
  Insomnia = "insomnia",
  Godot = "godot",
}

const isExistingProject = (project: string | undefined): project is Projects =>
  !!project && project in Projects

const project = process.env.NEXT_PUBLIC_PROJECT

export const PROJECT = isExistingProject(project) ? project : Projects.Insomnia
