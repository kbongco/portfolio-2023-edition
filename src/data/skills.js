// Skill groupings. Each entry in `items` must be a key in skillIcons.js.
// `title` holds the heading for each theme.

export const skillGroups = [
  {
    title: { videoGame: "FrontEnd", professional: "FrontEnd" },
    items: ["HTML", "CSS", "Javascript", "Typescript", "React", "Angular"],
  },
  {
    title: { videoGame: "BackEnd", professional: "BackEnd" },
    items: ["Python", "Node", "Ruby", "Rails", "Express", "Postgres"],
  },
  {
    title: {
      videoGame: "Key Items",
      professional: "Development/Productivity Tools",
    },
    items: ["Figma", "Jira", "Git"],
  },
  {
    title: { videoGame: "Trial Tools", professional: "Testing Libraries" },
    items: ["Jasmine"],
  },
  {
    title: { videoGame: "In Training", professional: "Currently Learning" },
    items: ["Vue.js", "Next.js", "C#", "GraphQL"],
  },
];

// Tools shown as plain text (no icon) under the skill groups.
export const otherTools = ["Firebase", "Vite", "Supabase"];

// The "Currently Equipped" / "Current Stack" icons on the main page.
export const equippedSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "SASS",
  "Git",
  "Figma",
];
