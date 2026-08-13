// data/projects.ts
export type Project = {
  title: string;
  stack: { name: string; icon: string }[];
  image: string;
  live?: string;
  github: string;
  featured: boolean;
};

export type ProjectCategory = {
  id: "frontend" | "fullstack" | "backend";
  label: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "frontend",
    label: "Featured Projects",
    projects: [
      {
        title: "Personal Notes App",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "React", icon: "/assets/react.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
        ],
        image: "/assets/personal-notes-app.png",
        live: "https://personal-notes-app-0011.netlify.app",
        github: "https://github.com/putrasedana/personal-notes-app",
        featured: true,
      },
      {
        title: "Jard'or Website",
        stack: [{ name: "WIX", icon: "/assets/wix.png" }],
        image: "/assets/jardor-website.png",
        live: "https://putrasedana03.wixsite.com/jardor",
        github: "",
        featured: true,
      },
      {
        title: "Dev Forum App",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "React", icon: "/assets/react.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
        ],
        image: "/assets/dev-forum-app.png",
        live: "https://dev-forum-app.vercel.app",
        github: "https://github.com/putrasedana/dev-forum-app",
        featured: true,
      },
    ],
  },
];
