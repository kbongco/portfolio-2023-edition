// Skill groupings. Each entry in `items` must be a key in skillIcons.js.
// Each group's heading (per theme) is in copy.js under inventory.groups[id].

export const skillGroups = [
  {
    id: "frontend",
    items: ["HTML", "CSS", "Javascript", "Typescript", "React", "Angular"],
  },
  {
    id: "backend",
    items: ["Python", "Node", "Ruby", "Rails", "Express", "Postgres"],
  },
  {
    id: "tools",
    items: ["Figma", "Jira", "Git"],
  },
  {
    id: "testing",
    items: ["Jasmine"],
  },
  {
    id: "learning",
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
