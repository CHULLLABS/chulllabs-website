export interface ProjectTeaser {
  id: string;
  slug: string;
  name: string;
  category: string;
  positioning: string;
  description: string;
  status: "In Development";
  accent: "purple" | "navy";
}

export const currentProjects: ProjectTeaser[] = [
  {
    id: "phone-as-remote",
    slug: "/projects/phone-as-remote",
    name: "Phone as Remote",
    category: "Interactive Experiences",
    positioning: "Your phone. A new way to play.",
    description:
      "A project exploring the use of smartphones as remote controllers for gaming and interactive experiences.",
    status: "In Development",
    accent: "purple",
  },
  {
    id: "earth-reimagined",
    slug: "/projects/earth-reimagined",
    name: "Earth Reimagined",
    category: "Stylized 3D Worlds",
    positioning: "The real world, reimagined as an explorable world.",
    description:
      "A planet-scale game project transforming real-world geography into stylized, procedurally generated 3D environments built for exploration.",
    status: "In Development",
    accent: "navy",
  },
];
