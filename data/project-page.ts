// data/projects.ts

export type Project = {
  title: string;
  description: string;
  stack: { name: string; icon: string }[];
  image: string;
  live: string;
  github: string;
};

export type ProjectCategory = {
  id: 'javascript' | 'react' | 'nextjs' | 'express';
  label: string;
  icon: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: 'react',
    label: 'React',
    icon: '/assets/react.png',
    projects: [
      {
        title: 'Personal Notes App',
        description:
          'A modern note-taking web app built with React, featuring authentication, protected routes, and a smooth user experience. Powered by Dicoding Notes API https://notes-api.dicoding.dev/v1.',
        stack: [
          { name: 'TypeScript', icon: '/assets/typescript.png' },
          { name: 'React', icon: '/assets/react.png' },
          { name: 'Tailwind', icon: '/assets/tailwind.png' },
        ],
        image: '/assets/react-project-1.png',
        live: 'https://personal-notes-app-0011.netlify.app/',
        github: 'https://github.com/putrasedana/personal-notes-app',
      },
    ],
  },

  {
    id: 'nextjs',
    label: 'Next.js',
    icon: '/assets/nextjs.png',
    projects: [
      {
        title: 'Next.js Template Store',
        description:
          'A website that offer free professional, production-ready Next.js templates and UI components',
        stack: [
          { name: 'TypeScript', icon: '/assets/typescript.png' },
          { name: 'Next.js', icon: '/assets/nextjs.png' },
          { name: 'Tailwind', icon: '/assets/tailwind.png' },
          { name: 'Supabase', icon: '/assets/supabase.png' },
        ],
        image: '/assets/nextjs-project-1.png',
        live: 'https://pixeldenz.store/',
        github: 'https://github.com/putrasedana/pixeldenz',
      },
    ],
  },
];
