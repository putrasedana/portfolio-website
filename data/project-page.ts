// data/projects.ts
export type Project = {
  title: string;
  stack: { name: string; icon: string }[];
  image: string;
  live?: string;
  github: string;
};

export type ProjectCategory = {
  id: "frontend" | "fullstack" | "backend";
  label: string;
  icon: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "frontend",
    label: "Featured Projects",
    icon: "/assets/frontend-projects-icon.png",
    projects: [
      {
        title: "Personal Notes App",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "React", icon: "/assets/react.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
        ],
        image: "/assets/frontend-project-1.png",
        live: "https://personal-notes-app-0011.netlify.app",
        github: "https://github.com/putrasedana/personal-notes-app",
      },
      {
        title: "Dev Forum App",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "React", icon: "/assets/react.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
        ],
        image: "/assets/frontend-project-2.png",
        live: "https://dev-forum-app.vercel.app",
        github: "https://github.com/putrasedana/dev-forum-app",
      },
      {
        title: "Resume Analyzer App",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "React", icon: "/assets/react.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
        ],
        image: "/assets/frontend-project-3.png",
        live: "https://ai-resume-analyzer-0011.vercel.app",
        github: "https://github.com/putrasedana/ai-resume-analyzer",
      },
    ],
  },
];
