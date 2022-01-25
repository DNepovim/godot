export enum Projects {
  insomnia = "insomnia",
  godot = "godot",
}

// TODO throw error if project doesnt exists
const isExistingProject = (project: string | undefined): project is Projects =>
  !!project && project in Projects

const project = process.env.NEXT_PUBLIC_PROJECT

export const PROJECT = isExistingProject(project) ? project : Projects.insomnia
