// All of the site's text, in one place.
//
// `copy.videoGame` and `copy.professional` have the same shape, so each
// component asks for the current theme's text with useCopy() instead of
// checking the theme itself. `sharedCopy` is text that's the same in both.
//
// Job and side-project details live in quests.js; skill icons in skills.js.

export const copy = {
  videoGame: {
    nav: [
      { id: "MainInformation", label: "Stats" },
      { id: "Quests", label: "Quests" },
      { id: "Inventory", label: "Inventory" },
    ],

    stats: {
      heading: "Basic Stats",
      // Game mode shows class levels as progress bars.
      levels: [
        {
          label: "Main Class - Software Engineer Lvl 3",
          value: 80,
          toNextLevel: "To Next Level - 1",
        },
        {
          label: "Secondary Class - Front End Engineer Lvl 3",
          value: 80,
          toNextLevel: "To Next Level - 1",
        },
      ],
      summaryHeading: "Summary",
      summary:
        "Former food scientist developing new products, prior to switching classes through a training camp to software Engineer class. Able to learn things extremely quickly and loves expanding their skill set, and has basic knowledge of UI/UX and is currently leveling up that skill tree. Speciality is front end, but is capable of working the back end and full stack.",
      equippedHeading: "Currently Equipped Items",
      equippedText:
        "This is what I have currently equipped when I go on my quests. If you are interested in seeing more of whats in my kit, click the inventory link above!",
    },

    quests: {
      quests: {
        tab: "Quests",
        heading: "Quests",
        footer:
          "If you are interested in seeing more of my completed quests and the details of it check out my linkedin!",
      },
      sideQuests: {
        tab: "Side Quests",
        heading: "Side Quests",
        footer:
          "These are my top 3 side quests that I am working on, if you are curious to see more of my active side quests and completed side quests, check out my github!",
      },
    },

    inventory: {
      heading: "Inventory",
      groups: {
        frontend: "FrontEnd",
        backend: "BackEnd",
        tools: "Key Items",
        testing: "Trial Tools",
        learning: "In Training",
      },
      otherTools: "Some other tools I am familiar with include:",
    },

    social: {
      heading: "Social Links",
      text: "I am currently looking for my next quest where I can leverage some of my skills in web development. Specifically in full stack. If you like what you see and want me to join your party and help your current quest, help in your latest venture, or even if you just want to chat. Here are some links you can use to contact me!",
    },
  },

  professional: {
    nav: [
      { id: "MainInformation", label: "About" },
      { id: "Quests", label: "Experience" },
      { id: "Inventory", label: "Tools" },
    ],

    stats: {
      heading: "About",
      // Professional mode shows a short intro instead of progress bars.
      intro: {
        title: "Software Engineer",
        text: "3 years of experience working with Javascript and its frameworks. I have experience working with React, Angular, and am currently expanding my knowledge in the front end by learning Next.js and am also dabbling with Vue. I also have knowledge with Python and its microframework, Flask as well as Ruby and Rails.",
      },
      summaryHeading: "General Information",
      summary:
        "I'm a former food scientist who worked in R&D before I attended a coding bootcamp during the height of the COVID pandemic. I pride myself in the ability to learn things very quickly and my curiosity and desire to learn new things. Most of my experience is in front end development, but I am capable of working the backend and working across the stack in full stack. In addition to this, I am improving my UI/UX design skills and have basic knowledge in that field.",
      equippedHeading: "Current Stack",
      equippedText:
        "This is my current go-to stack when I am building projects. Most of the things I am working on right now is front end, but i am capable of back end development as well. Click the tools link to check out what else I know!",
    },

    quests: {
      quests: {
        tab: "Professional",
        heading: "Experience",
        footer:
          "If you would like to see more of my professional experience, as well as a more detailed description of it, check out my linkedin!",
      },
      sideQuests: {
        tab: "Side Projects",
        heading: "Side Projects",
        footer:
          "These are some of my side projects that I am currently working on. If you would like to see some of my previous projects and work, check out my github!",
      },
    },

    inventory: {
      heading: "Skills",
      groups: {
        frontend: "FrontEnd",
        backend: "BackEnd",
        tools: "Development/Productivity Tools",
        testing: "Testing Libraries",
        learning: "Currently Learning",
      },
      otherTools: "Some other tools I am familiar with include:",
    },

    social: {
      heading: "Contact",
      text: "I am currently looking for my next role where I can use my skills in web development, specifically in full stack! If you like what you see and you would like to speak to me about any new roles, want some help in design or development, or if you just want to chat here are some links you can use to contact me!",
    },
  },
};

export const sharedCopy = {
  about: {
    greeting: "Hello There!",
    paragraphs: [
      "My name is Kathleen and I am a software Engineer based out of the NYC metropolitan area!",
      "I have experience working in front end development with modern Javascript frameworks and have design experience as well!",
    ],
    announcement:
      "My portfolio site is inspired by video games such as Final Fantasy and DnD. If this looks confusing and you would prefer a more traditional view of my experience, feel free to use the toggle button above!",
  },
  hobbiesHeading: "Hobbies and Fun Things",
  hobbies: [
    "I'm a competitive powerlifter in the USAPL and I also am a state referee",
    "I love watching anime and I also attend anime conventions where I sometimes present panels on traveling",
    "I'm a huge video game enthusiast (as you can see from my portfolio site!)",
    "I have an orange cat named Little Orange",
  ],
};
