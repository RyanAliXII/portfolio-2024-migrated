export type Project = {
  title: string;
  link: string;
  description: string;
  stacks: string[];
  images: string[];
};

export const RecentProjects: Project[] = [
  {
    title: "STI College Munoz-EDSA Library System",
    link: "https://github.com/RyanAliXII/sti-munoz-library-system",
    images: [
      "../images/library-system/home.png",
      "../images/library-system/dashboard.png",
      "../images/library-system/search.png",
    ],
    description:
      "The library system for STI College Munoz-EDSA is designed to assist the librarian in efficiently managing various library tasks, including catalog management, circulation, inventory, and generating reports. It also offers convenient features for students, such as online book borrowing, library premise reservations, and penalty viewing, all accessible through the system.",
    stacks: ["Go", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Lift Fitness Gym Web Application",
    link: "https://github.com/RyanAliXII/lift-gym-portal",
    images: [
      "../images/lift-gym/home.png",
      "../images/lift-gym/dashboard.png",
      "../images/lift-gym/login.png",
    ],
    description:
      "The gym management system for Lift Fitness Gym is designed to assist the gym manager in efficiently handling various operational tasks, including subscription management, package creation, revenue tracking, report generation, and coach hiring.",
    stacks: ["Go", "TypeScript", "Vue.JS", "Webpack", "MySQL"],
  },
  {
    title:
      "Caloocan City Cooperative Development and Coordinating Office Web Portal",
    link: "https://github.com/RyanAliXII/cooperative-application",
    images: ["../images/coop/home.png", "../images/coop/dashboard.png"],
    description:
      "A multi-tenant cooperative application that efficiently monitors the activities of members as well as the cooperative's savings, shares, and loans. The application includes a dedicated portal for government authorities, enabling them to effectively monitor cooperatives, rank them based on performance, and provide rewards accordingly.",
    stacks: ["TypeScript", "SvelteKit", "PostgreSQL"],
  },
  {
    title: "STI College Munoz-EDSA Academic Week Tabulation",
    link: "https://github.com/RyanAliXII/sti-munoz-tabulator",
    images: [
      "../images/tabulation/home.png",
      "../images/tabulation/dashboard.png",
    ],
    description:
      "A tabulation system for STI College Munoz-EDSA's Academic Week 2023. It allows the committee to update team scores and enables teams to view their scores and rankings. This system enhances efficiency and transparency in managing scores for a fair competition.",
    stacks: ["TypeScript", "Express", "Webpack", "Vue.JS", "PostgreSQL"],
  },
];

export const InDevelopmentProjects = [
  {
    title: "Blog Application",
    link: "https://github.com/RyanAliXII/blog-application",
    images: [
      "../images/blog-app/home.png",
      "../images/blog-app/dashboard.png",
      "../images/blog-app/blog.png",
      "../images/blog-app/login.png",
    ],
    description:
      "The blog application is designed to empower users in crafting and managing their online presence with ease. It offers intuitive tools for creating, editing, and publishing posts, moderating comments, and tracking engagement through detailed analytics, all within a sleek, user-friendly interface. Whether you're a seasoned blogger or just starting out, this app streamlines your content creation process and helps you grow your audience with confidence.",
    stacks: ["C#", "ASP.NET", "Vue.JS", "Rollup", "MSSQL"],
  },
];

export const OldProjects = [
  {
    title: "Contact Tracing Progressive Web Application",
    link: "https://github.com/RyanAliXII/ContactTracing",
    images: ["../images/pwa.png"],
    description:
      "A contact tracing application that allows schools to track and monitor the spread of infectious diseases, such as COVID-19. Contact tracing involves identifying and notifying individuals who may have come into close contact with an infected person, allowing them to take necessary precautions to prevent further transmission.",
    stacks: ["JavaScript", "Express", "React", "MongoDB"],
  },

  {
    title: "Codebox",
    link: "https://github.com/RyanAliXII/codebox",
    images: ["../images/codebox.png"],
    description:
      "The project was very simple and inspired by Hastebin. This allows code or text sharing by sending a link to other people.",
    stacks: ["PHP", "JavaScript", "MySQL"],
  },
];
