export interface ProjectTeaser {
  id: string;
  name: string;
  positioning: string;
  status: "In Development";
}

export const currentProjects: ProjectTeaser[] = [
  {
    id: "phone-as-remote",
    name: "Phone as Remote",
    positioning: "Your phone. A new way to play.",
    status: "In Development",
  },
  {
    id: "earth-reimagined",
    name: "Earth Reimagined",
    positioning: "The real world, reimagined as an explorable world.",
    status: "In Development",
  },
];
