// data/projects.ts
export type Project = {
  title: string;
  description: string;
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
    label: "Front-End",
    icon: "/assets/frontend-projects-icon.png",
    projects: [
      {
        title: "Personal Notes App",
        description:
          "Modern note-taking web app built with React, featuring authentication, protected routes, and a smooth user experience. Powered by Dicoding Notes API https://notes-api.dicoding.dev/v1.",
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
        description:
          "A simple, interactive web forum where users can create and join discussions, post messages, and engage with others in community-style threads. Powered by Dicoding Forum API https://forum-api.dicoding.dev/v1.",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "React", icon: "/assets/react.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
        ],
        image: "/assets/frontend-project-2.png",
        live: "https://random-forum-app.vercel.app",
        github: "https://github.com/putrasedana/random-forum-app",
      },
      {
        title: "Resume Analyzer App",
        description:
          "Resumind is a resume analyzer that uses AI to evaluate resumes, provide ATS compatibility insights, and suggest improvements to better match job descriptions. Powered by https://developer.puter.com",
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

  {
    id: "fullstack",
    label: "Full-Stack",
    icon: "/assets/fullstack-projects-icon.png",
    projects: [
      {
        title: "Pixeldenz Store",
        description: "A website that offer free professional, production-ready Next.js templates and UI components.",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "Next.js", icon: "/assets/nextjs.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
          { name: "Supabase", icon: "/assets/supabase.png" },
        ],
        image: "/assets/fullstack-project-1.png",
        live: "https://pixeldenz.store/",
        github: "https://github.com/putrasedana/pixeldenz",
      },
      {
        title: "DevEvent Website",
        description:
          "A Dev Event Platform is a modern application where users can browse, create, and manage developer-focused events with ease.",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "Next.js", icon: "/assets/nextjs.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
          { name: "MongoDB", icon: "/assets/mongodb.png" },
        ],
        image: "/assets/fullstack-project-2.png",
        live: "https://dev-events-0011.vercel.app",
        github: "https://github.com/putrasedana/dev-events",
      },
      {
        title: "Travel Agency Dashboard",
        description:
          "An admin dashboard built with React Router v7, featuring interactive tables, analytics charts, and personalized trip recommendations using the Gemini API.",
        stack: [
          { name: "TypeScript", icon: "/assets/typescript.png" },
          { name: "React.js", icon: "/assets/react.png" },
          { name: "Tailwind", icon: "/assets/tailwind.png" },
          { name: "Appwrite", icon: "/assets/appwrite.png" },
        ],
        image: "/assets/fullstack-project-3.png",
        live: "https://travel-agency-dashboard-swart.vercel.app/",
        github: "https://github.com/putrasedana/travel-agency-dashboard",
      },
    ],
  },

  {
    id: "backend",
    label: "Back-End",
    icon: "/assets/backend-projects-icon.png",
    projects: [
      {
        title: "Bookshelf API",
        description:
          "RESTful API project to manage a simple book collection backend. It supports basic CRUD operations (Create, Read, Update, Delete) for books, making it a practical submission project for learning backend development and API design.",
        stack: [
          { name: "Node.js", icon: "/assets/nodejs.png" },
          { name: "Hapi.js", icon: "/assets/hapi.png" },
        ],
        image: "/assets/backend-project-1.webp",
        github: "https://github.com/putrasedana/bookshelf-api",
      },
      {
        title: "Task Management API",
        description:
          "RESTful backend service for managing tasks, built with Express.js. It provides endpoints for creating, reading, updating, and deleting tasks, making it a solid foundation for learning API design and task-tracking backend logic.",
        stack: [
          { name: "Node.js", icon: "/assets/nodejs.png" },
          { name: "Express.js", icon: "/assets/express.jpg" },
          { name: "MongoDB", icon: "/assets/mongodb.png" },
        ],
        image: "/assets/backend-project-2.avif",
        github: "https://github.com/putrasedana/task-management-api",
      },
      {
        title: "Open Music API",
        description:
          "RESTful backend service for managing music records, built with Hapi.js. It offers endpoints to create, read, update, and delete songs and playlists, providing a practical foundation for learning API design and backend development.",
        stack: [
          { name: "Node.js", icon: "/assets/nodejs.png" },
          { name: "Hapi.js", icon: "/assets/hapi.png" },
          { name: "PostgreSQL", icon: "/assets/postgresql.png" },
        ],
        image: "/assets/backend-project-3.avif",
        github: "https://github.com/putrasedana/open-music-api",
      },
    ],
  },
];
